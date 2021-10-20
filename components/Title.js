import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizzler</Text>
        </View>
    )
}


export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '900',
        color:'#F3BDA1'

    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

