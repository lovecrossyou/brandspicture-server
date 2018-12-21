'use strict';

const Controller = require('egg').Controller;

class BrandController extends Controller {
  // 上传品牌
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    if (!file) return ctx.throw(404);
    const res = await ctx.service.brand.upload(file);
    ctx.body = res;
  }
}

module.exports = BrandController;
