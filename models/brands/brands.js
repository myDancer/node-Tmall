import mongoose from 'mongoose'
import brandsData from '../../initData/brand'

const Schema = mongoose.Schema;

const brandsSchema = new Schema({
  
})

const Brands = mongoose.model('Brands', brandsSchema);

// 尝试获取一条记录，如果没有，则向数据库初始化增加一条记录
Brands.findOne((err, data) => {
	if (!data) {
		for (let item of brandsData) {
			Brands.create(item);
		}
	}
});

export default Brands