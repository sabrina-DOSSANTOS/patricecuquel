import{m as l}from"./vuex.esm.19624049.js";import{e as o}from"./em.090410fb.js";import{G as r,a as d}from"./Row.67f2b082.js";import{S as c}from"./External.d2f08f8f.js";import{n as g}from"./_plugin-vue2_normalizer.d86aa1f3.js";const f=""+window.__aioseoDynamicImportPreload__("images/team.3ed1e959.jpg"),u=""+window.__aioseoDynamicImportPreload__("images/om.0afa29dd.png"),m=""+window.__aioseoDynamicImportPreload__("images/wpforms.e4bb2893.png"),h=""+window.__aioseoDynamicImportPreload__("images/mi.b3a4b48a.png"),p=""+window.__aioseoDynamicImportPreload__("images/smtp.90e4ffc1.png"),_=""+window.__aioseoDynamicImportPreload__("images/sp.d75c9a95.png"),w=""+window.__aioseoDynamicImportPreload__("images/tp.cb8065a4.png"),v=""+window.__aioseoDynamicImportPreload__("images/rafflepress.cda6b4e0.png"),y=""+window.__aioseoDynamicImportPreload__("images/ff.4f882f43.png"),P=""+window.__aioseoDynamicImportPreload__("images/if.4735a5da.png"),b=""+window.__aioseoDynamicImportPreload__("images/tf.75d64979.png"),$=""+window.__aioseoDynamicImportPreload__("images/yf.28cad2d7.png"),I=""+window.__aioseoDynamicImportPreload__("images/pe.3e9da367.png"),A=""+window.__aioseoDynamicImportPreload__("svg/swp.10222930.svg"),C=""+window.__aioseoDynamicImportPreload__("images/afwp.57d92ab4.png"),U=""+window.__aioseoDynamicImportPreload__("images/wpsp.100012d1.png"),k=""+window.__aioseoDynamicImportPreload__("images/edd.c2984766.png"),D=""+window.__aioseoDynamicImportPreload__("images/sc.5c5e705b.png");const S={components:{GridColumn:r,GridRow:d,SvgExternal:c},data(){return{teamImg:f,localPlugins:[],networkActivated:[],strings:{welcome:{p1:this.$t.sprintf(this.$t.__("Welcome to %1$s, the original SEO plugin for WordPress. At %2$s, we build software that helps you rank your website in search results and gain organic traffic.",this.$td),"All in One SEO","All in One SEO"),p2:this.$t.__("Over the years, we found that most other WordPress SEO plugins were bloated, buggy, slow, and very hard to use. So we designed our plugin as an easy and powerful tool.",this.$td),p3:this.$t.__("Our goal is to take the pain out of optimizing your website for search engines.",this.$td),p4:this.$t.sprintf(this.$t.__("%1$s is brought to you by %2$s, the same team that\u2019s behind the largest WordPress resource site, WPBeginner, the most popular lead-generation software, OptinMonster, the best WordPress analytics plugin, MonsterInsights and many more.",this.$td),"All in One SEO","Awesome Motive"),p5:this.$t.__("Yup, we know a thing or two about building awesome products that customers love.",this.$td),imageCaption:this.$t.sprintf(this.$t.__("The %1$s Team",this.$td),"Awesome Motive")},plugins:{actions:{install:this.$t.__("Install Plugin",this.$td),activate:this.$t.__("Activate",this.$td),manage:this.$t.__("Manage",this.$td)},status:this.$t.__("Status:",this.$td),statuses:{activated:this.$t.__("Activated",this.$td),deactivated:this.$t.__("Deactivated",this.$td),notInstalled:this.$t.__("Not Installed",this.$td)}}},pluginData:{optinMonster:{name:"OptinMonster",description:this.$t.__("Instantly get more subscribers, leads, and sales with the #1 conversion optimization toolkit. Create high converting popups, announcement bars, spin a wheel, and more with smart targeting and personalization.",this.$td),icon:this.$getAssetUrl(u),installed:!1,canInstall:!1,activated:!1,loading:!1},wpForms:{name:"WPForms",description:this.$t.__("The best drag & drop WordPress form builder. Easily create beautiful contact forms, surveys, payment forms, and more with our 100+ form templates. Trusted by over 4 million websites as the best forms plugin.",this.$td),icon:this.$getAssetUrl(m),installed:!1,canInstall:!1,activated:!1,loading:!1},wpFormsPro:{name:"WPForms Pro",free:"wpForms",installed:!1,canInstall:!1,activated:!1,loading:!1},miLite:{name:"MonsterInsights",description:this.$t.__("The leading WordPress analytics plugin that shows you how people find and use your website, so you can make data driven decisions to grow your business. Properly set up Google Analytics without writing code.",this.$td),icon:this.$getAssetUrl(h),installed:!1,canInstall:!1,activated:!1,loading:!1},miPro:{name:"MonsterInsights Pro",free:"miLite",installed:!1,canInstall:!1,activated:!1,loading:!1},emLite:{name:"ExactMetrics",description:this.$t.__("The ExactMetrics Google Analytics for WordPress plugin helps you properly setup all the powerful Google Analytics tracking features without writing any code or hiring a developer.",this.$td),icon:this.$getAssetUrl(o),installed:!1,canInstall:!1,activated:!1,loading:!1},emPro:{name:"ExactMetrics Pro",free:"emLite",installed:!1,canInstall:!1,activated:!1,loading:!1},wpMail:{name:"WP Mail SMTP",description:this.$t.__("Improve your WordPress email deliverability and make sure that your website emails reach user\u2019s inbox with the #1 SMTP plugin for WordPress. Over 2 million websites use it to fix WordPress email issues.",this.$td),icon:this.$getAssetUrl(p),installed:!1,canInstall:!1,activated:!1,loading:!1},wpMailPro:{name:"WP Mail SMTP Pro",free:"wpMail",installed:!1,canInstall:!1,activated:!1,loading:!1},seedProd:{name:"SeedProd Coming Soon",description:this.$t.__("The fastest drag & drop landing page builder for WordPress. Create custom landing pages without writing code, connect them with your CRM, collect subscribers, and grow your audience. Trusted by 1 million sites.",this.$td),icon:this.$getAssetUrl(_),installed:!1,canInstall:!1,activated:!1,loading:!1},seedProdPro:{name:"SeedProd Coming Soon Pro",free:"seedProd",installed:!1,canInstall:!1,activated:!1,loading:!1},trustPulse:{name:"TrustPulse",description:this.$t.__("Boost your sales and conversions by up to 15% with real-time social proof notifications. TrustPulse helps you show live user activity and purchases to help convince other users to purchase.",this.$td),icon:this.$getAssetUrl(w),installed:!1,canInstall:!1,activated:!1,loading:!1},rafflePress:{name:"RafflePress",description:this.$t.__("Turn your website visitors into brand ambassadors! Easily grow your email list, website traffic, and social media followers with the most powerful giveaways & contests plugin for WordPress.",this.$td),icon:this.$getAssetUrl(v),installed:!1,canInstall:!1,activated:!1,loading:!1},rafflePressPro:{name:"RafflePress Pro",free:"rafflePress",installed:!1,canInstall:!1,activated:!1,loading:!1},facebookFeed:{name:"Smash Balloon Facebook Feeds",description:this.$t.__("Easily display Facebook content on your WordPress site without writing any code. Comes with multiple templates, ability to embed albums, group content, reviews, live videos, comments, and reactions.",this.$td),icon:this.$getAssetUrl(y),installed:!1,canInstall:!1,activated:!1,loading:!1},facebookFeedPro:{name:"Smash Balloon Facebook Feeds Pro",free:"facebookFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},instagramFeed:{name:"Smash Balloon Instagram Feeds",description:this.$t.__("Easily display Instagram content on your WordPress site without writing any code. Comes with multiple templates, ability to show content from multiple accounts, hashtags, and more. Trusted by 1 million websites.",this.$td),icon:this.$getAssetUrl(P),installed:!1,canInstall:!1,activated:!1,loading:!1},instagramFeedPro:{name:"Smash Balloon Instagram Feeds Pro",free:"instagramFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},twitterFeed:{name:"Smash Balloon Twitter Feeds",description:this.$t.__("Easily display Twitter content in WordPress without writing any code. Comes with multiple layouts, ability to combine multiple Twitter feeds, Twitter card support, tweet moderation, and more.",this.$td),icon:this.$getAssetUrl(b),installed:!1,canInstall:!1,activated:!1,loading:!1},twitterFeedPro:{name:"Smash Balloon Twitter Feeds Pro",free:"twitterFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},youTubeFeed:{name:"Smash Balloon YouTube Feeds",description:this.$t.__("Easily display YouTube videos on your WordPress site without writing any code. Comes with multiple layouts, ability to embed live streams, video filtering, ability to combine multiple channel videos, and more.",this.$td),icon:this.$getAssetUrl($),installed:!1,canInstall:!1,activated:!1,loading:!1},youTubeFeedPro:{name:"Smash Balloon YouTube Feeds Pro",free:"youTubeFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},pushEngage:{name:"PushEngage",description:this.$t.__("Connect with your visitors after they leave your website with the leading web push notification software. Over 10,000+ businesses worldwide use PushEngage to send 9 billion notifications each month.",this.$td),icon:this.$getAssetUrl(I),installed:!1,canInstall:!1,activated:!1,loading:!1},searchWp:{name:"SearchWP",description:this.$t.__("The most advanced WordPress search plugin. Customize your WordPress search algorithm, reorder search results, track search metrics, and everything you need to leverage search to grow your business.",this.$td),icon:this.$getAssetUrl(A),installed:!1,canInstall:!1,activated:!1,loading:!1,installUrl:this.$links.utmUrl("aioseo","about-us","https://searchwp.com/")},affiliateWp:{name:"AffiliateWP",description:this.$t.__("The #1 affiliate management plugin for WordPress. Easily create an affiliate program for your eCommerce store or membership site within minutes and start growing your sales with the power of referral marketing.",this.$td),icon:this.$getAssetUrl(C),installed:!1,canInstall:!1,activated:!1,loading:!1,installUrl:this.$links.utmUrl("aioseo","about-us","https://affiliatewp.com/")},wpSimplePay:{name:"WP Simple Pay",description:this.$t.__("The #1 Stripe payments plugin for WordPress. Start accepting one-time and recurring payments on your WordPress site without setting up a shopping cart. No code required.",this.$td),icon:this.$getAssetUrl(U),installed:!1,canInstall:!1,activated:!1,loading:!1},wpSimplePayPro:{name:"WP Simple Pay Pro",free:"wpSimplePay",installed:!1,canInstall:!1,activated:!1,loading:!1},easyDigitalDownloads:{name:"Easy Digital Downloads",description:this.$t.__("The best WordPress eCommerce plugin for selling digital downloads. Start selling eBooks, software, music, digital art, and more within minutes. Accept payments, manage subscriptions, advanced access control, and more.",this.$td),icon:this.$getAssetUrl(k),installed:!1,canInstall:!1,activated:!1,loading:!1},sugarCalendar:{name:"Sugar Calendar",description:this.$t.__("A simple & powerful event calendar plugin for WordPress that comes with all the event management features including payments, scheduling, timezones, ticketing, recurring events, and more.",this.$td),icon:this.$getAssetUrl(D),installed:!1,canInstall:!1,activated:!1,loading:!1},sugarCalendarPro:{name:"Sugar Calendar Pro",free:"sugarCalendar",installed:!1,canInstall:!1,activated:!1,loading:!1}}}},methods:{...l(["installPlugins"]),activate(s){if(!this.plugins[s].installed&&this.plugins[s].installUrl){window.open(this.plugins[s].installUrl,"_blank").focus();return}this.plugins[s].loading=!0,this.installPlugins([{plugin:s,type:"plugin"}]).then(t=>{if(this.plugins[s].loading=!1,Object.keys(t.body.completed).length)this.plugins[s].installed=!0,this.plugins[s].activated=!0,this.$aioseo.data.isNetworkAdmin&&this.networkActivated.push(s);else if(Object.keys(t.body.failed).length)throw new Error(t.body.failed)}).catch(t=>{this.plugins[s].loading=!1,console.error(`Unable to install ${s}: ${t}`)})},getPluginAdminUrl(s,t){return!this.$aioseo.data.isNetworkAdmin||!t.networkAdminUrl||!this.networkActivated.includes(s)?t.adminUrl:t.networkAdminUrl}},computed:{plugins(){return Object.keys(this.localPlugins).forEach(s=>{this.pluginData[s].free&&(this.pluginData[s].description=this.pluginData[this.pluginData[s].free].description,this.pluginData[s].icon=this.pluginData[this.pluginData[s].free].icon)}),this.pluginData}},mounted(){this.localPlugins={...this.$aioseo.plugins},Object.keys(this.localPlugins).forEach(s=>{this.pluginData[s].installed=this.localPlugins[s].installed,this.pluginData[s].canInstall=this.localPlugins[s].canInstall,this.pluginData[s].canActivate=this.localPlugins[s].canActivate,this.pluginData[s].activated=this.localPlugins[s].activated,this.plugins[s].free&&(this.localPlugins[s].installed?delete this.localPlugins[this.plugins[s].free]:delete this.localPlugins[s])})}};var W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-about-us"},[e("div",{staticClass:"aioseo-about-us-welcome"},[e("div",{staticClass:"welcome-intro"},[e("div",[t._v(t._s(t.strings.welcome.p1))]),e("div",[t._v(t._s(t.strings.welcome.p2))]),e("div",[t._v(t._s(t.strings.welcome.p3))]),e("div",[t._v(t._s(t.strings.welcome.p4))]),e("div",[t._v(t._s(t.strings.welcome.p5))])]),e("div",{staticClass:"welcome-image"},[e("figure",[e("img",{attrs:{src:t.$getAssetUrl(t.teamImg),alt:t.strings.welcome.imageCaption}}),e("figcaption",[t._v(t._s(t.strings.welcome.imageCaption))])])])]),e("div",{staticClass:"aioseo-about-us-plugins"},[e("grid-row",t._l(t.localPlugins,function(i,a){return e("grid-column",{key:a,staticClass:"plugin",attrs:{sm:"12",md:"6",id:a}},[e("div",{staticClass:"plugin-main"},[e("div",[e("img",{attrs:{alt:t.plugins[a].name+" Plugin image",src:t.plugins[a].icon}})]),e("div",[e("div",{staticClass:"main-name"},[t._v(t._s(t.plugins[a].name))]),e("div",[t._v(t._s(t.plugins[a].description))])])]),e("div",{staticClass:"plugin-footer"},[e("div",{staticClass:"footer-status"},[e("div",{staticClass:"footer-status-label"},[t._v(t._s(t.strings.plugins.status))]),t.plugins[a].installed?t._e():e("div",{staticClass:"footer-status footer-status-not-installed"},[t._v(" "+t._s(t.strings.plugins.statuses.notInstalled)+" ")]),t.plugins[a].installed&&!t.plugins[a].activated?e("div",{staticClass:"footer-status footer-status-deactivated"},[t._v(" "+t._s(t.strings.plugins.statuses.deactivated)+" ")]):t._e(),t.plugins[a].installed&&t.plugins[a].activated?e("div",{staticClass:"footer-status footer-status-activated"},[t._v(" "+t._s(t.strings.plugins.statuses.activated)+" ")]):t._e()]),e("div",{staticClass:"footer-action"},[!t.plugins[a].installed&&t.plugins[a].canInstall?e("base-button",{attrs:{type:"blue",loading:t.plugins[a].loading},on:{click:function(n){return t.activate(a)}}},[t._v(" "+t._s(t.strings.plugins.actions.install)+" ")]):t._e(),!t.plugins[a].installed&&!t.plugins[a].canInstall?e("base-button",{attrs:{type:"blue",tag:"a",target:"_blank",href:i.wpLink}},[e("svg-external"),t._v(" "+t._s(t.strings.plugins.actions.install)+" ")],1):t._e(),t.plugins[a].installed&&!t.plugins[a].activated?e("base-button",{attrs:{type:"green",disabled:!t.plugins[a].canActivate,loading:t.plugins[a].loading},on:{click:function(n){return t.activate(a)}}},[t._v(" "+t._s(t.strings.plugins.actions.activate)+" ")]):t._e(),t.plugins[a].installed&&t.plugins[a].activated&&t.getPluginAdminUrl(a,i).length!==0?e("base-button",{attrs:{type:"gray",tag:"a",href:t.getPluginAdminUrl(a,i)}},[t._v(" "+t._s(t.strings.plugins.actions.manage)+" ")]):t._e()],1)])])}),1)],1)])},T=[],F=g(S,W,T,!1,null,null,null,null);const L=F.exports;export{L as default};