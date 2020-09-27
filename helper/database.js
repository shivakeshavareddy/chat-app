const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(
        'mongodb://localhost:27018/chatApp', {
            useNewURLParser: true,
            useUnifiedTopology: true,
            family:4
    },
        () => console.log('DB Connected')
    )
}