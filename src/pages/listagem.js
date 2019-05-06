import React, { Component } from 'react';
import api from '../services/api';


import { View, Text, TouchableOpacity, StyleSheet, Alert, Button, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class Main extends Component {
    static navigationOptions = {
        title: "Meu Estacionamento"
    };

    state = {
        productInfo: {},
        docs: [],
        page: 1,
        id: "", 
    };

    componentDidMount() { 
        this.loadProducts();
    }

    loadClientes = async () => {
        const response = await api.get('/cliente');

        this.setState({ docs: response.data})
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/cliente?page=${page}`);

        const { docs, ...productInfo } = response.data; 
        
        this.setState({docs: [...this.state.docs, ...docs],
             productInfo,
            page}); 
      
    };
      
    loadMore = () => {
        const {page, productInfo} = this.state;

        if(page == productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber); 
    };

    renderItem = ({item}) => (
        <View style={styles.productContainer}>
            <Text style={styles.clienteNome}>{item.nome}</Text>
            <Text style={styles.placeholder}>CPF:</Text>
            <Text style={styles.clienteCpf}>{item.cpf}</Text> 
            <Text style={styles.placeholder}>Placa do Veículo:</Text>
            <Text style={styles.clientePlaca}>{item.placa}</Text>
            <Text style={styles.placeholder}>ID Cliente:</Text>  
            <Text style={styles.clientePlaca}>{item._id}</Text> 
         
           

 
             <TouchableOpacity style={styles.productButton} 
             onPress={() => {
                api.delete(`/cliente/${item._id}`)
                }}> 
             
             
             <Text style={styles.productButtonText}>Deletar</Text>
               
             </TouchableOpacity> 
        </View>
    )
 


    render() {
        return(
            <View style={styles.container}>
                <FlatList
                contentContainerStyle={styles.list}
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1}
                />
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20 
    },

    productContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5, 
        padding: 20,
        marginBottom: 20, 
    },

    clienteNome: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333" 
    },
    
    clienteCpf: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },

    clientePlaca: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },

    productButton: { 
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
    },

    placeholder: {
        fontSize: 16,
        fontWeight: 'bold', 
        marginTop: 5,
        lineHeight: 24
    }
}); 