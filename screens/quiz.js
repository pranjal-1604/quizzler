import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [options, setOptions] = useState();
    const [currQues, setcurrQues] = useState(0);
    const [selected, setSelected] = useState();
    const [score, setScore] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        // console.log(data.results);
    }


    useEffect(() => {
        getQuiz();
    }, [])

    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    const handleCheck = (i) => {
        setSelected(i);
        setOpacity(0.3);
        if (i === questions[currQues]?.correct_answer) {
            setScore(score + 1);
            setSelected();
        }

    };

    const handleSkip = () => {
        if (currQues > 8) {
            navigation.navigate('Result', { score })
        } else {
            setcurrQues(currQues + 1);
        }
    }
    const handleQuit = () => {
        setcurrQues(0);
        setQuestions();
    };

    return (
        <View style={styles.container}>
            {questions &&
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <Text style={styles.question}>Q {currQues + 1}.{questions[currQues].question}</Text>
                    </View>
                    <View style={styles.options}>
                        {options && options.map((option, index) => (

                            <TouchableOpacity style={styles.optionButton} key={index} onPress={() => { handleCheck(option) }}>
                                <Text style={styles.option}>{option}</Text>
                            </TouchableOpacity>

                        ))}
                    </View>
                    <View style={styles.bottom}>
                        {currQues < 9 && <TouchableOpacity style={styles.button} onPress={() => { handleSkip() }}><Text style={styles.butttonText}>NEXT</Text></TouchableOpacity>}
                        {currQues === 9 && <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result', { score })}><Text style={styles.butttonText}>SUBMIT</Text></TouchableOpacity>}
                        <TouchableOpacity style={styles.button} onPress={() => { handleQuit() }}><Text style={styles.butttonText}>QUIT</Text></TouchableOpacity>

                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 30,
        paddingHorizontal: 16,
        backgroundColor: '#082032',
        height: '100%'
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 10,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        padding: 15,
        paddingHorizontal: 18,
        backgroundColor: '#B2F9FC',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    butttonText: {
        fontSize: 16
    },
    question: {
        fontSize: 20,
        color:'#B2F9FC'
    },
    option: {
        fontSize: 18,
        fontWeight: '400',
        color: '#02475E'
    },
    optionButton: {
        padding: 12,
        marginVertical: 12,
        backgroundColor: '#F3BDA1',
        borderRadius: 12
    },
    parent: {
        height: '100%'
    },
    disabled: {
        opacity: 0.3
    }
})

export default Quiz
