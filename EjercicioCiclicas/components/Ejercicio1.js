import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Ejercicio1 = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const mostrarNumeros = () => {
    let texto = '';
    const n = parseInt(numero);

    if (!isNaN(n) && n > 1) {
      for (let i = 1; i < n; i++) {
        texto += i + ' ';
      }
      setResultado(texto);
    } else {
      setResultado('Por favor, ingresa un número mayor que 1.');
    }
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:18, marginBottom:10 }}>Ingresa un número:</Text>
      <TextInput
        style={{ borderWidth:1, padding:8, marginVertical:10, width:200, textAlign:'center' }}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Mostrar números" onPress={mostrarNumeros} />
      <Text style={{ marginTop:20, fontSize:16, textAlign:'center' }}>{resultado}</Text>
    </View>
  );
};

export default Ejercicio1;

