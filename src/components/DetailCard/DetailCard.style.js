import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingHorizontal:10
    },
    job_name:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000000"
    },
    location_container:{
        marginVertical:5,
        flexDirection:"row"
    },
    location_text:{
        fontSize:15,
        fontWeight:"bold",
        color:"#ef5251"
    },
    location:{
        fontSize:15,
        paddingLeft:5,
        color:"#000000"
    },
    level_container:{
        flexDirection:"row",
        marginVertical:5
    },
    level_text:{
        fontSize:15,
        color:"#ef5251",
        fontWeight:"bold"
    },
    level:{
        fontSize:15,
        paddingLeft:5,
        color:"#000000"
    },
    job_detail:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:10
    }
})