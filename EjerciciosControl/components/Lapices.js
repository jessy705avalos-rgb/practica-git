import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Lapices() {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularCosto = () => {
    const bates = parseInt(cantidad);

    if (isNaN(bates) || bates <= 0) {
      alert('Ingresa un número válido de bates');
      return;
    }

    const precioBase = 250;
    const precioExtra = 230;
    let total;

    if (bates <= 10) {
      total = bates * precioBase;
    } else {
      const extra = bates - 10;
      total = (10 * precioBase) + (extra * precioExtra);
    }

    setResultado(`Número de bates comprados: ${bates}\nTotal a pagar: $${total} MXN`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bates</Text>

      <Text>Ingresa la cantidad de bates:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 12"
        value={cantidad}
        onChangeText={setCantidad}
      />

      <Button title="Calcular Costo" onPress={calcularCosto} />

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
    marginVertical:10,
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

