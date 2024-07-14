import React from "react";
import { TouchableOpacity, Text } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import styles from './SubmitButton.style';

const SubmitButton = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name="login" size={25} color={"#ffffff"}/>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton;