(this.webpackJsonppullmoonweb=this.webpackJsonppullmoonweb||[]).push([[0],{12:function(e,a,s){"use strict";s.r(a);var t=s(1),n=s.n(t),c=s(4),r=s.n(c),o=(s(9),s(2)),i=s(0),u=function(e){var a=e.content,s=Object(t.useState)(!1),n=Object(o.a)(s,2),c=n[0],r=n[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h4",{children:[a.cmd,a.usages&&Object(i.jsx)("span",{onClick:function(){return r(!c)},style:{color:"#0066cc",cursor:"pointer",fontSize:"60%",marginLeft:9},children:c?"Hide usage":"Show usage"})]}),Object(i.jsx)("p",{children:a.desc}),a.usages&&c&&Object(i.jsx)("ul",{children:a.usages.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{style:{fontFamily:"Consolas"},children:e.usage}),e.param&&Object(i.jsx)("span",{className:"param",style:{marginLeft:3},children:e.param}),e.usageDesc&&Object(i.jsxs)("span",{style:{marginLeft:2},children:[": ",e.usageDesc]})]})}))})]})},l=[{title:"Bot Utilities",body:[{cmd:".ping",desc:"Check the bot's latency in the server",usages:null},{cmd:".invite",desc:"Get the url to invite PullMoon to your server",usages:null},{cmd:".clean",desc:"Delete recent messages of PullMoon chats",usages:null},{cmd:".help",desc:"Give a link to this website",usages:null},{cmd:".feedback",desc:"Give feedback to PullMoon creator",usages:[{usage:".feedback",param:"[your message]",usageDesc:null}]}]},{title:"Random Utilities",body:[{cmd:".steam",desc:"Get release notification of a game",usages:[{usage:".steam notify release",param:"[steam_url]",usageDesc:"Set notification for when the game is released"},{usage:".steam notify v1",param:"[steam_url]",usageDesc:"Set notification for when the game is version 1"}]},{cmd:".weather",desc:"Get the real-time weather of the given city",usages:[{usage:".weather",param:"[city name]",usageDesc:null}]},{cmd:".romanize",desc:"Convert the given text to latin from Japanese or Korean",usages:[{usage:".romanize",param:"[text]",usageDesc:null}]},{cmd:".bitly",desc:"Shorten a URL with bit.ly",usages:[{usage:".bitly",param:"[url]",usageDesc:null}]},{cmd:".redirect",desc:"See where a link will redirect you to if you open it",usages:[{usage:".redirect",param:"[url]",usageDesc:null}]},{cmd:".dice",desc:"Roll a dice or some dices",usages:[{usage:".dice",param:"[n]",usageDesc:"Roll a dice with n eyes"},{usage:".dice",param:"[n] [m]",usageDesc:"Roll n dices with m eyes"}]},{cmd:".rps",desc:"Play rock paper scissors with a friend",usages:[{usage:".rps",param:"[@user]",usageDesc:null}]},{cmd:".jod",desc:"Get the joke of the day",usages:null},{cmd:".qod",desc:"Get the quote of the day",usages:null},{cmd:".avatar",desc:"See the tagged user's avatar",usages:[{usage:".avatar",param:null,usageDesc:"The server's icon"},{usage:".avatar",param:"[@user]",usageDesc:"The user's icon"}]},{cmd:".banner",desc:"See the tagged user's banner",usages:[{usage:".banner",param:"[@user]",usageDesc:null}]},{cmd:".user",desc:"See a simple profile of a user of the given id",usages:[{usage:".user",param:"[@user]",usageDesc:null},{usage:".user",param:"[user_id]",usageDesc:null}]},{cmd:".pickupline",desc:"Get a random pickupline",usages:null},{cmd:".apakah",desc:'The bot will answer with "Ya" or "Tidak" randomly (means "Yes" or "No")',usages:[{usage:".apakah",param:"[some statement]",usageDesc:null}]}]},{title:"Productivity",body:[{cmd:".stackoverflow",desc:"Get questions related to your query from Stackoverflow (alternative command: .so)",usages:[{usage:".stackoverflow",param:"[your question]",usageDesc:null},{usage:".so",param:"[your question]",usageDesc:null}]},{cmd:".kbbi",desc:"(Kamus Besar Bahasa Indonesia) Get the definition of a word",usages:[{usage:".kbbi",param:"[word]",usageDesc:null}]},{cmd:".alarm",desc:"Set an alarm for PullMoon to remind you",usages:[{usage:".alarm",param:"[HH]:[MM] [alarm name]",usageDesc:"Alarm for [HH:MM] today (or tomorrow if already past that hour)"},{usage:".alarm",param:"[how_many_days_from_today] [HH]:[MM] [alarm name]",usageDesc:"Alarm for [HH:MM] on after [n] days"},{usage:".alarm",param:"[DD]/[MM] [HH]:[MM] [alarm name]",usageDesc:"Alarm for day [DD] of month [MM] at [HH:MM]"},{usage:".alarm list",param:null,usageDesc:"See active alarms for that server or DM"}]},{cmd:".vote",desc:"Make a voting poll (can be anonymous if with duration)",usages:[{usage:".vote",param:"[choice1], [choice2], [choice3], [etc]",usageDesc:"Transparent vote"},{usage:".vote",param:"[minute_duration]  [choice1], [choice2], [choice3], [etc]",usageDesc:"Anonymous vote with duration"},{usage:".vote",param:'"[voting title]"  [choice1], [choice2], [choice3], [etc]',usageDesc:"Transparent vote with voting title"},{usage:".vote",param:'[minute_duration]  "[voting title]"  [choice1], [choice2], [choice3], [etc]',usageDesc:"Anonymous vote with duration and voting title"}]},{cmd:".tugas",desc:"See list of assignments for CSUI 2020 students",usages:[{usage:".tugas",param:null,usageDesc:null},{usage:".tugas reminder",param:null,usageDesc:"Toggle the daily reminder of assignments"}]}]},{title:"Website Searching",body:[{cmd:".ig (Deprecated, banned from Instagram of accessing it too much)",desc:"See the instagram profile of the given id",usages:[{usage:".ig",param:"[profile_id]",usageDesc:null}]},{cmd:".9gag",desc:"See recent posts in Hot section",usages:null},{cmd:".mangahere",desc:"Search for a manga in mangahere",usages:[{usage:".mangahere",param:"[manga title]",usageDesc:null}]},{cmd:".valorant",desc:"See the user stats in each map",usages:[{usage:".valorant",param:"[user]#[id]",usageDesc:null}]}]},{title:"Games",body:[{cmd:".uno",desc:"Play UNO with your friends",usages:null},{cmd:".tictactoe",desc:"Challenge someone to play tictactoe with you",usages:[{usage:".tictactoe",param:"[@user]",usageDesc:null}]},{cmd:".connect4",desc:"Challenge someone to play connect 4 with you",usages:[{usage:".connect4",param:"[@user]",usageDesc:null}]},{cmd:".nonogram",desc:"Play nonogram (picross) puzzle",usages:[{usage:".nonogram",param:null,usageDesc:"Play nonogram with 6x6 size"},{usage:".nonogram",param:"[size]",usageDesc:"Play nonogram with customized size"}]},{cmd:".akinator",desc:"Play a game of Akinator: Think about a person/character and the bot will guess who it is!",usages:null},{cmd:".csn",desc:"Play in casino to satisfy your gambling addiction",usages:[{usage:".csn coin",usageDesc:"See how many coins you have"},{usage:".csn daily",usageDesc:"Claim daily reward of coins. Daily streak gives more bonus!"},{usage:".csn hourly",usageDesc:"Claim hourly reward of coins"},{usage:".csn slot",param:"[bet_amount]",usageDesc:"Bet some coins in slot game"},{usage:".csn dice",param:"[bet_amount]",usageDesc:"Bet some coins in dice game"},{usage:".csn cf",param:"[bet_amount]",usageDesc:"Bet some coins in coin flip"}]}]},{title:"NSFW",body:[{cmd:".pornhub",desc:"Get 5 hot videos in pornhub homepage",usages:null},{cmd:".nhentai",desc:"Search (AND READ) hentai in chat",usages:[{usage:".nhentai read",param:"[digit_code]",usageDesc:"Read the hentai in chat"},{usage:".nhentai",param:"[digit_code]",usageDesc:"Get the preview of the hentai"},{usage:".nhentai search",param:"[hentai title]",usageDesc:"Search nhentai for the requested title"},{usage:".nhentai tag",param:"[tag]",usageDesc:"Get 1 random hentai with the given tag (maximum of 1 tag)"},{usage:".nhentai random",param:null,usageDesc:"Get a random hentai"},{usage:".nhentai popular",param:null,usageDesc:"Get 5 popular hentais right now"}]}]}],g=function(){var e=Object(t.useState)(!1),a=Object(o.a)(e,2),s=a[0],n=a[1];return Object(i.jsx)("div",{className:"CommandBlock",children:l.map((function(e){return Object(i.jsxs)("div",{className:"MiniBlock",children:[Object(i.jsxs)("h3",{children:[e.title,"NSFW"===e.title&&Object(i.jsx)("span",{onClick:function(){return n(!s)},style:{color:"#0066cc",cursor:"pointer",fontSize:"60%",marginLeft:9},children:s?"Hide":"Show"})]}),("NSFW"!==e.title||s)&&e.body.map((function(e){return Object(i.jsx)(u,{content:e})}))]})}))})},m=s.p+"static/media/PullMoon-transparent.0737e6d8.png",d=function(e){Object(t.useEffect)((function(){var a=document.createElement("script");return e.src&&(a.src=e.src),e.integrity&&(a.integrity=e.integrity),e.crossOrigin&&(a.crossOrigin=e.crossOrigin),a.async=!0,document.body.appendChild(a),function(){document.body.removeChild(a)}}),[e])},h=function(e){return d({src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),d({src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",crossOrigin:"anonymous"}),Object(i.jsx)("nav",{class:"navbar navbar-expand-lg bg-dark sticky-top",children:Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsx)("img",{src:m,alt:"icon",height:"40",className:"d-inline-block align-top"}),Object(i.jsx)("a",{style:{color:"#ffec69",marginLeft:"10px"},class:"navbar-brand",href:"/pullmoon-docs",children:"PullMoon"}),Object(i.jsx)("button",{class:"navbar-toggler navbar-dark",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{class:"navbar-toggler-icon"})}),Object(i.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(i.jsxs)("div",{class:"navbar-nav",children:[Object(i.jsx)("a",{className:"navbarItem",style:{color:"#ffec69",marginLeft:10},class:"nav-link",href:"#commands",children:"Commands"}),Object(i.jsx)("a",{className:"navbarItem",style:{color:"#ffec69",marginLeft:10},class:"nav-link",target:"_blank",rel:"noreferrer",href:"https://discord.com/api/oauth2/authorize?client_id=710463678062788668&permissions=8&scope=bot",children:"Invite me"}),Object(i.jsx)("a",{className:"navbarItem",style:{color:"#ffec69",marginLeft:10},class:"nav-link",href:"..",children:"About creator"})]})})]})})};s(11);var p=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(h,{}),Object(i.jsx)(g,{})]})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(a){var s=a.getCLS,t=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;s(e),t(e),n(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),b()},9:function(e,a,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.98a3f380.chunk.js.map