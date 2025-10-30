import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Bates = () => {
  const [numBates, setNumBates] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const cantidad = parseInt(numBates);

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Ingresa una cantidad válida");
      return;
    }

    const precio = cantidad >= 10 ? 100 : 108;
    const total = cantidad * precio;

    setResultado(`Precio por bate: $${precio} MXN\nTotal a pagar: $${total} MXN`);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <TextInput
        placeholder="Número de bates"
        keyboardType="numeric"
        style={{ borderWidth:1, padding:8, margin:5, width:200 }}
        onChangeText={setNumBates}
        value={numBates}
      />

      <View style={{ flexDirection:'row', marginTop:10 }}>
        <Button title="CALCULAR PRECIO" onPress={calcular} />
      </View>

      {resultado && <Text style={{ marginTop:10 }}>{resultado}</Text>}
    </View>
  );
};

export default Bates;
