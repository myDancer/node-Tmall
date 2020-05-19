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

productsSchema.static.getProductById = function (id) {
    return new Promise(async (resolve, reject) => {
		try{
			const productDetail = await this.find({id});
			resolve(productDetail);
		}catch(err){
			reject({
				name: 'ERROR_DATA',
				message: '查找数据失败',
			});
			console.error(err);
		}
	})
}

const Products = mongoose.model('Product', productsSchema);

// 尝试获取一条记录，如果没有，则向数据库增加一条记录
Products.findOne((err, data) => {
	if (!data) {
		Products.create(productsData);
	}
});

export default Products