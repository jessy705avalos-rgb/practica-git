import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Ejercicio5 = () => {
  const [resultado, setResultado] = useState('');

  const generar = () => {
    let calificaciones = [];
    let intentos = 0;

    while (calificaciones.length < 10) {
      let cal = Math.floor(Math.random() * 11); // 0 a 10
      intentos++;
      if (cal >= 6 && cal <= 10) {
        calificaciones.push(cal);
      }
    }

    setResultado(`Calificaciones válidas (6-10): ${calificaciones.join(', ')}\nIntentos totales: ${intentos}`);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Generar calificaciones válidas" onPress={generar} />
      <Text style={{ marginTop:20, textAlign:'center' }}>{resultado}</Text>
    </View>
  );
};

export default Ejercicio5;
