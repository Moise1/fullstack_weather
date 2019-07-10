import City from '../models/CityModel'; 

class Cities{

    static async createRegion(req, res){

        try{
            const {rows} = await City.createCity(req.body); 

            return res
            .status(201)
            .json({
                status: 201, 
                message: 'New city created!',
                data: rows
            })

        }catch(err){
            return res
            .status(500)
            .json({
                status: 500, 
                error: err.message
            })
        }

        
    }

    static async getAllCities(req, res){

        const {rows} = await City.allCities(); 

        return res 
        .status(200) 
        .json({
            status:200, 
            message: 'Here all the cities', 
            data: rows
        })
    }

    static async getCityName(req, res){

        const {city_name}  = req.params;   

        try{
            const result = await City.retrieveByCity(city_name); 

            if(!result.name) return res.status(404).json({
                status: 404, 
                error: `City ${city_name} is not found!` 
            }); 

            return res.status(200).json({
                status: 200, 
                message: 'Here you are!', 
                data: result
            })

        }catch(err){
            return res 
            .status(500) 
            .json({
                status: 500, 
                error: err.message
            })
        }

    }

}

export default Cities;