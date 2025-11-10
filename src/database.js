import mongoose from "mongoose";

mongoose
  .connect(
    //"mongodb+srv://Yureli:mayor7mtz1@clusterprueba.1lbdvz2.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=ClusterPrueba"
    "mongodb://localhost:27017/groceries_db"
  ) 
  .then((db) => console.log("DB connected"))
  .catch((err) => console.log(err));

export default mongoose;