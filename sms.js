// 修改为您的apikey.可在官网（https://www.yunpian.com)登录后获取
const https = require('https'),
	rp = require('request-promise'),
	url = 'https://sms.yunpian.com/v2/sms/single_send.json',
	apikey = '*****************',//修改为您的apikey
	mobile = '18583763535',
	text = '【贝思科尔】您的验证码是5842';

async function sendSms(url, apikey, mobile, text) {
	let result = await rp({
		url,
		port: 443,
		method: 'POST',
		form: {
			apikey,
			mobile,
			text
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	});
	console.log(result);
}

sendSms(url, apikey, mobile, text);