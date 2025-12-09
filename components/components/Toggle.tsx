import { View, Text, Button } from 'react-native'
import { useState } from 'react';

const Toggle = () => {

    const [isOn, setIsOn] = useState(false);
  return (
    <View>
        <Text style={{fontSize: 20 , fontWeight: 'bold'}}>{isOn ? "On" : "Off"}</Text>
        <Button title={"toggle"} onPress={()=> setIsOn(!isOn)}/>
    </View>
  )
}

export default Toggle