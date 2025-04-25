import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { Text, Card, Paragraph, Title, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
    const { receita } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Card>
                <Card.Cover source={{ uri: receita.imagem }} />
                <Card.Content>
                    <Title>{receita.nome}</Title>
                    <Paragraph>Tempo de Preparo: {receita.tempoPreparo}</Paragraph>
                    <Paragraph>Porções: {receita.porcoes}</Paragraph>
                    <Text style={styles.section}>Ingredientes:</Text>
                    {receita.ingredientes.map((item, index) => (
                        <Paragraph key={index}>- {item}</Paragraph>
                    ))}
                    <Text style={styles.section}>Modo de Preparo:</Text>
                    {receita.modoPreparo.map((item, index) => (
                        <Paragraph key={index}>{item}</Paragraph>
                    ))}
                </Card.Content>
            </Card>
            <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
                Voltar
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    section: {
        fontWeight: 'bold',
        marginTop: 10
    },
    button: {
        marginTop: 20
    }
});
