// ==UserScript==
// @name 日常自定义
// @description 脚本功能目前有：给“解析脚本”添加自定义接口（需要配合jxb解析脚本--才有效果）。
// @description:en 2022-11-01
// @version 1
// @author 江小白
// @include /^https?:\/\/(?:(?:www\.ixigua\.com\/|m\.ixigua\.com\/video\/)\d{10,}(?:\?id=\d{10,}|$)|(?:v(?:-wb)?|m)\.youku\.com\/.+?\/id_|\w+?\.wasu\.c.+?\/[pP]lay\/show\/id\/\d|www\.fun\.tv\/vplay\/g-|m\.fun\.tv\/mplay\/\?mid=|\w+?\.miguvideo\.com\/.+?\/detail\.html\?cid=\d|[^\/]+?\.tudou\.com\/(?:v\/|.+?\/id_)|v\.qq\.com\/(?:x\/(?:cover|page)|.+?\/p\/topic)\/|(?:3g|m)\.v\.qq\.com|w(?:ww)?\.mgtv\.com\/[a-z]\/|www\.mgtv\.com\/act\/|m\.mgtv\.com\/b\/|www\.iqiyi\.com\/(?:[vw]_|kszt\/)|www\.iq\.com\/play\/|m\.iqiyi\.com\/(?:v_|$)|tw\.iqiyi\.com\/v_|tv\.sohu\.com\/v\/|m\.tv\.sohu\.com\/(?:u\/|v|phone_play_film\?aid=)|film\.sohu\.com\/album\/|www\.le\.com\/ptv\/vplay\/|m\.le\.com\/vplay_|[vm]\.pptv\.com\/show\/|(?:[^\/]+?\.)?1905\.com\/(?:m|.*?play)\/|www\.ixigua\.com\/|(?:player|live)\.bilibili\.com\/|www\.bilibili\.com\/(?:(?:cheese|bangumi)\/play|blackboard|.*?video)\/|m\.bilibili\.com\/bangumi\/play\/|.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:search|jx|url|id|v|&[^\/]+?|_\w+?|\.html\?\w+?)[&#=\?]https?(?::\/\/|%3A%2F%2F)[^\/]+?\.(?:youku|fun|miguvideo|wasu|tudou|qq|mgtv|iqiyi|iq|sohu|le|pptv|1905|bilibili|acfun|ixigua)\.))/
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_registerMenuCommand
// @run-at document-body
// ==/UserScript==


