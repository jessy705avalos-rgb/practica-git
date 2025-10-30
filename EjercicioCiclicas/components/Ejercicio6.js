import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Ejercicio6 = () => {
  const [resultado, setResultado] = useState('');

  const generar = () => {
    let texto = '';
    for (let i = 2; i <= 15; i++) {
      if (i % 2 === 0) {
        texto += i + ' ';
      }
    }
    setResultado(`Números pares del 2 al 15:\n${texto}`);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Mostrar números pares" onPress={generar} />
      <Text style={{ marginTop:20, textAlign:'center' }}>{resultado}</Text>
    </View>
  );
};

export default Ejercicio6;
