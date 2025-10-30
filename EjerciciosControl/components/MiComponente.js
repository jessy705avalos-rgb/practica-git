import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MiComponente() {
  const [mensaje, setMensaje] = useState('');
  const [contador, setContador] = useState(0);
  const [listaMostrada, setListaMostrada] = useState([]);

  const frutas = ['🍎 Manzana', '🍌 Plátano', '🍊 Naranja', '🍇 Uvas', '🍓 Fresa'];

  // Estructura de control: if/else con múltiples condiciones
  const manejarClick = () => {
    if (contador < 3) {
      setMensaje('Sigue adelante ✅');
    } else if (contador >= 3 && contador < 6) {
      setMensaje('¡Vas por la mitad! 🔥');
    } else if (contador >= 6 && contador < 10) {
      setMensaje('¡Casi llegas! 💪');
    } else {
      setMensaje('¡Llegaste al límite! 🎉');
    }
    setContador(contador + 1);
  };

  // Ciclo: Generar lista filtrada con for
  const generarLista = () => {
    let nuevaLista = [];
    
    // Ciclo for para filtrar frutas según el contador
    for (let i = 0; i < frutas.length; i++) {
      if (i < contador) {
        nuevaLista.push(frutas[i]);
      }
    }
    
    setListaMostrada(nuevaLista);
  };

  // Ciclo: Calcular total de items con while
  const contarItems = () => {
    let total = 0;
    let i = 0;
    
    while (i < listaMostrada.length) {
      total++;
      i++;
    }
    
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi App con Estructuras</Text>
      
      <Button title="Aumentar Contador" onPress={manejarClick} />
      <Text style={styles.mensaje}>{mensaje}</Text>
      <Text style={styles.contador}>Contador: {contador}</Text>

      <Button title="Generar Lista Filtrada" onPress={generarLista} />
      <Text style={styles.info}>Items mostrados: {contarItems()}</Text>

      <Text style={styles.subtitulo}>Todas las Frutas:</Text>
      {frutas.map((fruta, index) => (
        <Text key={index} style={styles.item}>• {fruta}</Text>
      ))}

      <Text style={styles.subtitulo}>Frutas Desbloqueadas:</Text>
      {listaMostrada.length > 0 ? (
        listaMostrada.map((fruta, index) => (
          <Text key={index} style={styles.itemDestacado}>✓ {fruta}</Text>
        ))
      ) : (
        <Text style={styles.item}>Presiona "Generar Lista"</Text>
      )}

      <Text style={styles.subtitulo}>Números Pares del 1 al 10:</Text>
      {[...Array(10)].map((_, i) => {
        const numero = i + 1;
        if (numero % 2 === 0) {
          return <Text key={i} style={styles.itemPar}>{numero} (Par)</Text>;
        }
        return null;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  mensaje: { fontSize: 18, marginVertical: 10, color: '#007AFF', fontWeight: 'bold' },
  contador: { fontSize: 18, marginBottom: 20, fontWeight: 'bold', color: '#FF6B6B' },
  info: { fontSize: 16, marginVertical: 10, color: '#666' },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 5, color: '#333' },
  item: { fontSize: 16, marginLeft: 10, marginBottom: 3, color: '#666' },
  itemDestacado: { fontSize: 16, marginLeft: 10, marginBottom: 3, color: '#4CAF50', fontWeight: 'bold' },
  itemPar: { fontSize: 16, marginLeft: 10, marginBottom: 3, color: '#9C27B0', fontWeight: 'bold' }
});

