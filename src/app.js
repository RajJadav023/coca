const express=require("express")
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();
app.use(express.static("public"));
app.use(cors());
app.use(cookieParser());
app.use(express.json({limit:"16kb"}));     // data may come into diff formate
app.use(express.urlencoded())              //inside link %20 & come thn.. app understanad by urlencode
export { app }