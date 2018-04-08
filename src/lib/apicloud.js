/**
 * ApiCloud 基础类封装
 */
export default class ApiCloud {
  /**
   * 判断是否是apicloud环境
   */
  static isApiCloud() {
    if (typeof api !== 'undefined') {
      return true;
    }
    return false;
  }
  /**
   * 是否加载完成
   */
  static ready(callback) {
    if (ApiCloud.isApiCloud()) {
      api.ready(() => {
        callback();
      });
    } else {
      document.onload = callback;
    }
  }
}
