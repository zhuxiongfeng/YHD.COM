var express = require('express');
var router = express.Router();
var mysql  = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/admin', function(req, res, next) {
  res.render('admin');
});
router.get('/gettui',function(req,res,next){
  //console.log(req.params.id);
  var con = mysql.createConnection({
    host     : 'localhost',
    port:8889,
    user     : 'root',
    password : 'root',
    database : 'mydb'
  });
  con.connect();
  con.query('SELECT * FROM `baidu` WHERE tag="推荐"',function(err,rows,field){
    if(!err){
      res.send(rows)
    }
    else{
      console.log(err)
    }
  })
  //con.close()

  //console.log('ok')
})
router.get('/getbai',function(req,res,next){
  var con = mysql.createConnection({
    host     : 'localhost',
    port:8889,
    user     : 'root',
    password : 'root',
    database : 'mydb'
  });
  con.connect();
  con.query('SELECT * FROM `baidu` WHERE tag="百家"',function(err,rows,field){
    if(!err){
      res.send(rows)
    }
    else{
      console.log(err)
    }
  })
  //con.close()
  //res.send(bai);
  //console.log('ok')
})

router.post('/addnews',function(req,res,next){
  //console.log(req.body)
  var con = mysql.createConnection({
    host     : 'localhost',
    port:8889,
    user     : 'root',
    password : 'root',
    database : 'mydb'
  });
  con.connect();
  var title=req.body.title;
  var content=req.body.content;
  var adress=req.body.adress;
  var source=req.body.source;
  var date=req.body.date;
  var tag=req.body.tag;
  con.query('INSERT INTO `baidu` (`title`,`content`,`adress`,`source`,`date`,`tag`) values(?,?,?,?,?,?)',
      [title,content,adress,source,date,tag],function(err,rows,field){
        if(!err){
          res.send({status:'ok',message:'成功'})
        }
        else{
          console.log(err)
        }
      })
  //con.close()

})

router.get('/gettable',function(req,res,next){
  var con = mysql.createConnection({
    host     : 'localhost',
    port:8889,
    user     : 'root',
    password : 'root',
    database : 'mydb'
  });
  con.connect();
  con.query('SELECT * FROM `baidu`',function(err,rows,field){
    if(!err){
      res.send(rows)
    }
    else{
      console.log(err)
    }
  })
  //con.close()
  })

//router.post('/deleterow',function(req,res,next){
//  console.log(req.body.id);
//  var con = mysql.createConnection({
//    host     : 'localhost',
//    port:8889,
//    user     : 'root',
//    password : 'root',
//    database : 'mydb'
//  });
//  con.connect();
//  var n=req.body.id;
//  con.query('DELETE FROM `baidu` WHERE id='+n,function(err,rows,field){
//      if(err){
//        console.log(err)
//      }
//  })
//  //con.close()
//})

module.exports = router;
