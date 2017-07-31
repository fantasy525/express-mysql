module.exports = {
  jsonwrite: function (res, ret) {
    if (typeof ret === 'undefined') {
      res.json({
        code: 0,
        msg: '操作失败'
      })
    } else {
      res.json(ret)
    }
  }
}
