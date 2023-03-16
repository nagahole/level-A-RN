import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import InputBox from './components/InputBox';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default function BMICalculator(props) {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState(-1);

    //function in functional component
    //height is in cm so / 100
    function calculateBMI(weight, height) {
        return weight / (Math.pow(height / 100, 2));
    }

    function onSubmit() {
        setBMI(calculateBMI(weight, height));
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <InputBox
                        weight={weight}
                        height={height}
                        setWeight={setWeight}
                        setHeight={setHeight}
                    />
                </View>

                <TouchableOpacity onPress={onSubmit}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>CALCULATE</Text>
                    </View>
                </TouchableOpacity>

                <Text style={{ marginTop: 20, textAlign: "center" }}>Your bmi is</Text> 
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 24}}>
                    {(bmi == -1 || isNaN(bmi))? "-/-" : `${Math.round(bmi * 10) / 10}`}
                </Text>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        display: "flex",
        justifyContent: "center",
        flex: 1,
        gap: 20,
    },

    buttonView: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 15
    },

    buttonText: {
        textAlign: "center"
    }
});