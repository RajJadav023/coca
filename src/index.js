import { app } from "./app.js"
import connectDB from "./db/index.js"
import dotenv from 'dotenv'
dotenv.config({ path: '/.env' })

// we get one promise.
connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000 , ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
console.log("Mongodb connection error:" , error);
})




// git add .
// git commit -m "  "
// git push