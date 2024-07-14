import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import JobCard from '../../components/JobCard/JobCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import PageSelector from '../../components/PageSelector/PageSelector';
import styles from './Jobs.style';
import Loading from '../../components/Loading/Loading';

function Jobs({navigation}){
    const [pageNumber, setPageNumber] = useState(1);
    const {loading,error,data} = useFetch(Config.API_URL + pageNumber);
    
    const handleGoDetail = (item) =>{
        navigation.navigate("JobDetailScreen", {item})
    }

    const renderJobs = ({item}) =>{
       return <JobCard job={item} onPress={()=>handleGoDetail(item)}/>
    }
    

    const increasePageNumber = () => {
        setPageNumber(pageNumber + 1);
    }

    const decreasePageNumber = () =>{
        if (pageNumber===1) {
            return;
        }
        else{
            setPageNumber(pageNumber-1)
        }
    }

    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    
    
    return(
        <View style={styles.container}>
            <FlatList 
                data={data.results}
                renderItem={renderJobs}
                keyExtractor={item => item.id}
                ListFooterComponent={PageSelector}
            />
            <View style={styles.footer}>
                <PageSelector pageNumber={pageNumber} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
            </View>
            
        </View>
    );
}

export default Jobs;

