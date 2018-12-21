'use strict';

const Controller = require('egg').Controller;

class BrandController extends Controller {
  // 上传品牌
  async upload() {
    const { ctx } = this;
    console.log('ctx.request ', ctx.request);
    const file = ctx.request.file[0];
    if (!file) return ctx.throw(405);
    const res = await ctx.service.brand.upload(file);
    ctx.body = res;
    // ctx.body = 'hello upload';
  }
}

module.exports = BrandController;
