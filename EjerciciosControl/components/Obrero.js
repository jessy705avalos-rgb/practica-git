import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Obrero() {
  const [horas, setHoras] = useState(''); // horas trabajadas
  const [salarioNeto, setSalarioNeto] = useState(null); // salario final

  const calcularSalario = () => {
    // Convertimos las horas ingresadas a número
    const horasTrabajadas = parseFloat(horas);

    // Validación básica: si no es número o <= 0
    if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
      alert('Ingresa un número válido de horas');
      return;
    }

    const pagoPorHora = 50;
    let salarioBruto = horasTrabajadas * pagoPorHora;

    // Estructura de control: verificamos si salario bruto > 0
    if (salarioBruto > 0) {
      const compensacion = salarioBruto * 0.02; // 2%
      const descuentoIMSS = salarioBruto * 0.015; // 1.5%
      const descuentoISPT = salarioBruto * 0.012; // 1.2%

      const salarioFinal = salarioBruto + compensacion - descuentoIMSS - descuentoISPT;

      setSalarioNeto(salarioFinal.toFixed(2));
    } else {
      setSalarioNeto(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Salario Neto</Text>

      <Text>Ingresa horas trabajadas en la quincena:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 80"
        value={horas}
        onChangeText={setHoras}
      />

      <Button title="Calcular Salario Neto" onPress={calcularSalario} />

      {salarioNeto !== null && (
        <Text style={styles.result}>Salario Neto: ${salarioNeto} MXN</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
});
