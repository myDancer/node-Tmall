import mongoose from 'mongoose'
import beautyData from '../../initData/beauty'

const Schema = mongoose.Schema;

const beautySchema = new Schema({
  bigBanner: {
    productImg: String,
    leftTitle: String,
    rightTitle: String,
    rightSubTitle: String,
    id: String
  },
  idList: []
})

const Beauty = mongoose.model('Beauty', beautySchema);

// 尝试获取一条记录，如果没有，则向数据库初始化增加一条记录
Beauty.findOne((err, data) => {
	if (!data) {
		Beauty.create(beautyData)
	}
});

export default Beauty