import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';



const Result = ({ route, navigation }) => {
    const score = route.params.score;
    const val = score * 10;
    return (
        <View style={styles.container}>
            <View style={styles.info} >
                <Text style={styles.message}>Quiz Successfully completed!!</Text>
                <View style={styles.dashboard}><Text style={styles.score}>Your score is: {route.params.score}/10</Text></View>
            </View>
            <View style={styles.progress}>
                <CircularProgress
                    value={val}
                    valueSuffix={'%'}
                    radius={120}
                    activeStrokeColor={'#B2F9FC'}
                    inActiveStrokeOpacity={0.5}
                    activeStrokeWidth={20}
                    inActiveStrokeWidth={20}
                    textStyle={{ fontWeight: '100', color: '#F3BDA1' }}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.butttonText}>HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        backgroundColor: '#02475E',
        height: '100%'

    },
    info: {
        alignItems: 'center'
    },
    message: {
        fontSize: 20,
        color: '#B2F9FC'
    },
    score: {
        fontSize: 30,
        color: '#F3BDA1'
    },
    progress: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1
    },
    dashboard: {
        paddingVertical: 30
    },
    button: {
        padding: 20,
        backgroundColor: '#F3BDA1',
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    butttonText: {
        fontSize: 24,
        color: '#02475E'
    }
})

export default Result
