import db from '../db/dbInit'; 
import fetch from 'node-fetch';
import devKeys from '../config/dev';

class City{

    static async createCity(req){

        const {city_name} = req ;
        const queryText= 'INSERT INTO regions(city_name) VALUES($1)'; 
        const queryResut = await db.query(queryText, [city_name]);
        return queryResut;
    }

    static async allCities(){
        const queryText = 'SELECT city_name FROM regions'; 
        const querResult = await db.query(queryText); 
        return querResult;
    }


    static async retrieveByCity(city){  
        const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${devKeys.MY_API_KEY}&units=metric`)
        const data = await weatherAPI.json(); 
        return data;
    }
}


export default City;