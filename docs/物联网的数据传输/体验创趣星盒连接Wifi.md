---
sidebarDepth: 0
---
# 体验创趣星盒连接Wifi

> 🧰  创趣星盒板载WIFI-BLE模块和显示屏

[[toc]]

<br>
<br>

<span class="attention">注：实验网络应为2.4G, 手机热点请切换至4G。</span>

## 🎯 项目目标

使创趣星盒连接到无线网络，实现数据的传输与接收，如获取网络时间等功能，理解物联网中设备通过 WiFi 连接进行数据交互的原理与方法。

<br>
<br>

## 📖 原理方法

配置智能开发板的 WiFi 模块参数（SSID 和密码），使其连接到指定无线网络。通过编程实现与网络的时间服务器通信，获取当前网络时间，并在 OLED 屏幕上显示。

<br>
<br>

## 🕹️ 编程实践

<a href="/tutorial/starbox_sj/sb3/【初中】联网获取时间.sb3">点击下载程序：【初中】联网获取时间.sb3</a>

<a href="https://www.cfunworld.com" target="_blank">点击查看演示视频</a>

无线网络名称与密码需自行配置。

① `连接wifi名称为xxx,密码为xxx`语句会造成程序的阻塞，单次连接操作≤15秒返回联网结果；若程序长时间停滞，请检查网络相关配置是否正确

<img src="/images/docimg/【初中】联网获取时间.png">

<br>
<br>
