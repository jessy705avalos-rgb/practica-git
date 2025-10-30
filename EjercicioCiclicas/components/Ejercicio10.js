import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Ejercicio10 = () => {
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
      suma += i * i;
    }
    setResultado(`La suma de los cuadrados del 1 al 100 es: ${suma}`);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Calcular suma" onPress={calcular} />
      <Text style={{ marginTop:20, textAlign:'center' }}>{resultado}</Text>
    </View>
  );
};

export default Ejercicio10;
