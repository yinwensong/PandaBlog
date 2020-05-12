const User = require('../dao/dbutil').User;
const ResponseObj = require('../utils/responseutil').ResponseObj;
const router = require('koa-router')();

router.post('/',async (ctx) => {
    // console.log('say'+ctx.cookies.get('id'));
});


module.exports = router.routes();