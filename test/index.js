// Generated by CoffeeScript 1.10.0
var Dama2, appID, appKey, assert, pwd, user;

assert = require('better-assert');

Dama2 = require('../index.js');

appID = '37277';

appKey = '2e71bd86b69e1082958187076620b591';

user = 'test';

pwd = 'test';

describe('打码兔，请先设置你的用户信息', function() {
  var dama2, requestID;
  dama2 = new Dama2(appID, appKey, user, pwd);
  requestID = '';
  it('注册', function(done) {
    this.timeout(10000);
    user = {
      user: "" + (Math.round(Math.random() * 10000)) + (Math.round(Math.random() * 1000)) + (Math.round(Math.random() * 1000)),
      pwd: 'test',
      qq: "" + (Math.round(Math.random() * 1000)) + (Math.round(Math.random() * 1000)) + (Math.round(Math.random() * 1000)),
      email: "" + (Math.round(Math.random() * 1000)) + (Math.round(Math.random() * 1000)) + (Math.round(Math.random() * 1000)) + "@163.com",
      tel: "18515" + (Math.round(Math.random() * 1000)) + "891"
    };
    return dama2.register(user, '372771', '1e71bd86b69e1082958187076620b591', function(error, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(result);
      return done();
    });
  });
  it('登录', function(done) {
    this.timeout(10000);
    return dama2.login(function(error, auth) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(auth);
      return done();
    });
  });
  it('获取用户信息', function(done) {
    this.timeout(10000);
    return dama2.readUserInfo(function(error, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(result);
      return done();
    });
  });
  it('获取余额', function(done) {
    this.timeout(10000);
    return dama2.getBalance(function(error, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(result);
      return done();
    });
  });
  it('打码文件', function(done) {
    this.timeout(10000);
    return dama2.decodeFile(44, __dirname + "/test.jpg", null, 30, function(error, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(result.id);
      return done();
    });
  });
  it('简单打码文件', function(done) {
    this.timeout(10000);
    return dama2.simpleDecodeFile(44, __dirname + "/test.jpg", function(error, id, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(id);
      assert(result === 'AEYAYY');
      return done();
    });
  });
  it('简单打码URL', function(done) {
    this.timeout(10000);
    return dama2.simpleDecode(44, 'http://reg.163.com/services/getimg?v=1430186526236&num=6&type=2&id=c9deebf3c01db3f2fb0de2d0edf263b9adf46920', '', function(error, id, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(id);
      assert(result);
      return done();
    });
  });
  it('打码URL', function(done) {
    this.timeout(10000);
    return dama2.decode(44, 'http://www.dama2.com/Index/imgVerify', null, null, null, null, function(error, result) {
      if (error) {
        console.log(error);
      }
      requestID = result.id;
      assert(error === null);
      assert(result);
      return done();
    });
  });
  it('获取打码结果', function(done) {
    this.timeout(10000);
    return dama2.getResult(requestID, function(error, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(result);
      return done();
    });
  });
  return it('报告错误', function(done) {
    this.timeout(10000);
    return dama2.reportError(requestID, function(error, result) {
      if (error) {
        console.log(error);
      }
      assert(error === null);
      assert(result);
      return done();
    });
  });
});