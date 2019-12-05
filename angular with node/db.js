const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

module.exports = mongoose;