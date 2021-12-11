const mongoose = require('mongoose');
const URI = 'mongodb:'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

export default mongoose;