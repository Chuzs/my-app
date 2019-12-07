import { createStore } from 'redux';
import updateText from './reducers'

//生成store对象
const store = createStore(updateText);//内部会第一次调用reducer函数，得到初始state
export default store;