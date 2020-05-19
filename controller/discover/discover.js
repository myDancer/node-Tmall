import DiscoverModel from '../../models/discover/discover'

class Discover {
  constructor(){}
  async getdiscover (req, res, next) {
    try {
        const discoverInfo = await DiscoverModel.findOne();
        res.send(discoverInfo);
    } catch (error) {
        console.log(error);
        res.send({
          name: 'ERROR_DATA',
          message: '获取数据失败',
        });
      }
  }
}

export default new Discover();