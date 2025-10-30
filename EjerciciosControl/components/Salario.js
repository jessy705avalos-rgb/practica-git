import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Salario() {
  const [horas, setHoras] = useState('');
  const [salario, setSalario] = useState(null);

  const calcularSalario = () => {
    const h = parseFloat(horas);

    if (isNaN(h) || h <= 0) {
      alert('Ingresa un número válido de horas');
      return;
    }

    const pagoNormal = 14;
    const pagoExtra = 26;
    let salarioFinal;

    if (h <= 40) {
      salarioFinal = h * pagoNormal;
    } else {
      const horasExtra = h - 40;
      salarioFinal = (40 * pagoNormal) + (horasExtra * pagoExtra);
    }

    setSalario(`El salario a pagar es: $${salarioFinal.toFixed(2)} MXN`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Salario</Text>

      <Text>Ingresa las horas trabajadas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 45"
        value={horas}
        onChangeText={setHoras}
      />

      <Button title="Calcular Salario" onPress={calcularSalario} />

      {salario && <Text style={styles.result}>{salario}</Text>}
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
