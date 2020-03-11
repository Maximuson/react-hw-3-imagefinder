(this["webpackJsonpreact-hw-3-image-finder"]=this["webpackJsonpreact-hw-3-image-finder"]||[]).push([[0],{11:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1P7Nb"}},12:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},25:function(e,a,t){e.exports={App:"App_App__aOmNj"}},26:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},28:function(e,a,t){e.exports=t(73)},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),c=t.n(o),l=t(13),i=t(24),m=t(3),s=t(4),u=t(6),g=t(5),h=t(7),p=t(25),d=t.n(p),f=t(9),b=t(8),v=t.n(b),y=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).state={value:""},t.handleInput=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.submitForm=function(e){e.preventDefault(),t.onSubmit(t.state.value)},t.onSubmit=t.props.onSubmit,t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:v.a.Searchbar},r.a.createElement("form",{className:v.a.SearchForm,onSubmit:this.submitForm},r.a.createElement("button",{type:"submit",className:v.a.SearchForm_button},r.a.createElement("span",{className:v.a.SearchForm_button_label},"Search")),r.a.createElement("input",{name:"value",className:v.a.SearchForm_input,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.handleInput})))}}]),a}(n.Component),_=t(10),I=t.n(_),S="15495221-fb25808b8cc2e505368d60253",O="image_type=photo&orientation=horizontal&per_page=12",w="https://pixabay.com/api/",E=function(e){return I.a.get("".concat(w,"?q=").concat(e,"&page=1&key=").concat(S,"&").concat(O)).then((function(e){return e.data.hits}))},L=function(e,a){return I.a.get("".concat(w,"?q=").concat(e,"&page=").concat(a,"&key=").concat(S,"&").concat(O)).then((function(e){return e.data.hits}))},k=t(26),j=t.n(k),U=t(11),R=t.n(U),C=function(e){var a=e.id,t=e.webformatURL,n=e.tags,o=e.largeImageURL,c=e.onImageClick;return r.a.createElement("li",{className:R.a.ImageGalleryItem,onClick:function(){c(o)}},r.a.createElement("img",{key:a,src:t,alt:n,className:R.a.ImageGalleryItem_image}))},F=(t(50),t(27)),N=t.n(F),G=function(e){var a=e.isLoading,t=e.gallery,n=void 0===t?[]:t,o=e.onImageClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:j.a.ImageGallery},n.map((function(e){var a=e.id,t=e.webformatURL,n=e.tags,c=e.largeImageURL;return r.a.createElement(C,{id:a,largeImageURL:c,webformatURL:t,tags:n,onImageClick:o})})),a&&r.a.createElement(N.a,{style:{margin:"0px auto",gridColumnStart:1,gridColumnEnd:3},type:"TailSpin",color:"#3f51b5",height:100,width:100})))},x=t(12),M=t.n(x),D=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).handleKeyUp=function(e){"Escape"===e.code&&t.props.closeOverlay()},t.onClickOverlay=function(e){var a=t.overlayRef.current;e.target===a&&t.props.closeOverlay()},t.overlayRef=Object(n.createRef)(),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.props.modalImage;return r.a.createElement("div",{onClick:this.onClickOverlay,ref:this.overlayRef,className:M.a.Overlay},r.a.createElement("div",{className:M.a.Modal},r.a.createElement("img",{src:e,alt:""})))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={value:"",gallery:[],isLoading:!1,modalImage:"",page:1,canDownloadMore:!1},t.onSubmit=function(e){t.setState((function(a){return Object(i.a)({},a,{value:e})}))},t.closeOverlay=function(){t.setState((function(){return{modalImage:""}}))},t.onImageClick=function(e){t.setState((function(){return{modalImage:e}}))},t.showImage=function(e){t.setState((function(){return{modalImage:e}}))},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this;a.value!==this.state.value&&(this.setState((function(){return{isLoading:!0,gallery:[]}})),E(this.state.value).then((function(e){var a=e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL}}));t.setState((function(){return{isLoading:!1,gallery:a,canDownloadMore:12===a.length,page:1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))),a.page!==this.state.page&&(this.setState((function(){return{isLoading:!0}})),L(this.state.value,this.state.page).then((function(e){var a=e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL}}));t.setState((function(e){return{isLoading:!1,gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(a))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:d.a.App},r.a.createElement(y,{onSubmit:this.onSubmit}),r.a.createElement(G,{isLoading:this.state.isLoading,gallery:this.state.gallery,onImageClick:this.onImageClick}),this.state.modalImage&&r.a.createElement(D,{closeOverlay:this.closeOverlay,modalImage:this.state.modalImage}),this.state.canDownloadMore&&!this.state.isLoading&&r.a.createElement("button",{onClick:function(){e.setState((function(e){return{page:e.page+1}}))}},"download More"))}}]),a}(n.Component);t(72);c.a.render(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchForm_button:"Searchbar_SearchForm_button__3eKQ3",SearchForm_button_label:"Searchbar_SearchForm_button_label__5zUwS",SearchForm_input:"Searchbar_SearchForm_input__11BIx"}}},[[28,1,2]]]);
//# sourceMappingURL=main.5fadc0ed.chunk.js.map