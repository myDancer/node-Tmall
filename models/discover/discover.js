import mongoose from 'mongoose'
import discoverData from '../../initData/discover'

const Schema = mongoose.Schema;

const discoverSchema = new Schema({
  good: {
    title: String,
    titleImg: String,
    subtitle: String,
    idList: [],
  },
  random: {
    title: String,
    titleImg: String,
    subtitle: String,
    idList: [],
  }
})

const Discover = mongoose.model('Discover', discoverSchema);

Discover.findOne((err, data) => {
	if (!data) {
    Discover.create(discoverData);
	}
});
export default Discover