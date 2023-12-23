import{d as V,a as W,_ as J,b as U,c as Z}from"./content-jjSUke8z.js";import{d as G,H as K,c as z,r as Q,e as l,f as $,k as a,am as X,w as n,F as Y,y as h,bf as i,x as ee,j as u,t as _,A as m,v as c,Z as r,h as q}from"./@vue-73x4sYJ2.js";import{u as te}from"./vuex-6eozxOS7.js";import{u as se}from"./vue-router-22lN-LLO.js";import{U as oe,A as ne,B as ae}from"./index-Lx4Mi1rj.js";import{c as le}from"./copy-to-clipboard-l6UqHK6O.js";import{k as ie,l as ue,n as ce,o as re,r as pe,s as _e,t as me,J as de,R as ve,q as he}from"./@vicons-UfsZxvNZ.js";import{j as f,o as fe,M as ke,e as ge,P as ye,a as we,O as be}from"./naive-ui-qF3urcFV.js";const Ce={class:"post-item"},$e={class:"nickname-wrap"},xe={class:"username-wrap"},Oe={class:"timestamp-mobile"},ze={class:"item-header-extra"},qe=["innerHTML"],Te=["onClick"],Se=["onClick"],Je=G({__name:"mobile-post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(T,{emit:S}){const g=se(),x=te(),y=K(!0),o=T,w=S,d=t=>()=>q(f,null,{default:()=>q(t)}),B=z(()=>{let t=[];return o.isOwner||t.push({label:"私信 @"+o.post.user.username,key:"whisper",icon:d(pe)}),!o.isOwner&&o.addFollowAction&&(o.post.user.is_following?t.push({label:"取消关注 @"+o.post.user.username,key:"unfollow",icon:d(_e)}):t.push({label:"关注 @"+o.post.user.username,key:"follow",icon:d(me)})),!o.isOwner&&o.addFriendAction&&(o.post.user.is_friend?t.push({label:"删除好友 @"+o.post.user.username,key:"delete",icon:d(de)}):t.push({label:"添加朋友 @"+o.post.user.username,key:"requesting",icon:d(ve)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(he)}),t}),F=async t=>{switch(t){case"copyTweetLink":le(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":w("send-whisper",o.post.user);break;case"delete":case"requesting":w("handle-friend-action",o.post);break;case"follow":case"unfollow":w("handle-follow-action",o.post);break}},e=z({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},o.post);return t.contents.map(s=>{(+s.type==1||+s.type==2)&&t.texts.push(s),+s.type==3&&t.imgs.push(s),+s.type==4&&t.videos.push(s),+s.type==6&&t.links.push(s),+s.type==7&&t.attachments.push(s),+s.type==8&&t.charge_attachments.push(s)}),t},set:t=>{o.post.upvote_count=t.upvote_count,o.post.collection_count=t.collection_count}}),A=()=>{ne({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},P=()=>{ae({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},b=t=>{g.push({name:"post",query:{id:t}})},L=(t,s)=>{const p=t.target.dataset.detail;if(p&&p!=="post"){const v=p.split(":");v.length===2&&(x.commit("refresh"),v[0]==="tag"?g.push({name:"home",query:{q:v[1],t:"tag"}}):g.push({name:"user",query:{s:v[1]}}))}else p&&p==="post"?y.value=!y.value:b(s)};return(t,s)=>{const p=fe,v=Q("router-link"),C=ke,M=ge,H=ye,O=W,j=J,D=U,N=Z,I=we,R=be;return l(),$("div",Ce,[a(R,{"content-indented":""},X({avatar:n(()=>[a(p,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[u("span",$e,[a(v,{onClick:s[0]||(s[0]=h(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[m(_(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",xe," @"+_(e.value.user.username),1),e.value.is_top?(l(),c(C,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[m(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(C,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[m(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(C,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[m(" 好友可见 ")]),_:1})):r("",!0),u("div",null,[u("span",Oe,_(i(oe)(e.value.created_on))+" "+_(e.value.ip_loc),1)])]),"header-extra":n(()=>[u("div",ze,[a(H,{placement:"bottom-end",trigger:"click",size:"small",options:B.value,onSelect:F},{default:n(()=>[a(M,{quaternary:"",circle:""},{icon:n(()=>[a(i(f),null,{default:n(()=>[a(i(ie))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(l(),c(O,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c(O,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(j,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(D,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(N,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[a(I,{justify:"space-between"},{default:n(()=>[u("div",{class:"opt-item",onClick:h(A,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ue))]),_:1}),m(" "+_(e.value.upvote_count),1)],8,Te),u("div",{class:"opt-item",onClick:s[3]||(s[3]=h(k=>b(e.value.id),["stop"]))},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ce))]),_:1}),m(" "+_(e.value.comment_count),1)]),u("div",{class:"opt-item",onClick:h(P,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(re))]),_:1}),m(" "+_(e.value.collection_count),1)],8,Se)]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[u("div",{onClick:s[2]||(s[2]=k=>b(e.value.id))},[(l(!0),$(Y,null,ee(e.value.texts,k=>(l(),$("span",{key:k.id,class:"post-text",onClick:s[1]||(s[1]=h(E=>L(E,e.value.id),["stop"])),innerHTML:i(V)(k.content,"展开","收起",i(x).state.profile.tweetMobileEllipsisSize,y.value)},null,8,qe))),128))])]),key:"0"}:void 0]),1024)])}}}),Be={class:"nickname-wrap"},Fe={class:"username-wrap"},Ae={class:"item-header-extra"},Pe={class:"timestamp"},Le=["innerHTML"],Me=["onClick"],He=["onClick"],Ue=G({__name:"post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(T,{emit:S}){const g=se(),x=te(),y=K(!0),o=T,w=S,d=t=>()=>q(f,null,{default:()=>q(t)}),B=z(()=>{let t=[];return o.isOwner||t.push({label:"私信 @"+o.post.user.username,key:"whisper",icon:d(pe)}),!o.isOwner&&o.addFollowAction&&(o.post.user.is_following?t.push({label:"取消关注 @"+o.post.user.username,key:"unfollow",icon:d(_e)}):t.push({label:"关注 @"+o.post.user.username,key:"follow",icon:d(me)})),!o.isOwner&&o.addFriendAction&&(o.post.user.is_friend?t.push({label:"删除好友 @"+o.post.user.username,key:"delete",icon:d(de)}):t.push({label:"添加朋友 @"+o.post.user.username,key:"requesting",icon:d(ve)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(he)}),t}),F=async t=>{switch(t){case"copyTweetLink":le(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":w("send-whisper",o.post.user);break;case"delete":case"requesting":w("handle-friend-action",o.post);break;case"follow":case"unfollow":w("handle-follow-action",o.post);break}},e=z({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},o.post);return t.contents.map(s=>{(+s.type==1||+s.type==2)&&t.texts.push(s),+s.type==3&&t.imgs.push(s),+s.type==4&&t.videos.push(s),+s.type==6&&t.links.push(s),+s.type==7&&t.attachments.push(s),+s.type==8&&t.charge_attachments.push(s)}),t},set:t=>{o.post.upvote_count=t.upvote_count,o.post.collection_count=t.collection_count}}),A=()=>{ne({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},P=()=>{ae({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},b=t=>{g.push({name:"post",query:{id:t}})},L=(t,s)=>{const p=t.target.dataset.detail;if(p&&p!=="post"){const v=p.split(":");v.length===2&&(x.commit("refresh"),v[0]==="tag"?g.push({name:"home",query:{q:v[1],t:"tag"}}):g.push({name:"user",query:{s:v[1]}}))}else p&&p==="post"?y.value=!y.value:b(s)};return(t,s)=>{const p=fe,v=Q("router-link"),C=ke,M=ge,H=ye,O=W,j=J,D=U,N=Z,I=we,R=be;return l(),$("div",{class:"post-item",onClick:s[3]||(s[3]=k=>b(e.value.id))},[a(R,{"content-indented":""},X({avatar:n(()=>[a(p,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[u("span",Be,[a(v,{onClick:s[0]||(s[0]=h(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[m(_(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",Fe," @"+_(e.value.user.username),1),e.value.is_top?(l(),c(C,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[m(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(C,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[m(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(C,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[m(" 好友可见 ")]),_:1})):r("",!0)]),"header-extra":n(()=>[u("div",Ae,[u("span",Pe,_(e.value.ip_loc?e.value.ip_loc+" · ":e.value.ip_loc)+" "+_(i(oe)(e.value.created_on)),1),a(H,{placement:"bottom-end",trigger:"hover",size:"small",options:B.value,onSelect:F},{default:n(()=>[a(M,{quaternary:"",circle:""},{icon:n(()=>[a(i(f),null,{default:n(()=>[a(i(ie))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(l(),c(O,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c(O,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(j,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(D,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(N,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[a(I,{justify:"space-between"},{default:n(()=>[u("div",{class:"opt-item hover",onClick:h(A,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ue))]),_:1}),m(" "+_(e.value.upvote_count),1)],8,Me),u("div",{class:"opt-item hover",onClick:s[2]||(s[2]=h(k=>b(e.value.id),["stop"]))},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ce))]),_:1}),m(" "+_(e.value.comment_count),1)]),u("div",{class:"opt-item hover",onClick:h(P,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(re))]),_:1}),m(" "+_(e.value.collection_count),1)],8,He)]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[(l(!0),$(Y,null,ee(e.value.texts,k=>(l(),$("span",{key:k.id,class:"post-text hover",onClick:s[1]||(s[1]=h(E=>L(E,e.value.id),["stop"])),innerHTML:i(V)(k.content,"展开","收起",i(x).state.profile.tweetWebEllipsisSize,y.value)},null,8,Le))),128))]),key:"0"}:void 0]),1024)])}}});export{Ue as _,Je as a};