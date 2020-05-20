import ProductsModel from '../../models/products/products'

class Products{
    constructor(){}
    async getproductdetailbyid (req, res, next) {
        try {
            const productsInfo = await ProductsModel.findOne();
            res.send(productsInfo);
        } catch (error) {
            console.log(error);
            res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
        }
    }
}

export default new Products()