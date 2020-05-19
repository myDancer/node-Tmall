import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  goods_id: String,
  number: Number,
  size: String,
  color: {}
})
cartSchema.static.getCartById = async function (id) {
  try {
    const productDetail = await cartSchema.find({'id': id})
    return productDetail
  } catch (err) {

  }
}

const Cart = mongoose.model('Cart', cartSchema);

export default Cart