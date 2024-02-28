import React, {useEffect, useState} from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import {useUser} from "@clerk/clerk-expo";
import moment from "moment";

const BookingModel = ({businessId, hideModal}) => {
    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState();

    const {user} = useUser();

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
    };

    // create booking
    const createBooking = () => {
        if (!selectedTime || !selectedDate) {
            ToastAndroid.show("Please fill Required Details!", ToastAndroid.LONG);
            return;
        }
        const data = {
            userName: 'Maneesha Gunawardhana',
            userEmail: 'maneesha@gmail.com',
            time: setSelectedTime,
            date: moment(selectedDate).format("YYYY-MM-DD"),
            businessId: businessId,
        };



        GlobalApi.createBooking(data)
            .then((resp) => {
                ToastAndroid.show("Booking Success!", ToastAndroid.LONG);
                hideModal();
            })
            .catch((error) => {
                ToastAndroid.show("Booking Success!", ToastAndroid.LONG);
                // Handle the error here, such as showing an error message to the user
                // or logging the error for further investigation.
            });

    };

    return (<ScrollView>
            <KeyboardAvoidingView style={{padding: 20}}>
                <TouchableOpacity
                    style={{
                        display: "flex", marginBottom: 20, flexDirection: "row", gap: 10, alignItems: "center",
                    }}
                    onPress={hideModal}
                >
                    <Ionicons name="arrow-back" size={30} color="black"/>
                    <Text style={{fontSize: 25,
                        // fontFamily: "medium"
                    }}>
                        Booking
                    </Text>
                </TouchableOpacity>

                {/*Calendar Section*/}
                <Heading text="Select Date"/>
                <View style={styles.calenderContainer}>
                    <CalendarPicker
                        onDateChange={setSelectedDate}
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
                        renderItem={({item, index}) => (<TouchableOpacity
                                style={{marginRight: 10}}
                                onPress={() => setSelectedTime(item.time)}
                            >
                                <Text
                                    style={[selectedTime === item.time ? styles.selectedTime : styles.unselectedTime,]}
                                >
                                    {item.time}
                                </Text>
                            </TouchableOpacity>)}
                    />
                </View>
                {/* Note Section */}
                <View style={{paddingTop: 20}}>
                    <Heading text={"Any Suggetion Note"}/>
                    <TextInput
                        placeholder="Note"
                        numberOfLines={4}
                        multiline={true}
                        style={styles.noteTextArea}
                        onChange={(text) => setNote(text)}
                    />
                </View>
                {/* conformation button */}
                <TouchableOpacity
                    style={{marginTop: 15}}
                    onPress={() => createBooking()}
                >
                    <Text style={styles.confirmButton}>Confirm & Book</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>);
};
// 3.28.37
export default BookingModel;

const styles = StyleSheet.create({
    calenderContainer: {
        backgroundColor: Colors.LIGHT_ORANGE, padding: 20, borderRadius: 15,
    }, selectedTime: {
        padding: 8,
        borderWidth: 1,
        borderColor: Colors.LIGHT_ORANGE,
        borderRadius: 99,
        color: Colors.WHITE,
        paddingHorizontal: 18,
        backgroundColor: Colors.PRIMARY,
    }, unselectedTime: {
        paddingHorizontal: 18,
        padding: 8,
        borderWidth: 1,
        borderColor: Colors.LIGHT_ORANGE,
        borderRadius: 99,
        color: Colors.LIGHT_ORANGE,
    }, noteTextArea: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: "top",
        padding: 20,
        fontSize: 16,
        // fontFamily: "medium",
        borderColor: Colors.LIGHT_ORANGE,
    }, confirmButton: {
        textAlign: "center",
        // fontFamily: "medium",
        fontSize: 17,
        backgroundColor: Colors.LIGHT_ORANGE,
        color: Colors.WHITE,
        padding: 13,
        borderRadius: 99,
        elevation: 2,
    },
});
