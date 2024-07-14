import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './RemoveButton.style';

const RemoveButton = ({onRemove}) => {
    return(
        <TouchableOpacity onPress={onRemove} style={styles.container}>
            <Text style={styles.text}>Remove</Text>
        </TouchableOpacity>
    )
}

export default RemoveButton;