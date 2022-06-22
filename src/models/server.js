const  express = require('express');

const router = require('../routes/users.routes');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.loginRouter = '/api/login';

        this.routes();
        this.middlewares();

    }

    middlewares() {
        this.app.use( express.json() );
        this.app.use( express.static('public'));
        // this.app.post('/login', (req,res) => {
        //     console.log('aqi estoy' + req.body.username);
        // })
    }

    routes () {
        this.app.use(this.loginRouter,require('../routes/users.routes.js'));
        this.app.use('/createUser',router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`running app in ${this.port}`)
        });
    }

}

module.exports = Server;