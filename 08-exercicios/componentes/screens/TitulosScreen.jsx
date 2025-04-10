import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Card, Paragraph, Title } from 'react-native-paper';

export default function TitulosScreen() {
    const titulos = [
        {
            nome: "Campeonato Brasileiro",
            anos: [1960, 1967, 1969, 1972, 1973, 1993, 1994, 2016, 2018, 2022, 2023],
            imagem: 'https://i.pinimg.com/736x/b4/f5/c4/b4f5c4f4594f23f3513da0660e3a7c3a.jpg'
        },
        {
            nome: "Copa Libertadores da América",
            anos: [1999, 2020, 2021],
            imagem: 'https://i.pinimg.com/736x/e0/44/d6/e044d638194e80d8a254f1678588dc87.jpg'
        },
        {
            nome: "Copa do Brasil",
            anos: [1998, 2012, 2015, 2020],
            imagem: 'https://i.pinimg.com/736x/ac/91/00/ac910008ebf2e8e8a565c5869ad63c17.jpg'
        },
        {
            nome: "Supercopa do Brasil",
            anos: [2023],
            imagem: 'https://i.pinimg.com/736x/c4/70/31/c47031701686554760ba777750565064.jpg'
        },
    ];

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
                <Title>{item.nome}</Title>
                <Paragraph>{item.anos.join(', ')}</Paragraph>
            </Card.Content>

        </Card>
    );

    return (
        <View style={styles.container}>
            <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Títulos Do Palmeiras</Text>
            <FlatList
                data={titulos}
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
        alignItems: 'center',
        paddingTop: 10,
        flex: 1
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 10
    },
    card: {
        marginBottom: 10,
        borderRadius: 8
    }
});
