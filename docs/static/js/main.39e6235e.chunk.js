(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{169:function(e,t,s){},170:function(e,t,s){},172:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),l=s.n(a),n=s(14),i=s.n(n),r=(s(98),s(68)),j=s(20),o=s(21),x=s(23),d=s(22),b=s.p+"static/media/polus_banner_notext.b4a5de5c.png",m=function(e){Object(x.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).goPage=function(e,t){c.setState({currentIndex:e}),window.location.href=t},c.state={currentIndex:1},c}return Object(o.a)(s,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"view box",children:[Object(c.jsx)("img",{style:{width:"80px",marginLeft:"15px"},src:b,alt:"logo"}),Object(c.jsxs)("div",{className:"rightTout",children:[Object(c.jsx)("span",{className:"container navFirst ".concat(1===this.state.currentIndex?"active":null),onClick:function(){return e.goPage(1,"#/article")},children:"\u5151\u6362"}),Object(c.jsx)("span",{className:"container ".concat(2===this.state.currentIndex?"active":null),onClick:function(){return e.goPage(2,"#/guideview")},children:"\u8d44\u91d1\u6c60"})]})]})}}]),s}(a.Component),h=s(9),O=(s(71),s(46)),u=s.n(O),p=(s(83),s(47)),v=s.n(p),g=(s(85),s(48)),f=s.n(g),N=(s(86),s(10)),y=s.n(N),C=(s(87),s(28)),k=s.n(C),M=(s(88),s(15)),w=s.n(M),z=s(49),A=(s(89),s(35)),I=s.n(A),S=I.a.Item,H=function(e){Object(x.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).onClose=function(e){return function(){c.setState(Object(z.a)({},e,!1))}},c.state={val01:"",val02:"",modal1:!1},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({val01:e.target.value})}},{key:"handleChange2",value:function(e){this.setState({val02:e.target.value})}},{key:"showModal",value:function(){this.setState({modal1:!0})}},{key:"goPage",value:function(){}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{size:"lg",children:[Object(c.jsx)(w.a,{size:"lg"}),Object(c.jsx)(y.a,{children:Object(c.jsx)(y.a.Body,{children:Object(c.jsx)("div",{className:"flex-center fontSize am-center",children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"from",style:{marginTop:"20px"},children:[Object(c.jsxs)("div",{className:"cst-border color",children:[Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:"FROM"}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:Object(c.jsx)("div",{className:"text-right color2 cst-balance"})})]}),Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"2 1 0%"},children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"am-list-item am-input-item am-list-item-middle",children:Object(c.jsx)("div",{className:"am-list-line",children:Object(c.jsx)("div",{className:"am-input-control",children:Object(c.jsx)("input",{placeholder:"0.0",className:"h5numInput",type:"number",value:this.state.val01,onChange:this.handleChange.bind(this)})})})})})}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},onClick:function(){return e.showModal()},children:Object(c.jsxs)("div",{style:{textAlign:"right"},children:[Object(c.jsx)("span",{children:"ETH"}),Object(c.jsx)(k.a,{style:{verticalAlign:"bottom"},type:"down"})]})})]})]}),Object(c.jsx)("div",{className:"am-flexbox am-flexbox-align-center",children:Object(c.jsx)("div",{className:"am-flexbox-item",style:{textAlign:"center",margin:"10px 0px"},children:Object(c.jsx)(k.a,{type:"down",size:"lg"})})}),Object(c.jsxs)("div",{className:"cst-border color",children:[Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",style:{height:"30%"},children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:"TO"}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:Object(c.jsx)("div",{className:" text-right color2"})})]}),Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",style:{height:"70%"},children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"2 1 0%"},children:Object(c.jsx)("div",{className:"align-items",children:Object(c.jsx)("div",{className:"am-list-item am-input-item am-list-item-middle",children:Object(c.jsx)("div",{className:"am-list-line",children:Object(c.jsx)("div",{className:"am-input-control",children:Object(c.jsx)("input",{placeholder:"0.0",className:"h5numInput",type:"number",value:this.state.val02,onChange:this.handleChange2.bind(this)})})})})})}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},onClick:function(){return e.showModal()},children:Object(c.jsxs)("div",{style:{textAlign:"right"},children:[Object(c.jsx)("span",{children:"Select "}),Object(c.jsx)(k.a,{style:{verticalAlign:"bottom"},type:"down"})]})})]})]})]}),Object(c.jsx)("div",{className:"color",style:{padding:"12px"}}),Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("a",{style:{background:"rgb(220,220,220)",color:"rgb(0,0,0)",border:"none"},role:"button",className:"am-button am-button-primary",onClick:function(){return e.goPage()},children:Object(c.jsx)("span",{children:"\u5151\u6362\u5b8c\u6210"})})})]})})})}),Object(c.jsx)(w.a,{size:"lg"}),Object(c.jsxs)(v.a,{visible:this.state.modal1,transparent:!0,closable:!0,className:"dialog",maskClosable:!1,onClose:this.onClose("modal1"),title:"Select a token",children:[Object(c.jsx)(f.a,{placeholder:"Search",maxLength:8}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(y.a.Header,{title:"Token Name"}),Object(c.jsx)(y.a.Body,{children:Object(c.jsxs)(I.a,{className:"my-list",children:[Object(c.jsx)(S,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",children:"ETH"}),Object(c.jsx)(S,{thumb:"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png",children:"BTC"}),Object(c.jsx)(S,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",children:"DAI"}),Object(c.jsx)(S,{thumb:"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png",children:"AMN"}),Object(c.jsx)(S,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",children:"AMPL"})]})}),Object(c.jsx)(y.a.Footer,{content:Object(c.jsx)("div",{}),extra:Object(c.jsx)("div",{children:"Change"})})]})]})]})})}}]),s}(a.Component),T=(s(161),s(16)),P=s.n(T),U=I.a.Item,F=function(e){Object(x.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).onClose=function(e){return function(){c.setState(Object(z.a)({},e,!1))}},c.state={val01:"",val02:"",modal1:!1},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"componentDidMount",value:function(){console.log(this.props.match)}},{key:"handleChange",value:function(e){this.setState({val01:e.target.value})}},{key:"handleChange2",value:function(e){this.setState({val02:e.target.value})}},{key:"showModal",value:function(){this.setState({modal1:!0})}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{size:"lg",children:[Object(c.jsx)(w.a,{size:"lg"}),Object(c.jsx)(y.a,{children:Object(c.jsx)(y.a.Body,{children:Object(c.jsx)("div",{className:"flex-center fontSize am-center",children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"from",style:{marginTop:"20px"},children:[Object(c.jsxs)("div",{className:"cst-border color",children:[Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:"Input"}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:Object(c.jsx)("div",{className:"text-right color2 cst-balance"})})]}),Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"2 1 0%"},children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"am-list-item am-input-item am-list-item-middle",children:Object(c.jsx)("div",{className:"am-list-line",children:Object(c.jsx)("div",{className:"am-input-control",children:Object(c.jsx)("input",{placeholder:"0.0",className:"h5numInput",type:"number",value:this.state.val01,onChange:this.handleChange.bind(this)})})})})})}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},onClick:function(){return e.showModal()},children:Object(c.jsxs)("div",{style:{textAlign:"right"},children:[Object(c.jsx)("span",{children:"ETH"}),Object(c.jsx)(k.a,{style:{verticalAlign:"bottom"},type:"down"})]})})]})]}),Object(c.jsx)("div",{className:"am-flexbox am-flexbox-align-center",children:Object(c.jsx)("div",{className:"am-flexbox-item",style:{textAlign:"center",margin:"10px 0px"},children:Object(c.jsx)("span",{style:{fontSize:"30px"},children:" + "})})}),Object(c.jsxs)("div",{className:"cst-border color",children:[Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",style:{height:"30%"},children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:"Input"}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},children:Object(c.jsx)("div",{className:" text-right color2"})})]}),Object(c.jsxs)("div",{className:"am-flexbox am-flexbox-align-center",style:{height:"70%"},children:[Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"2 1 0%"},children:Object(c.jsx)("div",{className:"align-items",children:Object(c.jsx)("div",{className:"am-list-item am-input-item am-list-item-middle",children:Object(c.jsx)("div",{className:"am-list-line",children:Object(c.jsx)("div",{className:"am-input-control",children:Object(c.jsx)("input",{placeholder:"0.0",className:"h5numInput",type:"number",value:this.state.val02,onChange:this.handleChange2.bind(this)})})})})})}),Object(c.jsx)("div",{className:"am-flexbox-item",style:{flex:"1 1 0%"},onClick:function(){return e.showModal()},children:Object(c.jsxs)("div",{style:{textAlign:"right"},children:[Object(c.jsx)("span",{children:"Select "}),Object(c.jsx)(k.a,{style:{verticalAlign:"bottom"},type:"down"})]})})]})]})]}),Object(c.jsxs)(y.a,{style:{margin:"20px 0"},children:[Object(c.jsx)(y.a.Header,{title:"Initial prices and pool share"}),Object(c.jsxs)(y.a.Body,{children:[Object(c.jsxs)(P.a,{children:[Object(c.jsx)(P.a.Item,{style:{textAlign:"center"},children:"-"}),Object(c.jsx)(P.a.Item,{style:{textAlign:"center"},children:"-"})]}),Object(c.jsx)(w.a,{}),Object(c.jsxs)(P.a,{children:[Object(c.jsx)(P.a.Item,{style:{textAlign:"center"},children:"CRV per AMPL"}),Object(c.jsx)(P.a.Item,{style:{textAlign:"center"},children:"AMPL per CRV"})]}),Object(c.jsx)(w.a,{}),Object(c.jsx)(P.a,{children:Object(c.jsx)(P.a.Item,{style:{textAlign:"center"},children:"0%"})})]}),Object(c.jsx)(w.a,{}),Object(c.jsx)(y.a.Footer,{content:"Share of Pool"}),Object(c.jsx)(w.a,{})]}),Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("a",{style:{background:"rgb(220,220,220)",color:"rgb(0,0,0)",border:"none"},role:"button",className:"am-button am-button-primary",children:Object(c.jsx)("span",{children:"\u6253\u5305\u5b8c\u6210"})})})]})})})}),Object(c.jsx)(w.a,{size:"lg"}),Object(c.jsxs)(v.a,{visible:this.state.modal1,transparent:!0,closable:!0,className:"dialog",maskClosable:!1,onClose:this.onClose("modal1"),title:"Select a token",children:[Object(c.jsx)(f.a,{placeholder:"Search",maxLength:8}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(y.a.Header,{title:"Token Name"}),Object(c.jsx)(y.a.Body,{children:Object(c.jsxs)(I.a,{className:"my-list",children:[Object(c.jsx)(U,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",children:"ETH"}),Object(c.jsx)(U,{thumb:"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png",children:"0\xd7BTC"}),Object(c.jsx)(U,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",children:"aDAI"}),Object(c.jsx)(U,{thumb:"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png",children:"AMN"}),Object(c.jsx)(U,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",children:"AMPL"})]})}),Object(c.jsx)(y.a.Footer,{content:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{style:{verticalAlign:"middle",marginRight:"10px"},width:"22px",height:"22px",src:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",alt:""}),"Uniswap Default List"]}),extra:Object(c.jsx)("div",{children:"Change"})})]})]})]})})}}]),s}(a.Component),L=function(e){Object(x.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(j.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"page-content",children:[Object(c.jsx)(h.a,{exact:!0,path:"/guideview",component:F}),Object(c.jsx)(h.a,{exact:!0,path:"/article",component:H}),Object(c.jsx)(h.a,{exact:!0,path:"/",component:F})]})}}]),s}(a.Component);s(168),s(169),s(170);var B=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(r.a,{children:Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsx)(L,{})]})})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,173)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),l(e),n(e)}))};i.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),D()},98:function(e,t,s){}},[[172,1,2]]]);