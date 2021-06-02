(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,t,n){e.exports={header:"Header_header__3mfnY"}},21:function(e,t,n){e.exports={main:"Main_main__z84uf"}},22:function(e,t,n){e.exports={footer:"Footer_footer__2pTzq"}},23:function(e,t,n){e.exports={container:"Container_container__udpRK"}},24:function(e,t,n){e.exports={title:"Section_title__3D4Rt"}},30:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(30),n(10)),s=n(4),l=n(5),u=n(7),h=n(6),m=n(19),d=n.n(m),j=(n(51),n(20)),b=n.n(j),g=n(0),p=function(e){var t=e.children;return Object(g.jsx)("header",{className:b.a.header,children:t})},O=n(21),f=n.n(O),y=function(e){var t=e.children;return Object(g.jsx)("header",{className:f.a.main,children:t})},v=n(22),x=n.n(v),k=function(e){var t=e.children;return Object(g.jsx)("footer",{className:x.a.footer,children:t})},C=n(23),S=n.n(C),I=function(e){var t=e.children,n=(e.borderClass,[S.a.container]);return Object(g.jsx)("div",{className:n,children:t})},N=n(24),_=n.n(N),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(g.jsxs)("section",{children:[Object(g.jsx)("h2",{className:_.a.title,children:t}),n]})}}]),n}(a.Component),L=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:"Button",onClick:t,children:"load more"})},U=function(e){var t=e.src,n=e.alt,a=e.largeImageURL,r=e.onThumbClick;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem__image","data-largeimageurl":a,onClick:r})})},F=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.onThumbClick,a=e.children;return Object(g.jsxs)("ul",{className:"ImageGallery",children:[t.map((function(e){return Object(g.jsx)(U,{largeImageURL:e.largeImageURL,src:e.webformatURL,alt:e.tags,onThumbClick:n},e.id)})),a]})}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.onInputChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.props.onSubmit;e.state.query&&n(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.onInputChange})]})})}}]),n}(r.a.Component),R=document.querySelector("#modal-root"),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.onEscClick;window.addEventListener("keydown",e)}},{key:"componentWillUnmount",value:function(){var e=this.props.onEscClick;window.removeEventListener("keydown",e)}},{key:"render",value:function(){var e=this.props,t=e.imageUrl,n=e.onModalClick;return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:n,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:t,alt:""})})}),R)}}]),n}(a.Component),Q=n(25),q=n.n(Q);function P(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.nextPage,r=void 0===a?1:a,c=e.pageSize,o=void 0===c?12:c;return q.a.get("".concat("https://pixabay.com/api/","?key=").concat("17667415-6f718af57a22652ec3432b17e","&q=").concat(n,"&page=").concat(r,"&per_page=").concat(o,"&image_type=photo&orientation=horizontal")).then((function(e){return e.data.hits}))}var T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={modalIsOpen:!1,searchQuery:"",imagesArray:[],largeImageURL:"",nextPage:1,isLoading:!1,error:!1,errorMsg:"",pageSize:12},e.pageLoad=function(){var t=e.state,n={searchQuery:t.searchQuery,nextPage:t.nextPage,pageSize:t.pageSize};e.setState({isLoading:!0,error:!1}),P(n).then((function(t){return e.setState((function(e){return{imagesArray:[].concat(Object(i.a)(e.imagesArray),Object(i.a)(t)),nextPage:e.nextPage+1}}))})).catch((function(t){e.setState({error:!0,errorMsg:t.messge})})).finally((function(){e.setState({isLoading:!1}),e.state.nextPage>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.onChangeQuery=function(t){e.state.searchQuery!==t&&e.setState({searchQuery:t,imagesArray:[],largeImageURL:"",nextPage:1})},e.onThumbClick=function(t){e.setState({modalIsOpen:!0,largeImageURL:t.target.dataset.largeimageurl})},e.onModalClick=function(t){t.target===t.currentTarget&&e.setState({modalIsOpen:!1})},e.onEscClick=function(t){"Escape"===t.code&&e.setState({modalIsOpen:!1})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.pageLoad()}},{key:"render",value:function(){var e=this.state,t=e.modalIsOpen,n=e.imagesArray,r=e.isLoading,c=e.error,o=e.errorMsg,i=e.largeImageURL;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(p,{}),Object(g.jsx)(y,{children:Object(g.jsx)(w,{title:"Image finder",children:Object(g.jsxs)(I,{children:[Object(g.jsx)(M,{onSubmit:this.onChangeQuery}),Object(g.jsx)(F,{images:n,onThumbClick:this.onThumbClick,isLoading:r}),r&&Object(g.jsx)("div",{className:"spinner",children:Object(g.jsx)(d.a,{type:"Rings",color:"#00BFFF",height:100,width:100,visible:!0})}),c&&Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)("p",{className:"error-message",children:"Oops, something went wrong..."}),Object(g.jsx)("p",{className:"error-message",children:o})]}),n.length>0&&!c&&Object(g.jsx)(L,{onClick:this.pageLoad}),t&&Object(g.jsx)(E,{imageUrl:i,onModalClick:this.onModalClick,onEscClick:this.onEscClick})]})})}),Object(g.jsx)(k,{})]})}}]),n}(a.Component);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.508354fd.chunk.js.map