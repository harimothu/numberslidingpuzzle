(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(8),a=n.n(o),u=(n(15),n(1)),c=n(2),s=n(5),l=n(3),h=n(4),f=(n(17),n(6));var b=function(e){return r.a.createElement("button",{className:"sqaure",onClick:e.onClick,style:{display:"flex",fontSize:e.cubeSize/3,fontWeight:"bold",width:e.cubeSize,height:e.cubeSize,margin:e.cubeSize/20,borderRadius:4,backgroundColor:""===e.cube.number?"#B9ADA0":e.cube.number===e.cube.position?"#9dc9cc":"#e2d1ae",alignItems:"center",justifyContent:"center"}},e.cube.number.toString())},d=(n(19),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderPuzzle",value:function(e){for(var t=this.props.cubes.find(function(e){return""===e.number}),n=[],i=0;i<e;i++){for(var o=[],a=0;a<e;a++)o.push(this.renderSquare(t,i*e+a));n.push(r.a.createElement("div",{key:"boardRow_"+i,className:"board-row"},o))}return r.a.createElement("div",{className:"board"},n)}},{key:"renderSquare",value:function(e,t){var n=this,i=this.props.level;return r.a.createElement(b,{key:"square_"+t,cube:this.props.cubes[t],cubeSize:this.props.cubeSize,level:i,spaceCube:e,onClick:function(){return n.props.onClick(t)}})}},{key:"render",value:function(){return this.renderPuzzle(this.props.level)}}]),t}(r.a.Component)),p=(n(21),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={level:Number(e.level),height:e.height,width:e.width,cubes:m(e.level)},n.onShuffleClick=n.onShuffleClick.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onShuffleClick",value:function(){for(var e=this.state.level,t=e*e*e*e,n=m(e),i=[],r=0;r<t;r++){var o=Math.floor(Math.random()*(e*e)+0);o!==i[i.length-1]&&(i.push(o),k(n,this.state.level,o+1))}v(n)&&this.onShuffleClick(),this.setState({cubes:n})}},{key:"handleClick",value:function(e){if(""!==this.state.cubes[e].number){var t=this.state.cubes;!function(e,t,n){var i=e.find(function(e){return""===e.number}).position;if(i%t===(n+1)%t)if(n+1>i)for(var r=i+t;r<=n+1;r+=t)k(e,t,r);else for(var o=i-t;o>=n+1;o-=t)k(e,t,o);var a=e.slice();for(;a.length;){var u=a.splice(0,t);if(u.find(function(e){return e.position===i})&&u.find(function(e){return e.position===n+1}))if(n+1<i)for(r=i-1;r>=n+1;r--)k(e,t,r);else for(o=i+1;o<=n+1;o++)k(e,t,o)}}(t,this.state.level,e),v(t)&&alert("You win!")}}},{key:"render",value:function(){var e=this,t=this.state.cubes,n=this.state.level,i=(this.state.height/2<this.state.width?this.state.height/2:this.state.width)/(n+1);return r.a.createElement("div",{className:"puzzle"},r.a.createElement(d,{cubes:t,level:n,cubeSize:i,onClick:function(t){return e.handleClick(t)}}),r.a.createElement("button",{className:"newGame",onClick:this.onShuffleClick},"new game"))}}]),t}(r.a.Component));function v(e){return!e.find(function(e){return e.position!==e.number&&""!==e.number})}function m(e){for(var t=[],n=0;n<e*e;n++)t.push({position:n+1,number:n===e*e-1?"":n+1});return t}function k(e,t,n){var i=e.find(function(e){return""===e.number});if(i.position-t===n||i.position-1===n&&i.position%t!==1||i.position+1===n&&i.position%t!==0||i.position+t===n){var r=e[n-1].number;e[n-1].number=i.number,e[i.position-1].number=r}}var w=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{level:"4",height:window.innerHeight,width:window.innerWidth,moves:"0",targetMoves:"0"}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.7ba15036.chunk.js.map