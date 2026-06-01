App({
  globalData: {
    // ISO标准卡片（银行卡/身份证同规格）宽度85.6mm
    cardWidth: 85.6,
    // 测量历史记录
    history: [],
    // 当前测量图片路径
    currentImage: '',
    // 系统信息
    systemInfo: null,
    ads: {
      rewardedResult: {
        enabled: true,
        adUnitId: 'adunit-a572b350a0b5a751',
        freePerDay: 1,
        // 广告加载失败时放行，避免用户测完后被卡住。
        passOnAdError: true
      }
    }
  },

  onLaunch() {
    const systemInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    const deviceInfo = wx.getDeviceInfo ? wx.getDeviceInfo() : {};
    this.globalData.systemInfo = { ...systemInfo, ...deviceInfo };

    // 加载历史记录
    const history = wx.getStorageSync('pd_history');
    if (history) {
      this.globalData.history = history;
    }
  },

  // 保存测量记录
  saveRecord(record) {
    this.globalData.history.unshift(record);
    if (this.globalData.history.length > 50) {
      this.globalData.history = this.globalData.history.slice(0, 50);
    }
    wx.setStorageSync('pd_history', this.globalData.history);
  }
});
