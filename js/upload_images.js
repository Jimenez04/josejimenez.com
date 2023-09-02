var photos_wide = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20'];
var photos_long = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11'];

var url_web_long = 'https://jimenez04.github.io/josejimenez.com/img/photography/long/' 
var url_web_wide = 'https://jimenez04.github.io/josejimenez.com/img/photography/wide/' 

auto_wide();
auto_long();
    
function auto_wide() { 
    getimages(url_web_wide + getnumber(20) + ".webp" , 'container_image_long' );
    setInterval(() => {
        getimages(url_web_wide + getnumber(20) + ".webp" , 'container_image_long' );
        console.log('Hola mundo wide ' + getnumber(20));
    }, 21000);
}   
function auto_long() { 
    setInterval(() => {
        console.log('Hola mundo wide ' + getnumber(11));
    }, 20000);
} 

function getnumber(max) { 
return Math.floor(Math.random() * max) + 1
}

function getimages(url, type) { 
    fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        }
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                console.log("si se pudo")
                // rellenar(data);
            } else { 
                console.log('Sin imagenes');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


    
function rellenar(array) { 
    var carousel = document.getElementById('lightSlider');

            var contenedor = document.createElement('li');
            contenedor.setAttribute("data-thumb", "/" + element);
                    var etiq_img = document.createElement('img');
                    etiq_img.src = "/" +element;
                    etiq_img.alt = "Carousel img";
                    etiq_img.classList.add("lazyload");
            contenedor.append(etiq_img);
        carousel.append(contenedor);
        console.log(element);
}