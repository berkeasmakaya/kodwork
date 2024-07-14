import React from "react";
import { View, Text } from "react-native";
import styles from './DetailCard.style';

const DetailCard = ({job}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.job_name}>{job.name}</Text>
            <View style={styles.location_container}>
                <Text style={styles.location_text}>Locations:</Text>
                <Text style={styles.location}>{job.locations[0].name}</Text>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.level_text}>Level:</Text>
                <Text style={styles.level}>{job.levels[0].name}</Text>
            </View>
            <Text style={styles.job_detail}>Job Detail</Text>
        </View>
    )
}

export default DetailCard;