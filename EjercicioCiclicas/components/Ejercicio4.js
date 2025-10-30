import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio4() {
  const [alumnoIndex, setAlumnoIndex] = useState(0);
  const [calIndex, setCalIndex] = useState(0);
  const [input, setInput] = useState('');
  const [suma, setSuma] = useState(0);
  const [promedios, setPromedios] = useState([]);

  const alumnosTotales = 5;
  const calificacionesPorAlumno = 3;

  const agregarCalificacion = () => {
    const cal = Number(input);
    if (cal < 0 || cal > 10 || isNaN(cal)) {
      alert('Ingresa una calificación válida (0-10)');
      return;
    }

    setSuma(suma + cal);
    setInput('');

    if (calIndex + 1 === calificacionesPorAlumno) {
      // Calcula promedio del alumno
      const promedio = (suma + cal) / calificacionesPorAlumno;
      setPromedios([...promedios, promedio]);

      if (alumnoIndex + 1 < alumnosTotales) {
        setAlumnoIndex(alumnoIndex + 1);
        setCalIndex(0);
        setSuma(0);
      } else {
        // Todos los alumnos ingresados
        setAlumnoIndex(alumnosTotales);
      }
    } else {
      setCalIndex(calIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {alumnoIndex < alumnosTotales ? (
        <>
          <Text style={styles.text}>
            Alumno {alumnoIndex + 1}, calificación {calIndex + 1}:
          </Text>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            keyboardType="numeric"
          />
          <Button title="Agregar" onPress={agregarCalificacion} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Promedios de los alumnos:</Text>
          {promedios.map((prom, i) => (
            <Text key={i} style={styles.text}>
              Alumno {i + 1}: {prom.toFixed(2)}
            </Text>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', width: 100, height: 40, marginBottom: 10, textAlign: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});

