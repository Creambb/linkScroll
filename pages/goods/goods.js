Page({

  data: {
    // 数据列表
    dataList: [
      {
        id: "01",
        icon: "../../images/goods/activity.svg",
        navTitle: "活动",
        goodsList: [{
          id: 1,
          goodsUrl: "../../images/goods/pencil01.jpg",
          goodsName: "晨光优品中性笔",
          typeList: ['粉红色', '淡蓝色', '淡黄色'],
          shopPrice: 3,
          saleNum: 20,
        },
        {
          id: 2,
          goodsUrl: "../../images/goods/pencil02.jpg",
          goodsName: "得力彩色中性笔",
          typeList: ['白色', '橘色'],
          shopPrice: 5.2,
          saleNum: 20,
        },
        {
          id: 3,
          goodsUrl: "../../images/goods/pencil03.jpg",
          goodsName: "得力糖果中性笔",
          shopPrice: 12,
          saleNum: 20,
        },
        {
          id: 4,
          goodsUrl: "../../images/goods/pencil04.jpg",
          goodsName: "按压式花边修正带",
          shopPrice: 6.9,
          saleNum: 20,
        },
        {
          id: 5,
          goodsUrl: "../../images/goods/pencil05.jpg",
          goodsName: "得力文具便利贴",
          shopPrice: 4,
          saleNum: 20,
        }
        ],
      },
      {
        id: "02",
        icon: "../../images/goods/new.svg",
        navTitle: "新品",
        goodsList: [{
          id: 21,
          goodsUrl: "../../images/goods/pencil01.jpg",
          goodsName: "晨光优品中性笔",
          shopPrice: 3,
          saleNum: 20,
        },
        {
          goodsUrl: "../../images/goods/pencil02.jpg",
          goodsName: "得力彩色中性笔",
          shopPrice: 5.2,
          saleNum: 20,
          id: 22,
        },
        {
          id: 4,
          goodsUrl: "../../images/goods/pencil04.jpg",
          goodsName: "按压式花边修正带",
          shopPrice: 6.9,
          saleNum: 20,
        },
        {
          id: 5,
          goodsUrl: "../../images/goods/pencil05.jpg",
          goodsName: "得力文具便利贴",
          shopPrice: 4,
          saleNum: 20,
        }
        ],
      },
      {
        id: "03",
        icon: "../../images/goods/recommend.svg",
        navTitle: "推荐",
        goodsList: [{
          goodsUrl: "../../images/goods/pencil01.jpg",
          goodsName: "晨光优品中性笔",
          shopPrice: 3,
          saleNum: 20,
          id: 31,
        },
        {
          goodsUrl: "../../images/goods/pencil02.jpg",
          goodsName: "得力彩色中性笔",
          shopPrice: 5.2,
          saleNum: 20,
          id: 32,
        },
        {
          id: 4,
          goodsUrl: "../../images/goods/pencil04.jpg",
          goodsName: "按压式花边修正带",
          shopPrice: 6.9,
          saleNum: 20,
        },
        {
          id: 5,
          goodsUrl: "../../images/goods/pencil05.jpg",
          goodsName: "得力文具便利贴",
          shopPrice: 4,
          saleNum: 20,
        },
        ],
      },
      {
        id: "04",
        navTitle: "晨光系列",
        goodsList: [{
          goodsUrl: "../../images/goods/pencil01.jpg",
          goodsName: "晨光优品中性笔",
          shopPrice: 3,
          saleNum: 20,
          id: 41,
        },
        {
          id: 4,
          goodsUrl: "../../images/goods/pencil04.jpg",
          goodsName: "晨光按压式花边修正带",
          shopPrice: 6.9,
          saleNum: 20,
        },
        {
          id: 5,
          goodsUrl: "../../images/goods/pencil05.jpg",
          goodsName: "晨光文具便利贴",
          shopPrice: 4,
          saleNum: 20,
        },
        ],
      },
      {
        id: "05",
        navTitle: "文具专区",
        goodsList: [{
          goodsUrl: "../../images/goods/pencil01.jpg",
          goodsName: "晨光优品中性笔(美)",
          shopPrice: 3,
          saleNum: 20,
          id: 61,
        },
        {
          goodsUrl: "../../images/goods/pencil02.jpg",
          goodsName: "得力彩色中性笔",
          shopPrice: 5.2,
          saleNum: 20,
          id: 62,
        },
        ],
      },
      {
        id: "06",
        navTitle: "精品专区",
        goodsList: [{
          goodsUrl: "../../images/goods/pencil01.jpg",
          goodsName: "晨光优品中性笔",
          shopPrice: 3,
          saleNum: 20,
          id: 1,
        },
        {
          goodsUrl: "../../images/goods/pencil02.jpg",
          goodsName: "得力彩色中性笔",
          shopPrice: 5.2,
          saleNum: 20,
          id: 2,
        },
        ],
      },
    ],
    headerHeight: 0,  // 头部高度
    searchHeight: 0,   // 搜索框高度
    currentActiveIndex: 0,   // 当前菜单索引
    isClickMenu: false, // 是否点击菜单
    proListToTop: [],  // 记录每一个类型的列表道顶部的距离
  },

  onLoad: function (options) {
    this.getEleHeight();
  },

  getEleHeight() {
    var headerHeight, searchHeight, proListToTop = [];

    // 头部所占据的高度，在后续滑动时需要减掉该高度
    wx.createSelectorQuery().select("#header").boundingClientRect(res => {
      headerHeight = res.height;
      // 回调函数为异步，所以只能在方法里面更新数据
      this.setData({
        headerHeight: headerHeight,
      })
    }).exec()

    // 搜索框所占据的高度，在后续滑动时需要减掉该高度
    wx.createSelectorQuery().select("#searchBox").boundingClientRect(res => {
      searchHeight = res.height
      this.setData({
        searchHeight: searchHeight,
      })
    }).exec()

    // 记录每一个类型的列表道顶部的距离
    wx.createSelectorQuery().selectAll('.itemTitle').boundingClientRect((rects) => {
      rects.forEach((rect) => {
        proListToTop.push(rect.top.toFixed(2) - this.data.headerHeight - this.data.searchHeight);
      })
      this.setData({
        proListToTop: proListToTop,
      })
    }).exec()

  },

  //滚动触发
  scroll: function (e) {
    // 若滑动是点击菜单触发的，则不进行判断；
    if (!this.data.isClickMenu) {
      // 获取滚动的高度
      var scrollTop = e.detail.scrollTop;
      var proListToTop = this.data.proListToTop;
      var currentActiveIndex;
      for (let i = 0; i < proListToTop.length; i++) {
        // 根据滑动距离判断当前处于哪个菜单索引
        if (e.detail.scrollTop < proListToTop[i] && i !== 0 && e.detail.scrollTop > proListToTop[i - 1]) {
          this.setData({
            currentActiveIndex: i - 1,
          })
        }
      }
    }
    // 将点击菜单状态还原为false
    this.setData({
      isClickMenu: false,
    })
  },

  //点击左边菜单事件
  changeLeftMenu: function (e) {
    // 当前点击的导航对应的右列表id
    var rigId = e.currentTarget.dataset.id;
    // 当前导航索引
    var index = e.currentTarget.dataset.index;
    // 点击当前导航索引，不作处理
    if (this.data.currentActiveIndex === index) {
      return;
    }
    this.setData({
      rigId: rigId,
      // 设置选中id
      currentActiveIndex: index,
      // 是否点击
      isClickMenu: true
    })
  },

})