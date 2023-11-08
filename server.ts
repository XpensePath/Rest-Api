const app = require('./app');
const v1BankAccounts = require('./app/bankAccounts/entryPoints/bankAccounts.router');
const v1Categories = require('./app/bankAccounts/entryPoints/categories.router');

const port = process.env.PORT || '3000';

app.use('/api/v1', v1BankAccounts);
app.use('/api/v1', v1Categories);

app.listen(port);
