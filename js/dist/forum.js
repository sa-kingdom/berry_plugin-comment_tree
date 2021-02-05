module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=32)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/PostPreview"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e,n){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n="undefined"!=typeof window,o=n&&null!=window.mozInnerScreenX;function r(t,r,i){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=i&&i.debug||!1;if(s){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var c=document.createElement("div");c.id="input-textarea-caret-position-mirror-div",document.body.appendChild(c);var u=c.style,p=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,f="INPUT"===t.nodeName;u.whiteSpace="pre-wrap",f||(u.wordWrap="break-word"),u.position="absolute",s||(u.visibility="hidden"),e.forEach(function(t){f&&"lineHeight"===t?u.lineHeight=p.height:u[t]=p[t]}),o?t.scrollHeight>parseInt(p.height)&&(u.overflowY="scroll"):u.overflow="hidden",c.textContent=t.value.substring(0,r),f&&(c.textContent=c.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=t.value.substring(r)||".",c.appendChild(l);var d={top:l.offsetTop+parseInt(p.borderTopWidth),left:l.offsetLeft+parseInt(p.borderLeftWidth),height:parseInt(p.lineHeight)};return s?l.style.backgroundColor="#aaa":document.body.removeChild(c),d}void 0!==t.exports?t.exports=r:n&&(window.getCaretCoordinates=r)}()},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/TextEditorButton"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/PostsUserPage"]},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(1),s=n(9),a=n.n(s),c=n(16),u=n.n(c),p=n(3),f=n.n(p),l=n(2),d=n.n(l),h=n(6),v=n.n(h),g=n(7),y=n.n(g),b=n(8),x=n.n(b),w=n(17),C=n.n(w),T=n(18),P=n.n(T),_=n(4),S=n(10),j=n.n(S),k=n(19),B=n.n(k);var O=n(20),M=n.n(O),A=n(5),I=n.n(A),N=n(11),W=n.n(N);function H(t,e,n){var o=t.user(),r="@"+(o?o.username():t.number())+"#"+t.id()+" ";e.content()||(e.props.originalContent=r);var i=e.editor.getSelectionRange()[0],s=e.editor.value().slice(0,i),a=0==s.length?0:3-s.match(/(\n{0,2})$/)[0].length;e.editor.insertAtCursor(Array(a).join("\n")+(n?"> "+r+n.trim().replace(/\n/g,"\n> ")+"\n\n":r))}function E(t,e){var n=app.composer.component;if(n&&n.props.post&&n.props.post.discussion()===t.discussion())H(t,n,e);else{var o=t.id();t.replyTo()>0&&(o=t.replyTo()),a.a.replyAction.call(t.discussion(),!1,!1,o).then(function(n){return H(t,n,e)})}}function R(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var D=n(13),L=n.n(D),z=function(t){function e(){return t.apply(this,arguments)||this}R(e,t);var n=e.prototype;return n.view=function(){var e=this,n=L()(this.props,"post"),o=L()(this.props,"content");return this.props.className="Button PostQuoteButton",this.props.icon="fas fa-quote-left",this.props.children=app.translator.trans("starinc-nex_comment-tree.forum.post.quote_button"),this.props.onclick=function(){e.hide(),E(n,o)},this.props.onmousedown=function(t){return t.stopPropagation()},t.prototype.view.call(this)},n.config=function(t){t||$(document).on("mousedown",this.hide.bind(this))},n.show=function(t,e){var n=this.$().show(),o=n.offsetParent().offset();n.css("left",t-o.left).css("top",e-o.top)},n.showStart=function(t,e){var n=this.$();this.show(t,$(window).scrollTop()+e-n.outerHeight()-5)},n.showEnd=function(t,e){var n=this.$();this.show(t-n.outerWidth(),$(window).scrollTop()+e+5)},n.hide=function(){this.$().hide()},e}(f.a);function U(){Object(i.extend)(d.a.prototype,"config",function(t,e){var n=this.props.post;if(!(e||n.isHidden()||app.session.user&&!n.discussion().canReply())){var o=this.$(".Post-body"),r=$('<div class="Post-quoteButtonContainer"></div>'),i=function(t){setTimeout(function(){var e=function(t){var e=window.getSelection();if(e.rangeCount){var n=e.getRangeAt(0),o=n.commonAncestorContainer;if(t[0]===o||$.contains(t[0],o)){var r=$("<div>").append(n.cloneContents());return r.find("img.emoji").replaceWith(function(){return this.alt}),r.find("img").replaceWith(function(){return"![]("+this.src+")"}),r.find("a").replaceWith(function(){return"["+this.innerText+"]("+this.href+")"}),r.text()}}return""}(o);if(e){var i=new z({post:n,content:e});m.render(r[0],i.render());var s=window.getSelection().getRangeAt(0).getClientRects(),a=s[0];if(t.clientY<a.bottom&&t.clientX-a.right<a.left-t.clientX)i.showStart(a.left,a.top);else{var c=s[s.length-1];i.showEnd(c.right,c.bottom)}}},1)};this.$().after(r).on("mouseup",i),"ontouchstart"in window&&document.addEventListener("selectionchange",i,!1)}})}var q=n(21),J=n.n(q),X=n(22),Y=n.n(X),F=n(23),V=n.n(F),G=n(24),K=n.n(G),Q=n(25),Z=n.n(Q),tt=n(26),et=n.n(tt),nt=n(27),ot=n.n(nt),rt=n(28),it=function(t){function e(){return t.apply(this,arguments)||this}R(e,t);var n=e.prototype;return n.init=function(){this.active=!1,this.index=0,this.keyWasJustPressed=!1},n.view=function(){return m("ul",{className:"Dropdown-menu MentionsDropdown"},this.props.items.map(function(t){return m("li",null,t)}))},n.show=function(t,e){this.$().show().css({left:t+"px",top:e+"px"}),this.active=!0},n.hide=function(){this.$().hide(),this.active=!1},n.navigate=function(t){var e=this;this.keyWasJustPressed=!0,this.setIndex(this.index+t,!0),clearTimeout(this.keyWasJustPressedTimeout),this.keyWasJustPressedTimeout=setTimeout(function(){return e.keyWasJustPressed=!1},500)},n.complete=function(){this.$("li").eq(this.index).find("button").click()},n.setIndex=function(t,e){if(!this.keyWasJustPressed||e){var n=this.$(),o=n.find("li"),r=t;r<0?r=o.length-1:r>=o.length&&(r=0),this.index=r;var i=o.removeClass("active").eq(r).addClass("active");if(e){var s,a=n.scrollTop(),c=n.offset().top,u=c+n.outerHeight(),p=i.offset().top,f=p+i.outerHeight();p<c?s=a-c+p-parseInt(n.css("padding-top"),10):f>u&&(s=a-u+f+parseInt(n.css("padding-bottom"),10)),void 0!==s&&n.stop(!0).animate({scrollTop:s},100)}}},e}(n.n(rt).a);function st(){Object(i.extend)(Y.a.prototype,"config",function(t,e){if(!e){var n,o,r,i=this,s=$('<div class="ComposerBody-mentionsDropdownContainer"></div>'),a=new it({items:[]}),c=this.$("textarea").wrap('<div class="ComposerBody-mentionsWrapper"></div>'),u=[];this.navigator=new ot.a,this.navigator.when(function(){return a.active}).onUp(function(){return a.navigate(-1)}).onDown(function(){return a.navigate(1)}).onSelect(a.complete.bind(a)).onCancel(a.hide.bind(a)).bindTo(c),c.after(s).on("click keyup input",function(t){var e=this;if(-1===[9,13,27,40,38,37,39].indexOf(t.which)){var p=this.selectionStart;if(!(this.selectionEnd-p>0)){var f=this.value;n=0;for(var l=p-1;l>=p-30;l--){if("@"===f.substr(l,1)){n=l+1;break}}if(a.hide(),a.active=!1,n){o=f.substring(n,p).toLowerCase();var d=function(t,e,r,s){void 0===s&&(s="");var u=I()(t);return o&&(u.children[0]=et()(u.children[0],o)),m("button",{className:"PostPreview "+s,onclick:function(){return function(t){var e=t+" ",o=n-1+e.length,r=i.content();i.editor.setValue(r.substring(0,n-1)+e+r.substr(c[0].selectionStart)),i.editor.setSelectionRange(o,o),a.hide()}(e)},onmouseenter:function(){a.setIndex($(this).parent().index())}},m("span",{className:"PostPreview-content"},Z()(t),u," "," ",r))},h=function(t){return[t.username(),t.displayName()].some(function(t){return t.toLowerCase().substr(0,o.length)===o})},v=function(){var t=[];o&&app.store.all("users").forEach(function(e){h(e)&&t.push(d(e,"@"+e.username(),"","MentionsDropdown-user"))});var r=i.props.post,c=r&&r.discussion()||i.props.discussion;if(c&&c.posts().filter(function(t){return t&&"comment"===t.contentType()&&(!r||t.number()<r.number())}).sort(function(t,e){return e.createdAt()-t.createdAt()}).filter(function(t){var e=t.user();return e&&h(e)}).splice(0,5).forEach(function(e){var n=e.user();t.push(d(n,"@"+n.username()+"#"+e.id(),[app.translator.trans("starinc-nex_comment-tree.forum.composer.reply_to_post_text",{number:e.number()})," — ",Object(_.truncate)(e.contentPlain(),200)],"MentionsDropdown-post"))}),t.length){a.props.items=t,m.render(s[0],a.render()),a.show();var u=J()(e,n),p=a.$().outerWidth(),f=a.$().outerHeight(),l=a.$().offsetParent(),v=u.left,g=u.top-e.scrollTop+15;g+f>l.height()&&(g=u.top-e.scrollTop-f-15),v+p>l.width()&&(v=l.width()-p),a.show(v,g)}else a.active=!1,a.hide()};a.active=!0,v(),a.setIndex(0),a.$().scrollTop(0),clearTimeout(r),o&&(r=setTimeout(function(){var t=o.toLowerCase();-1===u.indexOf(t)&&(app.store.find("users",{filter:{q:o},page:{limit:5}}).then(function(){a.active&&v()}),u.push(t))},250))}}}})}}),Object(i.extend)(V.a.prototype,"toolbarItems",function(t){var e=this;t.add("mention",m(K.a,{onclick:function(){return e.insertAtCursor("@")},icon:"fas fa-at"},app.translator.trans("starinc-nex_comment-tree.forum.composer.mention_tooltip")))})}var at=n(12),ct=n.n(at),ut=function(t){function e(){return t.apply(this,arguments)||this}R(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.props.notification,e=t.subject(),n=t.content();return app.route.discussion(e.discussion(),n&&n.replyNumber)},n.content=function(){var t=this.props.notification.fromUser();return app.translator.transChoice("starinc-nex_comment-tree.forum.notifications.post_mentioned_text",1,{user:t})},n.excerpt=function(){return Object(_.truncate)(this.props.notification.subject().contentPlain(),200)},e}(ct.a),pt=function(t){function e(){return t.apply(this,arguments)||this}R(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-at"},n.href=function(){var t=this.props.notification.subject();return app.route.discussion(t.discussion(),t.number())},n.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("starinc-nex_comment-tree.forum.notifications.user_mentioned_text",{user:t})},n.excerpt=function(){return Object(_.truncate)(this.props.notification.subject().contentPlain(),200)},e}(ct.a),ft=n(29),lt=n.n(ft),dt=n(30),mt=n.n(dt),ht=n(31),vt=function(t){function e(){return t.apply(this,arguments)||this}return R(e,t),e.prototype.loadResults=function(t){return app.store.find("posts",{filter:{type:"comment",mentioned:this.user.id()},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},e}(n.n(ht).a),gt=n(14),yt=n.n(gt);var bt=n(15),xt=n.n(bt);function wt(t){var e=app.store.getBy("users","username",t.getAttribute("username"));if(e)return t.setAttribute("id",e.id()),t.setAttribute("displayname",xt()(I()(e))),!0}function Ct(t){var e=app.store.getById("posts",t.getAttribute("id"));if(e)return t.setAttribute("discussionid",e.discussion().id()),t.setAttribute("number",e.number()),t.setAttribute("displayname",xt()(I()(e.user()))),!0}r.a.initializers.add("kyrne-everygreen",function(){v.a.prototype.replyTo=y.a.attribute("replyTo"),v.a.prototype.replyCount=y.a.attribute("replyCount"),a.a.replyAction=function(t,e,n){var o=m.deferred();if(r.a.session.user)if(this.canReply()){var i=r.a.composer.component;r.a.composingReplyTo(this)&&!e||(i=new x.a({user:r.a.session.user,discussion:this,replyTo:n}),r.a.composer.load(i)),r.a.composer.show(),t&&r.a.viewingDiscussion(this)&&!r.a.composer.isFullScreen()&&r.a.current.stream.goToNumber("reply"),o.resolve(i)}else o.reject();else o.reject(),r.a.modal.show(new C.a);return o.promise},Object(i.extend)(x.a.prototype,"init",function(){this.replyTo=this.props.replyTo}),Object(i.extend)(x.a.prototype,"data",function(t){t.replyTo=this.replyTo}),Object(i.override)(x.a.prototype,"onsubmit",function(){var t=this,e=this.props.discussion;this.loading=!0,m.redraw();var n=this.data();r.a.store.createRecord("posts").save(n).then(function(n){if(t.draft&&t.draft.delete(),r.a.viewingDiscussion(e))t.props.replyTo?(r.a.cache.trees[t.props.replyTo].push(n),r.a.cache.pushTree[t.props.replyTo]++,m.redraw()):r.a.current.stream.update().then(function(){return r.a.current.stream.goToNumber(n.number())});else{var o,i=f.a.component({className:"Button Button--link",children:r.a.translator.trans("core.forum.composer_reply.view_button"),onclick:function(){m.route(r.a.route.post(n)),r.a.alerts.dismiss(o)}});r.a.alerts.show(o=new u.a({type:"success",children:r.a.translator.trans("core.forum.composer_reply.posted_message"),controls:[i]}))}r.a.composer.hide()},this.loaded.bind(this))}),Object(i.extend)(d.a.prototype,"config",function(){var t=this.props.post.contentHtml();if(t!==this.oldPostContentHtml&&!this.isEditing()){this.oldPostContentHtml=t;var e=this.props.post,n=this.$();this.$(".UserMention, .PostMention").each(function(){m.route.call(this,this,!1,{},{attrs:{href:this.getAttribute("href")}})}),this.$(".PostMention").each(function(){var t,o=$(this),r=o.data("id"),i=$('<ul class="Dropdown-menu PostMention-preview fade"/>');n.append(i);var s=function(){return $('.PostStream-item[data-id="'+r+'"]')},a=function(){var t=s(),a=!1;if(t.length){var c=t.offset().top,u=window.pageYOffset;c>u&&c+t.height()<u+$(window).height()&&(t.addClass("pulsate"),a=!0)}if(!a){var p=function(){var t=i.outerHeight(!0),e=0;o.offset().top-t<$(window).scrollTop()+$("#header").outerHeight()?e+=o.outerHeight(!0):e-=t,i.show().css("top",o.offset().top-n.offset().top+e).css("left",o.offsetParent().offset().left-n.offset().left).css("max-width",o.offsetParent().width())},f=function(t){var n=t.discussion();m.render(i[0],[n!==e.discussion()?m("li",null,m("span",{className:"PostMention-preview-discussion"},n.title())):"",m("li",null,j.a.component({post:t}))]),p()},l=app.store.getById("posts",r);l&&l.discussion()?f(l):(m.render(i[0],B.a.component()),app.store.find("posts",r).then(f),p()),setTimeout(function(){return i.off("transitionend").addClass("in")})}},c=function(){s().removeClass("pulsate"),i.hasClass("in")&&i.removeClass("in").one("transitionend",function(){return i.hide()})};o.on("touchstart",function(t){return t.preventDefault()}),o.add(i).hover(function(){clearTimeout(t),t=setTimeout(a,250)},function(){clearTimeout(t),s().removeClass("pulsate"),t=setTimeout(c,250)}).on("touchend",function(t){a(),t.stopPropagation()}),$(document).on("touchend",c)})}}),v.a.prototype.mentionedBy=y.a.hasMany("mentionedBy"),Object(i.extend)(d.a.prototype,"footerItems",function(t){var e=this,n=this.props.post,o=n.mentionedBy();if(o&&o.length){if(1===o.length&&o[0].number()===n.number()+1)return;var r=function(){e.$(".Post-mentionedBy-preview").removeClass("in").one("transitionend",function(){$(this).hide()})},i=[],s=o.sort(function(t){return t.user()===app.session.user?-1:0}).filter(function(t){var e=t.user();if(-1===i.indexOf(e))return i.push(e),!0}),a=s.length>4,c=s.slice(0,a?3:4).map(function(t){var e=t.user();return m("a",{href:app.route.post(t),config:m.route,onclick:r,"data-number":t.number()},app.session.user===e?app.translator.trans("starinc-nex_comment-tree.forum.post.you_text"):I()(e))});if(a){var u=s.length-c.length;c.push(app.translator.transChoice("starinc-nex_comment-tree.forum.post.others_text",u,{count:u}))}t.add("replies",m("div",{className:"Post-mentionedBy",config:function(t,e){if(!e){var n,i=$(t),s=$('<ul class="Dropdown-menu Post-mentionedBy-preview fade"/>');i.append(s),i.children().hover(function(){clearTimeout(n),n=setTimeout(function(){!s.hasClass("in")&&s.is(":visible")||(m.render(s[0],o.map(function(t){return m("li",{"data-number":t.number()},j.a.component({post:t,onclick:r}))})),s.show(),setTimeout(function(){return s.off("transitionend").addClass("in")}))},500)},function(){clearTimeout(n),n=setTimeout(r,250)}),i.find(".Post-mentionedBy-summary a").hover(function(){s.find('[data-number="'+$(this).data("number")+'"]').addClass("active")},function(){s.find("[data-number]").removeClass("active")})}}},m("span",{className:"Post-mentionedBy-summary"},W()("fas fa-reply"),app.translator.transChoice("starinc-nex_comment-tree.forum.post.mentioned_by"+(s[0].user()===app.session.user?"_self":"")+"_text",c.length,{count:c.length,users:M()(c)}))))}}),Object(i.extend)(d.a.prototype,"actionItems",function(t){var e=this.props.post;e.isHidden()||app.session.user&&!e.discussion().canReply()||t.add("reply",f.a.component({className:"Button Button--link",children:app.translator.trans("starinc-nex_comment-tree.forum.post.reply_link"),onclick:function(){return E(e)}}))}),U(),st(),Object(i.override)(yt.a.prototype,"config",function(){this.$(".Post-actions"),this.$(".Post-controls").on("click tap",function(){$(this).toggleClass("open")})}),Object(i.extend)(yt.a.prototype,"view",function(t){var e=this.props.post.id();if(app.cache.trees||(app.cache.trees={},app.cache.pushTree={}),app.cache.trees[e]||(app.cache.trees[e]=[],app.cache.pushTree[e]=0),app.cache.trees[e].length>0&&t.children.push(m("div",{className:"CommentTree",id:e},W()("fas fa-reply"),app.cache.trees[e].filter(function(t,e,n){return n.findIndex(function(e){return e.id()===t.id()})===e}).sort(function(t,e){return t.createdAt()-e.createdAt()}).map(function(t){return d.a.component({post:t})}))),this.props.post.replyCount()>app.cache.trees[e].length-app.cache.pushTree[e]||0===app.cache.trees[e].length&&this.props.post.replyCount()){var n=this.props.post.replyCount()-app.cache.trees[e].length+app.cache.pushTree[e],o="discussion,user,user.groups,hiddenUser,editedUser,";app.initializers.has("fof-gamification")&&(o+="user.ranks,"),app.initializers.has("fof/reactions")&&(o+="reactions"),t.children.push(f.a.component({className:"Button Button--link Evergreen--show",icon:"fas fa-caret-down",children:app.translator.trans("starinc-nex_comment-tree.forum.post.show_"+(n>1?"replies":"reply"),{count:n}),onclick:function(){app.store.find("trees",e,{include:o.replace(/,\s*$/,"")}).then(function(t){delete t.payload,[].push.apply(app.cache.trees[e],t),m.redraw()})}}))}}),r.a.notificationComponents.postMentioned=ut,r.a.notificationComponents.userMentioned=pt,Object(i.extend)(P.a.prototype,"notificationTypes",function(t){t.add("postMentioned",{name:"postMentioned",icon:"fas fa-reply",label:r.a.translator.trans("starinc-nex_comment-tree.forum.settings.notify_post_mentioned_label")}),t.add("userMentioned",{name:"userMentioned",icon:"fas fa-at",label:r.a.translator.trans("starinc-nex_comment-tree.forum.settings.notify_user_mentioned_label")})}),r.a.routes["user.mentions"]={path:"/u/:uid/mentions",component:vt.component()},Object(i.extend)(lt.a.prototype,"navItems",function(t){var e=this.user;t.add("mentions",mt.a.component({href:r.a.route("user.mentions",{uid:e.id()}),name:"mentions",children:[r.a.translator.trans("starinc-nex_comment-tree.forum.user.mentions_link")],icon:"fas fa-at"}),80)}),_.getPlainContent.removeSelectors.push("a.PostMention")}),n.d(e,"filterUserMentions",function(){return wt}),n.d(e,"filterPostMentions",function(){return Ct})}]);
//# sourceMappingURL=forum.js.map