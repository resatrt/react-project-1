(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),s=n.n(i),c=(n(13),n(1)),r=n(2),l=n(4),u=n(3),d=n(5),h=(n(14),n(15),n(16),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement("input",{type:"text",value:this.props.content,className:"todoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit(t)}},{key:"changeTitle",value:function(t){this.props.onChange(t)}}]),e}(a.a.Component)),p=(n(17),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"toggle",value:function(t){this.props.onToggle(t,this.props.todo)}},{key:"delate",value:function(t){this.props.onDelate(t,this.props.todo)}},{key:"render",value:function(){return a.a.createElement("div",{className:"todoItem"},a.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),a.a.createElement("span",{className:"title"}," ",this.props.todo.title),a.a.createElement("button",{onClick:this.delate.bind(this)},"\u5220\u9664"))}}]),e}(a.a.Component));n(18);function m(t,e){return window.localStorage.setItem(t,JSON.stringify(e))}var b=0;var f=function(t){function e(t){var n,o;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={newTodo:"",todoList:(o="todoList",JSON.parse(window.localStorage.getItem(o))||[])},n}return Object(d.a)(e,t),Object(r.a)(e,[{key:"addTodo",value:function(t){this.state.todoList.push({id:b+=1,title:t.target.value,status:null,delated:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList}),m("todoList",this.state.todoList)}},{key:"toggle",value:function(t,e){e.status="completed"===e.status?"":"completed",this.setState(this.state),m("todoList",this.state.todoList)}},{key:"delate",value:function(t,e){e.delated=!0,this.setState(this.state),m("todoList",this.state.todoList)}},{key:"render",value:function(){var t=this,e=this.state.todoList.filter((function(t){return!t.delated})).map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(p,{todo:e,onToggle:t.toggle.bind(t),onDelate:t.delate.bind(t)}))}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"\u6211\u7684\u4efb\u52a1"),a.a.createElement("div",{className:"inputWrapper"},a.a.createElement(h,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),a.a.createElement("ol",{className:"todoList"},e))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c60551a0.chunk.js.map