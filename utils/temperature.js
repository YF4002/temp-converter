const UNITS = {
    celcius : "°C",
    farenheit: "°F",
};

function convertTemperatureTo(temperature, unitTo){
    if(unitTo === UNITS.celcius){
        return(temperature -32) / 1.8;
    }
    else if (unitTo === UNITS.farenheit){
        return temperature * 1.8 + 32;
    }
    else{
        throw new Error("Invalid Unit");
    }
}

function getOppositeUnit(unit){
    return unit === UNITS.celcius? UNITS.farenheit : UNITS.celcius
}

function isIceTemperature(temperature, unit){
    if(unit === UNITS.celcius){
        return temperature <= 0;
    }
    else if (unit === UNITS.farenheit){
        return temperature <= 32;
    }
    else{
        throw new Error("Invalid Unit");
    }
}
export{UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature}