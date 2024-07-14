import React from "react";
import { TouchableOpacity, Text } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import styles from './FavoriteButton.style';

const FavoriteButton = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name="favorite" size={25} color={"#ffffff"}/>
            <Text style={styles.text}>Add Favorites</Text>
        </TouchableOpacity>
    )
}

export default FavoriteButton;