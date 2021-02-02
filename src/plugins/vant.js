// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  CellGroup,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Popup ,
  Loading ,
  PullRefresh,
  
} from 'vant'
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
Vue.use(Loading);
Vue.use(PullRefresh);
