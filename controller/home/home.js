import BeautyModel from '../../models/beauty/beauty'
import BrandsModel from '../../models/brands/brands'
import DiscoverModel from '../../models/discover/discover'
import NavLinksModel from '../../models/navLinks/navLinks'
import ProductsModel from '../../models/products/products'

class Home{
    constructor(){}
    async getHomeData (req, res, next) {
        try {
            let data = {
              beauty: {
                bigBanner: {
                  productImg: '',
                  leftTitle: '',
                  rightTitle: ''
                },
                list: []
              },
              brands: [],
              navLinks: [],
              discover: {
                good: {},
                random: {}
              },
              code: 1,
              message: '获取数据成功'
            }
            let beauties = await BeautyModel.find();
            let beauty = beauties[0];
            let list = [];
            for (let id of beauty.idList) {
              list.push(await ProductsModel.findOne({id}));
            }
            beauty = JSON.parse(JSON.stringify(beauty));
            beauty.list = list;
            data.beauty = beauty;
            data.navLinks = await NavLinksModel.find();
            data.brands = await BrandsModel.find();

            const discovers = await DiscoverModel.find();
            const discover = discovers[0];

            let goodProducts = [];
            let randomProducts = [];
            for (let id of discover.good.idList) {
              goodProducts.push(await ProductsModel.find({id}));
            }
            for (let id of  discover.random.idList) {
              randomProducts.push(await ProductsModel.find({id}));
            }
            discover.good.goods = goodProducts;
            discover.random.goods = randomProducts;
            
            data.discover = discover;
            console.log('send..')
            res.send(data);
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