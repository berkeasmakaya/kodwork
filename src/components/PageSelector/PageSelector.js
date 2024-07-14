import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import styles from './PageSelector.style';




const PageSelector = ({pageNumber, increasePageNumber, decreasePageNumber}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={decreasePageNumber}>
                <Icon name="arrow-left" size={50} color={"#000000"}/>
            </TouchableOpacity>

            <Text style={styles.text}>{pageNumber}</Text>

            <TouchableOpacity onPress={increasePageNumber}>
                <Icon name="arrow-right" size={50} color={"#000000"}/>
            </TouchableOpacity>
        </View>
    )
}

export default PageSelector;