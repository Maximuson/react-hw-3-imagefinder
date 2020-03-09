(this["webpackJsonpreact-hw-3-image-finder"]=this["webpackJsonpreact-hw-3-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1P7Nb"}},11:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},23:function(e,a,t){e.exports={App:"App_App__aOmNj"}},25:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},27:function(e,a,t){e.exports=t(72)},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t.n(l),c=t(22),i=t(3),m=t(4),s=t(6),u=t(5),h=t(7),g=t(23),p=t.n(g),b=t(9),f=t(8),d=t.n(f),y=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={value:""},t.handleInput=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.submitForm=function(e){e.preventDefault(),t.onSubmit(t.state.value)},t.onSubmit=t.props.onSubmit,t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:d.a.Searchbar},r.a.createElement("form",{className:d.a.SearchForm,onSubmit:this.submitForm},r.a.createElement("button",{type:"submit",className:d.a.SearchForm_button},r.a.createElement("span",{className:d.a.SearchForm_button_label},"Search")),r.a.createElement("input",{name:"value",className:d.a.SearchForm_input,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.handleInput})))}}]),a}(n.Component),v=t(24),_=t.n(v),I=function(e){return _.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=1&key=").concat("15495221-fb25808b8cc2e505368d60253","&").concat("image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},S=t(25),O=t.n(S),E=t(10),k=t.n(E),j=function(e){var a=e.id,t=e.webformatURL,n=e.tags,l=e.largeImageURL,o=e.onImageClick;return r.a.createElement("li",{className:k.a.ImageGalleryItem,onClick:function(){o(l)}},r.a.createElement("img",{key:a,src:t,alt:n,className:k.a.ImageGalleryItem_image}))},L=(t(49),t(26)),w=t.n(L),U=function(e){var a=e.isLoading,t=e.gallery,n=void 0===t?[]:t,l=e.onImageClick;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(w.a,{style:{margin:"0 auto"},type:"TailSpin",color:"#3f51b5",height:100,width:100,timeout:3e3}),r.a.createElement("ul",{className:O.a.ImageGallery},n.map((function(e){var a=e.id,t=e.webformatURL,n=e.tags,o=e.largeImageURL;return r.a.createElement(j,{id:a,largeImageURL:o,webformatURL:t,tags:n,onImageClick:l})}))))},F=t(11),R=t.n(F),C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleKeyUp=function(e){"Escape"===e.code&&t.props.closeOverlay()},t.clickOverlay=function(e){var a=t.overlayRef.current;e.target===a&&t.props.closeOverlay()},t.overlayRef=Object(n.createRef)(),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.props.modalImage;return r.a.createElement("div",{onClick:this.clickOverlay,ref:this.overlayRef,className:R.a.Overlay},r.a.createElement("div",{className:R.a.Modal},r.a.createElement("img",{src:e,alt:""})))}}]),a}(n.Component),N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={value:"",gallery:[],isLoading:!1,modalImage:"",isVisibleModal:!1},t.onSubmit=function(e){t.setState((function(a){return Object(c.a)({},a,{value:e})}))},t.closeOverlay=function(){t.setState((function(){return{modalImage:"",isVisibleModal:!1}}))},t.onImageClick=function(e){t.setState((function(){return{modalImage:e,isVisibleModal:!0}}))},t.showImage=function(e){t.setState((function(){return{modalImage:e,isVisibleModal:!0}}))},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this;a.value!==this.state.value&&(this.setState((function(){return{isLoading:!0,gallery:[]}})),I(this.state.value).then((function(e){var a=e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL}}));t.setState((function(){return{isLoading:!1,gallery:a}}))})))}},{key:"render",value:function(){return r.a.createElement("div",{className:p.a.App},r.a.createElement(y,{onSubmit:this.onSubmit}),r.a.createElement(U,{isLoading:this.state.isLoading,gallery:this.state.gallery,onImageClick:this.onImageClick}),this.state.isVisibleModal&&r.a.createElement(C,{closeOverlay:this.closeOverlay,modalImage:this.state.modalImage}))}}]),a}(n.Component);t(71);o.a.render(r.a.createElement(N,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchForm_button:"Searchbar_SearchForm_button__3eKQ3",SearchForm_button_label:"Searchbar_SearchForm_button_label__5zUwS",SearchForm_input:"Searchbar_SearchForm_input__11BIx"}}},[[27,1,2]]]);
//# sourceMappingURL=main.9f95d92f.chunk.js.map