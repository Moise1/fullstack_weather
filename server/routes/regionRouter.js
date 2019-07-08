import express from "express";
import {
    Router,
    json
} from "express";
import Cities from "../controllers/citiesCtrl";


const regionRouter = express.Router();

regionRouter.use(json());

regionRouter.post("/api/v1/region", Cities.createRegion);
regionRouter.get("/api/v1/region",  Cities.getAllCities);
regionRouter.get("/api/v1/region/:city_name",  Cities.getCityName);


export default regionRouter;