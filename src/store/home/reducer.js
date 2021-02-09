import * as homeActionTypes from './action-type';

// 默认状态
const defaultState = {
  list: [],
};

// 用 reducer 来处理具体想要操作的状态，这个函数必须返回新的状态
export default (state = defaultState, action) => {
  switch (action.type) {
    case homeActionTypes.setList:
      state.list = action.value;
      break;
  }
  // 因为对象是引用数据类型，如果这里直接 return state，那么调用 state 的页面结构并不会及时响应渲染
  return {...state}; 
};
