const mongoose = require("mongoose");

//configurando o mongoose
mongoose.Promise = global.Promise;
// coloque o nome do banco aqui localhost/{nomedobanco}
mongoose.connect("mongodb://localhost/petShop",{
    useMongoClient:true
}).then(()=>{
    console.log("mongoDB conectado...")
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB "+err);
})






