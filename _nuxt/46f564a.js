(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{365:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("5f6c33fe",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("1b2991a0",content,!0,{sourceMap:!1})},367:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("728ec676",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n(365)},398:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,"#particles-js{background:#1a222c;background-attachment:fixed;background-repeat:no-repeat;background-size:cover;display:flex;height:100%;min-height:90vh;vertical-align:bottom;width:100%}",""]),o.locals={},t.exports=o},401:function(t,e,n){"use strict";n(366)},402:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,".header{color:#fff;left:50%;margin:0 auto;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);z-index:1}h1{font-size:7vw}h2{font-size:3.5vw}",""]),o.locals={},t.exports=o},403:function(t,e,n){"use strict";n(367)},404:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,".v-btn{text-transform:none}",""]),o.locals={},t.exports=o},411:function(t,e,n){"use strict";n.r(e);var o=n(416),r=n(413),l=n(408),c=n(406),d={name:"ParticlesJS",mounted:function(){var t=this;n(396),this.$nextTick((function(){t.initParticlesJS()}))},methods:{initParticlesJS:function(){particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},h=(n(397),n(77)),m=Object(h.a)(d,(function(){return(0,this._self._c)("div",{attrs:{id:"particles-js"}})}),[],!1,null,null,null).exports,v=n(409),_=n(364),f=n(412),y={name:"HomePageButton",props:{href:{type:String,required:!0},icon:{type:String,required:!0},toolTip:{type:String,required:!0}}},w={name:"HomePageFirstCard",components:{ParticlesJS:m,HomePageButton:Object(h.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-3"},[e(v.a,{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[e(_.a,{attrs:{value:100,size:60,width:2,color:"white","x-large":""}},[e(f.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on;return[e(o.a,t._g({attrs:{fab:"",color:r?"white":"#1a222c",target:"_blank",href:t.href}},c),[e(l.a,{attrs:{large:"",color:r?"#1a222c":"white"}},[t._v(t._s(t.icon))])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(t.toolTip))])])],1)]}}])})],1)}),[],!1,null,null,null).exports}},C=(n(401),Object(h.a)(w,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{id:"home-page-card"}},[e("ParticlesJS"),t._v(" "),e("div",{staticClass:"header"},[e("h1",[t._v("Ashok Tankala")]),t._v(" "),e("h3",{staticStyle:{color:"#fff"}},[t._v("Freelance CTO/Tech Advisor")]),t._v(" "),e("h3",{staticStyle:{color:"#fff"}},[t._v("Leadership and Executive Coach")]),t._v(" "),e(c.a,{staticClass:"mt-5",attrs:{justify:"space-around"}},[e("HomePageButton",{attrs:{href:"mailto:ashok@tanka.la",icon:"mdi-email",toolTip:"Send Email"}}),t._v(" "),e("HomePageButton",{attrs:{href:"https://medium.com/@ashok.tankala",icon:"mdi-wordpress",toolTip:"My Blog"}}),t._v(" "),e("HomePageButton",{attrs:{href:"https://www.linkedin.com/in/ashoktankala/",icon:"mdi-linkedin",toolTip:"My LinkedIn"}}),t._v(" "),e("HomePageButton",{attrs:{href:"https://github.com/tankala",icon:"mdi-github",toolTip:"My Github"}}),t._v(" "),e("HomePageButton",{attrs:{href:"https://youtube.com/c/TankalaTelugu",icon:"mdi-youtube",toolTip:"My YouTube Channel"}}),t._v(" "),e("HomePageButton",{attrs:{href:"/pdf/AshokTankalaCV.pdf",icon:"mdi-file-pdf-box",toolTip:"My Resume"}})],1),t._v(" "),e(c.a,{attrs:{justify:"space-around"}},[e(o.a,{attrs:{text:"",medium:"",href:"#about",dark:""}},[t._v("About Me")]),t._v(" "),e(o.a,{attrs:{text:"",medium:"",href:"#projects",dark:""}},[t._v("Projects")]),t._v(" "),e(o.a,{attrs:{text:"",medium:"",href:"#experience",dark:""}},[t._v("Experience")]),t._v(" "),e(o.a,{attrs:{text:"",medium:"",href:"#mentions",dark:""}},[t._v("Talks")]),t._v(" "),e(o.a,{attrs:{text:"",medium:"",href:"examples",dark:""}},[t._v("Work Samples")])],1),t._v(" "),e(c.a,{attrs:{justify:"space-around"}},[e(o.a,{attrs:{"x-large":"",icon:"",dark:"",href:"#about"}},[e(l.a,[t._v("mdi-chevron-down")])],1)],1)],1)],1)}),[],!1,null,null,null).exports),k=n(410),x=n(415),j={name:"toolImage",props:{href:{type:String,required:!0},toolTip:{type:String,required:!0},height:{type:String,required:!0},width:{type:String,required:!0}}},P={name:"AboutMe",components:{toolImage:Object(h.a)(j,(function(){var t=this,e=t._self._c;return e("div",{attrs:{height:t.height,width:t.width}},[e(f.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e(x.a,t._g({attrs:{src:t.href,height:t.height,width:t.width}},o))]}}])},[t._v(" "),e("span",[t._v(t._s(t.toolTip))])])],1)}),[],!1,null,null,null).exports}},T=Object(h.a)(P,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{id:"about"}},[e(c.a,{attrs:{justify:"center"}},[e("p",{staticClass:"display-2 font-weight-medium text-center my-5"},[t._v("About Me")])]),t._v(" "),e(c.a,[e("p",{staticClass:"x-large font-weight-light mb-5 px-10"},[t._v("\n      As a freelance CTO, leadership and executive coach, I leverage my 16+ years of experience in the software industry to help individuals and organizations achieve their goals and vision.\n    ")]),t._v(" "),e("p",{staticClass:"x-large font-weight-light mb-5 px-10"},[t._v("\n      I offer web application development services, working closely with clients to understand their needs and deliver customized solutions using the latest technologies and best practices.\n    ")]),t._v(" "),e("p",{staticClass:"x-large font-weight-light mb-5 px-10"},[t._v("\n      Whether you are changing careers, pursuing a promotion, taking on a leadership role, or facing a challenge, I can help you break your limiting beliefs and identify your strengths and values to align your steps with your unique definition of success.\n      My mission is to guide and support aspiring and emerging leaders in gaining clarity and realizing their best potential, so they can build, sustain and live a life of meaning and purpose within and beyond the corporate walls.\n    ")]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"x-large font-weight-light mb-5 px-10"},[t._v("\n      Let me tell you what I bring to the Table;"),e("br"),t._v("\n      1) 16+ years of career in the Software Industry."),e("br"),t._v("\n      2) Proven track record of simultaneously building and leading multiple teams and branches."),e("br"),t._v("\n      3) 14 years of experience as a founding team member at a unicorn company.\n    ")])]),t._v(" "),e(c.a,{staticClass:"text-center mx-0 px-10",attrs:{justify:"space-around"}},[e(k.a,{attrs:{xs12:"",sm6:""}},[e("p",{staticClass:"display-1 font-weight-bold"},[t._v("FrameWorks")]),t._v(" "),e(c.a,{attrs:{justify:"space-around"}},[e("toolImage",{attrs:{href:"/svg/flask-icon.svg",toolTip:"Flask",height:"60",width:"70"}}),t._v(" "),e("toolImage",{attrs:{href:"/svg/spring-framework-icon.svg",toolTip:"Spring Boot",height:"60",width:"60"}}),t._v(" "),e("toolImage",{attrs:{href:"/svg/expressjs-icon.svg",toolTip:"Express js",height:"60",width:"100"}}),t._v(" "),e("toolImage",{attrs:{href:"/svg/vuejs.svg",toolTip:"Vue js",height:"60",width:"70"}}),t._v(" "),e("toolImage",{attrs:{href:"/svg/reactjs.svg",toolTip:"React js",height:"60",width:"67"}})],1),t._v(" "),e("p",{staticClass:"x-large font-weight-light my-3"},[t._v("Very good knowledge of Flask, Spring Boot, Express js, Vue js and React js")])],1),t._v(" "),e(k.a,{attrs:{xs12:"",sm6:""}},[e("p",{staticClass:"display-1 font-weight-bold"},[t._v("Languages")]),t._v(" "),e(c.a,{attrs:{justify:"space-around"}},[e("toolImage",{attrs:{href:"/svg/python.svg",toolTip:"Python",height:"60",width:"60"}}),t._v(" "),e("toolImage",{attrs:{href:"/svg/java-icon.svg",toolTip:"Java",height:"60",width:"45"}}),t._v(" "),e("toolImage",{attrs:{href:"/svg/nodejs.svg",toolTip:"Node js",height:"60",width:"50"}})],1),t._v(" "),e("p",{staticClass:"x-large font-weight-light my-3"},[t._v("Very Good knowledge of Python, Java and Node.js")])],1)],1)],1)}),[],!1,null,null,null).exports,M=n(407),S={name:"Projects"},B=(n(403),{name:"Experience"}),I={name:"Mentions"},A={components:{HomePageFirstCard:C,AboutMe:T,Projects:Object(h.a)(S,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{id:"projects"}},[e(c.a,{attrs:{justify:"center"}},[e("p",{staticClass:"display-2 font-weight-medium my-5"},[t._v("Projects")])]),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Course Finder")]),t._v(" "),e("ul",[e("li",[t._v("Building team to improve the existing application to support the growth(30x) we expect in the next 5 years.")]),t._v(" "),e("li",[t._v("Planning and implementing the technology and product roadmap, interfacing with the customers and business team and reporting to the CEO.")])]),t._v(" "),e("p",{staticClass:"font-weight-light mt-5"},[t._v("Course Finder is an EdTech platform that enables KC and its channel partners across India and abroad to search, shortlist and get admissions for students to universities across the globe.")]),t._v(" "),e(o.a,{attrs:{medium:"",href:"https://coursefinder.ai",target:"_blank"}},[t._v("Check it out")])],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/coursefinder.png"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/botsdekho.png"}})],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("BotsDekho")]),t._v(" "),e("ul",[e("li",[t._v("Built a multi-tenant contextual NLP ML module from scratch.")]),t._v(" "),e("li",[t._v("Handling 96% of the unstructured conversations for cardekho.com without any human intervention.")])]),t._v(" "),e("p",{staticClass:"font-weight-light mt-5"},[t._v("BotsDekho is a simple way of building a conversational chatbot with Text & Video options, with Guided, NLU (natural language understanding), and Hybrid–all 3 processes.")]),t._v(" "),e(o.a,{attrs:{medium:"",href:"https://www.botsdekho.com",target:"_blank"}},[t._v("Check it out")])],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("CarDekho")]),t._v(" "),e("ul",[e("li",[t._v("Worked in CarDekho used cars, LMS(Lead Management System) projects.")]),t._v(" "),e("li",[t._v("Rewrote whole LMS application with 10 person team to support microservice architecture and multi-tenant architecture using Java, Spring Boot, MongoDB. Delivered beta product to the customer in 1 and half month time.")]),t._v(" "),e("li",[t._v("Right now our LMS application is used at all Honda India dealerships, all Ford APAC region dealerships.")])]),t._v(" "),e("p",{staticClass:"font-weight-light mt-5"},[t._v("www.CarDekho.com is India's no. 1 Auto portal catering to the car buyers by giving them unbiased reviews, great deals on cars, finance and insurance.")]),t._v(" "),e(o.a,{attrs:{medium:"",href:"https://www.cardekho.com",target:"_blank"}},[t._v("Check it out")])],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/cardekho.jpg"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/Connecto.jpg"}})],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Connecto")]),t._v(" "),e("ul",[e("li",[t._v("Made several changes at the architectural and application level to handle 50+ million requests per day.")]),t._v(" "),e("li",[t._v("Worked on interesting tech stack - Node.js, AngularJS, ExpressJS, Cassandra, Kafka, MongoDB, and Druid.")]),t._v(" "),e("li",[t._v("Built a deep learning model using TensorFlow for predicting whether the user buys a car or not if he/she will buy then which car with the accuracy of 81%.")])]),t._v(" "),e("p",{staticClass:"font-weight-light mt-5"},[t._v("Connecto brings together real-time user insights, an advanced segmentation engine, and easy-to-use marketing tools — giving your team the power to create amazing experiences that deepen customer relationships.")]),t._v(" "),e(o.a,{attrs:{medium:"",href:"https://www.connecto.io",target:"_blank"}},[t._v("Check it out")])],1)],1),t._v(" "),e(c.a,{attrs:{justify:"center"}},[e("p",[t._v("-----")])]),t._v(" "),e(c.a,{attrs:{justify:"center"}},[e("p",{staticClass:"display-2 font-weight-medium my-5"},[t._v("Personal Projects")])]),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("pip Trends")]),t._v(" "),e("ul",[e("li",[t._v("Built using tech stack - Vue.js, Python, Flask.")])]),t._v(" "),e("p",{staticClass:"font-weight-light mt-5"},[t._v("Want to know about a Python Package or Which Python Python package should you use?\npip trends will help you in getting packages downloads stats and their information. Spot trends, pick the winner!")]),t._v(" "),e(o.a,{attrs:{medium:"",href:"https://piptrends.com",target:"_blank"}},[t._v("Check it out")])],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/pip-trends.svg"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/sambhashana.png"}})],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Sambhashana")]),t._v(" "),e("ul",[e("li",[t._v("Built using tech stack - Node.js, Vue.js, ExpressJS, Socket.io, WebRTC.")])]),t._v(" "),e("p",{staticClass:"font-weight-light mt-5"},[t._v("An Anonymous, Peer to Peer instant messenger.")])])],1)],1)}),[],!1,null,null,null).exports,Experience:Object(h.a)(B,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{id:"experience"}},[e(c.a,{attrs:{justify:"center"}},[e("p",{staticClass:"display-2 font-weight-medium my-5"},[t._v("Experience")])]),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Technology Consultant")]),t._v(" "),e("p",{staticClass:"subheading font-weight-medium pa-2"},[t._v("Remote — 2023-Present")]),t._v(" "),e("ul",[e("li",{staticClass:"my-1"},[t._v("Working on improving Used Car Price prediction and recommendations.")])]),t._v(" "),e(o.a,{staticClass:"my-5",attrs:{medium:"",href:"https://www.cardekho.com/",target:"_blank"}},[t._v("Check it out")])],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/cardekho-group.jpeg"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"https://www.canamgroup.com/assets/images/header-canam-logo.svg"}})],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Technology Consultant")]),t._v(" "),e("p",{staticClass:"subheading font-weight-medium pa-2"},[t._v("Remote — 2023-Present")]),t._v(" "),e("ul",[e("li",{staticClass:"my-1"},[t._v("Working on improving the architecture and performance of existing applications.")])]),t._v(" "),e(o.a,{staticClass:"my-5",attrs:{medium:"",href:"https://www.canamgroup.com/",target:"_blank"}},[t._v("Check it out")])],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("CTO")]),t._v(" "),e("p",{staticClass:"subheading font-weight-medium pa-2"},[t._v("Hyderabad, Telangana — 2021-2023")]),t._v(" "),e("ul",[e("li",{staticClass:"my-1"},[t._v("Developed and led long-term technology vision and strategic plans for the company.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Lead a complete overhaul of the flagship product which resulted in "),e("b",[t._v("50% performance improvement")]),t._v(" and "),e("b",[t._v("50% cost reduction")]),t._v(" and also helped in the company's "),e("b",[t._v("revenue increase of more than 200%.")])]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Managing the entire Hyderabad development center for KC Overseas and "),e("b",[t._v("Expanded tech team from 8 to 25")]),t._v(" to support and build the company's 3 core products.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Collaborated cross-functionally to identify & implement cutting-edge solutions.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Initiated and coordinated the implementation of security measures across the company's products and IT infrastructure.")])]),t._v(" "),e(o.a,{staticClass:"my-5",attrs:{medium:"",href:"https://www.studies-overseas.com/",target:"_blank"}},[t._v("Check it out")])],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/kcoverseas.png"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/girnarsoft.jpg"}})],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Director")]),t._v(" "),e("p",{staticClass:"subheading font-weight-medium pa-2"},[t._v("Hyderabad, Telangana — 2007-2021")]),t._v(" "),e("ul",[e("li",{staticClass:"my-1"},[t._v("Managed a Web and Mobile App Analytics platform called Connecto. Made several changes at the architectural and application level to handle data of "),e("b",[t._v("2 million profiles & 50+ million requests per day")]),t._v(". This application was the core of companywide data intelligence.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Started Hyderabad branch and scaled up to 150 people.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Rebuilt CRM application for Car Dealerships using Multi-tenant microservice architecture. "),e("b",[t._v("Delivered beta product to the customer in 1 and a half month time")]),t._v(". Currently in use at all dealerships of "),e("b",[t._v("Honda and Ford")]),t._v(" in India, Thailand, and other APAC countries.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Managed a team of 10 Data Scientists for the company's Machine Learning projects (NLP Chatbot, Image Masking, User Scoring, Recommendation and Used Car Pricing).")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Built a multi-tenant contextual "),e("b",[t._v("NLP chatbot")]),t._v(" application which was "),e("b",[t._v("handling 96% of the unstructured conversations")]),t._v(".")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Built Web Automation testing framework to support all the GirnarSoft products. "),e("b",[t._v("Trained more than 30 manual testers on it")]),t._v(". This has aided the business in having a ready-made automated testing workforce.")]),t._v(" "),e("li",{staticClass:"my-1"},[t._v("Worked on several projects (BotsDekho, Used Car Pricing, Number Plate Masking, Connecto, DealerMart, CarDekho.com​, Accept 360,​ c​arsales.cardekho.com​,​ ​yourbillbuddy.com​, DCM,​ ​www.zozoc.com​, www.1ka10.com​,​ futuredekho.com​, Money Tracker, Lead Scoring, Nextance).")])]),t._v(" "),e(o.a,{staticClass:"my-5",attrs:{medium:"",href:"https://www.girnarsoft.com",target:"_blank"}},[t._v("Check it out")])],1)],1),t._v(" "),e(c.a,{staticClass:"pa-10",attrs:{justify:"space-between"}},[e(M.a,{attrs:{xs:"12",sm:"6"}},[e("p",{staticClass:"headline font-weight-medium"},[t._v("Technology Consultant")]),t._v(" "),e("p",{staticClass:"subheading font-weight-medium pa-2"},[t._v("2023")]),t._v(" "),e("ul",[e("li",{staticClass:"my-1"},[t._v("Worked on multiple microservices to improve application performance.")])]),t._v(" "),e(o.a,{staticClass:"my-5",attrs:{medium:"",href:"https://www.angara.com/",target:"_blank"}},[t._v("Check it out")])],1),t._v(" "),e(M.a,{attrs:{xs:"12",sm:"4"}},[e(x.a,{attrs:{src:"/img/angara.jpeg"}})],1)],1)],1)}),[],!1,null,null,null).exports,Mentions:Object(h.a)(I,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{id:"mentions"}},[e(c.a,{attrs:{justify:"center"}},[e("p",{staticClass:"display-2 font-weight-medium my-5"},[t._v("Mentions/Talks")])]),t._v(" "),e(c.a,{staticClass:"ma-2",attrs:{justify:"center"}},[e("a",{attrs:{href:"https://pyconf.hydpy.org/2022/",target:"_blank"}},[t._v("My Observations of the Python Ecosystem")])]),t._v(" "),e(c.a,{staticClass:"ma-2",attrs:{justify:"center"}},[e("a",{attrs:{href:"https://pythonbytes.fm/episodes/show/287/surprising-ways-to-use-jupyter-notebooks",target:"_blank"}},[t._v("Mentioned about PipTrends in Python Bytes PodCast")])]),t._v(" "),e(c.a,{staticClass:"ma-2",attrs:{justify:"center"}},[e("a",{attrs:{href:"https://www.youtube.com/watch?v=VjIYcJVZCP0",target:"_blank"}},[t._v("Debugging flask application within a docker container using VSCode")])]),t._v(" "),e(c.a,{staticClass:"ma-2",attrs:{justify:"center"}},[e("a",{attrs:{href:"https://www.meetup.com/hydpygroup/events/298463037/",target:"_blank"}},[t._v("Getting Started with asyncio")])])],1)}),[],!1,null,null,null).exports},head:{title:"Ashok Tankala Portfolio"}},D=Object(h.a)(A,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex flex-column mb-6"},[e("HomePageFirstCard")],1),t._v(" "),e("div",{staticClass:"d-flex flex-column mb-6"},[e("AboutMe")],1),t._v(" "),e("div",{staticClass:"d-flex flex-column mb-6"},[e("Experience")],1),t._v(" "),e("div",{staticClass:"d-flex flex-column mb-6"},[e("Projects")],1),t._v(" "),e("div",{staticClass:"d-flex flex-column mb-6"},[e("Mentions")],1)])}),[],!1,null,null,null);e.default=D.exports}}]);