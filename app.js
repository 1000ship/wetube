//const express = require('express');
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import { localsMiddleware } from './middlewares';
import routes from './routes'
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import globalRouter from './routers/globalRouter'
const app = express();


app.use(helmet())
app.set('view engine', 'pug')
app.use("/uploads", express.static("uploads")); // uploads 로 들어가면 여기로 연결
app.use("/static", express.static("static"));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(localsMiddleware)

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export default app;


/*
// this is middle ware
// 아랫쪽으로 가기전에 미들웨어를 사용한다
// 순차적인것
const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
    // checking login session or something...
}
app.use(betweenHome)

const handleHome=(req, res) =>
    res.send('Hello from home')
app.get('/', betweenHome, handleHome);

const handleProfile = (req,res) =>
    res.send('You are on my profile')
app.get('/profile', handleProfile);
const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);
app.listen(PORT, handleListening);
*/
