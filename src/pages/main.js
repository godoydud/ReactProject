import React, { Component } from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';



export default class Main extends Component {
    render() {
        return (
            <View> 
                        <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText} onPress={() => {
                                this.props.navigation.navigate('Cadastro')    
                            }} >Cadastrar Cliente</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText} onPress={() => {
                                this.props.navigation.navigate('Listagem')     
                            }} >Lista de Cadastros</Text>
                        </TouchableOpacity>
                    </View> 
        )
    }
}
 

const styles = StyleSheet.create({
 
    productButton: { 
        margin: 60, 
        height: 42, 
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent" ,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
}); 