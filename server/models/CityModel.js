import db from '../db/dbInit'; 
import fetch from 'node-fetch';

class City{

    static async createCity(req){
        const {city_name, country_name} = req;
        
        const newRegion = {
            city_name,
            country_name
        }

        const values = [
            newRegion.city_name, 
            newRegion.country_name
        ]

        const queryText= 'INSERT INTO regions(city_name, country_name) VALUES($1, $2) RETURNING *'; 
        const queryResut = await db.query(queryText, values);
        return queryResut;
    }

    static async allCities(){
        const queryText = 'SELECT city_name FROM regions'; 
        const querResult = await db.query(queryText); 
        return querResult;
    }


    static async retrieveByCity(city){  
        const myAPIKey ='f70b256f4890694176093c3efac55ce4'; 
        const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPIKey}&units=metric`)
        const data = await weatherAPI.json(); 
        return data;

    }
}


export default City;