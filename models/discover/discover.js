import mongoose from 'mongoose'
import discoverData from '../../initData/discover'

const Schema = mongoose.Schema;

const discoverSchema = new Schema({
  good: {
    title: String,
    titleImg: String,
    subtitle: String,
    goods: [],
  },
  random: {
    title: String,
    titleImg: String,
    subtitle: String,
    goods: [],
  }
})

const Discover = mongoose.model('Discover', discoverSchema);

Discover.findOne((err, data) => {
	if (!data) {
    console.log(discoverData);
    Discover.create(discoverData);
	}
});
export default Discover