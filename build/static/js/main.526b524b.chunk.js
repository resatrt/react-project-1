(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),r=n.n(i),o=(n(15),n(1)),l=n(2),c=n(4),u=n(3),p=n(5),h=(n(16),n(17),n(18),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"todoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(s.a.Component)),m=(n(19),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delate",value:function(e){this.props.onDelate(e,this.props.todo)}},{key:"render",value:function(){return s.a.createElement("div",{className:"todoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",{className:"title"}," ",this.props.todo.title),s.a.createElement("button",{onClick:this.delate.bind(this)},"\u5220\u9664"))}}]),t}(s.a.Component)),d=(n(20),n(21),n(9)),b=n(6),g=n.n(b);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}g.a.init({appId:"pEMYmCotCpDs8mpGE8L2wS0y-gzGzoHsz",appKey:"pYMJXjgzCIp4M4DJKLUXuavz",serverURLs:"https://pemymcot.lc-cn-n1-shared.com"});g.a;function v(){var e=g.a.User.current();return e?O(e):null}function O(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.attributes)}var y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signUp",onSubmit:this.props.onSubmit.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.props.formData.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.props.formData.username,onChange:this.props.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.props.formData.password,onChange:this.props.onChange.bind(null,"password")})),s.a.createElement("div",{className:"row action"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c")))}}]),t}(a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signIn",onSubmit:this.props.onSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.props.formData.username,onChange:this.props.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.props.formData.password,onChange:this.props.onChange.bind(null,"password")})),s.a.createElement("div",{className:"row action"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55"),s.a.createElement("a",{href:"/#",onClick:this.props.onForgotPassword},"\u5fd8\u8bb0\u5bc6\u7801\u4e86\uff1f")))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={selected:"signUp"},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?s.a.createElement(y,{formData:this.props.formData,onSubmit:this.props.onSignUp,onChange:this.props.onChange}):null,"signIn"===this.state.selected?s.a.createElement(E,{formData:this.props.formData,onSubmit:this.props.onSignIn,onChange:this.props.onChange,onForgotPassword:this.props.onForgotPassword}):null))}}]),t}(a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"formPassword",onSubmit:this.props.onSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.props.formData.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row action"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001"),s.a.createElement("a",{href:"/#",onClick:this.props.onSignIn},"\u8fd4\u56de\u767b\u5f55"))))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selectedTab:"signInOrSignUp",formData:{email:"",username:"",password:""}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a,s){var i=new g.a.User;i.setUsername(t),i.setPassword(n),i.setEmail(e),i.signUp().then((function(e){var t=O(e);a.call(null,t)}),(function(e){s.call(null,e)}))}(n.email,n.username,n.password,(function(e){t.props.onSignUp.call(null,e)}),(function(e){switch(e.code){case 202:alert("\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528");break;default:alert(e)}}))}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){g.a.User.logIn(e,t).then((function(e){var t=O(e);n.call(null,t)}),(function(e){a.call(null,e)}))}(n.username,n.password,(function(e){t.props.onSignIn.call(null,e)}),(function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;default:alert(e)}}))}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"showForgotPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgotPassword",this.setState(e)}},{key:"resetPassword",value:function(e){var t,n,a;e.preventDefault(),t=this.state.formData.email,g.a.User.requestPasswordReset(t).then((function(e){n.call()}),(function(e){a.call(null,e)}))}},{key:"returnToSignIn",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="signInOrSignUp",this.setState(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},"signInOrSignUp"===this.state.selectedTab?s.a.createElement(w,{formData:this.state.formData,onChange:this.changeFormData.bind(this),onSignIn:this.signIn.bind(this),onSignUp:this.signUp.bind(this),onForgotPassword:this.showForgotPassword.bind(this)}):s.a.createElement(S,{formData:this.state.formData,onSubmit:this.resetPassword.bind(this),onChange:this.changeFormData.bind(this),onSignIn:this.returnToSignIn.bind(this)})))}}]),t}(s.a.Component),k=0;var C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:v||{},newTodo:"",todoList:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"addTodo",value:function(e){this.state.todoList.push({id:k+=1,title:e.target.value,status:null,delated:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"delate",value:function(e,t){t.delated=!0,this.setState(this.state)}},{key:"onSignUpOrSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"signOut",value:function(){g.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state.todoList.filter((function(e){return!e.delated})).map((function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(m,{todo:t,onToggle:e.toggle.bind(e),onDelate:e.delate.bind(e)}))}));return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(h,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(j,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.526b524b.chunk.js.map