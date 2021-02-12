var doctoritem = null;
imgcounter=0;
displayison=false;


async function fetchdoctor(id){
        doctorInformation = document.getElementById("shareData-doctorInformation").innerHTML;

    // try {
    //     const doctor = await fetch(`https://intense-ravine-40625.herokuapp.com/doctors/${id}`);
    //     doctoritem =await doctor.json();
        
    // } catch (error) {
    //     // ERROR HANDLING
    //     window.alert(`Error while fetching doc ${i}`);
    // }
    var item = JSON.parse(doctorInformation);
    dbtranslatetojson(item[0]);
    console.log()
}

async function updatepersonalinfohtml(){

    personalinfoelem = document.getElementById("personalinfocard");
    docpersonalinfohtml = personalinfoelem.innerHTML;

    if (doctoritem.online_pay){
        onlinepay="دارد";
    } else {
        onlinepay="ندارد";
    }
    docpersonalinfohtml= `<!-- Card header (img & buttons) -->
    <div class="cover">
        <div class="w-10">
            <div>
                <a class="hover-p"
                   data-toggle="dropdown">
                    <svg class="hover-p text-white " fill="none" height="24px"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="2" viewBox="0 0 24 24" width="24px"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="5" r="3">
                        </circle>
                        <circle cx="6" cy="12" r="3">
                        </circle>
                        <circle cx="18" cy="19" r="3">
                        </circle>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49">
                        </line>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49">
                        </line>
                    </svg>
                </a>
            </div>
        </div>
        <div class="w-80">
            <img
                    alt="نوبت دهی دکتر ${doctoritem.name}  ${doctoritem.spec}"
                    class="rounded-circle p-0 dr-profile"
                    src=${doctoritem.avatar} onclick="startgall()">
        </div>
        <div class="w-10">
            <div>
                <div class="bookmark">
                    <svg class="bookmark__heart--hover" fill="none"
                         height="1.5em" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width="1.5em"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- Card text -->
    <div class="lines">
        <h1>
        ${doctoritem.name}
        </h1>
        <h2 class="mt-3 mb-0 p-0">
            <a
                    class="text-white" href="https://www.darmankade.com/neurologist">
                ${doctoritem.spec}
            </a>
        </h2>
        <h3 class="mt-3"> شماره نظام پزشکی : ${doctoritem.number}</h3>
    </div>

    <!-- Time, Cost and XP years details -->
    <div class="box-container my-3">
        <div class="col p-2 row">
            <svg class="m-1 w-100" fill="none" height="24px"
                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" viewBox="0 0 24 24" width="24px"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20">
                </path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                </path>
            </svg>
            <span> تجربه </span> <span class="val"> ${doctoritem.experience_years}سال</span>
        </div>
        <div class="col py-2 row">
            <svg class="m-1 w-100" fill="none" height="24px"
                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" viewBox="0 0 24 24" width="24px"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10">
                </circle>
                <polyline points="12 6 12 12 16 14">
                </polyline>
            </svg>
            <span> اولین نوبت آزاد </span> <span class="val">${doctoritem.first_empty_date}</span>
        </div>
        <div class="col p-2 row">
            <svg class="m-1 w-100" fill="none" height="24px"
                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" viewBox="0 0 24 24" width="24px"
                 xmlns="http://www.w3.org/2000/svg">
                <rect height="16" rx="2" ry="2" width="22" x="1" y="4">
                </rect>
                <line x1="1" x2="23" y1="10" y2="10">
                </line>
            </svg>
            <span> پرداخت آنلاین </span> <span class="val">${onlinepay}</span>
        </div>
    </div>`;

    document.getElementById("personalinfocard").innerHTML = docpersonalinfohtml;
}

