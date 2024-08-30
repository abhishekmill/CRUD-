import mobileModel from "../model/mobile.model.js";

const run = (req, res) => {
  res.send("controller test ! is working");
};

const create = async (req, res) => {
  try {
    // const { name, brand, price } = req.body;
    const mobile = await mobileModel.create(req.body);
    res.status(200).json(mobile);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    // const { name, brand, price } = req.body;
    const mobile = await mobileModel.find({});
    res.status(200).json(mobile);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    // const { name, brand, price } = req.body;
    const { id } = req.params;
    const mobile = await mobileModel.findById(id);
    res.status(200).json(mobile);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    // const  { name, brand, price } = req.body;
    const { id } = req.params;

    const mobile = await mobileModel.findByIdAndUpdate(id, req.body);
    const updatedMobile = await mobileModel.findById(id);

    res.status(200).json(updatedMobile);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
    console.log(error);
  }
};


const deleteById = async (req, res) => {
  try {
    // const  { name, brand, price } = req.body;
    const { id } = req.params;

    const mobile = await mobileModel.findByIdAndDelete(id);
    

    res.status(200).json(mobile);
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
    console.log(error);
  }
};

export { run, create, getAll, getById, update, deleteById };
