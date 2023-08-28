const express = require("express");
const testClass = new (require('./test'));


const app = express();
app.set('port', 3000);
app.use(express.json());

app.get('/test', [
    async (res, req, next) => {
        const data = await testClass.testFunc();
        res.testData = data;
        next();
    },
    (res, req, next) => {
        req.status(200).send(res.testData);
    }
]);

app.listen(app.get('port'), ()=>{
    console.log(`Server running at port ${app.get('port')}`);
});
