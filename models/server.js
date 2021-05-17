const express = require('express')
const cors = require('cors')

class Server{

constructor(){

    this.app = express()
    this.port= process.env.PORT;
    this.usersRoutesPath= '/routes';

    //Middlewares
    this.middelwares();

    //Routes app
    this.routes();
}


middelwares(){
    //cors
    this.app.use(cors());
    
    // Parser and read body
    this.app.use(express.json());


    //directory
    this.app.use(express.static('public'));
}

routes(){
    this.app.use(this.usersRoutesPath, require('../routes/user.routes'));

}

listen(){

    this.app.listen(this.port, ()=>{

        console.log('Server on port',this.port);
    });
}

}

module.exports=Server;