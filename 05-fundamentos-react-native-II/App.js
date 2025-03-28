import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Imagem } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Atleta from './componentes/Atleta';


export default function App() {

const listaAtletas = [
  {
  nome:"Cristiano Ronaldo",
  idade:40,
  numero:7,
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsTVGNFBgwYr6dhGWgB3EOExdlHo00PzQtg&s'
},
{
  nome:"Neymar Junior",
  idade:33,
  numero:10,
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqhejpUQwJLcehJ43PIMBO2HpB2WN88wIOg&s'
},
{
  nome:"estevao",
  idade:17,
  numero:41,
  imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/ESTEVAO-DENILSON-PALMEIRAS-e1732738336480.jpg?w=1200&h=1200&crop=1'
},

]






  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* <PrimeiroComponente/>
    <JavaScriptComponente/>
    <Perfil
     nome='Matheus'
    idade={24} 
    telefone='61996703930'
    email='matheussbsiilva@gmail.com'    
    
    />

<Perfil
     nome='firmino'
    idade={20} 
    telefone='40028922'
    email='firmininhodelas@gmail.com'    
    
    />

<Perfil
     nome='Deyverson'
    idade={20} 
    telefone='190'
    email='gigantecagado@gmail.com'    
    
    /> 

    <ListaComponente/>


        <Atleta
          nome="Cristiano ronaldo"
          idade={40}
          numero={7}
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsTVGNFBgwYr6dhGWgB3EOExdlHo00PzQtg&s"


        />

<Atleta
          nome="Cristiano ronaldo"
          idade={40}
          numero={7}
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsTVGNFBgwYr6dhGWgB3EOExdlHo00PzQtg&s"


        />*/}
        {
          listaAtletas.map(
            atleta => {
              return [
                <Atleta 
                nome = {atleta.nome}
                idade={atleta.idade}
                numero={atleta.numero}
                imagem={atleta.imagem}
                
                />
              ]
            }
          )

        }



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
