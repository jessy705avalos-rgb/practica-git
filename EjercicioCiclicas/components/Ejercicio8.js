import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Ejercicio8 = () => {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState('');

  const generarTabla = () => {
    let n = parseInt(numero);
    if (isNaN(n)) {
      setTabla('Ingresa un número válido.');
      return;
    }

    let texto = '';
    for (let i = 1; i <= 10; i++) {
      texto += `${n} x ${i} = ${n * i}\n`;
    }
    setTabla(texto);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <TextInput
        style={{ borderWidth:1, width:150, textAlign:'center', margin:10 }}
        placeholder="Número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Mostrar tabla" onPress={generarTabla} />
      <Text style={{ marginTop:20, textAlign:'center', whiteSpace:'pre-line' }}>{tabla}</Text>
    </View>
  );
};

export default Ejercicio8;
