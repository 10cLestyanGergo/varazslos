import express from 'express';
import varazsloRoutes from './routes/varazsloRoutes.js'

const app =express();

app.use(express.json())
app.use('/',varazsloRoutes)

app.listen(3000,()=>{
    console.log('Server runs on port 3000')
});