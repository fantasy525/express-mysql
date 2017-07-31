var express = require('express');
var router = express.Router();
var axios = require('axios')
var mysql = require('mysql')
var personDao=require('../models/dao/personDao')
var personMap=require('../models/sqlmap/personMap');

router.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
router.get('/person', function (req, res) {
  var age=req.query.age
  personDao.select(personMap.selectAge,res,[age])
})
module.exports = router;
