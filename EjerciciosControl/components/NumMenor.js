import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function NumMenor() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularMenor = () => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Ingresa números válidos');
      return;
    }

    if (n1 < n2) {
      setResultado(`El menor número es: ${n1}`);
    } else if (n2 < n1) {
      setResultado(`El menor número es: ${n2}`);
    } else {
      setResultado(`Ambos números son iguales: ${n1}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encuentra el Número Menor</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="Calcular Menor" onPress={calcularMenor} />

      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
  },
  title: {
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'center',
  },
  input: {
    borderWidth:1,
    borderColor:'#ccc',
    padding:10,
    marginVertical:5,
    width:'80%',
    borderRadius:5,
  },
  result: {
    marginTop:20,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  }
});
