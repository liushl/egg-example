'use strict';
const Service = require('egg').Service;

class NewsService extends Service {
  async list(type = 'keji') {
    // // read config
    const { serverUrl, apiKey } = this.config.news;

    const result = await this.ctx.curl(`${serverUrl}?type=${type}&key=${apiKey}`, { dataType: 'json' });
    const { stat, data } = result.data.result;

    console.log('返回', JSON.stringify(stat));
    const newsList = [
      {
        uniquekey: '6c4caa0c3ba6e05e2a272892af43c00e',
        title: '杨幂的发际线再也回不去了么？网友吐槽像半秃',
        date: '2017-01-05 11:03',
        category: 'yule',
        author_name: '腾讯娱乐',
        url: 'http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju',
        thumbnail_pic_s: 'http://03.imgmini.eastday.com/mobile/20170105/20170105110355_806f4ed3fe71d04fa452783d6736a02b_1_mwpm_03200403.jpeg',
      },
    ];
    return stat === '1' ? data : newsList;
  }
}

module.exports = NewsService;
