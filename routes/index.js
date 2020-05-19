import product from './products'
import cart from './cart'

export default app => {
  app.use('/product', product);
  app.use('/cart', cart);
}
