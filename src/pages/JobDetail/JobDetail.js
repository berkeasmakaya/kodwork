import React, { useLayoutEffect } from "react";
import { ScrollView, View, Dimensions, Alert } from "react-native";
import DetailCard from "../../components/DetailCard/DetailCard";
import RenderHTML from "react-native-render-html";
import styles from './JobDetail.style';
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import { addJob } from "../../redux/jobSlice";

function JobDetail({route}){
    const {item} = route.params;
    const source = {html:item.contents}
    const width =Dimensions.get("screen").width;
    const navigation = useNavigation();
    const { jobs } = useSelector((state) => state.jobs);

    
    const dispatch = useDispatch();

    const handleAddFavorite = () => {
        const isAlreadyFavorite = jobs.some((job) => job.id === item.id);
        if (isAlreadyFavorite) {
            Alert.alert("CodeWork", "This job is already in your favorite list.");
        } else {
            dispatch(addJob(item));
            Alert.alert("CodeWork", "Success! Added to favorite list!");
        }
    }

    const addSubmit = () =>{
        Alert.alert("CodeWork", "Success! You have submited.")
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:item.name,
        });
    }, [navigation, item.name])

    return(
        <View style={styles.container}>
            <DetailCard job={item}/>

            <ScrollView style={styles.content}>
                <RenderHTML
                    baseStyle={{ color: 'black', fontSize: 15 }}
                    contentWidth={width}
                    source={source}
                />
            </ScrollView>

            <View style = {styles.footer}>
                <View style = {styles.submit_container}>
                    <SubmitButton onPress={addSubmit} />
                </View>
                <View style = {styles.favorite_container} >
                    <FavoriteButton onPress={handleAddFavorite}/>
                    
                </View>
            </View>
        </View>
    )
}

export default JobDetail;