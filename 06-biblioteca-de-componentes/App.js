import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider } from 'react-native-paper';

export default function App() {
    const listaCards= [
      {
        titulo:"Card 1",
        descricao:"Lorem impsum Lorem impsumLorem impsumLorem impsum",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE15rYe7pzpHIDnOwy7IUcXwngpwNgReO0Mw&s"
      
      },
      {
        titulo:"Card 1",
        descricao:"Lorem impsum Lorem impsumLorem impsumLorem impsum",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE15rYe7pzpHIDnOwy7IUcXwngpwNgReO0Mw&s"
      },
      {
        titulo:"Card 1",
        descricao:"Lorem impsum Lorem impsumLorem impsumLorem impsum",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE15rYe7pzpHIDnOwy7IUcXwngpwNgReO0Mw&s"
      },
      {
        titulo:"Card 1",
        descricao:"Lorem impsum Lorem impsumLorem impsumLorem impsum",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE15rYe7pzpHIDnOwy7IUcXwngpwNgReO0Mw&s"
      }

    ]
  
      return (
    

    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
      
    
  <FlatList
  data={listaCards}
  renderItem={({ item }) => (
    <Card>
      <Card.Content>
        <Title>{item.titulo}</Title>
        <Paragraph>{item.descricao}</Paragraph>

      </Card.Content>
      <Card.Cover source={{uri:item.imagem}}/>
    </Card>
      )}
  />
        
      </View>
    </PaperProvider>
    
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40,
  },
});
