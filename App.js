import Cabecalho from './src/componets/cabecalho';
import React from './src/componets/botao';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Botao from './src/componets/botao';
import Jogos from './src/componets/Jogos';
import dados from './src/dados';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
    <Botao Logo="game-controller" 
           texto="Jogos" 
           cor="black"
           Logo2="book"
           texto2="Livros"
           cor2="blue"
           >
    </Botao>
    
    <Botao
           Logo="ios-musical-notes"
           texto="Musicas"
           cor="green"
           Logo2="ios-apps"
           texto2="Apps"
           cor2="orange"
          >
      </Botao> 
      <Botao
           Logo="md-film"
           texto="Filmes"
           cor="red"
           Logo2="library"
           texto2="Biblioteca"
           cor2="purple"
      ></Botao>

      <FlatList
      horizontal={true}
      data= {Dados}
      keyExtractor = {(item) => item.id}
      renderItem = { ({ item }) => (

      <Jogos
      titulo = {item.nome}
      imagem = {item.imagem}
      valor ={item.valor}
      />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

