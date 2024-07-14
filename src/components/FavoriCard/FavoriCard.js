import React from "react";
import { View,Text, TouchableOpacity} from "react-native";
import styles from './FavoriCard.style';
import RemoveButton from "../RemoveButton/RemoveButton";

const FavoriCard = ({job, onDetail, onRemove}) => {
    return(
        <TouchableOpacity onPress={onDetail} style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.job_name}>{job.name}</Text>
                <Text style={styles.company}>{job.company.name}</Text>
                <View style={styles.location_container}>
                    <Text style={styles.location}>{job.locations[0].name}</Text>   
                </View>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.level}>{job.levels[0].name}</Text>
            </View>
            <View>
                <RemoveButton onRemove={onRemove}/>
            </View>
        </TouchableOpacity>
    )
}

export default FavoriCard;