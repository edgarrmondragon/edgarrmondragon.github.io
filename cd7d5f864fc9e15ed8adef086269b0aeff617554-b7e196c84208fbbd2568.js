(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0xnW":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgEA/9oADAMBAAIQAxAAAAGKt+NC90FjwDORZ//EABwQAAICAgMAAAAAAAAAAAAAAAECABEEIgMSE//aAAgBAQABBQKoWClE7qu3EaWY66ZZ80Y2QaH/xAAaEQABBQEAAAAAAAAAAAAAAAAhAAECAxAS/9oACAEDAQE/AY1krht//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECIQMQE//aAAgBAgEBPwGWSqOjFr//xAAcEAABBAMBAAAAAAAAAAAAAAABAAIRIRASMSL/2gAIAQEABj8CxITSnej3gRh1ShpSvH//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhQTGh/9oACAEBAAE/IZrnZQOUwIJvrMC1VwqAaSdbF7xr5ERVsXCf/9oADAMBAAIAAwAAABBfP73/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/ELQGhlz/xAAXEQEBAQEAAAAAAAAAAAAAAAARAAEQ/9oACAECAQE/EAXDjCL/xAAfEAEAAgIABwAAAAAAAAAAAAABABEhMUFRYXGBwfH/2gAIAQEAAT8Qvylw08RcBVdzEOCoCOvwhc1wqK2l8ROZRbI17GJSxqGjbETIlqu2Fh1eWf/Z","width":50,"height":50,"src":"/static/68fb7ec98e22694e7cd1b686bd670cd2/99438/profile-pic.jpg","srcSet":"/static/68fb7ec98e22694e7cd1b686bd670cd2/99438/profile-pic.jpg 1x,\\n/static/68fb7ec98e22694e7cd1b686bd670cd2/aba1d/profile-pic.jpg 1.5x,\\n/static/68fb7ec98e22694e7cd1b686bd670cd2/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Edgar Ramírez Mondragón","summary":"an impostor Software Engineer."},"social":{"twitter":"cofonlafaefe"}}}}}')},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("pJf4"),a("3nLz");var r=a("0xnW"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),d=a("p3AD");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"I'm ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},n.a.createElement("strong",null,a.name)),", ",a.summary))}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=c(e),a=A(t);return h[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,S=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(O,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),O=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=A(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,h=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,y=e.loading,x=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:R?1:0,transition:L?"opacity "+b+"ms":"none"},o),z="boolean"==typeof m?"lightgray":m,N={transitionDelay:b+"ms"},Q=(0,d.default)({opacity:this.state.imgLoaded?0:1},L&&N,o,f),M={title:t,alt:this.state.isVisible?"":a,style:Q,className:A,itemProp:S};if(h){var W=h,G=g(h);return l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:G.maxWidth?G.maxWidth+"px":null,maxHeight:G.maxHeight?G.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),z&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&N)}),G.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:M,imageVariants:W,generateSources:I}),G.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:M,imageVariants:W,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(W),l.default.createElement(O,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:y},G,{imageVariants:W}))}}))}if(p){var V=p,k=g(p),T=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete T.display,l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},z&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},L&&N)}),k.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:M,imageVariants:V,generateSources:I}),k.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:M,imageVariants:V,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(V),l.default.createElement(O,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:y},k,{imageVariants:V}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});L.propTypes={resolutions:C,sizes:z,fixed:u.default.oneOfType([C,u.default.arrayOf(C)]),fluid:u.default.oneOfType([z,u.default.arrayOf(z)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=L;t.default=N},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),o=a("xa9o"),d=a("yde8"),l=a("Wadk"),u=a("qDzq"),c=a("O1i0"),f=l(5),A=l(6),g=0,h=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};p.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),d=a("k5Iv"),l=a("SGlo"),u=a("BjK0"),c=a("O1i0"),f=a("O1i0"),A=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,p=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?p(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},E=e.exports=a("94Pd")("WeakMap",m,b,l,!0,!0);f&&A&&(d((r=l.getConstructor(m,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-b7e196c84208fbbd2568.js.map