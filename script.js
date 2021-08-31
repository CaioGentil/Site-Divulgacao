function initMap(){
    const location = {lat: -22.964689077587355, lng: -43.19044898939568};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    }); 
    const marker = new google.maps.Marker({
        position: location,
        map: map

    });
}

let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)

}
window.addEventListener("load", start)

