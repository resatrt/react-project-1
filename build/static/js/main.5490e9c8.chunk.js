(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),s=(n(13),n(1)),c=n(2),u=n(4),l=n(3),d=n(5),h=(n(14),n(15),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",defaultValue:this.props.content,onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit(t)}}]),e}(o.a.Component)),p=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,this.props.todo)}}]),e}(o.a.Component),m=(n(16),0);var b=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={newTodo:"",todoList:[]},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"addTodo",value:function(t){this.state.todoList.push({id:m+=1,title:t.target.value,status:null,delated:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"render",value:function(){var t=this.state.todoList.map((function(t,e){return o.a.createElement("li",{key:e},o.a.createElement(p,{todo:t.title}))}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"\u6211\u7684\u4efb\u52a1"),o.a.createElement("div",{className:"inputWrapper"},o.a.createElement(h,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this)})),o.a.createElement("ol",null,t))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5490e9c8.chunk.js.map