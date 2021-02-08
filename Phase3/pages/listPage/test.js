function newfunc(){
    respond=null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("kosi").innerHTML=this.response;
        // console.log(this.response);
      }
    };
    xmlhttp.open("GET", "gethint.php", true);
    xmlhttp.send();


}