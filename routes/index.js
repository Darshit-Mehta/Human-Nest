var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Human World' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Hello Human World' });
});

router.get('/home',function(req,res,next)
{
  res.render('home');
});
router.get('/about',function(req,res,next)
{
  res.render('about');
});
router.get('/contact',function(req,res,next)
{
  res.render('contact');   
});
module.exports = router;
