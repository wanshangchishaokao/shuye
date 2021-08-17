/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jdu=1628438773439164217239; cud=37a86e623263859494600008b242c095; areaId=23; ipLoc-djd=23-2121-22466-0; shshshfpa=d6607832-0b76-b66d-336b-e66fa38d5b46-1628438775; shshshfpb=wL3P7Bv TMsTWGUAVHePuPg==; user-key=6d98a584-b805-4b85-aac1-ec0b4cb6456d; pinId=zNlTeW2xYWgvwmUrZgICSg; pin=jd_sQdZXHiiFNTn; unick=jd_sQdZXHiiFNTn; _tp=mW7qaxD2HcoCqSAV3YklFg==; _pst=jd_sQdZXHiiFNTn; PCSYCityID=CN_460000_460100_460105; unpl=V2_ZzNtbURVSkBwAENVehsPBGIERgkRX0BCcQsRUHMbXQ1gVkEPclRCFnUUR11nGVoUZwIZXktcRxdFCEdkexhdBGUKFlpEV3MlRQtGZHopXAJkChdfS1FFF3AKTlR8HF8FYQAQVXJnRBV8OHaB8qKEkeDbgOKX3OMlcAlHVXkRXgZiByJcclVCFHYARFV7HVQ1LG0TEEJQQBxwCk9SfRtZB28DFVhBV0UWdwB2VUsa; TrackID=1bV0JoMsyrSwG_JVOlKiQC0ix_rCFSN4rn24RDaLfg9X6irwcSySvMxKzi7siox3YDQI-6AHhmQHJtWXYYztD92E8lM9J20WP1UrfaAfy708; ceshi3.com=000; __jdv=76161171|j.tz1b.cn|t_1000385671_|tuiguang|738d494003b046eeb92f52f593096dbc|1629167363218; shshshfp=1b7597b17b5646d329147889fc0f9f90; cvt=16; __jda=122270672.1628438773439164217239.1628438773.1629167333.1629172620.17; __jdc=122270672; thor=7D3BECC3079F9ACAC1DD4BBE37AD2B73214F1306577B2A3513EA97F2C95603094CFF84FB758723DFDB89A8DBC14828D24ACBC2B4E2FEE522AD4F73DEF300B8129E13DB87DD73A0B498EEAB2A673EC5B59A614D9D64CCCBA4B8B7712721B51DC8F7E47F75B32E2B5D040A848F8E85AD208B020ACC6898A29E4E52EDE14F905818830D267F7C14D650F131C4E8D6C0F81D4904C3575833EE7F0B6BEF1D748F711F; __jdb=122270672.2.1628438773439164217239|17.1629172620; csn=3; 3AB9D23F7A4B3C9B=UTX74XTRYFKNSRPIWSI5FXJKFXTXLPS66BMMIMKOZHBSIYMDZY6POK4D3AWWSMQ2SRUWCMARGIQZISAHJT5GBQ2KPE',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
