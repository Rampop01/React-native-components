import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

interface WeatherData {
    [key: string]: string;
}
export default function () {
    const [city, setCity] = React.useState('');
    const [temperature, setTemperature] = React.useState('--');

const weatherData = {
  London: "20°C, Clear",
  Paris: "22°C, Sunny",
  NewYork: "18°C, Cloudy",
};


const getTemperature = () => {
    setTemperature(weatherData[city] || 'Data not available');
}

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20 , fontWeight: 'bold' , padding: 10}}>Weather App</Text>
      <TextInput placeholder='Enter City' onChangeText={setCity} style={{borderWidth: 1, margin: 10, padding: 5}}/>
      {temperature? <Text style={{fontSize: 18 , fontWeight: 'bold' , padding: 10}}>Temperature: {temperature}</Text> : null}
      <Button title='Get Weather' onPress={getTemperature}/>
    </View>
  )
}


const styles = StyleSheet.create({ 
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    }}
   
)