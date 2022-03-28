var day = new Date().getDay();
var hour = new Date().getHours();
function test(req, res, next) {
    if (day >=1 && day <= 5 && hour >= 9 && hour <= 17) {
        return next();
    } else
        res.render('error');
};
module.exports= test
