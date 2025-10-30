import React from 'react';
import { View, Text } from 'react-native';

const Ejercicio2 = () => {
  let texto = '';

  for (let i = 1; i <= 30; i++) {
    texto += i + ' ';
    if (i % 7 === 0) {
      texto += '\n'; // salto de línea cada 7
    }
  }

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:18, marginBottom:15, textAlign:'center' }}>
        Números del 1 al 30 con salto cada 7:
      </Text>
      <Text style={{ fontSize:16, textAlign:'center', lineHeight:25 }}>{texto}</Text>
    </View>
  );
};

export default Ejercicio2;
