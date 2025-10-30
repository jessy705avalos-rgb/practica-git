import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const CalculaElMayor = () => {
  const [num1, setNum1] = useState("");
  const [num2,setNum2]=useState("");
  const [resultado, setResultado]=useState(null);

  const calcular = () => {
    const valorNum1 = parseFloat(num1);
    const valorNum2=parseFloat(num2);

 
 if (valorNum1 > valorNum2) {
    setResultado(`El número mayor es: ${valorNum1}`);
    } else {
      setResultado(`El número mayor es: ${valorNum2}`);
    }
  };


    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <TextInput placeholder="Numero 1" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum1}/>
          <TextInput placeholder="Numero 2" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum2}/>
        

          
          <View style={{ flexDirection:'row', marginTop:10 }}>
            <Button title="OBTENER EL NUMERO MAYOR DE LOS DOS" onPress={() => calcular("")} />
          </View>
    
          {resultado !== null && <Text style={{ marginTop:10 }}>Resultado: {resultado}</Text>}
        </View>
      );
    }

export default CalculaElMayor;