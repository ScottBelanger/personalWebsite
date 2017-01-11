//Array to hold all of the names of the cities for each photo
var thumbnailPhotos = ["vienna", "salzburg", "brussels", "mostar", "dubrovnik", "plitvice", "paris", "prague", "london",
                       "munich", "santorini", "iceland", "kotor", "swissalps", "positano", "chiangmai", "halongbay"];

//Dictionary to store the information with unique key of city name
var photoInfo = {};

//Keep focus on center thumbnail
var focused = 2;

//Initialize page
window.onload = function() {
  loadInfo();
};

//Load all of the required information and set thumbnail photos
function loadInfo() {
    photoInfo["vienna"] = "The Vienna Opera House";
    photoInfo["salzburg"] = "A view of the alps from the Salzburg Castle";
    photoInfo["brussels"] = "The Grand Square in Brussels, Belgium";
    photoInfo["mostar"] = "Famous bridge of Mostar called Stari Most";
    photoInfo["dubrovnik"] = "The fully walled city of old town Dubrovnik";
    photoInfo["plitvice"] = "Plitvice Lakes Croatia";
    photoInfo["paris"] = "The Eiffel tower in Paris, France";
    photoInfo["prague"] = "The Charles Bridge in Prague, Czech Republic";
    photoInfo["london"] = "Big Ben in London, England";
    photoInfo["munich"] = "2016 Oktoberfest in Munich, Germany";
    photoInfo["santorini"] = "A beautiful sunset in Oia, Greece on Santorini island";
    photoInfo["iceland"] = "Solheimajokull glacier in Iceland";
    photoInfo["kotor"] = "The Bay of Kotor in Montenegro";
    photoInfo["swissalps"] = "View of the Swiss Alps from Kleine Scheidegg, Switzerland";
    photoInfo["positano"] = "The town of Positano, part of the Amalfi Coast in Italy";
    photoInfo["chiangmai"] = "Elephant Sanctuary in Chiang Mai, Thailand";
    photoInfo["halongbay"] = "Ha Long Bay in Vietnam";
    
    document.getElementById("thumb1").src = "/images/myPhotosPage/" + thumbnailPhotos[0] + ".jpg";
    document.getElementById("thumb2").src = "/images/myPhotosPage/" + thumbnailPhotos[1] + ".jpg";
    document.getElementById("thumb3").src = "/images/myPhotosPage/" + thumbnailPhotos[2] + ".jpg";
    document.getElementById("thumb4").src = "/images/myPhotosPage/" + thumbnailPhotos[3] + ".jpg";
    document.getElementById("thumb5").src = "/images/myPhotosPage/" + thumbnailPhotos[4] + ".jpg";
    
    document.getElementById("mainPhoto").src = "/images/myPhotosPage/" + thumbnailPhotos[focused] + ".jpg";
    
    document.getElementById("photoInfo").innerHTML = photoInfo[thumbnailPhotos[focused]];
}

//Function to cycle the photos to the right
function rotateRight() {
    
    if(focused >= (thumbnailPhotos.length - 1)) {
        focused = 0;
    }
    else {
        focused += 1;
    }
    
    rotate();
}

//Function to cycle the photos to the left
function rotateLeft() {

    if(focused <= 0) {
        focused = (thumbnailPhotos.length-1);
    }
    else {
        focused -= 1;
    }
    
    rotate();
}

function rotate() {
    for(i=0; i<5; i++) {
        /* Check for the edge case in which case you are looping back to the end of the array */
        if(focused == 0){
            document.getElementById("thumb1").src = "/images/myPhotosPage/" + thumbnailPhotos[thumbnailPhotos.length-2] + ".jpg";
            document.getElementById("thumb2").src = "/images/myPhotosPage/" + thumbnailPhotos[thumbnailPhotos.length-1] + ".jpg";
        }
        else if(focused == 1){
            document.getElementById("thumb1").src = "/images/myPhotosPage/" + thumbnailPhotos[thumbnailPhotos.length-1] + ".jpg";
            document.getElementById("thumb2").src = "/images/myPhotosPage/" + thumbnailPhotos[focused-1] + ".jpg";
        }
        else {
            document.getElementById("thumb1").src = "/images/myPhotosPage/" + thumbnailPhotos[focused-2] + ".jpg";
            document.getElementById("thumb2").src = "/images/myPhotosPage/" + thumbnailPhotos[focused-1] + ".jpg";
        }
        
        document.getElementById("thumb3").src = "/images/myPhotosPage/" + thumbnailPhotos[focused] + ".jpg";
        document.getElementById("mainPhoto").src = "/images/myPhotosPage/" + thumbnailPhotos[focused] + ".jpg";
        document.getElementById("photoInfo").innerHTML = photoInfo[thumbnailPhotos[focused]];
        
        if(focused == (thumbnailPhotos.length-2)){
            document.getElementById("thumb4").src = "/images/myPhotosPage/" + thumbnailPhotos[thumbnailPhotos.length-1] + ".jpg";
            document.getElementById("thumb5").src = "/images/myPhotosPage/" + thumbnailPhotos[0] + ".jpg";
        }
        else if(focused == (thumbnailPhotos.length-1)){
            document.getElementById("thumb4").src = "/images/myPhotosPage/" + thumbnailPhotos[0] + ".jpg";
            document.getElementById("thumb5").src = "/images/myPhotosPage/" + thumbnailPhotos[1] + ".jpg";
        }
        else {
            document.getElementById("thumb4").src = "/images/myPhotosPage/" + thumbnailPhotos[focused+1] + ".jpg";
            document.getElementById("thumb5").src = "/images/myPhotosPage/" + thumbnailPhotos[focused+2] + ".jpg";
        }
    }
}

function reFocus(offSet) {
    switch(focused += offSet) {
        case -2:
            focused = thumbnailPhotos.length-2;
            break;
        case -1:
            focused = thumbnailPhotos.length-1;
            break;
        case 0:
            break;
        case thumbnailPhotos.length:
            focused = 0;
            break;
        case (thumbnailPhotos.length+1):
            focused = 1;
            break;
    }
    
    rotate();
}