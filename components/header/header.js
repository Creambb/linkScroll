// index/second.js
Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    bg: {
      type: String,
      value: ''
    },
  },
  data: {
    // bg:'../../images/index/back.svg'
  },
methods: {
  goBack: function(){
    wx:wx.navigateBack({})
  }
}
})