(function(){if(!document.querySelector("虎年养老版本")){document.head.appendChild(document.createElement("虎年养老版本"));let 主流网站域名=/(?:youku|miguvideo|wasu|tudou|qq|mgtv|iqiyi|\.iq|sohu|le|pptv|1905|bilibili|\.fun|ixigua)\./;function rczdyobj(){if(!document.querySelector("\u6c5f\u5c0f\u767d\u732b\u6e90\u63a5\u53e3")){document.head.appendChild(document.createElement("\u6c5f\u5c0f\u767d\u732b\u6e90\u63a5\u53e3"));if(location.href.match(/^https?:\/\/(?!.+?(?:\/union.+?res\/|[\/\_\&\-\=\.\?]login|(?:gourl|redirect(?:[^=]+?)?)=http|pass(?:word|port)[\/\_\&\-\=\.\?]|\/star\/\d+?(?:\/)?$|&[a-z]+?id=.+?=\d+?(?:\.\d+?)?$|home\?ref=https?(?::\/\/|:\\\/\\\/|%3A%2F%2F)|\/play-short\/index\.html\?cid=))(?:(?:www\.ixigua\.com\/|m\.ixigua\.com\/video\/)\d{10,}(?:\?id=\d{10,}|$)|(?:v(?:-wb)?|m)\.youku\.com\/.+?\/id_|\w+?\.wasu\.c.+?\/[pP]lay\/show\/id\/\d|www\.fun\.tv\/vplay\/g-|m\.fun\.tv\/mplay\/\?mid=|\w+?\.miguvideo\.com\/.+?\/detail\.html\?cid=\d|[^\/]+?\.tudou\.com\/(?:v\/|.+?\/id_)|v\.qq\.com\/(?:x\/(?:cover|page)|.+?\/p\/topic)\/|(?:3g|m)\.v\.qq\.com|w(?:ww)?\.mgtv\.com\/[a-z]\/|www\.mgtv\.com\/act\/|m\.mgtv\.com\/b\/|www\.iqiyi\.com\/(?:[vw]_|kszt\/)|www\.iq\.com\/play\/|m\.iqiyi\.com\/(?:v_|$)|tw\.iqiyi\.com\/v_|tv\.sohu\.com\/v\/|m\.tv\.sohu\.com\/(?:u\/|v|phone_play_film\?aid=)|film\.sohu\.com\/album\/|www\.le\.com\/ptv\/vplay\/|m\.le\.com\/vplay_|[vm]\.pptv\.com\/show\/|(?:[^\/]+?\.)?1905\.com\/(?:m|.*?play)\/|www\.ixigua\.com\/|(?:player|live)\.bilibili\.com\/|www\.bilibili\.com\/(?:(?:cheese|bangumi)\/play|blackboard|.*?video)\/|m\.bilibili\.com\/bangumi\/play\/|.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:search|jx|url|id|v|&[^\/]+?|_\w+?|\.html\?\w+?)[&#=\?]https?(?::\/\/|%3A%2F%2F)[^\/]+?\.(?:youku|fun|miguvideo|wasu|tudou|qq|mgtv|iqiyi|iq|sohu|le|pptv|1905|bilibili|ixigua)\.))/)){let 规则设置,个人自定义全局接口,电脑json全局播放器,手机json全局播放器,禁止爬虫的接口名称,禁止爬虫的接口域名关键字,强制小窗口的爬虫接口名称,强制小窗口的爬虫接口域名关键字,自动切换接口白名单的爬虫接口名称,自动切换接口白名单的爬虫接口域名关键字,取消记忆接口白名单的爬虫接口名称,取消记忆接口白名单的爬虫接口域名关键字,全局自定义屏蔽接口,电脑json播放器,手机json播放器,禁止爬虫接口名称,禁止爬虫接口域名关键字,强制小窗口爬虫接口名称,强制小窗口爬虫接口域名关键字,自动切换接口白名单爬虫接口名称,自动切换接口白名单爬虫接口域名关键字,取消记忆接口白名单爬虫接口名称,取消记忆接口白名单爬虫接口域名关键字,屏蔽接口;
/* ***** 全局设置区域（没有自定义规则的时候就走这设置） ***** */
/* ** 自定义修改 Josn 全局播放器地址 （必须是 https 类型）** */
电脑json全局播放器="https://auete.com/api/dp.php?url=";
手机json全局播放器="https://auete.com/api/dp.php?url=";
/* ***** 全局设置区域（有自定义规则的时候，这里也生效） ***** */
/* ********填入想屏蔽的接口名称，屏蔽多个用 | 隔开********** */
全局自定义屏蔽接口="百域阁|米侠";
/* *******爬虫相关设置，多个 名称 或 域名 用 | 隔开********* */
禁止爬虫的接口名称="全民解析|无名小站|视觉|月亮|高途|奈菲|(?:Json|瓜瓜)?免嗅|嗅探|7k|m1907|qiqtv|Preference|.*?六神.*?|米侠|待添加";
禁止爬虫的接口域名关键字="qianfreecloud|quanming|(?:youyitv|jiubojx|91jxs|7cyd|tv920|vodjx)\.|Demo|Parallel|Sequence";
强制小窗口的爬虫接口名称="null";
强制小窗口的爬虫接口域名关键字="null";
自动切换接口白名单的爬虫接口名称="null";
自动切换接口白名单的爬虫接口域名关键字="null";
取消记忆接口白名单的爬虫接口名称="null";
取消记忆接口白名单的爬虫接口域名关键字="null";
/* ********************************************** */规则设置=[
/* ** 规则设置区域（这里设置的 域名 下相关参数不走全局设置） ** */
/* ************** 网站名称可以写，你也可以不写 ************** */



/* ******************************************************* */
];try{if(JSON.stringify(规则设置)!='[]'){for(规则设置 of 规则设置){if((location.host.match(规则设置.网站域名))&&规则设置.网站域名){if(!document.querySelector('[\u89c4\u5219\u8bbe\u7f6e]')){document.querySelector("html").setAttribute("\u89c4\u5219\u8bbe\u7f6e","");try{if(规则设置.电脑json全局播放器){if(规则设置.电脑json全局播放器==''){电脑json播放器=电脑json全局播放器;}else{电脑json播放器=规则设置.电脑json全局播放器;}}else{电脑json播放器=电脑json全局播放器;}}catch(e){电脑json播放器=电脑json全局播放器;}try{if(规则设置.手机json全局播放器){if(规则设置.手机json全局播放器==''){手机json播放器=手机json全局播放器;}else{手机json播放器=规则设置.手机json全局播放器;}}else{手机json播放器=手机json全局播放器;}}catch(e){手机json播放器=手机json全局播放器;}try{if(规则设置.全局自定义屏蔽接口){if(规则设置.全局自定义屏蔽接口==''){屏蔽接口=全局自定义屏蔽接口;}else{屏蔽接口=规则设置.全局自定义屏蔽接口+'|'+全局自定义屏蔽接口;}}else{屏蔽接口=全局自定义屏蔽接口;}}catch(e){屏蔽接口=全局自定义屏蔽接口;}try{if(规则设置.禁止爬虫的接口名称){if(规则设置.禁止爬虫的接口名称==''){禁止爬虫接口名称=禁止爬虫的接口名称;}else{禁止爬虫接口名称=规则设置.禁止爬虫的接口名称+'|'+禁止爬虫的接口名称;}}else{禁止爬虫接口名称=禁止爬虫的接口名称;}}catch(e){禁止爬虫接口名称=禁止爬虫的接口名称;}try{if(规则设置.禁止爬虫的接口域名关键字){if(规则设置.禁止爬虫的接口域名关键字==''){禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;}else{禁止爬虫接口域名关键字=规则设置.禁止爬虫的接口域名关键字+'|'+禁止爬虫的接口域名关键字;}}else{禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;}}catch(e){禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;}try{if(规则设置.强制小窗口的爬虫接口名称){if(规则设置.强制小窗口的爬虫接口名称==''){强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;}else{强制小窗口爬虫接口名称=规则设置.强制小窗口的爬虫接口名称+'|'+强制小窗口的爬虫接口名称;}}else{强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;}}catch(e){强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;}try{if(规则设置.强制小窗口的爬虫接口域名关键字){if(规则设置.强制小窗口的爬虫接口域名关键字==''){强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}else{强制小窗口爬虫接口域名关键字=规则设置.强制小窗口的爬虫接口域名关键字+'|'+强制小窗口的爬虫接口域名关键字;}}else{强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}}catch(e){强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}try{if(规则设置.自动切换接口白名单的爬虫接口名称){if(规则设置.自动切换接口白名单的爬虫接口名称==''){自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;}else{自动切换接口白名单爬虫接口名称=规则设置.自动切换接口白名单的爬虫接口名称+'|'+自动切换接口白名单的爬虫接口名称;}}else{自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;}}catch(e){自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;}try{if(规则设置.自动切换接口白名单的爬虫接口域名关键字){if(规则设置.自动切换接口白名单的爬虫接口域名关键字==''){自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;}else{自动切换接口白名单爬虫接口域名关键字=规则设置.自动切换接口白名单的爬虫接口域名关键字+'|'+自动切换接口白名单的爬虫接口域名关键字;}}else{自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;}}catch(e){自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;}try{if(规则设置.取消记忆接口白名单的爬虫接口名称){if(规则设置.取消记忆接口白名单的爬虫接口名称==''){取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;}else{取消记忆接口白名单爬虫接口名称=规则设置.取消记忆接口白名单的爬虫接口名称+'|'+取消记忆接口白名单的爬虫接口名称;}}else{取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;}}catch(e){取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;}try{if(规则设置.取消记忆接口白名单的爬虫接口域名关键字){if(规则设置.取消记忆接口白名单的爬虫接口域名关键字==''){取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}else{取消记忆接口白名单爬虫接口域名关键字=规则设置.取消记忆接口白名单的爬虫接口域名关键字+'|'+取消记忆接口白名单的爬虫接口域名关键字;}}else{取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}}catch(e){取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}}}else{if(!规则设置.网站域名){if(!document.querySelector('[\u89c4\u5219\u8bbe\u7f6e]')&&!document.querySelector('[\u8bbe\u7f6e\u5224\u65ad]')){document.querySelector("html").setAttribute("\u8bbe\u7f6e\u5224\u65ad","");try{if(规则设置.电脑json全局播放器){if(规则设置.电脑json全局播放器==''){电脑json播放器=电脑json全局播放器;}else{电脑json播放器=规则设置.电脑json全局播放器;}}else{电脑json播放器=电脑json全局播放器;}}catch(e){电脑json播放器=电脑json全局播放器;}try{if(规则设置.手机json全局播放器){if(规则设置.手机json全局播放器==''){手机json播放器=手机json全局播放器;}else{手机json播放器=规则设置.手机json全局播放器;}}else{手机json播放器=手机json全局播放器;}}catch(e){手机json播放器=手机json全局播放器;}try{if(规则设置.全局自定义屏蔽接口){if(规则设置.全局自定义屏蔽接口==''){屏蔽接口=全局自定义屏蔽接口;}else{屏蔽接口=规则设置.全局自定义屏蔽接口+'|'+全局自定义屏蔽接口;}}else{屏蔽接口=全局自定义屏蔽接口;}}catch(e){屏蔽接口=全局自定义屏蔽接口;}try{if(规则设置.禁止爬虫的接口名称){if(规则设置.禁止爬虫的接口名称==''){禁止爬虫接口名称=禁止爬虫的接口名称;}else{禁止爬虫接口名称=规则设置.禁止爬虫的接口名称+'|'+禁止爬虫的接口名称;}}else{禁止爬虫接口名称=禁止爬虫的接口名称;}}catch(e){禁止爬虫接口名称=禁止爬虫的接口名称;}try{if(规则设置.禁止爬虫的接口域名关键字){if(规则设置.禁止爬虫的接口域名关键字==''){禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;}else{禁止爬虫接口域名关键字=规则设置.禁止爬虫的接口域名关键字+'|'+禁止爬虫的接口域名关键字;}}else{禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;}}catch(e){禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;}try{if(规则设置.强制小窗口的爬虫接口名称){if(规则设置.强制小窗口的爬虫接口名称==''){强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;}else{强制小窗口爬虫接口名称=规则设置.强制小窗口的爬虫接口名称+'|'+强制小窗口的爬虫接口名称;}}else{强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;}}catch(e){强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;}try{if(规则设置.强制小窗口的爬虫接口域名关键字){if(规则设置.强制小窗口的爬虫接口域名关键字==''){强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}else{强制小窗口爬虫接口域名关键字=规则设置.强制小窗口的爬虫接口域名关键字+'|'+强制小窗口的爬虫接口域名关键字;}}else{强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}}catch(e){强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}try{if(规则设置.自动切换接口白名单的爬虫接口名称){if(规则设置.自动切换接口白名单的爬虫接口名称==''){自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;}else{自动切换接口白名单爬虫接口名称=规则设置.自动切换接口白名单的爬虫接口名称+'|'+自动切换接口白名单的爬虫接口名称;}}else{自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;}}catch(e){自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;}try{if(规则设置.自动切换接口白名单的爬虫接口域名关键字){if(规则设置.自动切换接口白名单的爬虫接口域名关键字==''){自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;}else{自动切换接口白名单爬虫接口域名关键字=规则设置.自动切换接口白名单的爬虫接口域名关键字+'|'+自动切换接口白名单的爬虫接口域名关键字;}}else{自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;}}catch(e){自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;}try{if(规则设置.取消记忆接口白名单的爬虫接口名称){if(规则设置.取消记忆接口白名单的爬虫接口名称==''){取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;}else{取消记忆接口白名单爬虫接口名称=规则设置.取消记忆接口白名单的爬虫接口名称+'|'+取消记忆接口白名单的爬虫接口名称;}}else{取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;}}catch(e){取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;}try{if(规则设置.取消记忆接口白名单的爬虫接口域名关键字){if(规则设置.取消记忆接口白名单的爬虫接口域名关键字==''){取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}else{取消记忆接口白名单爬虫接口域名关键字=规则设置.取消记忆接口白名单的爬虫接口域名关键字+'|'+取消记忆接口白名单的爬虫接口域名关键字;}}else{取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}}catch(e){取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}}}}}}else{屏蔽接口=全局自定义屏蔽接口;电脑json播放器=电脑json全局播放器;手机json播放器=手机json全局播放器;禁止爬虫接口名称=禁止爬虫的接口名称;禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;}}catch(e){alert('你的规则设置有问题:\n\n'+e);屏蔽接口=全局自定义屏蔽接口;电脑json播放器=电脑json全局播放器;手机json播放器=手机json全局播放器;禁止爬虫接口名称=禁止爬虫的接口名称;禁止爬虫接口域名关键字=禁止爬虫的接口域名关键字;强制小窗口爬虫接口名称=强制小窗口的爬虫接口名称;强制小窗口爬虫接口域名关键字=强制小窗口的爬虫接口域名关键字;自动切换接口白名单爬虫接口名称=自动切换接口白名单的爬虫接口名称;自动切换接口白名单爬虫接口域名关键字=自动切换接口白名单的爬虫接口域名关键字;取消记忆接口白名单爬虫接口名称=取消记忆接口白名单的爬虫接口名称;取消记忆接口白名单爬虫接口域名关键字=取消记忆接口白名单的爬虫接口域名关键字;}try{if(电脑json播放器==null||电脑json播放器==undefined||电脑json播放器==''){localStorage.setItem('电脑Json全局播放器',电脑json全局播放器);}else{localStorage.setItem('电脑Json全局播放器',电脑json播放器);}}catch(e){localStorage.setItem('电脑Json全局播放器',电脑json播放器);}try{if(手机json播放器==null||手机json播放器==undefined||手机json播放器==''){localStorage.setItem('手机Json全局播放器',手机json全局播放器);}else{localStorage.setItem('手机Json全局播放器',手机json播放器);}}catch(e){localStorage.setItem('手机Json全局播放器',手机json播放器);}if(location.host.match(主流网站域名)){function 自动点击(zdya,zdyb){try{if(location.host.match(zdya)){sessionStorage.setItem('自定义点击接口',JSON.stringify(zdyb.split("|")));}}catch(e){alert('你的 自动点击 有问题:\n\n'+e);}};
/* *******填入想自动点击的接口名称，多个接口用 | 隔开******* */
//写法例子：
//自动点击('qq','宝儿|九三|宝儿|夫妻');




/* ************************************* */try{个人自定义全局接口=[
/* **************** 自定义添加接口 ************************* */
//写法例子：
//{name:"自动点击",vip:"自动点击",jxb:"原",jj:"1",diy:"burlywood",j:"电脑",sj:"0",title:"根据 自定义设置 的 解析接口数组，进行 自动点击接口"},
//{name:"PAR",url:"https://jx.bozrc.com:4433/player/?url="},









  
  

/* ******************************************************* */
];if(JSON.stringify(个人自定义全局接口).match(/(?<!(?:\*|\/\/)\s*?)[\}\[]\s*?(?:,\s*?)?(?:NaN|null|undefined)/i)){localStorage.setItem('江小白猫源接口','[]');alert('222辅助脚本\n\n个人自定义全局接口，请自行检测出错的地方');}else{localStorage.setItem('江小白猫源接口',JSON.stringify(个人自定义全局接口));}}catch(e){localStorage.setItem('江小白猫源接口','[]');alert('222辅助脚本\n\n个人自定义全局接口  有问题:\n\n'+e);}try{if(禁止爬虫接口名称==null||禁止爬虫接口名称==undefined||禁止爬虫接口名称==''){localStorage.setItem('禁止爬虫的接口名称',禁止爬虫的接口名称);}else{localStorage.setItem('禁止爬虫的接口名称',禁止爬虫接口名称);}}catch(e){localStorage.setItem('禁止爬虫的接口名称',禁止爬虫接口名称);}try{if(禁止爬虫接口域名关键字==null||禁止爬虫接口域名关键字==undefined||禁止爬虫接口域名关键字==''){localStorage.setItem('禁止爬虫的接口域名关键字',禁止爬虫的接口域名关键字);}else{localStorage.setItem('禁止爬虫的接口域名关键字',禁止爬虫接口域名关键字);}}catch(e){localStorage.setItem('禁止爬虫的接口域名关键字',禁止爬虫接口域名关键字);}try{if(强制小窗口爬虫接口名称==null||强制小窗口爬虫接口名称==undefined||强制小窗口爬虫接口名称==''){localStorage.setItem('强制小窗口的爬虫接口名称',强制小窗口的爬虫接口名称);}else{localStorage.setItem('强制小窗口的爬虫接口名称',强制小窗口爬虫接口名称);}}catch(e){localStorage.setItem('强制小窗口的爬虫接口名称',强制小窗口爬虫接口名称);}try{if(强制小窗口爬虫接口域名关键字==null||强制小窗口爬虫接口域名关键字==undefined||强制小窗口爬虫接口域名关键字==''){localStorage.setItem('强制小窗口的爬虫接口域名关键字',强制小窗口的爬虫接口域名关键字);}else{localStorage.setItem('强制小窗口的爬虫接口域名关键字',强制小窗口爬虫接口域名关键字);}}catch(e){localStorage.setItem('强制小窗口的爬虫接口域名关键字',强制小窗口爬虫接口域名关键字);}try{if(自动切换接口白名单爬虫接口名称==null||自动切换接口白名单爬虫接口名称==undefined||自动切换接口白名单爬虫接口名称==''){localStorage.setItem('自动切换接口白名单的爬虫接口名称',自动切换接口白名单的爬虫接口名称);}else{localStorage.setItem('自动切换接口白名单的爬虫接口名称',自动切换接口白名单爬虫接口名称);}}catch(e){localStorage.setItem('自动切换接口白名单的爬虫接口名称',自动切换接口白名单爬虫接口名称);}try{if(自动切换接口白名单爬虫接口域名关键字==null||自动切换接口白名单爬虫接口域名关键字==undefined||自动切换接口白名单爬虫接口域名关键字==''){localStorage.setItem('自动切换接口白名单的爬虫接口域名关键字',自动切换接口白名单的爬虫接口域名关键字);}else{localStorage.setItem('自动切换接口白名单的爬虫接口域名关键字',自动切换接口白名单爬虫接口域名关键字);}}catch(e){localStorage.setItem('自动切换接口白名单的爬虫接口域名关键字',自动切换接口白名单爬虫接口域名关键字);}try{if(取消记忆接口白名单爬虫接口名称==null||取消记忆接口白名单爬虫接口名称==undefined||取消记忆接口白名单爬虫接口名称==''){localStorage.setItem('取消记忆接口白名单的爬虫接口名称',取消记忆接口白名单的爬虫接口名称);}else{localStorage.setItem('取消记忆接口白名单的爬虫接口名称',取消记忆接口白名单爬虫接口名称);}}catch(e){localStorage.setItem('取消记忆接口白名单的爬虫接口名称',取消记忆接口白名单爬虫接口名称);}try{if(取消记忆接口白名单爬虫接口域名关键字==null||取消记忆接口白名单爬虫接口域名关键字==undefined||取消记忆接口白名单爬虫接口域名关键字==''){localStorage.setItem('取消记忆接口白名单的爬虫接口域名关键字',取消记忆接口白名单的爬虫接口域名关键字);}else{localStorage.setItem('取消记忆接口白名单的爬虫接口域名关键字',取消记忆接口白名单爬虫接口域名关键字);}}catch(e){localStorage.setItem('取消记忆接口白名单的爬虫接口域名关键字',取消记忆接口白名单爬虫接口域名关键字);}let zdyjkpbobj=setInterval(function(){try{if(document.querySelector("ul#httpsvipul>li:last-of-type")){const zdyjkpb=document.querySelectorAll('ul#httpsvipul>li');for(let zdyjkpbi=0;zdyjkpbi<zdyjkpb.length;zdyjkpbi++){const zdyjkpbmsa=zdyjkpb[zdyjkpbi].querySelectorAll('a4');for(let zdyjkpbia=0;zdyjkpbia<zdyjkpbmsa.length;zdyjkpbia++){try{if(屏蔽接口==null||屏蔽接口==undefined||屏蔽接口==''){if(zdyjkpbmsa[zdyjkpbia].innerText.match(全局自定义屏蔽接口)){zdyjkpb[zdyjkpbi].setAttribute('style','display:none!important');}}else{if(zdyjkpbmsa[zdyjkpbia].innerText.match(屏蔽接口)){zdyjkpb[zdyjkpbi].setAttribute('style','display:none!important');}}}catch(e){if(zdyjkpbmsa[zdyjkpbia].innerText.match(屏蔽接口)){zdyjkpb[zdyjkpbi].setAttribute('style','display:none!important');}}};};clearInterval(zdyjkpbobj);}else{}}catch(e){clearInterval(zdyjkpbobj);}},1234);}}}else{return false;}};try{if(location.host.match(主流网站域名)){if(typeof GM_registerMenuCommand==="function"){let main={addButton(){rczdyobj();},getRule(){return GM_getValue('white_list')?GM_getValue('white_list'):[];},setRule(arr){GM_setValue('white_list',arr);},initSetting(){let whiteList=main.getRule();let host=location.host;let hostobj=document.domain.replace(/^(?:[^\.]+?\.)?([^\.]+?)\..*$/,"$1");if(whiteList.includes(host)){GM_registerMenuCommand('该《 '+hostobj+' 》网站 启用 此脚本',()=>{let index=whiteList.indexOf(host);whiteList.splice(index,1);this.setRule(whiteList);history.go(0);});}else{GM_registerMenuCommand('该《 '+hostobj+' 》网站 禁用 此脚本',()=>{whiteList.push(host);this.setRule(whiteList);history.go(0);});}}};main.initSetting();if(main.getRule().includes(location.host)){return;}else{main.addButton();}}else{rczdyobj();}}else{rczdyobj();}}catch(e){rczdyobj();}}else{return false;}})();