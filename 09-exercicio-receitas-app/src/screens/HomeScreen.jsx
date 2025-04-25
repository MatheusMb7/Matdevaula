import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Card, Paragraph, Title, Button } from 'react-native-paper';


export default function ReceitaScreen({ navigation, route }) {
    const receitas = [
        {
        
        id: 1,
        nome: "Feijoada",
        tempoPreparo: "2 horas",
        porcoes: 8,
        imagem: 'https://i.pinimg.com/236x/80/b5/44/80b544b4f56e66fde329b8cf8279e3b3.jpg',
        ingredientes: [
        "1kg de feijão preto",
        "500g de carne seca",
        "300g de linguiça",
        "200g de costelinha",
        "2 laranjas",
        "Couve a gosto",
        "Arroz para acompanhar"
        ],
        modoPreparo: [
        "1. Deixe o feijão de molho por 12 horas",
        "2. Cozinhe o feijão na panela de pressão",
        "3. Adicione as carnes",
        "4. Cozinhe até ficar macio",
        "5. Sirva com arroz, couve e laranja"
        ]
        },
        {
        id: 2,
        nome: "Strogonoff de Frango",
        tempoPreparo: "40 minutos",
        porcoes: 6,
        imagem: 'https://i.pinimg.com/236x/ae/fe/5d/aefe5d91ac74b5f9d95c38f1a97cfc38.jpg',
        ingredientes: [
        "1kg de peito de frango",
        "2 caixas de creme de leite",
        "2 colheres de extrato de tomate",
        "2 colheres de ketchup",
        "2 colheres de mostarda",
        "Champignon a gosto",
        "Batata palha para acompanhar"
        ],
        modoPreparo: [
        "1. Corte o frango em cubos",
        "2. Doure o frango na panela",
        "3. Adicione os molhos e o champignon",
        "4. Adicione o creme de leite",
        "5. Sirva com arroz e batata palha"
        ]
        },
        {
        id: 3,
        nome: "Bolo de Chocolate",
        tempoPreparo: "50 minutos",
        porcoes: 12,
        imagem: 'https://i.pinimg.com/236x/ef/d3/0b/efd30bd087d55dc9b51cc77507893531.jpg',
        ingredientes: [
        "4 ovos",
        "2 xícaras de açúcar",
        "2 xícaras de farinha",
        "1 xícara de chocolate em pó",
        "1 xícara de óleo",
        "1 xícara de leite",
        "1 colher de fermento"
        ],
        modoPreparo: [
        "1. Bata os ovos com o açúcar",
        "2. Adicione os ingredientes secos",
        "3. Adicione os líquidos",
        "4. Por último o fermento",
        "5. Asse em forno médio por 40 minutos"
        ]
        }
        ];
        const renderItem = ({ item }) => (
            <Card style={styles.card} onPress={() => navigation.navigate('Receita', { receita: item })}>
                <Card.Cover source={{ uri: item.imagem }} />
                <Card.Content>
                    <Title>{item.nome}</Title>
                    <Paragraph>Tempo: {item.tempoPreparo} | Porções: {item.porcoes}</Paragraph>
                </Card.Content>
            </Card>
        );
    
        return (
            <View style={styles.container}>
                <Text variant="headlineMedium" style={styles.title}>Receitas</Text>
                <FlatList
                    data={receitas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10
        },
        title: {
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10
        },
        listContainer: {
            paddingBottom: 20
        },
        card: {
            marginBottom: 10
        }
    });