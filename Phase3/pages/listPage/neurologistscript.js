doctorlists=[];

async function fetchdocs(searchkey){
    // for(i=1;i<8;i++){
    doctorlists=[];
            
    try {
        const doctor = await fetch(`https://intense-ravine-40625.herokuapp.com/doctors`);
        item =await doctor.json();
        if (searchkey==null){
            doctorlists=item;
        } else{
        item.forEach(element => {
            if (element.name.includes(searchkey) || element.spec.includes(searchkey)){
                doctorlists.push(element)
            }
        });
        }
        

    } catch (error) {
        // ERROR HANDLING
        window.alert(`Error while fetching doc`);
    }
        
    // }

    console.log(5);
    console.log(doctorlists);

    
}

async function updatelisthtml(){
    listdiv = document.getElementById('listofdocsdiv');
    listdivhtml = listdiv.innerHTML;
    listdivhtml ="";
    doctorlists.forEach(element => {
        listdivhtml += `<!-- List Item -->
        <div>
            <div class="row w-100 mb-3 bg-white p-3 border-light-gray hover-melon rounded-10">
                <a
                        href="../doctorPage/doctor.html?id=${element.id}"
                        class="row col-11 col-md-7 pl-md-2 px-0">
                    <div class="px-0 pl-lg-3 col-3">
                        <img
                                src="${element.avatar}"
                                alt="${element.name}" class="dr-img rounded-circle"></div>
                    <div class="pr-md-0 pr-4 pt-2 col-9">
                        <h5
                                class="text-slate font-weight-bold d-flex text-18">
                                ${element.name}
                        </h5> <h6
                            class="text-slate mb-0 font-weight-normal line-height-26 text-16">
                            ${element.spec}
                    </h6>
                        <div class="my-md-4 mt-2 mb-3 d-flex">
                            <div class="star-rating"
                            >
                                <label
                                        class="star-rating__star is-selected is-disabled"
    
                                        disabled="disabled"
                                        value="1"
                                        class="star-rating star-rating__checkbox">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                             height=".8em" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class=""
                                        >
                                            <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                    </div>
                                </label>
                                <label
                                        class="star-rating__star is-selected is-disabled"
    
                                        disabled="disabled"
                                        value="2"
                                        class="star-rating star-rating__checkbox">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                             height=".8em" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class=""
                                        >
                                            <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                    </div>
                                </label>
                                <label
                                        class="star-rating__star is-selected is-disabled"
    
                                        disabled="disabled"
                                        value="3"
                                        class="star-rating star-rating__checkbox">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                             height=".8em" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class=""
                                        >
                                            <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                    </div>
                                </label>
                                <label
                                        class="star-rating__star is-selected is-disabled"
    
                                        disabled="disabled"
                                        value="4"
                                        class="star-rating star-rating__checkbox">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                             height=".8em" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class=""
                                        >
                                            <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                    </div>
                                </label>
                                <label
                                        class="star-rating__star is-selected is-disabled"
    
                                        disabled="disabled"
                                        value="5"
                                        class="star-rating star-rating__checkbox">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                             height=".8em" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class=""
                                        >
                                            <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <span class="text-10 pt-1"> ( <span>${element.comments}</span> نظر ) </span>
                        </div>
                        <p class="text-14 mb-0 ">
                        ${element.comment_text}
                        </p>
                    </div>
                </a>
                <div class="px-0 pr-md-4 col-md-5 col-12">
                    <a
                            href="https://www.darmankade.com/doctor/291/">
                        <div class="card border-0 bg-ice-blue rounded-10 p-3 text-14 align-items-start">
                            <ul class="list-unstyled pr-0 text-right text-12 mb-0">
                                <li class="py-1 text-steel font-weight-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                         height="24px" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round" stroke-linejoin="round"
                                         class="icon-20 ">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
                                        </path>
                                        <circle cx="12" cy="10" r="3">
                                        </circle>
                                    </svg>
                                    <span class="location text-steel mr-3">
                                    ${element.location}
                                    </span>
                                </li>
                                <li class="py-1 text-steel font-weight-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                         height="24px" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round" stroke-linejoin="round"
                                         class="icon-20 ">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20">
                                        </path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                                        </path>
                                    </svg>
                                    <span class="text-steel mr-3">  تجربه کاری ${element.experience_years} سال</span>
                                </li>
                                <li class="pt-1 text-steel font-weight-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                         height="24px" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round" stroke-linejoin="round"
                                         class="icon-20 ">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                        </path>
                                    </svg>
                                    <span class="text-steel mr-3"> ${element.user_percent}  درصد رضایت کاربران </span>
                                </li>
                            </ul>
                        </div>
                    </a>
                    <div class="col-12 px-0 pt-3 text-center">
                        <div class="d-inline-flex w-100 justify-content-between"
                             style="height:55px;">
                            <div class="h-100 w-80">
                                <div class="button-hover text-center row align-items-center h-100">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="1.3em" height="1.3em"
                                             viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="">
                                            <line x1="19" y1="12" x2="5" y2="12">
                                            </line>
                                            <polyline points="12 19 5 12 12 5">
                                            </polyline>
                                        </svg>
                                    </div>
                                    <div class="text-white text-center pr-3 mx-auto">
                                        نوبت بگیر !
                                    </div>
                                </div>
                            </div>
                            <span title=""
                                  class="btn bg-gray w-20 mr-2 px-2 h-100 border-light-gray d-flex align-items-center justify-content-center"
                                  style="width:16%;">
                                <svg
                                        xmlns="http://www.w3.org/2000/svg" width="24px"
                                        height="24px" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="heart-icon ">
                                    <path
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <p class="text-center font-weight-medium text-12 text-dark-mint mb-0 pt-2 ">
                            اولین نوبت خالی ${element.first_empty_date}
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
    
    });
    


    document.getElementById('listofdocsdiv').innerHTML=listdivhtml;
}

function compareSortUserPercentage(a,b){
    if (a.user_percent > b.user_percent){
        return -1;
    }
    if (a.user_percent < b.user_percent){
        return 1;
    }
    return 0;
}

function sortByUP(){
    doctorlists.sort(compareSortUserPercentage);
    updatelisthtml();
}

function innersearch(searchkey){
    listdiv = document.getElementById('listofdocsdiv');
    listdivhtml = listdiv.innerHTML;
    listdivhtml ="";

    doctorlists.forEach(element => {
        if (element.name.includes(searchkey)){
            listdivhtml += `<!-- List Item -->
            <div>
                <div class="row w-100 mb-3 bg-white p-3 border-light-gray hover-melon rounded-10">
                    <a
                            href="../doctorPage/doctor.html?id=${element.id}"
                            class="row col-11 col-md-7 pl-md-2 px-0">
                        <div class="px-0 pl-lg-3 col-3">
                            <img
                                    src="${element.avatar}"
                                    alt="${element.name}" class="dr-img rounded-circle"></div>
                        <div class="pr-md-0 pr-4 pt-2 col-9">
                            <h5
                                    class="text-slate font-weight-bold d-flex text-18">
                                    ${element.name}
                            </h5> <h6
                                class="text-slate mb-0 font-weight-normal line-height-26 text-16">
                                ${element.spec}
                        </h6>
                            <div class="my-md-4 mt-2 mb-3 d-flex">
                                <div class="star-rating"
                                >
                                    <label
                                            class="star-rating__star is-selected is-disabled"
        
                                            disabled="disabled"
                                            value="1"
                                            class="star-rating star-rating__checkbox">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                                height=".8em" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class=""
                                            >
                                                <polygon
                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                            class="star-rating__star is-selected is-disabled"
        
                                            disabled="disabled"
                                            value="2"
                                            class="star-rating star-rating__checkbox">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                                height=".8em" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class=""
                                            >
                                                <polygon
                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                            class="star-rating__star is-selected is-disabled"
        
                                            disabled="disabled"
                                            value="3"
                                            class="star-rating star-rating__checkbox">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                                height=".8em" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class=""
                                            >
                                                <polygon
                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                            class="star-rating__star is-selected is-disabled"
        
                                            disabled="disabled"
                                            value="4"
                                            class="star-rating star-rating__checkbox">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                                height=".8em" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class=""
                                            >
                                                <polygon
                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                            class="star-rating__star is-selected is-disabled"
        
                                            disabled="disabled"
                                            value="5"
                                            class="star-rating star-rating__checkbox">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width=".8em"
                                                height=".8em" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class=""
                                            >
                                                <polygon
                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                                <span class="text-10 pt-1"> ( <span>${element.comments}</span> نظر ) </span>
                            </div>
                            <p class="text-14 mb-0 ">
                            ${element.comment_text}
                            </p>
                        </div>
                    </a>
                    <div class="px-0 pr-md-4 col-md-5 col-12">
                        <a
                                href="https://www.darmankade.com/doctor/291/">
                            <div class="card border-0 bg-ice-blue rounded-10 p-3 text-14 align-items-start">
                                <ul class="list-unstyled pr-0 text-right text-12 mb-0">
                                    <li class="py-1 text-steel font-weight-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon-20 ">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
                                            </path>
                                            <circle cx="12" cy="10" r="3">
                                            </circle>
                                        </svg>
                                        <span class="location text-steel mr-3">
                                        ${element.location}
                                        </span>
                                    </li>
                                    <li class="py-1 text-steel font-weight-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon-20 ">
                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20">
                                            </path>
                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                                            </path>
                                        </svg>
                                        <span class="text-steel mr-3">  تجربه کاری ${element.experience_years} سال</span>
                                    </li>
                                    <li class="pt-1 text-steel font-weight-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon-20 ">
                                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                            </path>
                                        </svg>
                                        <span class="text-steel mr-3"> ${element.user_percent}  درصد رضایت کاربران </span>
                                    </li>
                                </ul>
                            </div>
                        </a>
                        <div class="col-12 px-0 pt-3 text-center">
                            <div class="d-inline-flex w-100 justify-content-between"
                                style="height:55px;">
                                <div class="h-100 w-80">
                                    <div class="button-hover text-center row align-items-center h-100">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="1.3em" height="1.3em"
                                                viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="">
                                                <line x1="19" y1="12" x2="5" y2="12">
                                                </line>
                                                <polyline points="12 19 5 12 12 5">
                                                </polyline>
                                            </svg>
                                        </div>
                                        <div class="text-white text-center pr-3 mx-auto">
                                            نوبت بگیر !
                                        </div>
                                    </div>
                                </div>
                                <span title=""
                                    class="btn bg-gray w-20 mr-2 px-2 h-100 border-light-gray d-flex align-items-center justify-content-center"
                                    style="width:16%;">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg" width="24px"
                                            height="24px" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="heart-icon ">
                                        <path
                                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <p class="text-center font-weight-medium text-12 text-dark-mint mb-0 pt-2 ">
                                اولین نوبت خالی ${element.first_empty_date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    
    });
    


    document.getElementById('listofdocsdiv').innerHTML=listdivhtml;
}

async function main(){
    let params = new URLSearchParams(location.search);
    searchkey= params.get('val');
    if (searchkey==null){
        searchkey=params.get('spec');
    }
    console.log(searchkey)

    await fetchdocs(searchkey);
    
    updatelisthtml();

}


main();