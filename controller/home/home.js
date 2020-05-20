import BeautyModel from '../../models/beauty/beauty'
import BrandsModel from '../../models/brands/brands'
import DiscoverModel from '../../models/discover/discover'
import NavLinksModel from '../../models/navLinks/navLinks'

class Home{
    constructor(){}
    async getHomeData (req, res, next) {
        try {
            let data = {
              beauty: {
                bigBanner: {
                  productImg: '',
                  leftTitle: '',
                  rightTitle: '',
                  id: '',
                },
                list: []
              },
              brand: [],
              navLinks: []
            }
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

export default new Home()