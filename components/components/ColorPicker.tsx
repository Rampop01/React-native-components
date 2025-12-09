import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';

const ColorPicker = () => {
const [color, setColor] = useState('blue');
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', "teal"];
  return (
    
    <View style={{padding: 20 , backgroundColor: color, height: '100%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' , textTransform: 'uppercase', color: 'white'}}>Select a Color</Text>
        <View >
            {/* <View style={{flexDirection: 'row'}}>
              {colors.map((color) => (<Pressable key={color} onPress={()=> setColor(color)} style={{backgroundColor: color, padding: 10, margin: 5 , height: 50, width: 50, borderRadius: 50, borderColor: "black"}}>{color}</Pressable> ))}
            </View> */}

            <FlatList 
              data={colors}
              keyExtractor={(index) => index.toString()}
              renderItem={({item}) => (<Pressable onPress={()=> setColor(item)} style={{backgroundColor: item, padding: 10, margin: 5 , height: 50, width: 50, borderRadius: 50, borderColor: "black"}}></Pressable>)}
      horizontal={true}
     />
        </View>
    </View>
  )
}

{/*   */}

export default ColorPicker