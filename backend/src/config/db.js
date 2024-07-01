const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://schitemelar:V3Kk3fGUoAA2gn2l@cluster0.2eiygnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    console.log('database connected')
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}