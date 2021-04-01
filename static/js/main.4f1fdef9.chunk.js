(this["webpackJsonpcoin-flipping-sim"]=this["webpackJsonpcoin-flipping-sim"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(17),r=a.n(i),l=(a(25),a(26),a(14)),c=a(6),o=a(7),p=a(10),h=a(9),b=a(8),u=a(42),j=a(43),d=a(20),O=a(44),m=a(46),f=(a(27),a(18)),g=a.n(f),x=a(1),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.alpha,t=this.props.beta,a=Array.from({length:201},(function(e,t){return t/200})),n=Array.from(a,(function(a){return Math.pow(a,e)*Math.pow(1-a,t)}));return Object(x.jsx)(g.a,{className:"PlottingPanel-Plot",data:[{x:a,y:n,type:"scatter",mode:"markers"}],layout:{width:800,height:500,title:"The probability distribution of w",xaxis:{title:{text:"w"},fixedrange:!0},yaxis:{title:{text:"p(w)"},fixedrange:!0}}})}}]),a}(n.Component),P=(a(35),a.p+"static/media/coin-head.436eba2f.jpg"),C=a.p+"static/media/coin-tail.2df29650.jpg",F=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.face;return Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"H"===e?P:C,alt:"H"===e?"Head of coin":"Tail of coin",className:"coin-image"})})}}]),a}(n.Component),k=(a(36),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.face;return Object(x.jsx)("div",{className:"CoinPanel",children:Object(x.jsx)(F,{className:"CoinPanel-Coin",face:e})})}}]),a}(n.Component)),y=a(19),N=a(45),w=(a(37),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={realProb:n.props.realProb,alpha:n.props.alpha,beta:n.props.beta},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=this;e.preventDefault(),this.setState(Object(y.a)({},e.target.name,e.target.value)),this.setState((function(e){return{alpha:e.alpha.length>0?parseInt(e.alpha):e.alpha,beta:e.beta.length>0?parseInt(e.beta):e.beta}})),this.setState((function(e){t.props.updateParameters(e)}))}},{key:"render",value:function(){return Object(x.jsxs)(N.a,{className:"InputPanel",children:[Object(x.jsxs)(N.a.Group,{children:[Object(x.jsx)(N.a.Label,{htmlFor:"realProb",children:"Real probability"}),Object(x.jsx)(N.a.Control,{id:"realProb",name:"realProb",value:this.props.realProb,disabled:this.props.isFlipping,onChange:this.handleChange})]}),Object(x.jsxs)(N.a.Group,{children:[Object(x.jsx)(N.a.Label,{htmlFor:"alpha",children:"Alpha"}),Object(x.jsx)(N.a.Control,{id:"alpha",name:"alpha",value:this.props.alpha,disabled:this.props.isFlipping,onChange:this.handleChange})]}),Object(x.jsxs)(N.a.Group,{children:[Object(x.jsx)(N.a.Label,{children:"Beta"}),Object(x.jsx)(N.a.Control,{id:"beta",name:"beta",value:this.props.beta,disabled:this.props.isFlipping,onChange:this.handleChange})]})]})}}]),a}(n.Component)),S=a(41),q=(a(39),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"number",children:"#"}),Object(x.jsx)("th",{className:"result",children:"Result"}),Object(x.jsx)("th",{className:"sequence",children:"Sequence"}),Object(x.jsx)("th",{className:"knowledge",children:"Knowledge"})]})}),Object(x.jsx)("tbody",{children:this.props.data.map((function(e){return Object(x.jsxs)("tr",{className:"record",children:[Object(x.jsx)("td",{className:"number",children:e.number}),Object(x.jsx)("td",{className:"result",children:e.result}),Object(x.jsx)("td",{className:"sequence",children:e.sequence.length>0?"[".concat(e.sequence.join(", "),"]"):"-"}),Object(x.jsx)("td",{className:"knowledge",children:e.knowledge})]})}))})]})}}]),a}(n.Component)),B=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isFlipping:!1,alpha:n.props.alpha,beta:n.props.beta,face:n.props.face,realProb:n.props.realProb,knowledge:n.props.alpha/(n.props.alpha+n.props.beta),sequence:n.props.sequence,table:n.props.table},n.updateParameters=n.updateParameters.bind(Object(p.a)(n)),n.handleFlipButton=n.handleFlipButton.bind(Object(p.a)(n)),n.handleResetButton=n.handleResetButton.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"updateParameters",value:function(e){var t=this;this.setState(e),this.setState((function(e){return{knowledge:e.alpha/(e.alpha+e.beta),table:[{number:0,result:"-",sequence:t.props.sequence,knowledge:e.alpha/(e.alpha+e.beta)}]}}))}},{key:"handleFlipButton",value:function(e){var t=Math.random()<=this.state.realProb?"H":"T";this.setState((function(e){var a=[].concat(Object(l.a)(e.sequence),[t]),n=e.alpha+("H"===t?1:0),s=e.beta+("H"===t?0:1),i=n/(n+s);return{face:t,isFlipping:!0,sequence:a,alpha:n,beta:s,knowledge:i,table:[].concat(Object(l.a)(e.table),[{number:e.table.length,result:t,sequence:a,knowledge:i}])}}))}},{key:"handleResetButton",value:function(e){this.setState({alpha:this.props.alpha,beta:this.props.beta,face:this.props.face,isFlipping:!1,realProb:this.props.realProb,sequence:this.props.sequence,table:this.props.table})}},{key:"render",value:function(){return Object(x.jsxs)(u.a,{fluid:!0,className:"CoinFlippingSim",children:[Object(x.jsxs)(j.a,{children:[Object(x.jsx)(d.a,{className:"CoinFlippingSim-CoinPanel",children:Object(x.jsx)(k,{face:this.state.face})}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(j.a,{className:"CoinFlippingSim-InputPanel",children:Object(x.jsx)(w,{alpha:this.state.alpha,beta:this.state.beta,realProb:this.state.realProb,updateParameters:this.updateParameters,isFlipping:this.state.isFlipping,reset:this.handleResetButton})}),Object(x.jsx)(j.a,{className:"CoinFlippingSim-ButtonPanel",children:Object(x.jsxs)(O.a,{className:"CoinFlippingSim-ButtonPanel",children:[Object(x.jsx)(m.a,{onClick:this.handleFlipButton,size:"lg",variant:"primary",children:"Flip!"})," ",Object(x.jsx)(m.a,{onClick:this.handleResetButton,size:"lg",variant:"danger",children:"Reset"})," "]})})]})]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(d.a,{className:"CoinFlippingSim-PlottingPanel",children:Object(x.jsx)(v,{alpha:this.state.alpha,beta:this.state.beta})}),Object(x.jsx)(d.a,{className:"CoinFlippingSim-TablePanel",children:Object(x.jsx)(q,{data:this.state.table})})]})]})}}]),a}(n.Component);B.defaultProps={alpha:2,beta:2,face:"H",realProb:.5,knowledge:.5,sequence:[],table:[{number:0,result:"-",sequence:[],knowledge:.5}]};var R=B;var H=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(R,{})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.4f1fdef9.chunk.js.map