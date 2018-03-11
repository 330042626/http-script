// 发送http请求
var request = require('request');
// 连接mongodb
var mongoose = require('mongoose');
// 用来解析html
var jsdom = require('jsdom');

function query() {

    var rendom = Math.random();
    request('http://api.spacloud.cn/api/sms/imagecode', {
        method: 'GET',
        headers: [{
            name: 'Content-Type',
            value: 'application/x-www-form-urlencoded',
        }, {
            name: 'User-Agent',
            value: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
        }]
    }, function(err, res, body) {
        console.log(body)
        console.log("路过1")
        // if (err) console.error(err);
        // var obj = JSON.parse(body).content;

    });
    //薪水25k-50k
    request('http://api.spacloud.cn/api/home/apply', {
        method: 'POST',
        form: {
            CompanyAddress: "不太清楚",
            CompanyName: "试试",
            Email: "1@1.com",
            Id: 0,
            ImageCode: "f3fvrk",
            Linkman: "不告诉你",
            Mobile: "13011111111",
            Uid: "6c7ae707-13e0-4f5d-ae21-c4a8b4b7ce9f"
        },
        headers: [{
            name: 'Content-Type',
            value: 'application/x-www-form-urlencoded',
        }, {
            name: 'User-Agent',
            value: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
        }]
    }, function(err, res, body) {
        console.log(body)
        console.log("路过")
        // if (err) console.error(err);
        // var obj = JSON.parse(body).content;

    });
}



query()