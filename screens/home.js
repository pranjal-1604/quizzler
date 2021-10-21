import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import qImg from '../assets/question_mark2.png';
import Title from '../components/Title';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.imgContainer}>
                <Image source={qImg} style={styles.banner} resizeMode='contain' />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quiz")}>
                <Text style={styles.butttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({

    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor:'#02475E',
        height : '100%',
    
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex : 1
    },

    banner: {
        height: 300,
        width: 300,
        borderRadius : 250

    },
    button: {
        padding: 20,
        backgroundColor:'#F3BDA1',
        marginBottom:12,
        alignItems:'center',
        justifyContent : 'center',
        borderRadius : 30
    },
    butttonText:{
        fontSize:24,
        color:'#02475E'
    }
})
