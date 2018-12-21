'use strict';

const Service = require('egg').Service;
const qiniu = require('../extend/qiniu');

class BrandService extends Service {
  async upload(file) {
    const res = await qiniu.upload(file);
    return res;
  }
}

module.exports = BrandService;
