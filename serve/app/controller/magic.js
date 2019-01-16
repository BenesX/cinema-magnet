const Controller = require('egg').Controller;
const ejsexcel = require('ejsexcel');
const fs = require("fs");

class MagicController extends Controller {
    async taobaoToExcel () {
        const { ctx } = this;
        let excelData = {...JSON.parse(ctx.request.body.data)};
        let { addPermil, toFixed } = ctx.helper;

        excelData.keyword.hotList.map(item => {
            item.seIpvUvHits = addPermil(item.seIpvUvHits);
            item.clickHits = addPermil(item.clickHits);
            let clickRate = toFixed(item.clickRate * 100, 2);
            item.clickRate = clickRate ? (clickRate + '%') : '-';
            let payRate = toFixed(item.payRate * 100, 2);
            item.payRate = payRate ? (payRate + '%') : '-';
        });
        excelData.keyword.soarList.map(item => {
            let seRiseRate = addPermil(toFixed(item.seRiseRate * 100, 2));
            item.seRiseRate = seRiseRate ? (seRiseRate + '%') : '-';
            item.seIpvUvHits = addPermil(item.seIpvUvHits);
            let clickRate = toFixed(item.clickRate * 100, 2);
            item.clickRate = clickRate ? (clickRate + '%') : '-';
            item.clickHits = addPermil(item.clickHits);
            let payRate = toFixed(item.payRate * 100, 2);
            item.payRate = payRate ? (payRate + '%') : '-';
        });

        excelData.longtail.hotList.map(item => {
            item.seIpvUvHits = addPermil(item.seIpvUvHits);
            item.clickHits = addPermil(item.clickHits);
            let clickRate = toFixed(item.clickRate * 100, 2);
            item.clickRate = clickRate ? (clickRate + '%') : '-';
            let payRate = toFixed(item.payRate * 100, 2);
            item.payRate = payRate ? (payRate + '%') : '-';
        });
        excelData.longtail.soarList.map(item => {
            let seRiseRate = addPermil(toFixed(item.seRiseRate * 100, 2));
            item.seRiseRate = seRiseRate ? (seRiseRate + '%') : '-';
            item.seIpvUvHits = addPermil(item.seIpvUvHits);
            item.clickHits = addPermil(item.clickHits);
            let clickRate = toFixed(item.clickRate * 100, 2);
            item.clickRate = clickRate ? (clickRate + '%') : '-';
            let payRate = toFixed(item.payRate * 100, 2);
            item.payRate = payRate ? (payRate + '%') : '-';
        })

        excelData.brand.hotList.map(item => {
            item.relSeWordCnt = addPermil(item.relSeWordCnt);
            item.avgWordSeIpvUvHits = addPermil(item.avgWordSeIpvUvHits);
            item.avgWordClickHits = addPermil(item.avgWordClickHits);
            let avgWordClickRate = toFixed(item.avgWordClickRate * 100, 2);
            item.avgWordClickRate = avgWordClickRate ? (avgWordClickRate + '%') : '-';
            let avgWordPayRate = toFixed(item.avgWordPayRate * 100, 2);
            item.avgWordPayRate = avgWordPayRate ? (avgWordPayRate + '%') : '-';
        })
        excelData.brand.soarList.map(item => {
            let avgWordSeRiseRate = addPermil(toFixed(item.avgWordSeRiseRate * 100, 2));
            item.avgWordSeRiseRate = avgWordSeRiseRate ? (avgWordSeRiseRate + '%') : '-';
            item.relSeWordCnt = addPermil(item.relSeWordCnt);
            item.avgWordSeIpvUvHits = addPermil(item.avgWordSeIpvUvHits);
            item.avgWordClickHits = addPermil(item.avgWordClickHits);
            let avgWordPayRate = toFixed(item.avgWordPayRate * 100, 2);
            item.avgWordPayRate = avgWordPayRate ? (avgWordPayRate + '%') : '-';
        })

        excelData.core.hotList.map(item => {
            item.relSeWordCnt = addPermil(item.relSeWordCnt);
            item.avgWordSeIpvUvHits = addPermil(item.avgWordSeIpvUvHits);
            item.avgWordClickHits = addPermil(item.avgWordClickHits);
            let avgWordClickRate = toFixed(item.avgWordClickRate * 100, 2);
            item.avgWordClickRate = avgWordClickRate ? (avgWordClickRate + '%') : '-';
            let avgWordPayRate = toFixed(item.avgWordPayRate * 100, 2);
            item.avgWordPayRate = avgWordPayRate ? (avgWordPayRate + '%') : '-';
        })
        excelData.core.soarList.map(item => {
            let avgWordSeRiseRate = addPermil(toFixed(item.avgWordSeRiseRate * 100, 2));
            item.avgWordSeRiseRate = avgWordSeRiseRate ? (avgWordSeRiseRate + '%') : '-';
            item.relSeWordCnt = addPermil(item.relSeWordCnt);
            item.avgWordSeIpvUvHits = addPermil(item.avgWordSeIpvUvHits);
            item.avgWordClickHits = addPermil(item.avgWordClickHits);
            let avgWordPayRate = toFixed(item.avgWordPayRate * 100, 2);
            item.avgWordPayRate = avgWordPayRate ? (avgWordPayRate + '%') : '-';
        })

        excelData.decorate.hotList.map(item => {
            item.relSeWordCnt = addPermil(item.relSeWordCnt);
            item.avgWordSeIpvUvHits = addPermil(item.avgWordSeIpvUvHits);
            item.avgWordClickHits = addPermil(item.avgWordClickHits);
            let avgWordClickRate = toFixed(item.avgWordClickRate * 100, 2);
            item.avgWordClickRate = avgWordClickRate ? (avgWordClickRate + '%') : '-';
            let avgWordPayRate = toFixed(item.avgWordPayRate * 100, 2);
            item.avgWordPayRate = avgWordPayRate ? (avgWordPayRate + '%') : '-';
        })
        excelData.decorate.soarList.map(item => {
            let avgWordSeRiseRate = addPermil(toFixed(item.avgWordSeRiseRate * 100, 2));
            item.avgWordSeRiseRate = avgWordSeRiseRate ? (avgWordSeRiseRate + '%') : '-';
            item.relSeWordCnt = addPermil(item.relSeWordCnt);
            item.avgWordSeIpvUvHits = addPermil(item.avgWordSeIpvUvHits);
            item.avgWordClickHits = addPermil(item.avgWordClickHits);
            let avgWordPayRate = toFixed(item.avgWordPayRate * 100, 2);
            item.avgWordPayRate = avgWordPayRate ? (avgWordPayRate + '%') : '-';
        })

        ctx.set('Content-Type', 'application/vnd.openxmlformats');
        ctx.set("Content-Disposition", "attachment; filename=" + "Report.xlsx");
        excelData = await this.exportdata(excelData);
        this.ctx.body = excelData;
    }

    async exportdata(data) {
        const exlBuf = fs.readFileSync('app/public/taobao_rank.xlsx');
        const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data);       
        return exlBuf2;
    }
}

module.exports = MagicController;
