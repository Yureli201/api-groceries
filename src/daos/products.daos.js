import Product from "../models/product.model.js";

const productsDAOs = {};

productsDAOs.getAll = async () => {
  const products = await Product.find();
  return products;
}

productsDAOs.getOne = async(barcode) => {
  const product = await Product.findOne({barcode:barcode});
  return product;
}

productsDAOs.insert = async(product) => {
  const productInsert = await Product.create(product);
  return productInsert;
}

productsDAOs.update = async(product, barcode) => {
  const productUpdate = await Product.findOneAndUpdate({barcode:barcode},product);
  return productUpdate;
}

productsDAOs.delete = async(barcode) => {
  const productDelete = await Product.findOneAndDelete({barcode:barcode});
  return productDelete;
}

export default productsDAOs;