async function dbtranslatetojson(obj){
doctorjson={
"name": obj.name,
"avatar":"https://www.darmankade.com/UploadFiles/Doctor/131899428573066339%D8%AF%DA%A9%D8%AA%D8%B1-%D9%85%D9%87%D8%B1%D8%A7%D9%86-%D8%AC%D9%84%D8%A7%D9%84%DB%8C.jpg",
"spec":"",
"number":obj.drNumber,
"online_pay":obj.onlinePay,
"experience_years": obj.experienceYears, //this
"first_empty_date":"23 بهمن",
"stars": (Math.random()*5).toFixed(2),
"user_percent": Math.floor(Math.random()*21) + 80,
"address": obj.address,
"location": "تهران پونک",
"commenter":"سلطان بهشتی",
"comments" : Math.floor(Math.random()*100),
"comment_text":"عزت و جلال و کبریا. وحشت و وشی زمین و زمان، والا مقام، سلطان حسین بهشتی",
"phone": obj.phoneNumber,
"week_days": [obj.saturday,obj.sunday,obj.monday,obj.tuesday,obj.wednesday,obj.thursday,obj.friday] //this
};
    switch(obj.spec){
        case "1":
            doctorjson.spec="اورتوپدی"
            break;
        case "2":
            doctorjson.spec="اورولوژی"
            break;
        case "3":
            doctorjson.spec="پوست و مو"
            break;
        case "4":
            doctorjson.spec="زنان و زایمان"
            break;
        case "5":
            doctorjson.spec="مغز و اعصاب"
            break;
        case "6":
            doctorjson.spec="دیگر"
            break;
    }
    // console.log(doctorjson);

    doctoritem = doctorjson;

}


async function updatenavhtml(){

    navelem = document.getElementById("uppernav");
    navehtml = navelem.innerHTML;
    navehtml= `<ol class="breadcrumb m-0 bg-transparent px-0 text-14 align-items-center w-auto py-md-4 position-relative"
    style="min-width: 600px;">
    <li class="breadcrumb-item">
        <a class="nuxt-link-active"
           href="https://www.darmankade.com/">
            درمانکده
            <svg class="icon-20" fill="none" height="24px"
                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 viewBox="0 0 24 24" width="24px"
                 xmlns="http://www.w3.org/2000/svg">
                <polyline points="15 18 9 12 15 6">
                </polyline>
            </svg>
        </a>
    </li>
    <li class="breadcrumb-item">
        <a class=""
           href="https://www.darmankade.com/neurologist/">
           ${doctoritem.spec}
            <svg class="icon-20" fill="none" height="24px"
                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 viewBox="0 0 24 24" width="24px"
                 xmlns="http://www.w3.org/2000/svg">
                <polyline points="15 18 9 12 15 6">
                </polyline>
            </svg>
        </a>
    </li>
    <li class="">
        <span> آقای دکتر ${doctoritem.name}</span>
    </li>
</ol>`

    document.getElementById("uppernav").innerHTML = navehtml;
}

async function updatecommentboxhtml(){

    commentelem = document.getElementById("commentdivsingle");
    commentboxhtml = commentelem.innerHTML;
    commentboxhtml= `<div class="row w-100">
    <div class="header row mb-3 px-md-4 mb-md-0 pt-md-0 pb-md-0 pb-3 col-md-2 col-12">

        <div class="w-100">
            <div class="row score-box h-100">
                <div class="score-box__number p-0 col-12">
                    ${doctoritem.stars}
                </div>
                <div class="px-2 d-flex justify-content-between col-12">
                    <svg fill="none"
                         height=".7em" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width=".7em"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                    <svg fill="none"
                         height=".7em" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width=".7em"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                    <svg fill="none"
                         height=".7em" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width=".7em"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                    <svg fill="none"
                         height=".7em" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width=".7em"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                    <svg fill="none"
                         height=".7em" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width=".7em"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                </div>
                <div class="score-box__text px-0 pt-2 col-12">
                    از ${doctoritem.comments} نظر
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-10 col-12 border-right-dash">
        <section class="hooper is-rtl" tabindex="0" style="height: 130px;">
            <div class="hooper-list">
                <ul class="hooper-track">
                    <li aria-hidden="true"
                        class="w-100 hooper-list-doctor-comment hooper-list-m-0 hooper-slide is-prev active">
                        <div class="w-100">
                            <ul class="list-unstyled w-100 list-inline row justify-content-between pr-0 mb-0">
                                <li class="font-weight-bold w-50 mb-3 text-steel text-12">
                                    <svg
                                            fill="none" height="24px"
                                            stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            viewBox="0 0 24 24"
                                            width="24px"
                                            xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                        </path>
                                    </svg>
                                    نظر ${doctoritem.commenter}:
                                </li>
                            </ul>
                            <p class="mb-0 text-14 w-100 text-slate">
                                ${doctoritem.comment_text}
                            </p>
                        </div>
                    </li>

                </ul>
                <div class="hoop-indicators hooper-pagination">
                    <ol class="hooper-indicators">
                        <li>
                            <button class="hooper-indicator" type="button">
                                <span
                                        class="hooper-sr-only">item 0</span>
                            </button>
                        </li>
                        <li>
                            <button class="hooper-indicator is-active"
                                    type="button">
                                <span
                                        class="hooper-sr-only">item 1</span>
                            </button>
                        </li>
                        <li>
                            <button class="hooper-indicator" type="button">
                                <span
                                        class="hooper-sr-only">item 2</span>
                            </button>
                        </li>
                        <li>
                            <button class="hooper-indicator" type="button">
                                <span
                                        class="hooper-sr-only">item 3</span>
                            </button>
                        </li>
                    </ol>
                </div>

            </div>
        </section>
        <button class="border-0 bg-gray text-water-blue p-1 rounded-circle position-absolute"
                id="goToComments">
            <svg fill="none" height="24px"
                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" viewBox="0 0 24 24" width="24px"
                 xmlns="http://www.w3.org/2000/svg">
                <line x1="12" x2="12" y1="5" y2="19">
                </line>
                <polyline points="19 12 12 19 5 12">
                </polyline>
            </svg>
        </button>
    </div>
</div>`;

    document.getElementById("commentdivsingle").innerHTML = commentboxhtml;
}

