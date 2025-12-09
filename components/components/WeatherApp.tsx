import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const WeatherApp = () => {
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 20 , fontWeight: 'bold' , padding: 10}}>Weather App</Text>
      <TextInput placeholder='Enter City' style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10}}/>
      <Text style={{fontSize: 16 , padding: 10}}>Temperature: --°C Clear</Text>
      <Button title='Get Weather' onPress={() => {}} />
    </View>
  )
}

export default WeatherApp