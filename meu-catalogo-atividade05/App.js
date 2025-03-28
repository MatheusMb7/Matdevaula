import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './componentes/Filmes';
import Series from './componentes/Series';


export default function App() {
  const listaFilmes = [
    {
      "nome": "Os incríveis",
      "ano": 2004,
      "diretor": "Brad Bird",
      "tipo": "Animação",
      "capa": "https://i.pinimg.com/736x/2c/c9/1e/2cc91e470354209a960b8fffa60d012e.jpg"
    },
    {
      "nome": "As branquelas",
      "ano": 2004,
      "diretor": "Keenen Ivory Wayans",
      "tipo": "Comédia",
      "capa": "https://i.pinimg.com/736x/27/30/18/27301854f847409a71d0758e2a526cc6.jpg"
    },
    {
      "nome": "O pequenino",
      "ano": 2006,
      "diretor": "Keenen Ivory Wayans",
      "tipo": "Comédia",
      "capa": "https://i.pinimg.com/736x/21/32/77/21327772225bb48c74a6bbb86feb6d84.jpg"
    },
    {
      "nome": "Homem de ferro",
      "ano": 2008,
      "diretor": "Jon Favreau",
      "tipo": "Ação",
      "capa": "https://i.pinimg.com/736x/af/89/6b/af896b313be45b38a0e2d3e114c1bd26.jpg"
    }
  ];

  const listaSeries = [
    {
      "nome": "Prison Break: Em Busca da Verdade",
      "ano": 2005,
      "diretor": "Paul Scheuring",
      "temporadas": "5 temporadas",
      "capa": "https://i.pinimg.com/736x/b6/9a/f7/b69af7e33fd92a53deaa8445897fde92.jpg"
    },
    {
      "nome": "la casa de papel",
      "ano": 2017,
      "diretor": "Alejandro Pina Calafi",
      "temporadas": "5 temporadas",
      "capa": "https://i.pinimg.com/736x/54/a0/92/54a092432390f993075a315a09f60c47.jpg"
    },
    {
      "nome": "The Order",
      "ano": 2019,
      "diretor": "David Von Ancken",
      "temporadas": "2 temporadas",
      "capa": "https://br.web.img3.acsta.net/pictures/20/06/18/11/57/5430475.jpg"
    },
    {
      "nome": "Brooklyn Nine-Nine",
      "ano": 2013,
      "diretor": "Akiva Schaffer, Ken Whittingham",
      "temporadas": "8 temporadas",
      "capa": "https://i.pinimg.com/736x/4e/cd/1d/4ecd1d187efba2d91b2383457262b5ee.jpg"
    }
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
        {
          listaFilmes.map(
            filmes => {
              return [
                <Filmes
                  nome={filmes.nome}
                  ano={filmes.ano}
                  diretor={filmes.diretor}
                  tipo={filmes.tipo}
                  capa={filmes.capa}

                />
              ]
            }
          )

        }
         <Text style={styles.header}>Séries</Text>
        {
          listaSeries.map(
            series => {
              return [
                <Series
                  nome={series.nome}
                  ano={series.ano}
                  diretor={series.diretor}
                  tipo={series.temporadas}
                  capa={series.capa}

                />
              ]
            }
          )

        }


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 15,
  }
});
