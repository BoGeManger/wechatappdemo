var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]

Page({
  data: {
    sourceTypeIndex: 0,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 0,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 0,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    imageList:[]
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage: function () {
    var that = this;
    var newimageList = this.data.imageList;
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: function (res) {
        console.log(res);
        newimageList.push(res.tempFilePaths);
        that.setData({
          imageList: newimageList
        })
        console.log(that.data.imageList);
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src

    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  }
})
