const cors = require('cors');
const app = require('./app')
app.use(cors());
require('./db')
require('./app')

require('dotenv').config();

PORT = process.env.PORT
console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 

