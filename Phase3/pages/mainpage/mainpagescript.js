
function loginbottunsubmit(){
    window.location="../loginpage/loginpage.html";

}

function searchbutt(){
    addres="../listPage/neurologist.html?val="+ document.getElementById("search_bar_input").value;
    // console.log("../listPage/neurologist.html?val=$"+ document.getElementById("search_bar_input").value+"$")
    window.location=addres;
}

function main(){
    
}

main();