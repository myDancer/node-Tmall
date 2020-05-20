import mongoose from 'mongoose'
import navLinksData from '../../initData/navLinks'

const Schema = mongoose.Schema;

const navLinksSchema = new Schema({
	title: String,
  subtitle: String,
  css: String,
  links: []
})


const NavLinks = mongoose.model('NavLink', navLinksSchema);

// 尝试获取一条记录，如果没有，则向数据库初始化增加一条记录
NavLinks.findOne((err, data) => {
	if (!data) {
		for (let item of navLinksData) {
			NavLinks.create(item);
		}
	}
});

export default NavLinks