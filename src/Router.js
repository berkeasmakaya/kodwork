import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Jobs from './pages/Jobs/Jobs';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import JobDetail from './pages/JobDetail/JobDetail';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { loadFavoriteJobs } from './redux/jobSlice';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name='JobsScreen' 
                component={Jobs} 
                options={{title:"Jobs",headerTintColor:"#f15f5b", headerTitleStyle:{fontWeight:"bold"}, headerTitleAlign:"center"}}
            />
            <Drawer.Screen 
                name='FavoriteJobsScreen' 
                component={FavoriteJobs}
                options={{title:"My Favorites Jobs",headerTintColor:"#f15f5b", headerTitleStyle:{fontWeight:"bold"}, headerTitleAlign:"center"}}
            />
        </Drawer.Navigator>
    );
}

const MainApp = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadFavoriteJobs());
    },[dispatch])

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='DrawerNavigator' 
                    component={DrawerNavigator} 
                    options={{headerShown:false}} 
                />
                <Stack.Screen
                    name='JobDetailScreen' 
                    component={JobDetail} 
                    options={({headerTintColor:"#f15f5b", headerTitleStyle:{fontWeight:"bold"}, headerTitleAlign:"center"})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function Router(){
    return(
        <Provider store={store}>
            <MainApp/>
        </Provider>
    )
}

export default Router;