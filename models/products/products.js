import mongoose from 'mongoose'
import productsData from '../../InitData/products'

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    beauty: {
        bigBanner: {
            productImg: String,
            leftTitle: String,
            rightTitle: String,
            id: String,
        },
        list: []
    },
    brand: [],
    navLinks: []
})

const Products = mongoose.model('Product', productsSchema);

Products.findOne((err, data) => {
    console.log(data);
	if (!data) {
		Products.create(productsData);
	}
});

export default Products