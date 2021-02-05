// 默认状态
const defaultState = {
  title: 'BBBBB',
  count: 0
};

// 用 reducer 来处理具体想要操作的状态，这个函数必须返回新的状态
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'COUNT_ADD':
      console.log('go to bbb')
      break;
  }
  // 因为对象是引用数据类型，如果这里直接 return state，那么调用 state 的页面结构并不会及时响应渲染
  return {...state}; 
};
