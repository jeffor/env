// eleme wallbreaker

var DIRECT = "DIRECT";

var PROXY = "PROXY 115.159.15.42:19840; SOCKS5 115.159.15.42:28765; SOCKS 115.159.15.42:28765; DIRECT;";

var DIRECT_DOMAIN = {"07073.com": 1, "0x110.com": 1, "10010.com": 1, "100tjs.com": 1, "100ye.com": 1, "111cn.net": 1, "114la.com": 1, "115.com": 1, "115img.com": 1, "1182.org": 1, "120ask.com": 1, "123cha.com": 1, "126.com": 1, "126.net": 1, "127.net": 1, "1616.net": 1, "163.com": 1, "1688.com": 1, "17173.com": 1, "1717388.com": 1, "1778.com": 1, "178.com": 1, "17cdn.com": 1, "17chang.com": 1, "17kuxun.com": 1, "17u.com": 1, "17u.net": 1, "198game.com": 1, "19lou.com": 1, "19pay.com": 1, "1o26.com": 1, "1ting.com": 1, "1uuc.com": 1, "21cn.com": 1, "21vianet.com": 1, "2345.com": 1, "24quan.com": 1, "265.com": 1, "265g.com": 1, "28.com": 1, "28tui.com": 1, "293.net": 1, "2hua.com": 1, "2mdn.net": 1, "3001.net": 1, "315che.com": 1, "3366.com": 1, "360buy.com": 1, "360buyimg.com": 1, "360doc.com": 1, "360hitao.com": 1, "360safe.com": 1, "360tl.com": 1, "36kr.com": 1, "36krcnd.com": 1, "37see.com": 1, "39.net": 1, "39yss.com": 1, "3dmgame.com": 1, "4399.com": 1, "4738.com": 1, "5000pk.com": 1, "500wan.com": 1, "509377.com": 1, "51.com": 1, "51.la": 1, "5173.com": 1, "51auto.com": 1, "51buy.com": 1, "51cto.com": 1, "51fanli.com": 1, "51img1.com": 1, "51job.com": 1, "51jobcdn.com": 1, "51yes.com": 1, "52kmh.com": 1, "52pk.net": 1, "52tlbb.com": 1, "53kf.com": 1, "55bbs.com": 1, "55tuan.com": 1, "56.com": 1, "58.com": 1, "591hx.com": 1, "5d6d.com": 1, "5d6d.net": 1, "61.com": 1, "6dad.com": 1, "6rooms.com": 1, "701sou.com": 1, "70e.com": 1, "766.com": 1, "76676.com": 1, "777wyx.com": 1, "778669.com": 1, "7c.com": 1, "7k7k.com": 1, "859652.com": 1, "88db.com": 1, "91.com": 1, "9377.com": 1, "937750.com": 1, "95516.com": 1, "968tl.com": 1, "9787.com": 1, "99114.com": 1, "99bill.com": 1, "99fund.com": 1, "a135.net": 1, "a5.net": 1, "a963.com": 1, "a9vg.com": 1, "abang.com": 1, "abchina.com": 1, "acfun.tv": 1, "acgvideo.com": 1, "ad-stir.com": 1, "ad1111.com": 1, "admin5.com": 1, "adnxs.com": 1, "adobe.com": 1, "adroll.com": 1, "ads8.com": 1, "adsame.com": 1, "adsonar.com": 1, "adtechus.com": 1, "agar.io": 1, "aibang.com": 1, "aicdn.com": 1, "aifang.com": 1, "aili.com": 1, "aipai.com": 1, "aizhan.com": 1, "ali213.net": 1, "aliapp.com": 1, "alibaba.com": 1, "alicdn.com": 1, "aliexpress.com": 1, "aliimg.com": 1, "alikunlun.com": 1, "alimama.com": 1, "alipay.com": 1, "alipayobjects.com": 1, "alisoft.com": 1, "alitrip.com": 1, "alivv.com": 1, "aliyun.com": 1, "allyes.com": 1, "amap.com": 1, "amazon.com": 1, "anjuke.com": 1, "anquan.org": 1, "anquanbao.com": 1, "anquanbao.org": 1, "anrong360.com": 1, "antgroup.com": 1, "anzhi.com": 1, "aol.com": 1, "aoyou.com": 1, "appgame.com": 1, "appinn.com": 1, "apple.com": 1, "arpg2.com": 1, "atdmt.com": 1, "atpanel.com": 1, "autonavi.com": 1, "b2b168.com": 1, "babytree.com": 1, "baidu.com": 1, "baidupcs.com": 1, "baidustatic.com": 1, "baifubao.com": 1, "baihe.com": 1, "baixing.com": 1, "bankcomm.com": 1, "baojia.com": 1, "baomihua.com": 1, "bdimg.com": 1, "bdstatic.com": 1, "beisen.com": 1, "bendibao.com": 1, "bestb2b.com": 1, "betrad.com": 1, "bilibili.com": 1, "bilibili.tv": 1, "bing.com": 1, "bitauto.com": 1, "bjbus.com": 1, "blogbus.com": 1, "blogchina.com": 1, "blueidea.com": 1, "bluekai.com": 1, "bokee.net": 1, "booksky.org": 1, "boosj.com": 1, "brothersoft.com": 1, "btchina.com": 1, "c-ctrip.com": 1, "caing.com": 1, "caixin.com": 1, "ccb.com": 1, "ccic2.com": 1, "ccidnet.com": 1, "cctv.com": 1, "cctvpic.com": 1, "cdn-apple.com": 1, "cdn20.com": 1, "cfmoto.com": 1, "changyou.com": 1, "chdbits.org": 1, "chetx.com": 1, "china.com": 1, "chinabyte.com": 1, "chinahr.com": 1, "chinamobile.com": 1, "chinanews.com": 1, "chinapnr.com": 1, "chinaren.com": 1, "chinaunix.net": 1, "chinaw3.com": 1, "chinaz.com": 1, "chiphell.com": 1, "chuangelm.com": 1, "chunyuyisheng.com": 1, "ci123.com": 1, "cmbchina.com": 1, "cn163.cn": 1, "cnbeta.com": 1, "cnblogs.com": 1, "cncn.com": 1, "cnepub.com": 1, "cnfol.com": 1, "cngba.com": 1, "cnhubei.com": 1, "cnki.net": 1, "cnmo.com": 1, "cntv.net": 1, "cnwest.com": 1, "cnxad.com": 1, "cnzz.com": 1, "cnzz.net": 1, "cocoren.com": 1, "compete.com": 1, "comsenz.com": 1, "coo8.com": 1, "cpmok.net": 1, "cqnews.net": 1, "cqtiyu.com": 1, "crsky.com": 1, "csdn.net": 1, "ct10000.com": 1, "ctrip.com": 1, "ctripbuy.hk": 1, "ctvpost.com": 1, "daimajiayuan.com": 1, "dangdang.com": 1, "daqi.com": 1, "dayoo.com": 1, "dbank.com": 1, "dd-robot.net": 1, "ddmap.com": 1, "ddvip.com": 1, "dedecms.com": 1, "devdocs.io": 1, "dfcfw.com": 1, "dh818.com": 1, "diandian.com": 1, "dianping.com": 1, "dianrong.com": 1, "didatuan.com": 1, "dipan.com": 1, "discuz.com": 1, "discuz.net": 1, "dji.com": 1, "doc88.com": 1, "docin.com": 1, "donews.com": 1, "dooioo.com": 1, "dospy.com": 1, "douban.com": 1, "douban.fm": 1, "doubanio.com": 1, "doubleclick.com": 1, "doubleclick.net": 1, "douyutv.com": 1, "doyoo.net": 1, "dpfile.com": 1, "dream4ever.org": 1, "duapp.com": 1, "duba.net": 1, "duokan.com": 1, "duomi.com": 1, "duoshuo.com": 1, "duote.com": 1, "duowan.com": 1, "dy2018.com": 1, "dytt8.net": 1, "dzwww.com": 1, "eastday.com": 1, "eastmoney.com": 1, "eb80.com": 1, "ebay.com": 1, "egou.com": 1, "ele.me": 1, "elemecdn.com": 1, "ellechina.com": 1, "eloancn.com": 1, "elong.com": 1, "ename.net": 1, "et8.org": 1, "etao.com": 1, "eurekavpt.com": 1, "ev123.com": 1, "exam8.com": 1, "eye.rs": 1, "eyoudi.com": 1, "ezubo.com": 1, "fang.com": 1, "fangdd.com": 1, "fangjia.com": 1, "fantong.com": 1, "fastcdn.com": 1, "fastif.net": 1, "fat999.com": 1, "fblife.com": 1, "fc2.com": 1, "feidee.com": 1, "feng.com": 1, "fengniao.com": 1, "fenzhi.com": 1, "ffdy.cc": 1, "fhyx.com": 1, "fir.im": 1, "fobshanghai.com": 1, "freebuf.com": 1, "freshfresh.com": 1, "ftchinese.com": 1, "ftuan.com": 1, "funshion.com": 1, "fx120.net": 1, "game3737.com": 1, "game3896.com": 1, "gamersky.com": 1, "gamestlbb.com": 1, "gamesville.com": 1, "gamewan.net": 1, "ganji.com": 1, "gaopeng.com": 1, "geilicdn.com": 1, "getfirebug.com": 1, "gewara.com": 1, "gfan.com": 1, "gfw.io": 1, "gfxiong.com": 1, "ggmm777.com": 1, "gkkxd.com": 1, "go2map.com": 1, "gongchang.com": 1, "goodbabygroup.com": 1, "gougou.com": 1, "growing.io": 1, "gtimg.com": 1, "gy9y.com": 1, "gzmama.com": 1, "haliyuya.com": 1, "hao123.com": 1, "haodf.com": 1, "harrenmedianetwork.com": 1, "hc360.com": 1, "hdslb.com": 1, "hefei.cc": 1, "help.apple.com": 1, "hexun.com": 1, "hf365.com": 1, "hi-pda.com": 1, "hiapk.com": 1, "hichina.com": 1, "hjenglish.com": 1, "hlwan.net": 1, "homeinns.com": 1, "honda-sundiro.com": 1, "hoopchina.com": 1, "hotmail.com": 1, "hotsales.net": 1, "house365.com": 1, "huaban.com": 1, "huaguo.com": 1, "huanqiu.com": 1, "hudong.com": 1, "hujiang.com": 1, "hunantv.com": 1, "huochepiao.com": 1, "huomaotv.com": 1, "hupu.com": 1, "iask.com": 1, "ibm.com": 1, "iciba.com": 1, "icloud.com": 1, "icson.com": 1, "idailyapp.com": 1, "ifeng.com": 1, "ifengimg.com": 1, "ifensi.com": 1, "ijinshan.com": 1, "ikandian.com": 1, "iloveyouxi.com": 1, "im286.com": 1, "imanhua.com": 1, "imedao.com": 1, "img-space.com": 1, "imrworldwide.com": 1, "inc.gs": 1, "infzm.com": 1, "invitemedia.com": 1, "ip138.com": 1, "ipinyou.com": 1, "ipip.net": 1, "iqilu.com": 1, "iqiyi.com": 1, "irs01.com": 1, "irs01.net": 1, "is686.com": 1, "it168.com": 1, "iteye.com": 1, "itkee.com": 1, "itouchchina.com": 1, "itouzi.com": 1, "itu8.net": 1, "itzcdn.com": 1, "iweek.ly": 1, "iwjw.com": 1, "iyaya.com": 1, "james520.com": 1, "jandan.net": 1, "jb51.net": 1, "jd.com": 1, "jdcache.com": 1, "jdcdn.com": 1, "jianshu.io": 1, "jiathis.com": 1, "jiatx.com": 1, "jiayuan.com": 1, "jiepang.com": 1, "jimubox.com": 1, "jing.fm": 1, "jinti.com": 1, "jiuyaoyouxi.com": 1, "jjwxc.net": 1, "jobdeer.com": 1, "joqoo.com": 1, "jqw.com": 1, "jstv.com": 1, "jumei.com": 1, "junmiquan.com": 1, "junshijia.com": 1, "jxedt.com": 1, "jysq.net": 1, "kaixin001.com": 1, "kandian.com": 1, "kandian.net": 1, "kanimg.com": 1, "kankan.com": 1, "kdnet.net": 1, "keyunzhan.com": 1, "kimiss.com": 1, "kjson.com": 1, "koudai.com": 1, "koudai8.com": 1, "ktmr2r.com": 1, "ku6.com": 1, "ku6cdn.com": 1, "ku6img.com": 1, "kuaidaili.com": 1, "kuaidi100.com": 1, "kuaiwan.com": 1, "kugou.com": 1, "l99.com": 1, "lady8844.com": 1, "lafaso.com": 1, "lagou.com": 1, "lampdrive.com": 1, "lantouzi.com": 1, "lashou.com": 1, "lashouimg.com": 1, "lecai.com": 1, "legolas-media.com": 1, "lehecai.com": 1, "leho.com": 1, "leletv.net": 1, "letao.com": 1, "letv.com": 1, "letvcloud.com": 1, "letvimg.com": 1, "lianjia.com": 1, "licaifan.com": 1, "licaimofang.com": 1, "liebiao.com": 1, "lietou.com": 1, "lilith.sh": 1, "limei.com": 1, "linezing.com": 1, "linkedin.com": 1, "liulangdefeng.com": 1, "live800.com": 1, "lofter.com": 1, "logmein.com": 1, "lohas.ly": 1, "loli.mg": 1, "loli.vg": 1, "longhoo.net": 1, "looyu.com": 1, "love21cn.com": 1, "lufax.com": 1, "lufaxcdn.com": 1, "lusongsong.com": 1, "lvping.com": 1, "lxdns.com": 1, "ly.com": 1, "lycos.com": 1, "lygo.com": 1, "m18.com": 1, "m1905.com": 1, "made-in-china.com": 1, "makepolo.com": 1, "mangocity.com": 1, "manzuo.com": 1, "mapabc.com": 1, "mapbar.com": 1, "mathtag.com": 1, "mediaplex.com": 1, "mediav.com": 1, "megaintel.com": 1, "meilele.com": 1, "meilishuo.com": 1, "meishichina.com": 1, "meituan.com": 1, "meituan.net": 1, "meitudata.com": 1, "meizu.com": 1, "mi.com": 1, "mianmian.co": 1, "mianmian.com": 1, "miaopai.com": 1, "miaopai.me": 1, "miaozhen.com": 1, "microad-cn.com": 1, "miercn.com": 1, "mikecrm.com": 1, "mipay.com": 1, "miui.com": 1, "miwifi.com": 1, "mlt01.com": 1, "mmstat.com": 1, "mnwan.com": 1, "mob.com": 1, "mogujie.com": 1, "mookie1.com": 1, "moonbasa.com": 1, "mop.com": 1, "mosso.com": 1, "mplife.com": 1, "msn.com": 1, "mtime.com": 1, "mumayi.com": 1, "my089.com": 1, "mydrivers.com": 1, "mygame82.com": 1, "mzstatic.com": 1, "nbweekly.com": 1, "neitui.me": 1, "net114.com": 1, "netease.com": 1, "newsmth.net": 1, "ngacn.cc": 1, "nipic.com": 1, "niu.com": 1, "njobt.com": 1, "nowec.com": 1, "ntdtv.com": 1, "nuomi.com": 1, "oadz.com": 1, "oeeee.com": 1, "okbuy.com": 1, "okcoin.com": 1, "okooo.com": 1, "onetad.com": 1, "onlinedown.net": 1, "onlylady.com": 1, "oschina.net": 1, "otwan.com": 1, "p2peye.com": 1, "p5w.net": 1, "paipai.com": 1, "paypal.com": 1, "pcbeta.com": 1, "pchome.net": 1, "pcpop.com": 1, "penging.com": 1, "pengyou.com": 1, "php100.com": 1, "phpwind.net": 1, "pingan.com": 1, "pingwest.com": 1, "pixlr.com": 1, "pp.cc": 1, "pplive.com": 1, "ppmoney.com": 1, "ppstream.com": 1, "pptv.com": 1, "pr56789.com": 1, "pstatp.com": 1, "pubmatic.com": 1, "puding.cc": 1, "q150.com": 1, "qbox.me": 1, "qcloud.com": 1, "qdcdn.com": 1, "qhimg.com": 1, "qiangxianhua.com": 1, "qianlitu.com": 1, "qianlong.com": 1, "qianqian.com": 1, "qianyan001.com": 1, "qidian.com": 1, "qihoo.com": 1, "qingcloud.com": 1, "qingdaonews.com": 1, "qiniucdn.com": 1, "qiniudn.com": 1, "qire123.com": 1, "qiushibaike.com": 1, "qiyi.com": 1, "qiyipic.com": 1, "qiyou.com": 1, "qjy168.com": 1, "qq.com": 1, "qq937.com": 1, "qqmail.com": 1, "qstatic.com": 1, "qtmojo.com": 1, "quantserve.com": 1, "qunar.com": 1, "qunarzz.com": 1, "qvbuy.com": 1, "qyer.com": 1, "rakuten.co.jp": 1, "ranwen.com": 1, "readnovel.com": 1, "renren.com": 1, "renrendai.com": 1, "replays.net": 1, "rong360.com": 1, "rrimg.com": 1, "rrjc.com": 1, "rtbidder.net": 1, "sanguosha.com": 1, "scanscout.com": 1, "scorecardresearch.com": 1, "sdo.com": 1, "seowhy.com": 1, "serving-sys.com": 1, "sf-express.com": 1, "sg560.com": 1, "sgamer.com": 1, "shangdu.com": 1, "shengpay.com": 1, "shuangtv.net": 1, "si.kz": 1, "sina.com": 1, "sinaapp.com": 1, "sinaedge.com": 1, "sinahk.net": 1, "sinaimg.com": 1, "sinajs.com": 1, "sj-tl.com": 1, "skycn.com": 1, "smzdm.com": 1, "snsfun.cc": 1, "snyu.com": 1, "sodu.org": 1, "sofang.com": 1, "sogou.com": 1, "sogoucdn.com": 1, "sohu.com": 1, "soku.com": 1, "sootoo.com": 1, "soso.com": 1, "soufun.com": 1, "soufunimg.com": 1, "sougoucdn.com": 1, "sourceforge.net": 1, "southcn.com": 1, "souyidai.com": 1, "staticsdo.com": 1, "stockstar.com": 1, "sttlbb.com": 1, "suiyiwen.com": 1, "suning.com": 1, "superson.com": 1, "symcb.com": 1, "symcd.com": 1, "synacast.com": 1, "szhome.com": 1, "sznews.com": 1, "tangdou.com": 1, "tanx.com": 1, "tao123.com": 1, "taobao.com": 1, "taobaocdn.com": 1, "tbcache.com": 1, "tdimg.com": 1, "teambition.com": 1, "tencent.com": 1, "tenpay.com": 1, "tgbus.com": 1, "thawte.com": 1, "theplanet.com": 1, "thethirdmedia.com": 1, "tiancity.com": 1, "tianji.com": 1, "tianxun.com": 1, "tianyaui.com": 1, "tiao8.info": 1, "tiexue.net": 1, "titan24.com": 1, "tlbb2.com": 1, "tlbb8.com": 1, "tlbbsifu.com": 1, "tmall.com": 1, "tom.com": 1, "tongbu.com": 1, "tonjoy.me": 1, "toocle.com": 1, "toutiao.com": 1, "tower.im": 1, "tremormedia.com": 1, "tuan800.com": 1, "tudou.com": 1, "tudouui.com": 1, "tui18.com": 1, "tuniu.com": 1, "tvlele.com": 1, "tvmao.com": 1, "twcczhu.com": 1, "typecho.org": 1, "u17.com": 1, "ucjoy.com": 1, "ulink.cc": 1, "umeng.com": 1, "umiwi.com": 1, "unionpay.com": 1, "unionpayintl.com": 1, "uniontoufang.com": 1, "up2c.com": 1, "upaiyun.com": 1, "ustack.com": 1, "uusee.com": 1, "uuu9.com": 1, "uuzu.com": 1, "uuzuonline.com": 1, "v2ex.co": 1, "v2ex.com": 1, "vancl.com": 1, "vcimg.com": 1, "verycd.com": 1, "vipshop.com": 1, "vipwifi.com": 1, "vizu.com": 1, "vizury.com": 1, "vjia.com": 1, "vulbox.com": 1, "wandoujia.com": 1, "wangdaizhijia.com": 1, "wangyin.com": 1, "wanzaidangxia.com": 1, "wdjimg.com": 1, "web887.com": 1, "webdissector.com": 1, "webhek.com": 1, "weibo.com": 1, "weico.cc": 1, "weidian.com": 1, "weiphone.com": 1, "weiyun.com": 1, "wenwo.com": 1, "west263.com": 1, "whlongda.com": 1, "williamlong.info": 1, "wochacha.com": 1, "woniu.com": 1, "wooyun.org": 1, "wordpress.org": 1, "wosign.com": 1, "wrating.com": 1, "wsj.com": 1, "wumii.com": 1, "wunderlist.com": 1, "xbeta.info": 1, "xcarimg.com": 1, "xi666.com": 1, "xiachufang.com": 1, "xiami.com": 1, "xiami.net": 1, "xiangtin.com": 1, "xiaomi.com": 1, "xiaomi.hk": 1, "xiaomi.net": 1, "xiaomi.tw": 1, "xiaonei.com": 1, "xiaoxiaoerp.com": 1, "xiazaiba.com": 1, "xici.net": 1, "xilu.com": 1, "xingtouzi.com": 1, "xinhuanet.com": 1, "xinnet.com": 1, "xitek.com": 1, "xiu.com": 1, "xiumi.us": 1, "xiyou53.com": 1, "xiyou54.com": 1, "xlpan.com": 1, "xmfish.com": 1, "xp9365.com": 1, "xtltt.com": 1, "xueqiu.com": 1, "xungou.com": 1, "xunlei.com": 1, "xxxmeng.com": 1, "xyxy.net": 1, "yahoo.com": 1, "yaolan.com": 1, "ydstatic.com": 1, "yeepay.com": 1, "yesky.com": 1, "yieldmanager.com": 1, "yigao.com": 1, "yihaodian.com": 1, "yihaodianimg.com": 1, "yimg.com": 1, "yindou.com": 1, "yingjiesheng.com": 1, "yinker.com": 1, "yintai.com": 1, "yinxiang.com": 1, "yinyuetai.com": 1, "yiqiding.com": 1, "yiqifa.com": 1, "yixin.com": 1, "yixin.im": 1, "yixun.com": 1, "yiyi.cc": 1, "ykimg.com": 1, "ymatou.com": 1, "ynet.com": 1, "yocc.net": 1, "yoka.com": 1, "yolk7.com": 1, "yooli.com": 1, "youboy.com": 1, "youdao.com": 1, "yougou.com": 1, "youku.com": 1, "youshang.com": 1, "youwo123.com": 1, "youxinpai.com": 1, "yunshipei.com": 1, "yupoo.com": 1, "yxlady.com": 1, "yy.com": 1, "yyets.com": 1, "yystatic.com": 1, "zaobao.com": 1, "zaojiao.com": 1, "zbird.com": 1, "zbjimg.com": 1, "zdface.com": 1, "zdmimg.com": 1, "zhaodao123.com": 1, "zhaogang.com": 1, "zhaopin.com": 1, "zhenai.com": 1, "zhi.hu": 1, "zhibo8.cc": 1, "zhibo8.com": 1, "zhihu.com": 1, "zhimg.com": 1, "zhiziyun.com": 1, "zhongsou.net": 1, "zhubajie.com": 1, "ziroom.com": 1, "zongheng.com": 1, "zoopda.com": 1, "zoosnet.net": 1, "zqgame.com": 1, "ztgame.com": 1, "zx915.com": 1, "zyoulun.com": 1};

