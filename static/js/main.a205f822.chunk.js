(this["webpackJsonpfile-transfer"]=this["webpackJsonpfile-transfer"]||[]).push([[0],{14:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),l=a(19),s=a.n(l),o=(a(25),a(14),a(10)),r=a(11),c=a(8),d=a(13),p=a(12),f=a(15);console.log("AIzaSyB1zUkLU0qXFQ1SYisR9qFKDumsIMkJx9o");f.a.initializeApp({apiKey:"AIzaSyB1zUkLU0qXFQ1SYisR9qFKDumsIMkJx9o",authDomain:"shareeasy-dd2ce.firebaseapp.com",databaseURL:"https://shareeasy-dd2ce.firebaseio.com",projectId:"shareeasy-dd2ce",storageBucket:"shareeasy-dd2ce.appspot.com",messagingSenderId:"999885360104",appId:"1:999885360104:web:2be601450588e71272325d",measurementId:"G-1H3P6BK9N7"}),f.a.analytics();var u,m=f.a,h=a(20),y={fontSize:"52px",color:"red",margin:"14px"},g={image:"fas fa-file-image",video:"far fa-file-video",audio:"far fa-file-audio",pdf:"far fa-file-pdf",text:"far fa-file-alt",zip:"far fa-file-archive",upload:"fas fa-upload"},k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).displayLink=n.displayLink.bind(Object(c.a)(n)),n.displayMediaIcon=n.displayMediaIcon.bind(Object(c.a)(n)),n.copiedText=n.copiedText.bind(Object(c.a)(n)),n.state={copyState:"#a5bef0"},n}return Object(r.a)(a,[{key:"copiedText",value:function(e){this.setState({copyState:"#c4f5d6",copyMargin:"4px"})}},{key:"displayMediaIcon",value:function(){if(0===this.props.fileName.length||0===this.props.fileType.length)return g.upload;for(var e=Object.keys(g),t=0;t<e.length;t++)if(this.props.fileType.includes(e[t]))return g[e[t]];return g.text}},{key:"displayLink",value:function(){if(0!==this.props.downloadLink.length)return i.a.createElement("div",{className:"dLink",style:{backgroundColor:this.state.copyState}},this.props.downloadLink," ",i.a.createElement(h.CopyToClipboard,{text:this.props.downloadLink},i.a.createElement("div",{onClick:this.copiedText,style:{borderLeft:"solid 1px black",display:"inline-block",padding:"8px",paddingLeft:"12px",marginLeft:"12px",fontSize:"16px"}},i.a.createElement("i",{className:"far fa-clone",style:{cursor:"pointer"},onClick:this.copiedText}))))}},{key:"render",value:function(){return i.a.createElement("div",{className:"upItem"},i.a.createElement("div",{className:"upItemText"},i.a.createElement("i",{className:this.displayMediaIcon().toString(),style:y}),i.a.createElement("h3",{className:"fileName"},0===this.props.fileName.length?"Please upload a file...":this.props.fileName)),this.displayLink(),this.props.expireTime?i.a.createElement("h3",{className:"fileName"},"Expires in "+this.props.expireTime+" hrs"):i.a.createElement("div",null))}}]),a}(i.a.Component),v={"Content-Type":"application/json",apikey:"58965d4893d94cb89c7ce2bdf5034618"},b="SAVED_LINKS",N=m.storage().ref(),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).uploadClicked=n.uploadClicked.bind(Object(c.a)(n)),n.onFileSelected=n.onFileSelected.bind(Object(c.a)(n)),n.displayProgress=n.displayProgress.bind(Object(c.a)(n)),n.state={fileName:"",downloadLink:"",fileType:"",uploadRunning:!1,progress:0},n}return Object(r.a)(a,[{key:"displayProgress",value:function(){return this.state.uploadRunning?i.a.createElement("progress",{value:this.state.progress,max:"100",style:{width:"80%"}}):i.a.createElement("i",{style:{display:"none"}})}},{key:"uploadClicked",value:function(e){this.state.uploadRunning||(this.setState({fileName:"",downloadLink:"",fileType:"",uploadRunning:!1,progress:0}),this.refs.fileUpload.click())}},{key:"onFileSelected",value:function(e){var t=this;e.stopPropagation(),e.preventDefault();var a=e.target.files[0];if(a&&!this.state.uploadRunning){var n=a.name;n=n.replace(/\s/g,""),u=N.child(n).put(a,{timeCreated:Date.now()}),this.setState({fileName:n,fileType:a.type}),u.on("state_changed",(function(e){var a=e.bytesTransferred/e.totalBytes*100;t.setState({progress:a,uploadRunning:!0})}),(function(e){console.log(e)}),(function(){u.snapshot.ref.getDownloadURL().then((function(e){var i={destination:e};fetch("https://api.rebrandly.com/v1/links",{method:"POST",headers:v,body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({downloadLink:e.shortUrl,uploadRunning:!1,progress:100,fileName:n,fileType:a.type});var i=JSON.parse(localStorage.getItem(b));(i=i||[]).push({fileName:n,fileType:a.type,dLink:e.shortUrl,genDate:Date.now()}),localStorage.setItem(b,JSON.stringify(i))}))}))})),console.log(a),this.setState({fileName:n,uploadRunning:!0})}}},{key:"render",value:function(){return i.a.createElement("div",{className:"section"},i.a.createElement("h3",{className:"sectionInfo"},"Upload a file to generate a download link that can easily be shared. Files that are uploaded stay available to download for 12 hours."),i.a.createElement("button",{onClick:this.uploadClicked,className:"uploadButton",style:{color:"white"}},"Upload File"),i.a.createElement("input",{type:"file",id:"file",ref:"fileUpload",style:{display:"none"},onChange:this.onFileSelected}),""!==this.state.fileName?i.a.createElement(k,{fileType:this.state.fileType,fileName:this.state.fileName,downloadLink:this.state.downloadLink}):i.a.createElement("i",null),this.displayProgress())}}]),a}(i.a.Component),L=function(e){if(e){for(var t=[],a=0;a<e.length;a++){var n=e[a],l=Math.floor((Date.now()-n.genDate)/36e5);if(!(l>=12)){var s=12-l;0===s&&(s="<1"),t.push(i.a.createElement("li",{style:{display:"inline-block"},key:"link_".concat(a)},i.a.createElement(k,{fileType:n.fileType,fileName:n.fileName,expireTime:s,downloadLink:n.dLink})))}}return t}},E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var i=JSON.parse(localStorage.getItem("SAVED_LINKS"));return n.state={pastLinks:L(i||[])},n.updateList=n.updateList.bind(Object(c.a)(n)),n.deleteLinks=n.deleteLinks.bind(Object(c.a)(n)),setInterval(n.updateList,1e3),n}return Object(r.a)(a,[{key:"deleteLinks",value:function(){localStorage.setItem("SAVED_LINKS","[]"),localStorage.removeItem("SAVED_LINKS"),localStorage.clear(),this.setState({pastLinks:[]})}},{key:"updateList",value:function(){var e=JSON.parse(localStorage.getItem("SAVED_LINKS"));console.log(e),e=e||[],this.setState({pastLinks:L(e)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"section"},i.a.createElement("h3",{className:"sectionInfo"},"Generated download links"),this.state.pastLinks.length>0?i.a.createElement("div",{className:"deleteItems",onClick:this.deleteLinks},"Delete Links"," ",i.a.createElement("div",{style:{display:"inline-block",padding:"8px",paddingLeft:"12px",marginLeft:"12px",fontSize:"16px"}},i.a.createElement("i",{className:"fas fa-trash",style:{cursor:"pointer"},onClick:this.deleteLinks}))):i.a.createElement("div",null),this.state.pastLinks.length>0?i.a.createElement("ul",{className:"pastUploads"},this.state.pastLinks):i.a.createElement("h3",{className:"fileName"},"No Uploads..."))}}]),a}(i.a.Component),x=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("h1",{className:"title"},"Share Easy!"),i.a.createElement("i",{className:"fas fa-share-alt-square",style:{color:"white",fontSize:"50px",display:"inline-block",margin:"0px"}})),i.a.createElement("div",{className:"content"},i.a.createElement(S,null),i.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a205f822.chunk.js.map