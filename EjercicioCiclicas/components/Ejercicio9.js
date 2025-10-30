import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Ejercicio9 = () => {
  const [respuesta, setRespuesta] = useState('');
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const preguntar = () => {
    let continuar = respuesta.toUpperCase();
    if (continuar === 'N') {
      setMensaje(`Has decidido detenerte. Total intentos: ${contador}`);
    } else if (continuar === 'S') {
      setContador(contador + 1);
      setMensaje(`Intento ${contador + 1}: ¿Desea continuar?`);
    } else {
      setMensaje('Teclea S o N.');
    }
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text> ¿Desea continuar? (S/N)</Text>
      <TextInput style={{ borderWidth:1, width:100, textAlign:'center', margin:10 }} value={respuesta} onChangeText={setRespuesta} />
      <Button title="Responder" onPress={preguntar} />
      <Text style={{ marginTop:20 }}>{mensaje}</Text>
    </View>
  );
};

export default Ejercicio9;
