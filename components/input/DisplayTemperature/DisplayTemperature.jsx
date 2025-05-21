import{Text} from "react-native";
import {s} from"./DisplayTemperature.style";
export function DisplayTemperature({temperature, unit}){
    return( //displays the format of temperatures by numbers 0 : unit °C
    <Text style={s.temperatureTxt}>
        {temperature} {unit}  
        </Text>
    );
}