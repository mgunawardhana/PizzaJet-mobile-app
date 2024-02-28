import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";


const BookingModel = ({hideModal}) => {

    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    useEffect(() => {
        getTime();
    }, []);

    let useNavigation1 = useNavigation();

    const onDateChange = (date) => {
        console.log(date);
    };

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i < 12; i++) {
            timeList.push({
                time: i + ":00 AM",
            });
            timeList.push({
                time: i + ":30 AM",
            });
        }
        for (let i = 1; i < 7; i++) {
            timeList.push({
                time: i + ":00 PM",
            });
            timeList.push({
                time: i + ":30 PM",
            });
        }
        setTimeList(timeList);
    }

    return (<View style={{padding: 20}}>
        <TouchableOpacity
            style={{
                display: "flex", marginBottom: 20, flexDirection: "row", gap: 10, alignItems: "center",
            }}
            onPress={hideModal}
        >
            <Ionicons name="arrow-back" size={30} color="black"/>
            <Text style={{fontSize: 25, fontFamily: "outfit-medium"}}>
                Booking
            </Text>
        </TouchableOpacity>

        {/*Calendar Section*/}
        <Heading text="Select Date"/>
        <View style={styles.calenderContainer}>
            <CalendarPicker
                onDateChange={onDateChange}
                width={340}
                minDate={Date.now()}
                todayBackgroundColor={Colors.LIGHT_ORANGE}
                todayTextStyle={{color: Colors.PRIMARY}}
                selectedDayColor={Colors.PRIMARY}
                selectedDayTextColor={Colors.WHITE}
            />
        </View>

        {/*Time Section*/}
        <View style={{marginTop: 20}}>
            <Heading text="Select Time"/>
            <FlatList
    data={timeList}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    nestedScrollEnabled={true}
    renderItem={({item, index}) => (
        <TouchableOpacity style={{marginRight: 10}} onPress={()=>setSelectedTime(item.time)}>
            <Text style={[selectedTime===item.time? styles.selectedTime:styles.unselectedTime]}>
                {item.time}
            </Text>
        </TouchableOpacity>
    )}
/>
        </View>
    </View>);
};

export default BookingModel;


const styles = StyleSheet.create({
    calenderContainer: {
        backgroundColor: Colors.LIGHT_ORANGE, padding: 20, borderRadius: 15
    }, selectedTime: {
        padding: 8,
        borderWidth: 1,
        borderColor: Colors.LIGHT_ORANGE,
        borderRadius: 99,
        color: Colors.WHITE,
        paddingHorizontal:18,
        backgroundColor: Colors.PRIMARY,
    }, unselectedTime: {
        paddingHorizontal:18,
        padding: 8,
        borderWidth: 1,
        borderColor: Colors.LIGHT_ORANGE,
        borderRadius: 99,
        color: Colors.LIGHT_ORANGE,
    }
});