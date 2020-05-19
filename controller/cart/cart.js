import ProductsModel from '../../models/products/products';
import CartModel from '../../models/cart/cart';

class Cart {
  constructor(){}
  async addToCart(req, res, next){
    if (err) {
      res.send({
        status: 0,
        type: 'FORM_DATA_ERROR',
        message: '表单信息错误'
      })
      return
    }
    try {
      const {goods_id} = req.params;
      console.log(goods_id);

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
    const {cart_id} = req.params;
    try {
      const cartDetail = await CartModel.getCartById(cart_id);
      const productDetail = await ProductsModel.getProductById(cartDetail.product_id);
      res.send({
        code: '1',
        message: 'success',
        data: {...cartDetail, productDetail}
      });
    } catch (err) {

    }
  }
}

export default new Cart();