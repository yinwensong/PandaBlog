const User = require('../dao/dbutil').User;
const ResponseObj = require('../utils/responseutil').ResponseObj;
const router = require('koa-router')();
const { sign } = require('jsonwebtoken');

router.post('/', async ctx => {
    const user = ctx.request.body;
    let res = await User.findOne({
        where: {
            email: user.email
        }
    });
    // 查询成功
    if (res !== null) {
        // 登录成功
        // 判断用户输入密码是否与数据库中密码相同
        if (user.password === res.password) {
            if (res.sign == 1) {
                let { id, name, isadmin } = res;
                let secret = res.password;
                // 存储用户名和id
                ctx.cookies.set('username', name);
                ctx.cookies.set('id', id);
                ctx.cookies.set('admin', isadmin);
                // 设置token jwt
                const token = sign({ id, name, isadmin }, secret, { expiresIn: '24h' });
                ctx.cookies.set('token', token);
                // 返回用户登录成功
                let messageObj = new ResponseObj('ok', '登录成功', res);
                ctx.body = messageObj;
                return;
            } else {
                // 邮箱未激活
                let messageObj = new ResponseObj('error', '登录邮箱未激活', '');
                ctx.body = messageObj;
                return;
            }
        } else {
            // 返回用户输入密码错误
            let messageObj = new ResponseObj('error', '输入密码错误', '');
            ctx.body = messageObj;
            return;
        }
    } else {
        // 查询失败
        let messageObj = new ResponseObj('error', '邮箱未注册或输入有误', '');
        ctx.body = messageObj;
        return;
    }
});

module.exports = router.routes();