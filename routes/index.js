import product from './products'
import cart from './cart'
import home from './home'

export default app => {
  app.use('/product', product);
  app.use('/cart', cart);
  app.use('/home', home);
}
