import express from "express";  
import path from 'path';
import regionRouter from './routes/regionRouter'

const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(regionRouter);



app.get("/", (req, res) =>{
    return res.status(200).json({
        status: 200,
        message: "Welcome to Weather Guru!"
    });
});


app.use("*", (req, res) =>{
    return res.status(405).json({
        status: 405,
        message: "Method Not Allowed!"
    });
});


const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`App listening on port ${port}`) );

export default app;