const User = require('../dao/dbutil').User;
const timeutil = require('../utils/timeutil');
const ResponseObj = require('../utils/responseutil').ResponseObj;
const router = require('koa-router')();
const emailutil = require('../utils/emailutil');
let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const url = require('url');

router.get('/active', async (ctx) => {
    const email = ctx.query.email;
    if (email === null) {
        return;
    }
    if (!regEmail.test(email)) {
        return;
    }
    let res = await User.findAll({
        attributes: ['id'],
        where: {
            email: email
        }
    });
    if (res === null) {
        return;
    }
    await User.update({
        sign: 1,
    }, {
        where: {
            email: email
        }
    });
    ctx.redirect('/login');
});

router.post('/', async (ctx) => {
    const user = ctx.request.body;
    let reg1 = /^[0-9a-zA-Z\u4e00-\u9fa5_]{4,16}$/;
    if (!reg1.test(user.username)) {
        // 提示用户名格式不符
        let messageObj = new ResponseObj('error', '用户名应由数字字母下划线汉字组成的4~16位字符串', '');
        ctx.body = messageObj;
        return;
    }
    if (!regEmail.test(user.email)) {
        // 提示邮箱格式不符
        let messageObj = new ResponseObj('error', '邮箱格式不符', '');
        ctx.body = messageObj;
        return;
    }
    if (user.password.length > 20 || user.password.length < 6) {
        // 提示密码位数
        let messageObj = new ResponseObj('error', '密码长度应为6~20位', '');
        ctx.body = messageObj;
        return;
    }
    let res = await User.findAll({
        attributes: ['id'],
        where: {
            name: user.username
        }
    });
    if (res !== null && res.length > 0) {
        // 提示用户名重复
        let messageObj = new ResponseObj('error', '用户名重复', '');
        ctx.body = messageObj;
        return;
    }
    res = await User.findAll({
        attributes: ['id'],
        where: {
            email: user.email
        }
    });
    if (res !== null && res.length > 0) {
        // 该邮箱已注册过
        let messageObj = new ResponseObj('error', '该邮箱已经注册', '');
        ctx.body = messageObj;
        return;
    }
    // 注册  插入一条数据
    User.create({ name: user.username, email: user.email, password: user.password, sign: 0,isadmin: 0, ctime: timeutil.getNow() }).then(() => {
    });
    let messageObj = new ResponseObj('ok', '请去邮箱激活', '');
    ctx.body = messageObj;
    (async () => {
        let html = `<p>点击链接激活<a href="http://blog.clovey.top/api/register/active?email=${user.email}">点击激活</a></p>`;
        emailutil.emailTo(user.email, 'PandaBlog激活邮件', null, html, () => { });
    })();
    return;
});

module.exports = router.routes();