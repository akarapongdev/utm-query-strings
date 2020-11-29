// Library: query string static path
// Description: for get query string from html path.
// Author: akarapongdev
// Version: 1.1
// Licenses: copyright hibizsfot devloper team

class QS {
  constructor() {
    this.params = new URLSearchParams(window.location.search);
    this.path = '';
  }
  setUTM = function (path = '', lang = '') {
    let utm_object = { 'utm_medium': '', 'utm_source': '', 'utm_campaign': ''};
    let params_path = '';
    let prefix = '&';
    let lang_params = '';
    for (let key in utm_object) {
      if (key === 'utm_medium') {
        prefix = '';
      } else {
        prefix = '&';
      }
      if (lang === '') {
        lang_params = '';
      } else {
        lang_params = 'lang=' + lang + '&';
      }
      params_path += prefix + key + '=' + this.params.get(key) || '';
    }
    return this.path = path + '?' + lang_params + params_path;
  };

  setLanguage = function (path, lang = '') {
    if (!path) return false;
    this.path = path;
    let lang_params = '';
    if (lang === '') {
      lang_params = '';
    } else {
      lang_params = 'lang=' + lang;
    }
    return this.path + '?' + lang_params;
  }
}
