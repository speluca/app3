import React, {useState} from "react"
import { TextInput, View, Text, Button} from "react-native";
import Resultimc from "../Resultimc";
import ResultConv from "../ResultConv";
export default function Forms3(){
    
    const[dinheiro, setDinheiro] = useState(null)
    const[message, setMessage] = useState("Preencha o Valor")
    const[messagedolar, setMessagedolar] = useState(null)
    const[messageeuro, setMessageeuro] = useState(null)
    const[messageiene,setMessageiene]= useState(null)
    
    const[dolar, setDolar] = useState(null)
    const[euro, setEuro] = useState(null)
    const[iene, setIene] = useState(null)

    const[TextButton,setTextButton] = useState("Converter")
    
    function Conversor(){
        return setDolar((dinheiro*4.90).toFixed(2)), setEuro((dinheiro*5.29).toFixed(2)), 
        setIene((dinheiro*0.033).toFixed(2))
    }
    
    function validacao(){
        if(dinheiro!= null){
        Conversor()
        setDinheiro(null)
        setMessage(null)
        setMessagedolar("Em Dolar, a moeda equivale a:")
        setMessageeuro("Em Euro, a moeda equivale a:")
        setMessageiene("Em Iene, a moeda equivale a: ")
        setTextButton("Converter Novamente")
        return
        }
        setMessage("Preencha o Valor")
        setDolar(null)
        setEuro(null)
        setIene(null)
        setTextButton("Converter")
        setMessagedolar(null)
        setMessageeuro(null)
        setMessageiene(null)
    }

    return(
        <View>
             <View>

                <Text>Valor em Reais</Text>
                <TextInput onChangeText={setDinheiro} 
                value={dinheiro}
                placeholder="Ex:1000"
                keyboardType="numeric"></TextInput>


                <Button onPress={()=>validacao()} title={TextButton}/>

             </View>
             <Resultimc messageResultimc={messagedolar} Resultimc={dolar}/>
             <Resultimc messageResultimc={messageeuro} Resultimc={euro}/>
             <Resultimc messageResultimc={messageiene} Resultimc={iene}/>
        </View>
        
    );
}