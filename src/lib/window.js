import ApiCloud from './apicloud';

export default class WindowLib extends ApiCloud {
  static ready(func) {
    // 正式的apicloud环境
    if (process.env.NODE_ENV === 'development') {
      func();
    } else {
      window.apiready = func;
    }
  }
}