async function updateaddress(){

    addressboxelem = document.getElementById("__BVID__155");
    addressboxhtml = addressboxelem.innerHTML;
    addressboxhtml= `<div class="tabs-body">
    <div class="w-100 d-flex p-2">
        <a

                class="col-4 px-0"
                href="https://www.google.com/maps/place/35.76050000,51.33310000"
                target="_blank">
            <img
                    alt="آدرس مطب  آقای دکتر ${doctoritem.name}"
                    class="w-100  rounded-10"
                    src="../../assets/img/134image.png">
        </a>
        <div class="pr-4 col-8">
            <h4

                    class="text-14 text-slate font-weight-bold py-1">
                آدرس مطب 1 :
            </h4>
            <p
                    class="text-14 text-slate line-height-30 mb-2">
                    ${doctoritem.address}
            </p> <h4
                class="text-slate font-weight-bold text-14"> تلفن گویا : </span>
            <a class="text-slate text-14"
               href="tel:${doctoritem.phone}">${doctoritem.phone} </a>
        </h4>
        </div>
    </div>
</div>`

    document.getElementById("__BVID__155").innerHTML = addressboxhtml;
}

async function presentdaysupdate(){
    weekdaysboxelem = document.getElementById("__BVID__157");
    weekdaysboxhtml = weekdaysboxelem.innerHTML;

    addressarea=doctoritem.address.split("،")[0];
    if (doctoritem.address==addressarea){
        addressarea=doctoritem.address.split("-")[0];
    }
    // console.log(addressarea);
    weekdaysboxhtml= `<div class="tabs-body">
    <div class="rounded-10 my-1 row">
        <h4

                class="w-100 py-2  px-3 text-slate text-16 ">
            مطب ${addressarea}
        </h4>`;

    for(i=0;i<7;i++){
        daystring="";
        daystring+=`<div class="text-center text-14  d-flex col row">
        <p class="text-steel row py-3 text-center col p-0   bg-gray ">
            <span class="pb-4 m-auto">`
        if (i==0){
            daystring+='شنبه';
        } else if (i==1){
            daystring+='یک شنبه';
        } else if (i==2){
            daystring+='دو شنبه';
        } else if (i==3){
            daystring+='سه شنبه';
        } else if (i==4){
            daystring+='چهار شنبه';
        } else if (i==5){
            daystring+='پنج شنبه';
        } else if (i==6){
            daystring+='جمعه';
        }
        
        if (doctoritem.week_days[i]=="true"){
            daystring+=`</span> <span class="text-dark-mint"
            fill="none" height="24px"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg">
            <svg height="24" width="24">
            <polyline points="20,6 9,17 4,12" fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2">
            </polyline>
            </svg>
            
        </span>
        </p>
    </div>`;
        } else {
            daystring+=`</span> <span
            class="text-primary"
            fill="none"
            height="24px"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg">
            <svg height="24" width="24">

            <line x1="18" x2="6" y1="6" y2="18" fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2">
            </line>
            <line x1="6" x2="18" y1="6" y2="18"
            fill="none"
            height="24px"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2">
            </line>
            </svg>
            </span>
        </p>
    </div>`;
        }

        weekdaysboxhtml+=daystring;
    }

    weekdaysboxhtml+=`
    </div>
</div>`;

    document.getElementById("__BVID__157").innerHTML = weekdaysboxhtml;
}