var ELEME_DOMAIN = {
    "ele.me": 1,
    "ele.to": 1,
    "elema.com": 1,
    "eleme.test": 1,
    "elenet.me": 1,
    "eletech.me": 1,
    "eletest.me": 1,
    "eme.io": 1
};

var DIRECT_NET = [
    "0.0.0.0/8",
    "10.0.0.0/8",
    "100.64.0.0/10",
    "127.0.0.0/8",
    "169.254.0.0/16",
    "172.16.0.0/12",
    "192.0.0.0/29",
    "192.0.2.0/24",
    "192.88.99.0/24",
    "192.168.0.0/16",
    "198.18.0.0/15",
    "198.51.100.0/24",
    "203.0.113.0/24",
    "224.0.0.0/4",
    "240.0.0.0/4",
    "255.255.255.255"
];


function validateIp(ipaddr) {
    var test = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(ipaddr);
    return !((test == null) || (test[1] > 255 || test[2] > 255 || test[3] > 255 || test[4] > 255));
}

function isInNet(ipaddr, pattern) {
    var tmp = pattern.split("/");
    pattern = tmp[0];
    if (validateIp(pattern)) {
        var host = convertAddr(ipaddr),
            pat = convertAddr(pattern),
            mask;
        if (typeof tmp[1] !== "undefined") {
            mask = 32 - tmp[1];
            mask = ((0xffffffff >> mask) << mask) >>> 0;
        }
        else {
            mask = 0xffffffff >>> 0;
        }
        return ((host & mask) == (pat & mask));
    }
    return false;
}

function isInDomains(host, domains) {
    if (domains[host]) {
        return true;
    }
    var names = host.split('.').slice(1);
    while (names.length > 1) {
        if (domains[names.join('.')]) {
            return true;
        }
        names = names.slice(1);
    }
    return false;
}

function FindProxyForURL(url, host) {
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    if (~url.indexOf('?direct=')) {
        return "DIRECT";
    }

    if (validateIp(host)) {
        return "DIRECT";
    }

    if (isInDomains(host, ELEME_DOMAIN)) {
        return "DIRECT";
    }

    if (/\.cn$/.test(host)) {
        return DIRECT;
    }
    if (/\.tv$/.test(host)) {
        return DIRECT;
    }

    if (isInDomains(host, DIRECT_DOMAIN)) {
        return DIRECT;
    }

    return PROXY;
}
