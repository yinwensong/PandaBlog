const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const ResponseObj = require('../utils/responseutil').ResponseObj;
let router = require('koa-router')({ prefix: "/api" });
const jwt = require('jsonwebtoken');
const User = require('../dao/dbutil').User;
const timeutil = require('../utils/timeutil');

const login = require('./login.js');
const register = require('./register.js');
const say = require('./say.js');

router.post('/service/*', async (ctx, next) => {
    let token = ctx.cookies.get('token');

    let id = ctx.cookies.get('id');

    if (id) {
        let res = await User.findOne({
            where: {
                id: id
            }
        });
        if (res !== null) {
            jwt.verify(token, res.password, (err, decoded) => {
                if (decoded) {
                    console.log(decoded)
                    if (decoded.id === id && timeutil.getNow() < decoded.exp) {
                        next();
                    } else {
                        let messageObj = new ResponseObj('login', '尚未登录', '');
                        ctx.body = messageObj;
                        return;
                    }
                } else {

                    let messageObj = new ResponseObj('login', '尚未登录', '');
                    ctx.body = messageObj;
                    return;
                }
            });
        }
    } else {
        let messageObj = new ResponseObj('login', '尚未登录', '');
        ctx.body = messageObj;
        return;
    }
});

router.use('/login', login);
router.use('/register', register);
router.use('/service/say', say);



app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => console.log('api服务已启动'));