slideshowindex=0;
slides = document.getElementsByClassName("myslides");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}

function listredirect(searchKey){

    addres="goToNeurologistSP?spec="+ searchKey;
    document.location.href = addres;
    console.log("XXX");
}

function slideShowchange(){
    
    window.setTimeout("slideShowchange()", 5000); // Change image every 5 seconds
    if (slideshowindex>0){
        slides[slideshowindex-1].style.display = "none"; 
    }
    slideshowindex++;
    if (slideshowindex > slides.length) {slideshowindex = 1}    
    slides[slideshowindex-1].style.display = "block";  
    console.log(slideshowindex);
    
    
}

function main(){
    slideShowchange();

}
main();