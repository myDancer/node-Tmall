import ProductsModel from '../../models/products/products';
import CartModel from '../../models/cart/cart';

class Cart {
  constructor(){}
  async addToCart(req, res, next){
    try {
      let {color, number, productId, size} = req.body;
      await CartModel.create({color, number, productId, size});
      res.send({
        status: 1,
        type: 'Success',
        message: '添加购物车成功！',
      })
    } catch (err) {
      console.log(err.message, err);
				res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
				return
    }
  }
  async getCart (req, res, next) {
    try {
      let carts = await CartModel.find();
      carts = JSON.parse(JSON.stringify(carts));
      for (let item of carts) {
        let productDetail = await ProductsModel.findOne({id: item.productId});
        console.log(productDetail);
        item.productDetail = productDetail;
      }
      res.send({
        code: '1',
        message: 'success',
        data: carts
      });
    } catch (err) {

    }
  }
  async removeCartByIds (req, res, next) {
    try {
      let ids = req.body;
      for (let id of ids) {
        await CartModel.deleteOne({_id: id});
      }
      let carts = await CartModel.find();
      res.send({
        code: '1',
        message: 'success',
        data: carts
      });
    } catch (err) {

    }
  }
}

export default new Cart();