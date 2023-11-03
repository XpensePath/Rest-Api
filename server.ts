const app = require('./app');

const port = process.env.PORT || '3000';
// app.get("/", (req: any, res: any) => {
//     res.send("<h2>It's Working!</h2>");
// });

app.listen(port);
