const Router = require('koa-router')
const fs =require('fs')
const router = new Router()
router.get('*', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./adminDist/index.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('../adminDist/index.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})

// router.get('*', async (ctx, next) => {
//     var htmlFile = await (new Promise(function(resolve, reject){
//         fs.readFile('./static/index.html', (err, data) => {
//             if (err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     }))
//     ctx.type = 'html';
//     ctx.body = htmlFile;
//     await next()
// })
module.exports = router