const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const router = require('koa-router')({ prefix: "/api" });

const User = require('../dao/dbutil').User;
const timeutil = require('../utils/timeutil');
const ResponseObj = require('../utils/responseutil').ResponseObj;

router.post('/login', ctx => {
    const user = ctx.request.body;
    if (user.username === '123@qq.com' && user.password === '123') {
        const token = 'token admin';
        ctx.cookies.set('token', token);
        ctx.body = { ok: 1, token }
    } else {
        ctx.body = { ok: 0 }
    }
});

router.post('/register', async (ctx) => {
    const user = ctx.request.body;
    // { username: 'aaa', password: '123', email: '1617568049@qq.com' }
    let reg1 = /^[0-9a-zA-Z\u4e00-\u9fa5_]{4,16}$/;
    let reg2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg1.test(user.username)) {
        // 提示用户名格式不符
        let messageObj = new ResponseObj('error', '用户名应由数字字母下划线汉字组成的4~16位字符串', '');
        ctx.body = messageObj;
        return;
    }
    if (!reg2.test(user.email)) {
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
    // await (async () => {
        let res = await User.findAll({
            attributes: ['id'],
            where: {
                name: user.username
            }
        });
        console.log(res);
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
        User.create({ name: user.username, email: user.email, password: user.password, sign: 0, ctime: timeutil.getNow() }).then(() => {
            console.log(111)
        });
        let messageObj = new ResponseObj('ok', '请去邮箱激活', '');
        ctx.body = messageObj;
        return;

    // })().then((resolve) => {
        // console.log(resolve)
        // ctx.body = resolve;
        // return;
    // });
});

app.use(bodyparser());
app.use(router.routes());

app.listen(8080, () => console.log('api服务已启动'))