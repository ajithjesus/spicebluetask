(this.webpackJsonptaskmanagement=this.webpackJsonptaskmanagement||[]).push([[0],{103:function(t,e,a){},192:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(18),i=a.n(s),c=(a(94),a(76)),r=(a(95),a(96),a(83)),o=a(11),d=a(19),h=a(17),l=a.n(h),j=a(22),u=a(77),p=a(78),b=a(89),k=a(88),f=a(195),m=a(196),O=a(80),g=a(198),x=a(199),_=a(197),v=a(31),y="USER_LOGIN",T="TASK_ARRAY",w="DELETE_TASk",S=function(t){return function(){var e=Object(j.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fetch("https://stage.api.sloovi.com/user",{method:"GET",headers:{Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log("&&&&&&&&&"),console.log(JSON.stringify(t)),console.log("&&&&&&&&&")})),e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=a(46),C=a.n(A),D=(a(102),a(103),a(45)),E=a.n(D),N=function(t){try{var e=t.split("-");"31"===e[2]?e[2]="01":e[2]=1*e[2];var a=new Date(e[0]+"/"+e[1]+"/"+e[2]);return"0999"!==e[0]&&"8999"!==e[0]&&"1000"!==e[0]&&"9000"!==e[0]||(a=""),"Invalid Date"===a.toString()?"":a}catch(n){return""}},L=a(3),U=function(t){Object(b.a)(a,t);var e=Object(k.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).handlechange=function(t){n.setState({taskdescirption:t.target.value})},n.OnchangeTaskDate=function(t){n.setState({taks_date:t})},n.OnchangeTaskTime=function(t){n.setState({taks_time:t})},n.assignFunction=function(t){var e=t.target.value.toString();n.setState({assignUser:e})},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.taskdescirption,s=e.taks_time,i=e.taks_date,c=e.assignUser,r=e.btn_id,o=e.id;i=E()(i).format("YYYY-MM-DD"),s=1*E()(s).format("ss");if("add"===r){var d={method:"POST",headers:{Authorization:"Bearer "+n.props.token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({assigned_user:c,task_date:i,task_time:s,time_zone:15,is_completed:0,task_msg:a})};fetch("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",d).then((function(t){return t.json()})).then((function(t){alert("Added Successfully"),n.getTask(),n.setState({taskdescirption:"",taks_time:new Date,taks_date:new Date,assignUser:"Ajithkumar",hide_show:!1})}))}else{var h={method:"PUT",headers:{Authorization:"Bearer "+n.props.token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({assigned_user:c,task_date:i,task_time:s,time_zone:15,is_completed:0,task_msg:a})};fetch("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+o,h).then((function(t){return t.json()})).then((function(t){alert("Update succesfully"),n.getTask(),n.setState({taskdescirption:"",taks_time:new Date,taks_date:new Date,assignUser:"Ajithkumar",id:"add",hide_show:!1})}))}},n.getTask=function(){var t={method:"GET",headers:{Authorization:"Bearer "+n.props.token,Accept:"application/json","Content-Type":"application/json"}};fetch("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",t).then((function(t){return t.json()})).then((function(t){n.setState({taskarray:t.results})}))},n.getTask_single=function(t){n.setState({btn_id:"update",id:t});var e={method:"GET",headers:{Authorization:"Bearer "+n.props.token,Accept:"application/json","Content-Type":"application/json"}};fetch("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+t,e).then((function(t){return t.json()})).then((function(t){var e=N(t.results.task_date);n.setState({taskdescirption:t.results.task_msg,taks_date:e,assignUser:t.results.assigned_user,hide_show:!0})}))},n.getdeletetask=function(t){var e={method:"DELETE",headers:{Authorization:"Bearer "+n.props.token,Accept:"application/json","Content-Type":"application/json"}};fetch("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+t,e).then((function(t){return t.json()})).then((function(t){alert("delete success"),n.getTask()}))},n.hide_and_show=function(){n.setState({hide_show:!0})},n.state={token:"",taskdescirption:"",taks_time:new Date,taks_date:new Date,assignUser:"Ajithkumar",taskarray:[],btn_id:"add",id:"",hide_show:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.dispatch(function(){var t=Object(j.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"spicebluetest2@gmail.com",password:"12345678"})},fetch("https://stage.api.sloovi.com/login",a).then((function(t){return t.json()})).then((function(t){e({type:"USER_LOGIN",token:t.results.token})})),t.abrupt("return",!0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:if(!t.sent){t.next=9;break}return e=this.props.token,t.next=7,this.props.dispatch(S(e));case 7:t.sent&&this.getTask();case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this;return Object(L.jsx)("section",{className:"mt-5",children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(m.a,{children:Object(L.jsx)(O.a,{md:12,className:"text-center",children:Object(L.jsx)("h5",{children:"Task Management"})})}),Object(L.jsx)(m.a,{children:Object(L.jsx)(O.a,{md:{span:8,offset:2},children:Object(L.jsxs)("div",{className:"task_card_wrapper",children:[Object(L.jsx)("div",{children:Object(L.jsx)("h6",{children:"Add Taks"})}),Object(L.jsx)("div",{children:Object(L.jsx)("i",{onClick:this.hide_and_show,className:"fa fa-plus","aria-hidden":"true"})})]})})}),this.state.hide_show&&Object(L.jsx)(m.a,{children:Object(L.jsx)(O.a,{md:{span:8,offset:2},children:Object(L.jsxs)(g.a,{children:[Object(L.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(L.jsx)(g.a.Label,{children:"Task Description"}),Object(L.jsx)(g.a.Control,{name:"taskdescription",value:this.state.taskdescirption,onChange:this.handlechange,type:"text",placeholder:"Task description"})]}),Object(L.jsxs)(m.a,{children:[Object(L.jsx)(O.a,{md:4,children:Object(L.jsx)(C.a,{name:"taks_date",selected:this.state.taks_date,minDate:new Date,onChange:function(t){e.OnchangeTaskDate(t)},dateFormat:"dd-MM-yyyy"})}),Object(L.jsx)(O.a,{md:4,children:Object(L.jsx)(C.a,{className:"",selected:this.state.taks_time,onChange:function(t){e.OnchangeTaskTime(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeCaption:"Time",dateFormat:"h:mm aa"})})]}),Object(L.jsx)(m.a,{children:Object(L.jsxs)(g.a.Group,{as:O.a,controlId:"formGridState",children:[Object(L.jsx)(g.a.Label,{children:"Assign User"}),Object(L.jsxs)(g.a.Control,(t={as:"select"},Object(d.a)(t,"as","select"),Object(d.a)(t,"value",this.state.assignUser),Object(d.a)(t,"onChange",this.assignFunction),Object(d.a)(t,"children",[Object(L.jsx)("option",{value:"Ajithkumar",children:"Ajith Kumar"}),Object(L.jsx)("option",{value:"Vijay",children:"Vijay"}),Object(L.jsx)("option",{value:"Kamal",children:"Kamal"})]),t))]})}),Object(L.jsx)(m.a,{children:Object(L.jsx)(O.a,{md:12,className:"submit_wrapper",children:Object(L.jsx)("div",{children:Object(L.jsx)(x.a,{variant:"primary",type:"button",onClick:this.handleSubmit,children:"Submit"})})})})]})})}),Object(L.jsx)(m.a,{className:"mt-4",children:Object(L.jsx)(O.a,{md:12,children:Object(L.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:"sno"}),Object(L.jsx)("th",{children:"assigned_user"}),Object(L.jsx)("th",{children:"task_date"}),Object(L.jsx)("th",{children:"task_msg"}),Object(L.jsx)("th",{children:"Edit"}),Object(L.jsx)("th",{children:"Delete"})]})}),Object(L.jsx)("tbody",{children:this.state.taskarray.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:a+1}),Object(L.jsx)("td",{children:t.assigned_user}),Object(L.jsx)("td",{children:t.task_date}),Object(L.jsx)("td",{children:t.task_msg}),Object(L.jsx)("td",{children:Object(L.jsx)("i",{onClick:function(){e.getTask_single(t.id)},class:"fa fa-edit","aria-hidden":"true"})}),Object(L.jsx)("td",{children:Object(L.jsx)("i",{onClick:function(){e.getdeletetask(t.id)},class:"fa fa-trash","aria-hidden":"true"})})]})}))})]})})})]})})}}]),a}(n.Component),B=Object(v.b)((function(t){return{token:t.Login.token,taskarray:t.Login.taskarray,deleteTask:t.Login.deleteTask}}),null)(U);var z=function(){return Object(L.jsx)(r.a,{children:Object(L.jsx)(o.c,{children:Object(L.jsx)(o.a,{exact:!0,path:"/",name:"Task",render:function(t){return Object(L.jsx)(B,Object(c.a)({},t))}})})})},F=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))},G={cartproducts:[],message:"",token:"",taskarray:[],deleteTask:""},I=a(16),M=a(84),J=a(85),P=a(51),R=a(86),Y=a.n(R),K=a(87),V=I.combineReducers({Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return{token:e.token};case T:return console.log(e.taskarray_data),{taskarray:e.taskarray_data};case w:return{deleteTask:e.deleteTask}}return t}}),W={key:"root",storage:Y.a},q=Object(P.a)(W,V),H=I.createStore(q,Object(J.composeWithDevTools)(I.applyMiddleware(M.a))),Q=Object(P.b)(H);i.a.render(Object(L.jsx)(v.a,{store:H,children:Object(L.jsx)(K.a,{loading:null,persistor:Q,children:Object(L.jsx)(z,{})})}),document.getElementById("root")),F()},94:function(t,e,a){},95:function(t,e,a){}},[[192,1,2]]]);
//# sourceMappingURL=main.5ec575a8.chunk.js.map