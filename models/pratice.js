import { Schema, model } from "mongoose";

const PraticeSchema = new Schema({
  name: { type: String, required: true},
  prenom: {type: String, required: true},
  age: {type: Number, required: true}
  
});

export default model("Pratice", PraticeSchema);
