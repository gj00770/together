import express from 'express';
import bodyParser from 'body-parser'
const app = express();
app.get('/', (req, res, next) => {
    res.send("Hello");
})

app.use(bodyParser.json());
console.log('body', bodyParser)

app.listen(5000, () => {
    console.log('server running on 5000')
})