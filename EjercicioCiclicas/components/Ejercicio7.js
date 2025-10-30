import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Ejercicio7 = () => {
  const [resultado, setResultado] = useState('');

  const imprimir = () => {
    let texto = '';
    for (let i = 0; i <= 100; i += 10) {
      texto += i + ' ';
    }
    setResultado(`Números del 0 al 100 de diez en diez:\n${texto}`);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Mostrar números del 0 al 100 de diez en diez" onPress={imprimir} />
      <Text style={{ marginTop:20, textAlign:'center' }}>{resultado}</Text>
    </View>
  );
};

export default Ejercicio7;
