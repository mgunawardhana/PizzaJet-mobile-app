import {Text, View} from "react-native";
import React, {useEffect} from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function Slider() {
    useEffect(() => {
        getSlider();
    }, []);

    const getSlider = () => {
        GlobalApi.getSlider()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (<View>
            <Text>Slider</Text>
        </View>);
}