async function onclickaddress(){
    document.getElementById("__BVID__157").setAttribute("style","display: none;");
    document.getElementById("__BVID__157").setAttribute("aria-hidden","true");
    document.getElementById("__BVID__157").setAttribute("class","tab-pane");
    document.getElementById("__BVID__157").setAttribute("tabindex","1");
    document.getElementById("__BVID__155").setAttribute("style","");
    document.getElementById("__BVID__155").setAttribute("aria-hidden","false");
    document.getElementById("__BVID__155").setAttribute("class","tab-pane active");
    document.getElementById("__BVID__155").setAttribute("tabindex","-1");

}

async function onclickdays(){
    document.getElementById("__BVID__155").setAttribute("style","display: none;");
    document.getElementById("__BVID__155").setAttribute("aria-hidden","true");
    document.getElementById("__BVID__155").setAttribute("class","tab-pane");
    document.getElementById("__BVID__155").setAttribute("tabindex","1");
    document.getElementById("__BVID__157").setAttribute("style","");
    document.getElementById("__BVID__157").setAttribute("aria-hidden","false");
    document.getElementById("__BVID__157").setAttribute("class","tab-pane active");
    document.getElementById("__BVID__157").setAttribute("tabindex","-1");


}

async function exitgal(){
    if (displayison==true){
        document.getElementById("gallerysection").setAttribute("style","display:none;");
        document.getElementById("sec-gal").setAttribute("style","z-index: 1000;   background-color: rgba(29, 29, 29, 0.81);");
        displayison=false;
    } 
}
async function startgall(){
    if (displayison==false){
        document.getElementById("gallerysection").setAttribute("style","");
        document.getElementById("sec-gal").setAttribute("style","z-index: 1000;   background-color: rgba(29, 29, 29, 0.81); padding: 20px; position:fixed; ");

        showimg();
        displayison=true;
    }
}

async function showimg(){
    switch(imgcounter){
        case 1:
            document.getElementById("photoitemingallery").src="../../assets/img/skill_Page/slideShowImg.png";
            break;
        case 2:
            document.getElementById("photoitemingallery").src="../../assets/img/app.png";
            break;
        case 3:
            document.getElementById("photoitemingallery").src="../../assets/img/mentor_list.png";
            break;
    }
}

async function rightimg(){
    if (imgcounter>=1 && imgcounter<3){
        imgcounter++;
    } else{imgcounter=1;}

    showimg();
}

async function leftimg(){
    if (imgcounter>1 && imgcounter<=3){
        imgcounter--;
    } else{imgcounter=3;}

    showimg();
}

function openForm(str) {
    if (str=="CMD")
        document.getElementById("commentForm").style.display = "block";
    else if (str=='RSRV')
        document.getElementById("reserveForm").style.display = "block";

}
  
function closeForm(str) {
    if (str=="CMD")
        document.getElementById("commentForm").style.display = "none";
    else if (str=='RSRV')
        document.getElementById("reserveForm").style.display = "none";
}
  

async function main(){
    imgcounter=1;
    document.getElementById("gallerysection").setAttribute("style","display:none;");
    let params = new URLSearchParams(location.search);
    docid= params.get('id');
    await fetchdoctor(docid);

    updatepersonalinfohtml();
    updatenavhtml();
    updatecommentboxhtml();
    updateaddress();
    presentdaysupdate();
    

}

main();



