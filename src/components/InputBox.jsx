import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default class InputBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Weight (kg)</Text>
                    <TextInput style={styles.textInput}
                        keyboardType="decimal-pad"
                        value={this.props.weight.toString()}
                        onChangeText={this.props.setWeight}
                        onEndEditing={e => {
                            let float = parseFloat(e.nativeEvent.text);

                            this.props.setWeight(isNaN(float)? 0 : float);
                        }}
                    />
                </View>
                
                <View>
                    <Text style={styles.label}>Height (cm)</Text>
                    <TextInput style={styles.textInput}
                        keyboardType="decimal-pad"
                        value={this.props.height.toString()}
                        onChangeText={this.props.setHeight}
                        onEndEditing={e => {
                            let float = parseFloat(e.nativeEvent.text);

                            this.props.setHeight(isNaN(float)? 0 : float);
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        display: "flex",
        gap: 20
    },

    label: {
        textAlign: "right",
        marginBottom: 6,
        fontSize: 14
    },  

    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        textAlign: "right",
        fontSize: 20
    }
});