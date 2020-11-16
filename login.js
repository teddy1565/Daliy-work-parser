const {ipcRenderer} = require('electron');
const fs = require('fs');
window.onload=()=>{
    ipcRenderer.send('asynchronous-message',"getLoginList");
    ipcRenderer.on('asynchronous-replay',(Event,arg)=>{
        let List = JSON.parse(arg)
        let DOC_LOG_FORM = document.getElementById("users");
        for(let i in List){
            DOC_LOG_FORM.innerHTML+="<option value="+i+">"+List[i]+"</option>";
        }
    });
};
function singIn(){
    let users = document.getElementById("users").value;
    let path = "./app_file/users/users.json";
    if(users=="null"||users==null)return 0;
    let data = JSON.parse(fs.readFileSync(path,'utf-8'));
    if(data[users]!="新增使用者.."){
        let cookie = {option:"setcookie",name:"users",value:data[users]};

    }
    else alert("add it");
}