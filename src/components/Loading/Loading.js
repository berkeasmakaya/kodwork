import React from "react";
import LottieView from "lottie-react-native";


const Loading = () =>{
    return <LottieView style={{flex:1}} source={require("../../assets/Loading.json")} autoPlay/>
}

export default Loading;