import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
/* 
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
*/
export default defineUserConfig({
  bundler: viteBundler(),
  title: "创趣星盒——苏教版信息科技教程",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/getting-started/快速索引.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "[当前网络不佳]",
    contributors: "Whistle Wang",

    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/快速索引.md",
        children: [
          {text: "快速索引", link: "/getting-started/快速索引.md"},
          {text: "创趣星盒", link: "/getting-started/创趣星盒.md"},
          {text: "编程星空软件", link: "/getting-started/编程星空软件.md"},
          {text: "注意事项", link: "/getting-started/注意事项.md"},
        ]
      },
      { 
        text: "—— 小学 ——",
      },
      {
        text: "系统思想识万物",
        link: "/系统思想识万物/按钮控制台灯.md",
        collapsible: true,
        children: [
          {text: "按钮控制台灯", link: "/系统思想识万物/按钮控制台灯.md"},
          {text: "光控台灯", link: "/系统思想识万物/光控台灯.md"}
        ]
      },
      {
        text: "系统安全与自主可控",
        link: "/系统安全与自主可控/IC卡识别门禁.md",
        collapsible: true,
        children: [
          {text: "IC卡识别门禁", link: "/系统安全与自主可控/IC卡识别门禁.md"},
          {text: "人脸识别门禁", link: "/系统安全与自主可控/人脸识别门禁.md"},
        ]
      },
      {
        text: "系统控制的量化",
        link: "/系统控制的量化/旋钮控制风扇.md",
        collapsible: true,
        children: [
          {text: "旋钮控制风扇", link: "/系统控制的量化/旋钮控制风扇.md"},
          {text: "温度控制风扇", link: "/系统控制的量化/温度控制风扇.md"},
          {text: "自动浇灌装置", link: "/系统控制的量化/自动浇灌装置.md"},
        ]
      },
      {
        text: "逻辑与运算",
        link: "/逻辑与运算/分时智能广播.md",
        collapsible: true,
        children: [
          {text: "分时智能广播", link: "/逻辑与运算/分时智能广播.md"}
        ]
      },
      {
        text: "系统与反馈",
        link: "/系统与反馈/避障机器人.md",
        collapsible: true,
        children: [
          {text: "避障机器人", link: "/系统与反馈/避障机器人.md"},
          {text: "沿墙行走机器人", link: "/系统与反馈/沿墙行走机器人.md"},
          {text: "跟随机器人", link: "/系统与反馈/跟随机器人.md"},
          {text: "循线机器人", link: "/系统与反馈/循线机器人.md"}
        ],
      },
      {
        text: "系统与优化",
        link: "/系统与优化/智控电子秤.md",
        collapsible: true,
        children: [
          {text: "智控电子秤", link: "/系统与优化/智控电子秤.md"},
          {text: "追光太阳能板", link: "/系统与优化/追光太阳能板.md"},
        ]
      },
      { 
        text: "—— 初中 ——",
      },
      {
        text: "物联网的数据采集",
        link: "/物联网的数据采集/声音数据的采集.md",
        collapsible: true,
        children: [
          {text: "声音数据的采集", link: "/物联网的数据采集/声音数据的采集.md"},
          {text: "模拟倒车雷达", link: "/物联网的数据采集/模拟倒车雷达.md"},
          {text: "模拟公交卡计费", link: "/物联网的数据采集/模拟公交卡计费.md"},
        ]
      },
      {
        text: "物联网的数据传输",
        link: "/物联网的数据传输/体验创趣星盒连接Wifi.md",
        collapsible: true,
        children: [
          {text: "体验创趣星盒连接Wifi", link: "/物联网的数据传输/体验创趣星盒连接Wifi.md"},
          {text: "探究蓝牙传输距离",   link: "/物联网的数据传输/探究蓝牙传输距离.md"},
        ]
      },
      {
        text: "物联网的数据处理",
        link: "/物联网的数据处理/模拟本地单灯系统.md",
        collapsible: true,
        children: [
          {text: "模拟本地单灯系统", link: "/物联网的数据处理/模拟本地单灯系统.md"},
          {text: "模拟远程单灯系统",   link: "/物联网的数据处理/模拟远程单灯系统.md"},
          {text: "模拟远程多灯系统",   link: "/物联网的数据处理/模拟远程多灯系统.md"},
        ]
      },
      {
        text: "物联网的综合应用",
        link: "/物联网的综合应用/场馆的人数控制.md",
        collapsible: true,
        children: [
          {text: "场馆的人数控制", link: "/物联网的综合应用/场馆的人数控制.md"},
          {text: "场馆的温湿度控制",   link: "/物联网的综合应用/场馆的温湿度控制.md"},
        ]
      },
      {
        text: "跨学科主题学习",
        link: "/跨学科主题学习/智慧农场.md",
        collapsible: true,
        children: [
          {text: "智慧农场", link: "/跨学科主题学习/智慧农场.md"},
        ]
      },
    ],
    sidebarDepth: 1
  }),

  base: "/tutorial/starbox_sj/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})