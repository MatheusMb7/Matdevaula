import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Card, Paragraph, Title } from 'react-native-paper';

export default function JogadoresScreen() {
    const jogadores = [
        {
        nome: "Vitor Roque",
        numero: 9,
        imagem: "https://i.pinimg.com/736x/13/b4/0d/13b40da04683734e36f0bc3c412a1c68.jpg"
        },
        {
        nome: "Raphael Veiga",
        numero: 23,
        imagem: "https://i.pinimg.com/736x/1e/fa/53/1efa537b5eb37cd37dc45aa5788106fd.jpg"
        },
        {
        nome: "Estevão",
        numero: 41,
        imagem: "https://i.pinimg.com/736x/90/09/87/900987c8a075987de89beba0aa57d5ec.jpg"
        },
        {
        nome: "richard Ríos",
        numero: 8,
        imagem: "https://i.pinimg.com/736x/99/2f/26/992f263beee3307e994286659bc1e9e5.jpg"
        },
        {
        nome: "Piquerez",
        numero: 22,
        imagem: "https://i.pinimg.com/736x/11/24/7b/11247b1877071d143ae96e242b5c06c6.jpg"
        },
        ];

        const renderItem = ({ item }) => (
            <Card style={styles.card}>
                <Card.Cover source={{ uri: item.imagem }} />
                <Card.Content>
                    <Title>{item.nome}</Title>
                    <Paragraph>{item.numero }</Paragraph>
                </Card.Content>
    
            </Card>
        );
    
        return (
            <View style={styles.container}>
                <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Jogadores Do Palmeiras</Text>
                <FlatList
                    data={jogadores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            paddingTop: 10,
            flex: 1
        },
        title: {
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 10
        },
        listContainer: {
            width: '100%',
            paddingHorizontal: 10
        },
        card: {
            width: '100%',
            marginBottom: 10,
            borderRadius: 8
        },
        image: {
            flex: 1,
            height: 50
        }
    });