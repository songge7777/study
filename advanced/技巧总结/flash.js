/*
    flash 插件 swfobject库
  初始化的时候  muted:true 为静音
  swfobject.embedSWF(
    "swf/woan_wmp.swf", "woan_player1", 640, 360, "10.1.0", "expressInstall.swf", {

      src: url,
      autoPlay: "true",
      verbose: true,
      controlBarAutoHide: "true",
      controlBarPosition: "bottom",
      streamType: "live",
      expandedBufferTime: 0.2,
      liveBufferTime: 0.1,
      minContinuousPlayback: 1,
      poster: "images/poster.png",
      plugin_hls: "swf/wmp_plugin_hls.swf",
      error: false,
      buffer: false,
      muted:true //静音
      volume:0.5 //音量
    }, {
      allowFullScreen: "true",
      wmode: "opaque"
    },
    { id: "woan_player1" }
  API配置 基本是上通的 

  */