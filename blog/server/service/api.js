const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const ResponseObj = require('../utils/responseutil').ResponseObj;
let router = require('koa-router')({prefix:"/api"});

const login = require('./login.js');
const register = require('./register.js');
const say = require('./say.js');

router.post('/service/*',(ctx,next) => {
    let id =  ctx.cookies.get('id');
    if(id){
        next();
    }else{
        // ctx.redirect('/login');
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