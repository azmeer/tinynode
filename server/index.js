
const app = require('./app');

const PORT = process.env.TINYPORT || 3000; 

app.listen(PORT, () => {
  console.log(`tinynode server listening on port ${PORT}`);
});
