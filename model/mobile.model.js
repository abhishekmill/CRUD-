import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timeseries: true,
  }
);

const mobileModel = mongoose.model("mobile", mobileSchema);
export default mobileModel;
