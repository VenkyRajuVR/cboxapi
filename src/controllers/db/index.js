const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const mongod = new MongoMemoryServer({
  binary: { version: "4.2.8" }
});

(async () => {
  const uri = await mongod.getUri();

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("open", () => console.log("MongoDB: OK"));
})();

module.exports = mongoose;
