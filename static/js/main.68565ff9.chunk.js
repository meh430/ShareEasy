(this["webpackJsonpfile-transfer"]=this["webpackJsonpfile-transfer"]||[]).push([[0],{14:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a.n(i),l=a(19),s=a.n(l),o=(a(25),a(14),a(10)),r=a(11),c=a(8),d=a(13),p=a(12),f=a(15),u={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/ShareEasy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREAPI,authDomain:"shareeasy-dd2ce.firebaseapp.com",databaseURL:"https://shareeasy-dd2ce.firebaseio.com",projectId:"shareeasy-dd2ce",storageBucket:"shareeasy-dd2ce.appspot.com",messagingSenderId:"999885360104",appId:"1:999885360104:web:2be601450588e71272325d",measurementId:"G-1H3P6BK9N7"};f.a.initializeApp(u),f.a.analytics();var m,h=f.a,y=a(20),g={fontSize:"52px",color:"red",margin:"14px"},k={image:"fas fa-file-image",video:"far fa-file-video",audio:"far fa-file-audio",pdf:"far fa-file-pdf",text:"far fa-file-alt",zip:"far fa-file-archive",upload:"fas fa-upload"},S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).displayLink=i.displayLink.bind(Object(c.a)(i)),i.displayMediaIcon=i.displayMediaIcon.bind(Object(c.a)(i)),i.copiedText=i.copiedText.bind(Object(c.a)(i)),i.state={copyState:"#a5bef0"},i}return Object(r.a)(a,[{key:"copiedText",value:function(e){this.setState({copyState:"#c4f5d6",copyMargin:"4px"})}},{key:"displayMediaIcon",value:function(){if(0===this.props.fileName.length||0===this.props.fileType.length)return k.upload;for(var e=Object.keys(k),t=0;t<e.length;t++)if(this.props.fileType.includes(e[t]))return k[e[t]];return k.text}},{key:"displayLink",value:function(){if(0!==this.props.downloadLink.length)return n.a.createElement("div",{className:"dLink",style:{backgroundColor:this.state.copyState}},this.props.downloadLink," ",n.a.createElement(y.CopyToClipboard,{text:this.props.downloadLink},n.a.createElement("div",{onClick:this.copiedText,style:{borderLeft:"solid 1px black",display:"inline-block",padding:"8px",paddingLeft:"12px",marginLeft:"12px",fontSize:"16px"}},n.a.createElement("i",{className:"far fa-clone",style:{cursor:"pointer"},onClick:this.copiedText}))))}},{key:"render",value:function(){return n.a.createElement("div",{className:"upItem"},n.a.createElement("div",{className:"upItemText"},n.a.createElement("i",{className:this.displayMediaIcon().toString(),style:g}),n.a.createElement("h3",{className:"fileName"},0===this.props.fileName.length?"Please upload a file...":this.props.fileName)),this.displayLink(),this.props.expireTime?n.a.createElement("h3",{className:"fileName"},"Expires in "+this.props.expireTime+" hrs"):n.a.createElement("div",null))}}]),a}(n.a.Component),v={"Content-Type":"application/json",apikey:Object({NODE_ENV:"production",PUBLIC_URL:"/ShareEasy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LINKAPI},E="SAVED_LINKS",N=h.storage().ref(),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).uploadClicked=i.uploadClicked.bind(Object(c.a)(i)),i.onFileSelected=i.onFileSelected.bind(Object(c.a)(i)),i.displayProgress=i.displayProgress.bind(Object(c.a)(i)),i.state={fileName:"",downloadLink:"",fileType:"",uploadRunning:!1,progress:0},i}return Object(r.a)(a,[{key:"displayProgress",value:function(){return this.state.uploadRunning?n.a.createElement("progress",{value:this.state.progress,max:"100",style:{width:"80%"}}):n.a.createElement("i",{style:{display:"none"}})}},{key:"uploadClicked",value:function(e){this.state.uploadRunning||(this.setState({fileName:"",downloadLink:"",fileType:"",uploadRunning:!1,progress:0}),this.refs.fileUpload.click())}},{key:"onFileSelected",value:function(e){var t=this;e.stopPropagation(),e.preventDefault();var a=e.target.files[0];if(a&&!this.state.uploadRunning){var i=a.name;i=i.replace(/\s/g,""),m=N.child(i).put(a,{timeCreated:Date.now()}),this.setState({fileName:i,fileType:a.type}),m.on("state_changed",(function(e){var a=e.bytesTransferred/e.totalBytes*100;t.setState({progress:a,uploadRunning:!0})}),(function(e){console.log(e)}),(function(){m.snapshot.ref.getDownloadURL().then((function(e){var n={destination:e};fetch("https://api.rebrandly.com/v1/links",{method:"POST",headers:v,body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({downloadLink:e.shortUrl,uploadRunning:!1,progress:100,fileName:i,fileType:a.type});var n=JSON.parse(localStorage.getItem(E));(n=n||[]).push({fileName:i,fileType:a.type,dLink:e.shortUrl,genDate:Date.now()}),localStorage.setItem(E,JSON.stringify(n))}))}))})),console.log(a),this.setState({fileName:i,uploadRunning:!0})}}},{key:"render",value:function(){return n.a.createElement("div",{className:"section"},n.a.createElement("h3",{className:"sectionInfo"},"Upload a file to generate a download link that can easily be shared. Files that are uploaded stay available to download for 12 hours."),n.a.createElement("button",{onClick:this.uploadClicked,className:"uploadButton",style:{color:"white"}},"Upload File"),n.a.createElement("input",{type:"file",id:"file",ref:"fileUpload",style:{display:"none"},onChange:this.onFileSelected}),""!==this.state.fileName?n.a.createElement(S,{fileType:this.state.fileType,fileName:this.state.fileName,downloadLink:this.state.downloadLink}):n.a.createElement("i",null),this.displayProgress())}}]),a}(n.a.Component),L=function(e){if(e){for(var t=[],a=0;a<e.length;a++){var i=e[a],l=Math.floor((Date.now()-i.genDate)/36e5);if(!(l>=12)){var s=12-l;0===s&&(s="<1"),t.push(n.a.createElement("li",{style:{display:"inline-block"},key:"link_".concat(a)},n.a.createElement(S,{fileType:i.fileType,fileName:i.fileName,expireTime:s,downloadLink:i.dLink})))}}return t}},O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var i;Object(o.a)(this,a),i=t.call(this,e);var n=JSON.parse(localStorage.getItem("SAVED_LINKS"));return i.state={pastLinks:L(n||[])},i.updateList=i.updateList.bind(Object(c.a)(i)),i.deleteLinks=i.deleteLinks.bind(Object(c.a)(i)),setInterval(i.updateList,1e3),i}return Object(r.a)(a,[{key:"deleteLinks",value:function(){localStorage.setItem("SAVED_LINKS","[]"),localStorage.removeItem("SAVED_LINKS"),localStorage.clear(),this.setState({pastLinks:[]})}},{key:"updateList",value:function(){var e=JSON.parse(localStorage.getItem("SAVED_LINKS"));console.log(e),e=e||[],this.setState({pastLinks:L(e)})}},{key:"render",value:function(){return n.a.createElement("div",{className:"section"},n.a.createElement("h3",{className:"sectionInfo"},"Generated download links"),this.state.pastLinks.length>0?n.a.createElement("div",{className:"deleteItems",onClick:this.deleteLinks},"Delete Links"," ",n.a.createElement("div",{style:{display:"inline-block",padding:"8px",paddingLeft:"12px",marginLeft:"12px",fontSize:"16px"}},n.a.createElement("i",{className:"fas fa-trash",style:{cursor:"pointer"},onClick:this.deleteLinks}))):n.a.createElement("div",null),this.state.pastLinks.length>0?n.a.createElement("ul",{className:"pastUploads"},this.state.pastLinks):n.a.createElement("h3",{className:"fileName"},"No Uploads..."))}}]),a}(n.a.Component),T=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",{className:"title"},"Share Easy!"),n.a.createElement("i",{className:"fas fa-share-alt-square",style:{color:"white",fontSize:"50px",display:"inline-block",margin:"0px"}})),n.a.createElement("div",{className:"content"},n.a.createElement(b,null),n.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.68565ff9.chunk.js.map