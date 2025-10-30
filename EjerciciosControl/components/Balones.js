import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Balones() {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularCosto = () => {
    const balones = parseInt(cantidad);

    if (isNaN(balones) || balones <= 0) {
      alert('Ingresa una cantidad válida');
      return;
    }

    let precioUnitario;

    // Usando if/else if para rangos
    if (balones > 15) {
      precioUnitario = 85;
    } else if (balones > 10) {
      precioUnitario = 92;
    } else {
      precioUnitario = 99;
    }

    const total = balones * precioUnitario;
    setResultado(`Precio por balón: $${precioUnitario} MXN\nTotal a pagar: $${total} MXN`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Costo de Balones</Text>

      <Text>Ingresa la cantidad de balones:</Text>
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
