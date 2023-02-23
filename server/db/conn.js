const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB successfully connected");
  })
  .catch((err) => console.log(`connection unsuccessful ${err}`));
