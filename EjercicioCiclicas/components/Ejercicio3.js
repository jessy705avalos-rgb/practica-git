import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Ejercicio3 = () => {
  const [calificacion, setCalificacion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validar = () => {
    let c = parseFloat(calificacion);

    if (isNaN(c) || c < 0 || c > 10) {
      setMensaje('Calificación inválida. Intenta de nuevo.');
    } else {
      setMensaje('Calificación válida: ' + c);
    }
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:18, marginBottom:10 }}>Ingresa una calificación (0 a 10):</Text>
      <TextInput
        style={{ borderWidth:1, padding:8, marginVertical:10, width:200, textAlign:'center' }}
        keyboardType="numeric"
        value={calificacion}
        onChangeText={setCalificacion}
      />
      <Button title="Validar" onPress={validar} />
      <Text style={{ marginTop:20, fontSize:16 }}>{mensaje}</Text>
    </View>
  );
};

export default Ejercicio3;
