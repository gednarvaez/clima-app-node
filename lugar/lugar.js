
const axios = require("axios");


const getLugarLatLng = async (direccion)=>{
    let encodedURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
     
    if(resp.data.status == "ZERO_RESULTS"){
        throw new Error(`No hay resultados para la ${direccion}`);
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location
    
            // let formatted_address = resp.data.results[0].formatted_address;
            // let longitud = resp.data.results[0].geometry.location.lng;
            // let latitud = resp.data.results[0].geometry.location.lat;
            // console.log(JSON.stringify(formatted_address, undefined, 2))
            // console.log(JSON.stringify(longitud, undefined, 2))
            // console.log(JSON.stringify(latitud, undefined, 2))
      

         
    return{
        direccion : location.formatted_address, 
        lat: coordenadas.lat, 
        lng: coordenadas.lng,
    }
}
module.exports = {
    getLugarLatLng
}
