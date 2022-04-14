module.exports = (app) =>{
    
    const webformRoute = require('./webformRoute.js');
    const userRoute = require('./userRoute.js');

    app.use('/api/webform', webformRoute);
    app.use('/api/user', userRoute);

   
}