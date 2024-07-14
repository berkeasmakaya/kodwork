import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './FavoriteJobs.style';
import FavoriCard from '../../components/FavoriCard/FavoriCard';
import { useSelector, useDispatch } from 'react-redux';
import { removeJob } from '../../redux/jobSlice';

const FavoriteJobs = ({navigation}) => {
    const {jobs} = useSelector((state)=>state.jobs);
    
    const dispatch = useDispatch();

    const renderItem = ({ item }) => (
        <FavoriCard job={item} onDetail={()=>onDetail(item)} onRemove={()=>handleRemove(item.id)} />
    );

    const onDetail = (item) => {
        navigation.navigate("JobDetailScreen", {item})
    }

    const handleRemove = (id) => {
        dispatch(removeJob(id));
    }

    return (
        <View>
            <FlatList
                data={jobs}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default FavoriteJobs;