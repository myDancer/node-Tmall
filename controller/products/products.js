import ProductsModel from '../../models/products/products'

class Products{
    constructor(){}
    async getProductDetailById (req, res, next) {
        try {
            let { id } = req.query;
            if (id) {
                const productsInfo = await ProductsModel.findOne({id});
                res.send(productsInfo);
            } else {
                res.send({
                    code: 0,
                    message: '缺少id'
                });
            }
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