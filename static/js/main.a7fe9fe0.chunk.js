(this.webpackJsonpalgomation=this.webpackJsonpalgomation||[]).push([[0],{12:function(e,t,a){e.exports={root:"CodeBox_root__2NKxj",line:"CodeBox_line__hvUvC",lineNum:"CodeBox_lineNum__1lIe-",code:"CodeBox_code__3mISS"}},18:function(e,t,a){e.exports={root:"TwoBarBurgerIcon_root__Lnj4A",bar:"TwoBarBurgerIcon_bar__rBxBq"}},25:function(e,t,a){e.exports={root:"Button_root__2E4R1"}},26:function(e,t,a){e.exports={root:"Header_root__1UtyK"}},27:function(e,t,a){e.exports={root:"Menu_root__1Kawh"}},28:function(e,t,a){e.exports={root:"MenuItem_root__1X2TJ"}},3:function(e,t,a){e.exports={root:"App_root__28haJ",header:"App_header__3We9Q",brand:"App_brand__1XbJC",content:"App_content__WVazy",algoMenu:"App_algoMenu__OvcSb",open:"App_open__1gc8Q",algoMenuBtn:"App_algoMenuBtn__3tvlw",algoMenuFlex:"App_algoMenuFlex__1eu8S",algoMenuGroup:"App_algoMenuGroup__2vUmH",algoMenuGroupTitle:"App_algoMenuGroupTitle__j97lu",algoMenuItem:"App_algoMenuItem__10WBy",visualPane:"App_visualPane__1ShOm",visual:"App_visual__3fzAa",controlPane:"App_controlPane__2The-",algoInfo:"App_algoInfo__1_Ovt",category:"App_category__Ak32d",algoName:"App_algoName__2Yn8y",controls:"App_controls__t0KXj",pseudocode:"App_pseudocode__1BIPb",playback:"App_playback__1JtR2"}},55:function(e,t,a){e.exports=a(63)},60:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(24),o=a.n(i),c=(a(60),a(29)),l=a(5),s=a(6),u=a(9),h=a(8),d=a(7),g=a(2),p=(a(62),a(25)),f=a.n(p);function m(e){var t=e.className,a=e.onClick;return r.a.createElement("button",{className:[f.a.root,t].join(" "),onClick:a},e.children)}var v=a(12),b=a.n(v);function y(e){var t=e.highlightColor||"rgba(184, 163, 163, 0.75)";return r.a.createElement("div",{className:[b.a.root,e.className].join(" ")},e.code.map((function(a,n){var i;return r.a.createElement("div",{key:n,className:b.a.line},r.a.createElement("div",{className:b.a.lineNum},n+1),(null===(i=e.highlightSet)||void 0===i?void 0:i.has(n+1))?r.a.createElement("code",{className:b.a.code,style:{background:t}},a):r.a.createElement("code",{className:b.a.code},a))})))}var k=a(26),O=a.n(k);function j(e){return r.a.createElement("header",Object.assign({},e,{className:[O.a.root,e.className].join(" ")}),e.children)}var _=a(27),x=a.n(_);function A(e){return r.a.createElement("ul",Object.assign({},e,{className:[x.a.root,e.className].join(" ")}),e.children)}var w=a(28),S=a.n(w);function E(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",Object.assign({},e,{className:[S.a.root,e.className].join(" ")}),e.children))}var N=a(18),M=a.n(N);function H(e){return r.a.createElement("div",{className:M.a.root},r.a.createElement("div",{className:M.a.bar}),r.a.createElement("div",{className:M.a.bar}))}var B=a(0),C=a(4),T=function(){function e(){Object(l.a)(this,e),this.BAR_LENGTH=20}return Object(s.a)(e,[{key:"initialRender",value:function(e){g.f(e.current).selectAll("*").remove(),g.f(e.current).append("div").style("position","relative").style("top","50%").style("display","flex").style("flex-direction","row").style("justify-content","center")}},{key:"renderEnterExit",value:function(e,t,a){var n=g.f(e.current).select("div").selectAll("div").data(t||[]);n.exit().transition().duration(500).style("opacity",0).remove(),n.enter().append("div").style("width","32px").style("height",(function(e){return"".concat(a+1.5*e,"px")})).style("padding","8px").style("border","1px solid").style("text-align","center").text((function(e){return e}))}}]),e}(),R=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).name="Bubble Sort",e.category="Sorting Algorithm",e.pseudocode=["for i from 0 to (numOfElements - 1)","  traverse up to last i elements","    if ith element > i+1th element","      swap their positions","      remember swap is made","  stop early if no swaps made"],e}return Object(s.a)(a,[{key:"renderUpdate",value:function(e,t,a,n){var r=this,i=g.f(e.current).select("div").selectAll("div").data(t||[]);i.text((function(e){return e})),i.transition().duration(150).style("height",(function(e){return"".concat(r.BAR_LENGTH+1.5*e,"px")})).style("background",(function(e,t){return t===a?"indianred":t===n?"mediumorchid":"transparent"}))}},{key:"renderVisual",value:function(e,t){var a=t.array,n=t.current,r=t.next;this.renderEnterExit(e,a,this.BAR_LENGTH),this.renderUpdate(e,a,n,r)}},{key:"run",value:function(e){var t=Object(C.a)(Array(20)).map((function(){return Math.floor(101*Math.random())})),a={array:[],current:-1,next:-1,codeHighlights:new Set};a.array=Object(C.a)(t),e.push(a);for(var n=0;n<t.length;n++){for(var r=!1,i=0;i<t.length-1-n;i++){var o=i+1;if(a=Object(B.a)(Object(B.a)({},a),{},{current:i,next:-1,codeHighlights:new Set([1,2])}),e.push(a),t[i]>t[o]){a=Object(B.a)(Object(B.a)({},a),{},{next:o,codeHighlights:new Set([1,2,3])}),e.push(a);var c=[t[o],t[i]];t[i]=c[0],t[o]=c[1],r=!0,a=Object(B.a)(Object(B.a)({},a),{},{array:Object(C.a)(t),current:o,next:i,codeHighlights:new Set([1,2,3,4,5])}),e.push(a)}}if(!r){a=Object(B.a)(Object(B.a)({},a),{},{codeHighlights:new Set([1,6])}),e.push(a);break}}a=Object(B.a)(Object(B.a)({},a),{},{current:-1,next:-1,codeHighlights:new Set}),e.push(a)}}]),a}(T),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).name="Insertion Sort",e.category="Sorting Algorithm",e.pseudocode=["traverse from index 1 to len(arr) - 1","  save current position","  while previous element exists and is larger than current element","    swap positions of current and previous element","    save new position of current as current position"],e}return Object(s.a)(a,[{key:"renderUpdate",value:function(e,t,a,n){var r=this,i=g.f(e.current).select("div").selectAll("div").data(t||[]);i.text((function(e){return e})),i.transition().duration(150).style("height",(function(e){return"".concat(r.BAR_LENGTH+1.5*e,"px")})).style("background",(function(e,t){return t===a?"indianred":t===n?"mediumorchid":"transparent"}))}},{key:"renderVisual",value:function(e,t){var a=t.array,n=t.current,r=t.previous;this.renderEnterExit(e,a,this.BAR_LENGTH),this.renderUpdate(e,a,n,r)}},{key:"run",value:function(e){var t=Object(C.a)(Array(20)).map((function(){return Math.floor(101*Math.random())})),a={array:[],current:-1,previous:-1,sortedTo:-1,codeHighlights:new Set};a.array=Object(C.a)(t),e.push(a);for(var n=1;n<t.length;n++){var r=n;for(a=Object(B.a)(Object(B.a)({},a),{},{current:r,codeHighlights:new Set([1,2])}),e.push(a);r>0&&t[r-1]>t[r];){var i=r-1;a=Object(B.a)(Object(B.a)({},a),{},{previous:i,codeHighlights:new Set([1,3])}),e.push(a);var o=[t[r],t[i]];t[i]=o[0],t[r]=o[1],a=Object(B.a)(Object(B.a)({},a),{},{array:Object(C.a)(t),current:i,previous:r,codeHighlights:new Set([1,3,4])}),e.push(a),r=i,a=Object(B.a)(Object(B.a)({},a),{},{previous:-1,codeHighlights:new Set([1,3,5])}),e.push(a)}}a=Object(B.a)(Object(B.a)({},a),{},{current:-1,previous:-1,sortedTo:t.length-1,codeHighlights:new Set}),e.push(a)}}]),a}(T),L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).name="Merge Sort",e.category="Sorting Algorithm",e.pseudocode=["split array into halves","merge sort on left half","merge sort on right half","merge two halves together in order","  while left and right halves have elements","    move least element to result array","  while left half still has elements","    move least element to result array","  while right half still has elements","    move least element to result array","update original array"],e}return Object(s.a)(a,[{key:"initialRender",value:function(e){g.f(e.current).selectAll("*").remove();var t=g.f(e.current).append("div").style("position","relative").style("height","100%").style("display","flex").style("gap","40px").style("flex-direction","column").style("justify-content","center");t.append("div").attr("id","main").style("height","200px").style("display","flex").style("gap","1px").style("flex-direction","row").style("justify-content","center"),t.append("div").attr("id","alt").style("height","200px").style("display","flex").style("flex-direction","row").style("justify-content","center")}},{key:"renderEnterExit",value:function(e,t,a,n){var r=g.f(e.current),i=r.select("#main").selectAll("div").data(t||[]),o=r.select("#alt").selectAll("div").data(a||[]);i.exit().transition().duration(500).style("opacity",0).remove(),i.enter().append("div").style("width","32px").style("height",(function(e){return"".concat(n+1.5*e,"px")})).style("padding","8px").style("border","1px solid").style("text-align","center").text((function(e){return e})),o.exit().transition().duration(100).style("height","0px").duration(150).style("opacity",0).remove(),o.enter().append("div").merge(o).style("width","32px").style("height",(function(e){return"".concat(n+1.5*e,"px")})).style("padding","8px").style("border","1px solid").style("text-align","center").text((function(e){return e}))}},{key:"renderUpdate",value:function(e,t,a,n,r,i){var o=this,c=g.f(e.current),l=c.select("#main").selectAll("div").data(t||[]),s=c.select("#alt").selectAll("div").data(a||[]);l.text((function(e){return e})),s.text((function(e){return e})),l.transition().duration(150).style("height",(function(e){return null===e?"0px":"".concat(o.BAR_LENGTH+1.5*e,"px")})).style("background",(function(e,t){return n<=t&&t<r?"indianred":r<=t&&t<i?"mediumorchid":"transparent"})),s.transition().duration(150).style("height",(function(e){return"".concat(o.BAR_LENGTH+1.5*e,"px")}))}},{key:"renderVisual",value:function(e,t){var a=t.mainArray,n=t.altArray,r=t.left,i=t.mid,o=t.right;this.renderEnterExit(e,a,n,this.BAR_LENGTH),this.renderUpdate(e,a,n,r,i,o)}},{key:"run",value:function(e){var t=Object(C.a)(Array(20)).map((function(){return Math.floor(101*Math.random())})),a={mainArray:[],altArray:[],codeHighlights:new Set};a.mainArray=Object(C.a)(t),e.push(a),function n(r,i){if(i-r>1){var o=Math.floor(r+(i-r)/2);a=Object(B.a)(Object(B.a)({},a),{},{left:r,mid:o,right:o,codeHighlights:new Set([1,2])}),e.push(a),n(r,o),a=Object(B.a)(Object(B.a)({},a),{},{left:o,mid:o,right:i,codeHighlights:new Set([1,3])}),e.push(a),n(o,i),a=Object(B.a)(Object(B.a)({},a),{},{left:r,mid:o,right:i,codeHighlights:new Set([4])}),e.push(a);for(var c=t.slice(r,o),l=t.slice(o,i),s=[],u=r;c.length>0&&l.length>0;)c[0]<l[0]?(s.unshift(c.shift()),t[r++]=null):(s.unshift(l.shift()),t[o++]=null),a=Object(B.a)(Object(B.a)({},a),{},{mainArray:Object(C.a)(t),altArray:[].concat(s),codeHighlights:new Set([4,5,6])}),e.push(a);for(;c.length>0;)s.unshift(c.shift()),t[r++]=null,a=Object(B.a)(Object(B.a)({},a),{},{mainArray:Object(C.a)(t),altArray:[].concat(s),codeHighlights:new Set([4,7,8])}),e.push(a);for(;l.length>0;)s.unshift(l.shift()),t[o++]=null,a=Object(B.a)(Object(B.a)({},a),{},{mainArray:Object(C.a)(t),altArray:[].concat(s),codeHighlights:new Set([4,9,10])}),e.push(a);for(;s.length>0;)t[u++]=s.pop(),a=Object(B.a)(Object(B.a)({},a),{},{mainArray:Object(C.a)(t),altArray:[].concat(s),codeHighlights:new Set([11])}),e.push(a)}}(0,t.length),a=Object(B.a)(Object(B.a)({},a),{},{left:0,mid:0,right:0,codeHighlights:new Set}),e.push(a)}}]),a}(T),G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).name="Selection Sort",e.category="Sorting Algorithm",e.pseudocode=["for (numOfElements - 1) times","  set first element of unsorted as the minimum","  for each unsorted element","    if element < currentMinimum","      set element as new minimum","  swap positions of minimum and first unsorted element"],e}return Object(s.a)(a,[{key:"renderUpdate",value:function(e,t,a,n){var r=this,i=g.f(e.current).select("div").selectAll("div").data(t||[]);i.text((function(e){return e})),i.transition().duration(150).style("height",(function(e){return"".concat(r.BAR_LENGTH+1.5*e,"px")})).style("background",(function(e,t){return t===a?"indianred":t===n?"mediumorchid":"transparent"}))}},{key:"renderVisual",value:function(e,t){var a=t.array,n=t.minimum,r=t.current;this.renderEnterExit(e,a,this.BAR_LENGTH),this.renderUpdate(e,a,n,r)}},{key:"run",value:function(e){var t=Object(C.a)(Array(20)).map((function(){return Math.floor(101*Math.random())})),a={array:[],start:-1,minimum:-1,current:-1,sortedTo:-1,codeHighlights:new Set};a.array=Object(C.a)(t),e.push(a);for(var n=0;n<t.length-1;n++){var r=n;a=Object(B.a)(Object(B.a)({},a),{},{start:n,minimum:r,codeHighlights:new Set([1,2])}),e.push(a);for(var i=n;i<t.length;i++)a=Object(B.a)(Object(B.a)({},a),{},{current:i,codeHighlights:new Set([1,3,4])}),e.push(a),t[i]<t[r]&&(r=i,a=Object(B.a)(Object(B.a)({},a),{},{minimum:r,codeHighlights:new Set([1,3,4,5])}),e.push(a));var o=[t[r],t[n]];t[n]=o[0],t[r]=o[1],a=Object(B.a)(Object(B.a)({},a),{},{array:Object(C.a)(t),sortedTo:n,codeHighlights:new Set([1,6])}),e.push(a)}a=Object(B.a)(Object(B.a)({},a),{},{minimum:-1,current:-1,sortedTo:t.length-1,codeHighlights:new Set}),e.push(a)}}]),a}(T),U=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).name="Djikstra's Algorithm",e.category="Graph Algorithm",e.pseudocode=["for each node n in graph","  set distance[n] to INFINITY","distance[src] = 0","add src to queue","","while queue is not empty","  n = node from queue with lowest distance","  remove n from queue","  for each neighbor of n","    alt = distance[n] + length(n, neighbor)","    if alt < distance[neighbor]","      distance[neighbor] = alt","when looking for shortest route from src to trgt","  end early after calculating trgt distance"],e}return Object(s.a)(a,[{key:"renderUpdate",value:function(e,t,a,n,r,i){var o=this,c=g.f(e.current).select("svg"),l=c.selectAll(".node").data(t||[]),s=c.selectAll(".link").data(a||[]);l.style("stroke",(function(e){return e===n?"rgba(120, 253, 231, 0.795)":null})).style("stroke-width",(function(e){return e===n?3:1})),s.style("stroke",(function(e){return i.has(e)?"rgba(120, 253, 231, 0.795)":r.has(e)?"rgba(255, 64, 64, 0.795)":o.LINK_COLOR})),this.force.nodes(t),this.force.force("link").links(a)}},{key:"renderVisual",value:function(e,t){var a=t.nodes,n=t.links,r=t.current,i=t.linkQueue,o=t.linkVisited;this.renderEnterExit(e,a,n),this.renderUpdate(e,a,n,r,i,o)}},{key:"run",value:function(e){this.force.alpha(1).restart();var t=this.generateGraph(12),a=t.nodes,n=t.links,r=[a[0]],i=new Set,o=new Set,c=a.length-1,l=!1,s={nodes:a,links:n,current:null,linkQueue:new Set,linkVisited:new Set,codeHighlights:new Set};for(e.push(s),a[0].bestCost=0,a.forEach((function(e){e!==a[0]&&(e.bestCost=1/0,e.visited=!1)}));r.length>0;){var u=r.pop();u.visited=!0,s=Object(B.a)(Object(B.a)({},s),{},{current:u,codeHighlights:new Set([6,7,8])}),e.push(s);for(var h=0;h<u.links.length;h++){var d=u.links[h],g=a[d.target],p=u.bestCost+d.cost;if(i.has(d)||(i.add(d),s=Object(B.a)(Object(B.a)({},s),{},{linkQueue:new Set(i),codeHighlights:new Set([6,9,10])}),e.push(s)),g.visited||r.push(g),p<g.bestCost&&(g.bestCost=p,g.prevLink!==d&&o.delete(g.prevLink),g.prevLink=d,o.add(d),s=Object(B.a)(Object(B.a)({},s),{},{linkVisited:new Set(o),codeHighlights:new Set([6,9,11,12])}),e.push(s)),g===a[c]){l=!0;break}}if(l)break;r.sort((function(e,t){return t.bestCost-e.bestCost}))}s=l?Object(B.a)(Object(B.a)({},s),{},{current:a[c],codeHighlights:new Set([13,14])}):Object(B.a)(Object(B.a)({},s),{},{current:null,codeHighlights:new Set}),e.push(s)}}]),a}(function(){function e(){Object(l.a)(this,e),this.NODE_AMOUNT=10,this.NODE_RADIUS=12,this.MAX_COST=20,this.MAIN_COLOR="rgb(202, 138, 138)",this.LINK_COLOR="rgba(255, 255, 255, 0.4)"}return Object(s.a)(e,[{key:"initialRender",value:function(e){var t=this;g.f(e.current).selectAll("*").remove();g.f(e.current).append("svg").attr("id","svg").style("width","100%").style("height","100%");this.force=g.c().force("charge",g.b().strength(-800)).force("xAxis",g.d((function(){return g.f("#svg").node().getBoundingClientRect().width/2}))).force("yAxis",g.e((function(){return g.f("#svg").node().getBoundingClientRect().height/2}))).force("link",g.a().distance(150)).on("tick",(function(){return t.ticked(e)})),g.f(window).on("resize",(function(){t.force.force("xAxis",g.d((function(){return g.f("#svg").node().getBoundingClientRect().width/2}))).force("yAxis",g.e((function(){return g.f("#svg").node().getBoundingClientRect().height/2}))).alpha(1).restart()}))}},{key:"renderEnterExit",value:function(e,t,a){var n=g.f(e.current).select("svg"),r=n.selectAll(".node").data(t||[]),i=n.selectAll(".link").data(a||[]),o=n.selectAll(".linkText").data(a||[]);r.enter().append("g").attr("class","node").style("fill",this.MAIN_COLOR).append("circle").attr("r",this.NODE_RADIUS).style("fill",(function(e,a){return 0===a?"green":a===t.length-1?"indianred":""})),r.exit().remove(),i.enter().append("line").attr("class","link").style("stroke",this.LINK_COLOR).style("stroke-width",2),o.enter().append("text").attr("class","linkText").attr("dy",-4).style("fill",this.MAIN_COLOR),i.exit().remove(),o.exit().remove()}},{key:"generateGraph",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.NODE_AMOUNT,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.MAX_COST,a=[],n=[],r=new Set,i=0;i<e;i++){var o={name:i,links:[]};a.push(o)}for(var c=0;c<e-1;c++){var l=Math.floor(2*Math.random())+1,s=a[c],u={source:c,target:c+1,cost:Math.floor(Math.random()*t)+1};n.push(u),s.links.push(u),r.add("".concat(c,",").concat(c+1)),r.add("".concat(c+1,",").concat(c));for(var h=0;h<l;h++){for(var d=Math.floor(Math.random()*(e-1-c))+c+1,g=Math.floor(Math.random()*t)+1;d===c;)d=Math.floor(Math.random()*(e-1-c))+c+1;var p="".concat(d,",").concat(c),f="".concat(c,",").concat(d);if(!r.has(p)&&!r.has(f)){var m={source:c,target:d,cost:g};r.add(p),r.add(f),n.push(m),s.links.push(m)}}}return{nodes:a,links:n}}},{key:"ticked",value:function(e){var t=g.f(e.current).select("svg"),a=t.selectAll(".node"),n=t.selectAll(".link"),r=t.selectAll(".linkText");a.attr("transform",(function(e){return"translate(".concat(e.x,",").concat(e.y,")")})),n.attr("x1",(function(e){return e.source.x})).attr("y1",(function(e){return e.source.y})).attr("x2",(function(e){return e.target.x})).attr("y2",(function(e){return e.target.y})),r.attr("transform",(function(e){var t=(e.source.x+e.target.x)/2,a=(e.source.y+e.target.y)/2,n=180*Math.atan((e.source.y-e.target.y)/(e.source.x-e.target.x))/Math.PI;return"translate(".concat(t,",").concat(a,") rotate(").concat(n,")")})).text((function(e){return e.cost}))}}]),e}()),P=a(3),V=a.n(P),D=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).algoMenu=[{title:"Sorting",algorithms:["Selection Sort","Insertion Sort","Bubble Sort","Merge Sort"]},{title:"Graph",algorithms:["Djikstra's Algorithm"]}],e.toggleOpenAlgoMenu=function(){e.setState({openAlgoMenu:!e.state.openAlgoMenu})},e.state={openAlgoMenu:!0,algorithm:null,current:-1,codeHighlights:new Set,restOfProps:{}},e.highlightColor="rgba(134, 87, 87, 0.5)",e.visualRef=r.a.createRef(),e.backtrack=[],e.playbackSpeed=166,e.playing=!1,e.toggleOpenAlgoMenu=e.toggleOpenAlgoMenu.bind(Object(u.a)(e)),e.clearBacktrack=e.clearBacktrack.bind(Object(u.a)(e)),e.backtrackTo=e.backtrackTo.bind(Object(u.a)(e)),e.nextBacktrackState=e.nextBacktrackState.bind(Object(u.a)(e)),e.prevBacktrackState=e.prevBacktrackState.bind(Object(u.a)(e)),e.play=e.play.bind(Object(u.a)(e)),e.pause=e.pause.bind(Object(u.a)(e)),e.togglePlayback=e.togglePlayback.bind(Object(u.a)(e)),e.runAlgorithm=e.runAlgorithm.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"clearBacktrack",value:function(){this.backtrack=[]}},{key:"backtrackTo",value:function(e){if(0<=e&&e<this.backtrack.length){var t=this.backtrack[e],a=t.codeHighlights,n=Object(c.a)(t,["codeHighlights"]);this.state.algorithm.renderVisual(this.visualRef,n),this.setState({current:e,codeHighlights:a,restOfProps:n})}}},{key:"nextBacktrackState",value:function(){this.backtrackTo(this.state.current+1)}},{key:"prevBacktrackState",value:function(){this.backtrackTo(this.state.current-1)}},{key:"play",value:function(){var e=this;clearInterval(this.playback),this.playback=setInterval((function(){0<=e.state.current&&e.state.current<e.backtrack.length-1?(e.nextBacktrackState(),e.playing=!0):e.pause()}),this.playbackSpeed)}},{key:"pause",value:function(){clearInterval(this.playback),this.playing=!1}},{key:"togglePlayback",value:function(){this.playing?this.pause():this.play()}},{key:"setAlgorithm",value:function(e){var t=this,a=null;switch(g.f(window).on("resize",null),this.clearBacktrack(),e){case"Selection Sort":a=new G;break;case"Insertion Sort":a=new I;break;case"Bubble Sort":a=new R;break;case"Merge Sort":a=new L;break;case"Djikstra's Algorithm":a=new U}this.setState({algorithm:a,openAlgoMenu:!1},(function(){t.state.algorithm&&(t.state.algorithm.initialRender(t.visualRef),t.runAlgorithm())}))}},{key:"runAlgorithm",value:function(){this.clearBacktrack(),this.state.algorithm&&this.state.algorithm.run(this.backtrack),this.backtrackTo(0)}},{key:"render",value:function(){var e,t,a,n,i=this,o=this.state.openAlgoMenu?V.a.open:"";return r.a.createElement("div",{className:V.a.root},r.a.createElement(j,{className:V.a.header},r.a.createElement("div",{className:V.a.brand},"Algomation"),r.a.createElement(m,{className:V.a.algoMenuBtn,onClick:this.toggleOpenAlgoMenu},r.a.createElement(H,null))),r.a.createElement("div",{className:V.a.content},r.a.createElement("div",{className:[V.a.algoMenu,o].join(" ")},r.a.createElement("div",{className:V.a.algoMenuFlex},this.algoMenu.map((function(e){return r.a.createElement(A,{key:e.title,className:V.a.algoMenuGroup},r.a.createElement(E,{className:V.a.algoMenuGroupTitle},e.title," "),e.algorithms.map((function(e){return r.a.createElement(E,{key:e,className:V.a.algoMenuItem,onClick:function(){return i.setAlgorithm(e)}},e)})))})))),r.a.createElement("div",{className:V.a.visualPane},r.a.createElement("div",{className:V.a.visual,ref:this.visualRef})),r.a.createElement("div",{className:V.a.controlPane},r.a.createElement("div",{className:V.a.algoInfo},r.a.createElement("div",{className:V.a.category},null===(e=this.state.algorithm)||void 0===e?void 0:e.category),r.a.createElement("div",{className:V.a.algoName},null===(t=this.state.algorithm)||void 0===t?void 0:t.name),r.a.createElement(y,{className:V.a.pseudocode,code:null!==(a=null===(n=this.state.algorithm)||void 0===n?void 0:n.pseudocode)&&void 0!==a?a:[],highlightColor:this.highlightColor,highlightSet:this.state.codeHighlights})),r.a.createElement("div",{className:V.a.controls},r.a.createElement("div",null,r.a.createElement("input",{className:V.a.playback,type:"range",min:"0",max:this.backtrack.length-1,step:"1",value:this.state.current,onChange:function(e){return i.backtrackTo(parseInt(e.target.value))}})),r.a.createElement(m,{onClick:function(){return i.runAlgorithm()}},"RUN"),r.a.createElement(m,{onClick:this.prevBacktrackState},"Previous State"),r.a.createElement(m,{onClick:this.togglePlayback},"Play/Pause"),r.a.createElement(m,{onClick:this.nextBacktrackState},"Next State")))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a7fe9fe0.chunk.js.map