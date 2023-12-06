import React, {useState} from "react"
import { TextInput, View, Text, Button} from "react-native";
import Resultimc from "../Resultimc";
export default function Forms(){
    
    const[height, setHeight] = useState(null)
    const[weight, setWeight] = useState(null)
    const[messageimc, setMessageimc] = useState("Preencha o peso e a altura")
    const[imc, setImc] = useState(null)
    const[TextButton,setTextButton] = useState("Calcular")
    
    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    
    function validacao(){
        if(weight!= null && height!= null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageimc("Seu Peso é igual a:")
        setTextButton("Calcular Novamente")
        return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageimc("Preencha o peso e a altura")
    }

    return(
        <View>
             <View>

                <Text>Altura</Text>
                <TextInput onChangeText={setHeight} 
                value={height}
                placeholder="Ex:1.60"
                keyboardType="numeric"></TextInput>

                <Text>Peso</Text>
                <TextInput onChangeText={setWeight}
                value={weight}
                placeholder="Ex:75.500"
                keyboardType="numeric"></TextInput>

                <Button onPress={()=>validacao()} title={TextButton}/>

             </View>
             <Resultimc messageResultimc={messageimc} Resultimc={imc}/>
        </View>
    );
}