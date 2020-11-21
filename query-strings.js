// Library: query string static path
// Description: for get query string from html path.
// Author: akarapongdev
// Version: 1.0
// Licenses: copyright hibizsfot devloper team

class QS {
  constructor() {
    this.params = new URLSearchParams(window.location.search);
    this.path = '';
  }
  setUTM = function (path = '') {
    let utm_object = {
      'utm_medium': '',
      'utm_source': '',
      'utm_campaign': ''
    };
    let params_path = '';
    let prefix = '&';
    for (let key in utm_object) {
      if (key === 'utm_medium') {
        prefix = '?';
      }
      params_path += prefix + key + '=' + this.params.get(key) || '';
    }
    return this.path = path + params_path;
  };
}