import React from "react";
import { View,Text, TouchableOpacity} from "react-native";
import styles from './JobCard.style';

const JobCard = ({job, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
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
        </TouchableOpacity>
    )
}

export default JobCard;