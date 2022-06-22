const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN_ATLAS
        // , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        //     useFindAndModify: false
        // } 
        );

        console.log('Base de Datos Online =) ...');

    } catch ( error ) {
        console.log( error );
        throw new Error('Error al iniciar la Base de Datos');
    }

}

module.exports = {
    dbConnection
};