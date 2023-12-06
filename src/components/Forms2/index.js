import React, {useState} from "react"
import { TextInput, View, Text, Button} from "react-native";
import Resultgorj from "../ResultGorj";
export default function Forms2(){
    
    const[valor, setValor] = useState(null)
    const[porc, setPorc] = useState(null)
    const[messagegorj, setMessagegorj] = useState("Preencha com Dinheiro e Porcentagem")
    const[gorj, setgorj] = useState(null)
    const[TextButton,setTextButton] = useState("Calcular")
    
    function gorjCalculator(){
        return setgorj((porc*valor/100).toFixed(2))

    }
    
    function validacao2(){
        if(porc!= null && valor!= null){
        gorjCalculator()
        setValor(null)
        setPorc(null)
        setMessagegorj("O Valor da Gorjeta é:")
        setTextButton("Calcular Novamente")
        return
        }
        setgorj(null)
        setTextButton("Calcular")
        setMessagegorj("Preencha com Dinheiro e Porcentagem")
    }

    return(
        <View>
             <View>

                <Text>Dinheiro</Text>
                <TextInput onChangeText={setValor} 
                value={valor}
                placeholder="Ex:100"
                keyboardType="numeric"></TextInput>

                <Text>Porcentagem da Gorjeta</Text>
                <TextInput onChangeText={setPorc}
                value={porc}
                placeholder="Ex:3"
                keyboardType="numeric"></TextInput>

                <Button onPress={()=>validacao2()} title={TextButton}/>

             </View>
             <Resultgorj messageResultgorj={messagegorj} Resultgorj={gorj}/>
        </View>
    );
}