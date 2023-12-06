import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from "react-native";
import Title from './src/components/title';
import Corpo from './src/components/Corpo';
import { NavigationContainer } from '@react-navigation/native';
import Forms from './src/components/Forms';
import Forms2 from './src/components/Forms2';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Title2 from './src/components/title2';
import Corpo2 from './src/components/Corpo2';
import Title3 from './src/components/title3';
import Corpo3 from './src/components/Corpo3';


const Tab = createBottomTabNavigator();

function CalTemp(){
  return(
    <View style={styles.container}>
      <Title3/>
      <Corpo3/>
      <StatusBar style="auto" />
    </View>
  )
}

function CalImc(){
  return(
    <View style={styles.container}>
    <Title/>
    <Corpo/>
    <StatusBar style="auto" />
  </View>
  )
}

function CalGorjeta(){
  return(
    <View style={styles.container}>
    <Title2/>
    <Corpo2/>
    <StatusBar style="auto" />
  </View>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculo IMC" component={CalImc}/>
      <Tab.Screen name="Calculo de Gorjeta" component={CalGorjeta} />
      <Tab.Screen name="Conversor de Moeda" component={CalTemp} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
