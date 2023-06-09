const app = require("./app");
const connectDatabse = require("./src/configs/db.config");
require("dotenv").config();
connectDatabse();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
