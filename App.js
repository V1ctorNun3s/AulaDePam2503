import Cabecalho from './src/componets/cabecalho';
import React from './src/componets/botao';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/componets/botao';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
    <Botao Logo="game-controller" 
           texto="Jogos" 
           cor="black">
      </Botao>


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
