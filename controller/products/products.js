import ProductsModel from '../../models/products/products'

class Products{
    constructor(){}
    async getProductFuzzySearchByName (req, res, next) {
        try {
            let query= new RegExp(req.query.name, 'i');//模糊查询参数
            const products = await ProductsModel.find({ $or: [{"name": query}] });
            console.log(products);
            res.send({
				code: 1,
                message: 'Success',
                data: products
			});
        } catch(error) {
            res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
        }
    }
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