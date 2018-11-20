/*
*
*
* */
module.exports = function() {

  var config          = new qiniu.conf.Config();
  // 空间对应的机房
  config.zone         = qiniu.zone.Zone_z0;
  // 上传是否使用cdn加速
  config.useCdnDomain = true;
  var accessKey       = 'X9r6Mva3dbmdpq2s3LZ5hEapuCMExmLw0FaFzRaz';
  var secretKey       = '76uuBG8AHZH7kioIrXBF3kWE4T6Hg0iVtGhE4ZYJ';
  var mac             = new qiniu.auth.digest.Mac(accessKey, secretKey);

  var options     = {
    scope: 'shizheng',
  };
  var putPolicy   = new qiniu.rs.PutPolicy(options);
  var uploadToken = putPolicy.uploadToken(mac);

  var localFile    = './cache/shareimg.jpg';
  var formUploader = new qiniu.form_up.FormUploader(config);
  var putExtra     = new qiniu.form_up.PutExtra();
  var key          = 'shareimg.jpg';

  // 文件上传
  formUploader.putFile(uploadToken, key, localFile, putExtra, function(
      respErr,
      respBody,
      respInfo,
  ) {
    if (respErr) {
      throw respErr;
    }
    if (respInfo.statusCode == 200) {
      console.log(respBody);
    }
    else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
  });

}