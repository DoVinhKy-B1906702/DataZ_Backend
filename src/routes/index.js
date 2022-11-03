
const tableRouter = require('./table.route')

function route(app) {
   
    app.use('/table', tableRouter);
    
}
module.exports = route;