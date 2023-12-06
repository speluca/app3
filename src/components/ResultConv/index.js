import React from "react"
import {View, Text} from "react-native"

export default function ResultConv(props){
    return(
        <View>
             
             <Text>{props.messageResultconv}</Text>
             <Text>{props.Resultconv}</Text>
        </View>
    );
}