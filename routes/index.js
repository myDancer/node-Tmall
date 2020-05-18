import product from './products'

export default app => {
  app.use('/product', product);
}
