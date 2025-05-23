import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "../App.style";
import { Text, View, ImageBackground } from "react-native";
import hotBackground from "../assets/hot.png";
import coldBackground from "../assets/cold.png";
import { Input } from "../components/input/input";
import { useEffect, useState } from "react";
import { DisplayTemperature } from "../components/input/DisplayTemperature/DisplayTemperature";
import {UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature} from "../utils/temperature";
import { Login } from "./Login";

import { ButtonConvert } from "../components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0); //default state which is 0
  const [currentUnit, setCurrentUnit] = useState("°C"); //default unit will be celscius C
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);


  useEffect(() =>{   //toggle between cold and hot background based off temperature
    const isCold = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isCold? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature(){
    if (isNaN(inputValue)) {
      return "";
    } else{
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1)
    }
  }
  
  
  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature unit={oppositeUnit} temperature={getConvertedTemperature()}/>
            <Input 
            unit={currentUnit} 
            onChange={setInputValue} 
            defaultValue={0} 
            />
            <ButtonConvert 
              onPress={() =>{
                setCurrentUnit(oppositeUnit);
              }} 
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}