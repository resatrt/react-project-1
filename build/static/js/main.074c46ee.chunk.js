(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),r=n.n(i),o=(n(15),n(1)),l=n(2),c=n(4),u=n(3),h=n(5),p=(n(16),n(17),n(18),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"todoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(s.a.Component)),m=(n(19),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delate",value:function(e){this.props.onDelate(e,this.props.todo)}},{key:"render",value:function(){return s.a.createElement("div",{className:"todoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",{className:"title"}," ",this.props.todo.title),s.a.createElement("button",{onClick:this.delate.bind(this)},"\u5220\u9664"))}}]),t}(s.a.Component)),d=(n(20),n(21),n(9)),f=n(6),g=n.n(f);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}g.a.init({appId:"pEMYmCotCpDs8mpGE8L2wS0y-gzGzoHsz",appKey:"pYMJXjgzCIp4M4DJKLUXuavz",serverURLs:"https://pemymcot.lc-cn-n1-shared.com"});g.a;function v(){var e=g.a.User.current();return e?y(e):null}function y(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.attributes)}var O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp",formData:{username:"",password:""}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){var s=new g.a.User;s.setUsername(e),s.setPassword(t),s.signUp().then((function(e){var t=y(e);n.call(null,t)}),(function(e){a.call(null,e)}))}(n.username,n.password,(function(e){t.props.onSignUp.call(null,e)}),(function(e){alert(e)}))}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){g.a.User.logIn(e,t).then((function(e){var t=y(e);n.call(null,t)}),(function(e){a.call(null,e)}))}(n.username,n.password,(function(e){t.props.onSignIn.call(null,e)}),(function(e){alert(e)}))}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){var e=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),t=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row action"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55")));return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?e:null,"signIn"===this.state.selected?t:null)))}}]),t}(s.a.Component),E=0;var w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:v||{},newTodo:"",todoList:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"addTodo",value:function(e){this.state.todoList.push({id:E+=1,title:e.target.value,status:null,delated:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"delate",value:function(e,t){t.delated=!0,this.setState(this.state)}},{key:"onSignUp",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"onSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"signOut",value:function(){g.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state.todoList.filter((function(e){return!e.delated})).map((function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(m,{todo:t,onToggle:e.toggle.bind(e),onDelate:e.delate.bind(e)}))}));return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(p,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(O,{onSignUp:this.onSignUp.bind(this),onSignIn:this.onSignIn.bind(this)}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.074c46ee.chunk.js.map