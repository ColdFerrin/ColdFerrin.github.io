(this["webpackJsonppersonal-repo"]=this["webpackJsonppersonal-repo"]||[]).push([[0],{19:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/github.0d54cb5f.svg"},33:function(e,t,a){e.exports=a.p+"static/media/linkedin.4a1b5d7e.svg"},34:function(e,t,a){e.exports=a.p+"static/media/twitter.c09bd7bb.svg"},36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),m=(a(41),a(4)),i=a(5),s=a(7),o=a(6),u=a(8),E=a(13),d=a(11),p=(a(19),a(42),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"Header"},l.a.createElement("div",{className:"Header-Box"},l.a.createElement("div",{className:"Header-Left"},l.a.createElement("div",{className:"Header-Home"},l.a.createElement(E.b,{to:"/",style:{textDecoration:"none",color:"black"}},l.a.createElement("div",{className:"Link-surround"},l.a.createElement("p",{className:"Link"},"Home"))))),l.a.createElement("div",{className:"Header-Right"},l.a.createElement("div",{className:"Header-Resume"},l.a.createElement(E.b,{to:"/resume",style:{textDecoration:"none",color:"black"}},l.a.createElement("div",{className:"Link-surround"},l.a.createElement("p",{className:"Link"},"Resume")))),l.a.createElement("div",{className:"Header-Contact"},l.a.createElement(E.b,{to:"/contact",style:{textDecoration:"none",color:"black"}},l.a.createElement("div",{className:"Link-surround"},l.a.createElement("p",{className:"Link"},"Contact Me"))))))))}}]),t}(l.a.Component)),S=(a(48),a(32)),g=a.n(S),h=a(33),f=a.n(h),b=a(34),v=a.n(b),N=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"Footer"},l.a.createElement("div",{className:"center"},l.a.createElement("ul",null,l.a.createElement("div",{className:"img"},l.a.createElement("a",{href:"https://github.com/ColdFerrin"},l.a.createElement("img",{src:g.a,className:"Footer-github",alt:"github"}))),l.a.createElement("div",{className:"img"},l.a.createElement("a",{href:"https://www.linkedin.com/in/ferrinkatz/"},l.a.createElement("img",{src:f.a,className:"Footer-linkedin",alt:"linkedin"}))),l.a.createElement("div",{className:"img"},l.a.createElement("a",{href:"https://twitter.com/coldferrin"},l.a.createElement("img",{src:v.a,className:"Footer-twitter",alt:"twitter"})))))))}}]),t}(l.a.Component),y=a(35),C=a.n(y),A=(a(66),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={name:"",email:"",message:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Contact"},l.a.createElement("h2",null,"If you need to contact me?"),l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.onNameChange.bind(this)})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this)})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={};a.name=this.state.name,a.reply_to=this.state.email,a.message=this.state.message,C()({method:"POST",url:"https://bap6ezx09d.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",data:a}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status?alert("Message failed to send."):(alert("Something Happened."),console.log(e))}))}}]),t}(l.a.Component)),H=(a(67),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Home Page"))}}]),t}(l.a.Component)),L=(a(68),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Resume"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:4},l.a.createElement("p",{className:"Title"},"Ferrin Katz"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null,"EDUCATION")),l.a.createElement("td",{colSpan:2},l.a.createElement("p",null,"Embry-Riddle Aeronautical University (ERAU)"),l.a.createElement("p",null,l.a.createElement("b",null,"Bachelor of Science, Software Engineering")),l.a.createElement("p",null,"Area of Concentration: Cyber Security")),l.a.createElement("td",{className:"Section-Info"},l.a.createElement("p",null,"Prescott, AZ"),l.a.createElement("p",null,"May 2020"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null,"RELAVENT EXPERIENCE")),l.a.createElement("td",{colSpan:3},l.a.createElement("p",null,"Operating Systems, File systems & Databases, Organization of Programming languages, Analysis and Design of Software Systems, Software Quality Assurance"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null,"SKILLS")),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Programming Languages:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Java, C++, C, C#, Python, JavaScript, MySQL, PostgreSQL, HTML, CSS, MATLAB, Lisp, Bash, GraphQL"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Libraries:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Spring, Spring Boot, Spring JPA, Hibernate, Spring Security, jQuery, React, Serverless, AWS API"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Databases:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"PostgreSQL, MySQL, Elasticsearch, Redis, Kafka, H2"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Tools:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Git, Emma, Kafka Connect, AWS, Lambdas, App Sync, S3, SES"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"IDEs:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Intellij, Visual Studio, Eclipse"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Operating Systems:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Windows, Linux/Unix, Mac OS"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Office Software:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Confluence, Jira, Office Suite"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null)),l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",null,"Languages:"))),l.a.createElement("td",{colSpan:2,className:"Section-Info"},l.a.createElement("p",null,"Russian (Conversational)"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"},"ENGINEERING EXPERIENCE")),l.a.createElement("td",{colSpan:2},l.a.createElement("p",null,l.a.createElement("i",null,"Live Nation Inc.")),l.a.createElement("p",null,l.a.createElement("b",null,"Tech Intern,")," Software Engineering, Commerce \u2013 Ticketmaster")),l.a.createElement("td",null,l.a.createElement("p",null,"Los Angeles, CA"),l.a.createElement("p",null,"Summer 2019"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:3},l.a.createElement("ul",null,l.a.createElement("li",null,"Integrated the previously built grouping features into the companies B2B platform. (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise)."),l.a.createElement("li",null,"Created a tool to generate and send monthly and weekly Excel reports to non tech teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:2},l.a.createElement("p",null,l.a.createElement("i",null,"Live Nation Inc.")),l.a.createElement("p",null,l.a.createElement("b",null,"Tech Intern,")," Software Engineering, Commerce \u2013 Ticketmaster")),l.a.createElement("td",null,l.a.createElement("p",null,"Los Angeles, CA"),l.a.createElement("p",null,"Summer 2018"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:3},l.a.createElement("ul",null,l.a.createElement("li",null,"Implemented a secure Restful Web Service to give event managers access to event grouping features and add metadata for a future UI (using Java, Spring Boot, Spring JPA, H2, Kafka, ELK, and Swagger)."),l.a.createElement("li",null,"Added a fully OAuth 2 compliant login feature to my event grouping service (Using Spring Security, Spring Oauth2, and Spring JWT)."),l.a.createElement("li",null,"Deployed services to AWS with Gitlab Continuous integration, Docker, and Hashicorp Terraform.")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:2},l.a.createElement("p",null,l.a.createElement("i",null,"Live Nation Inc.")),l.a.createElement("p",null,l.a.createElement("b",null,"Tech Intern,")," Software Engineering, Commerce \u2013 Ticketmaster")),l.a.createElement("td",null,l.a.createElement("p",null,"Los Angeles, CA"),l.a.createElement("p",null,"Summer 2017"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:3},l.a.createElement("ul",null,l.a.createElement("li",null,"Developed full stack address verification service, (using Java, Spring Boot, Spring JPA, Hibernate, PostgreSQL, HTML, CSS, JavaScript, and jQuery) to address data processing need in the department."),l.a.createElement("li",null,"Created full stack tool to help Event Management teams verify the data they input was being correctly replicated in all remote data centers (using Java, Spring Boot, Spring JPA, Hibernate, Apache HTTP Client, MySQL, Redis, HTML, CSS, JavaScript, and jQuery)."),l.a.createElement("li",null,"Deployed clustered micro-services to remote servers using Docker.")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:2},l.a.createElement("p",null,l.a.createElement("i",null,"Everbridge Inc.")),l.a.createElement("p",null,l.a.createElement("b",null,"Development Operations Intern")," - Operations")),l.a.createElement("td",null,l.a.createElement("p",null,"Glendale, CA"),l.a.createElement("p",null,"Summer 2015"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:3},l.a.createElement("ul",null,l.a.createElement("li",null,"Developed add-ons to Confluence/Jira for the various development teams."),l.a.createElement("li",null,"Managed Confluence/Jira to ensure peak reliability for the various users of the systems."),l.a.createElement("li",null,"Facilitated daily operations of the department including preparations for releases.")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:2},l.a.createElement("p",null,l.a.createElement("i",null,"Live Nation Inc.")),l.a.createElement("p",null,l.a.createElement("b",null,"Tech Intern,")," Software Engineering, Commerce \u2013 Ticketmaster")),l.a.createElement("td",null,l.a.createElement("p",null,"Los Angeles, CA"),l.a.createElement("p",null,"Summer 2014"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"Section-Header"})),l.a.createElement("td",{colSpan:3},l.a.createElement("ul",null,l.a.createElement("li",null,"Integrated the previously built grouping features into the companies B2B platform. (Using React, GraphQL, AWS App Sync, AWS Lambdas, JavaScript, and Request-Promise)."),l.a.createElement("li",null,"Created a tool to generate and send monthly and weekly Excel reports to non tech teams. (Using AWS Lambdas, Java, Apache POI, AWS S3, and AWS SES)")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"Section-Header"},l.a.createElement("p",null,"LEADERSHIP")),l.a.createElement("td",{colSpan:3},l.a.createElement("p",null,"Data Collection Subsystem Team Lead, Eagle Aero Sport, 2018 \u2013 Present "),l.a.createElement("p",null,"Programming Adviser, ERAU VEX Robotics Club, 2018 - Present "),l.a.createElement("p",null,"President, Hillel, 2017 - 2018 "),l.a.createElement("p",null,"Team Leader, ERAU VEX Robotics Club Team White, 2016 - 2018 "))))))}}]),t}(l.a.Component)),O=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("div",{className:"Body"},l.a.createElement(d.a,{path:"/",exact:!0,component:H}),l.a.createElement(d.a,{path:"/resume",component:L}),l.a.createElement(d.a,{path:"/contact",component:A})),l.a.createElement(N,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f26f0c31.chunk.js.map