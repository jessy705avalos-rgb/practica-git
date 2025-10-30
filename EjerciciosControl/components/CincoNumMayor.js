import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const CalculaNumMayor = () => {
  const [num1, setNum1] = useState("");
  const [num2,setNum2]=useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4]=useState("");
  const [num5, setNum5]=useState("");
  const [resultado, setResultado]=useState(null);

  const calcular = () => {
    const valorNum1 = parseFloat(num1);
    const valorNum2=parseFloat(num2);
    const valorNum3=parseFloat(num3);
    const valorNum4=parseFloat(num4);
    const valorNum5=parseFloat(num5);
 
 if (valorNum1 >= valorNum2 && valorNum1 >= valorNum3 && valorNum1 >= valorNum4 && valorNum1 >= valorNum5) {
    
    setResultado(`El número mayor es: ${valorNum1}`);
    } else if (valorNum2 >= valorNum1 && valorNum2 >= valorNum3 && valorNum2 >= valorNum4 && valorNum2 >= valorNum5) {
      setResultado(`El número mayor es: ${valorNum2}`);
    } else if (valorNum3 >= valorNum1 && valorNum3 >= valorNum2 && valorNum3 >= valorNum4 && valorNum3 >= valorNum5) {
      setResultado(`El número mayor es: ${valorNum3}`);
    } else if (valorNum4 >= valorNum1 && valorNum4 >= valorNum2 && valorNum4 >= valorNum3 && valorNum4 >= valorNum5) {
      setResultado(`El número mayor es: ${valorNum4}`);
    } else {
      setResultado(`El número mayor es: ${valorNum5}`);
    }
  };


    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <TextInput placeholder="Numero 1" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum1}/>
          <TextInput placeholder="Numero 2" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum2}/>
          <TextInput placeholder="Numero 3" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum3}/>
          <TextInput placeholder="Numero 4" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum4}/>
          <TextInput placeholder="Numero 5" keyboardType="numeric" style={{ borderWidth:1, padding:8, margin:5, width:200 }} onChangeText={setNum5}/>

          
          <View style={{ flexDirection:'row', marginTop:10 }}>
            <Button title="CALCULA EL NUMERO MAYOR" onPress={() => calcular("")} />
          </View>
    
          {resultado !== null && <Text style={{ marginTop:10 }}>Resultado: {resultado}</Text>}
        </View>
      );
    }

export default CalculaNumMayor;