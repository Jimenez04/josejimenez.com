document.addEventListener("DOMContentLoaded", () => {
    $('#main').load('./components/home.html');
    $('#about').addClass('active');
  });

function change_content(window) { 
    change_active(window);
    switch (window) {
        case 'about':
            $('#main').load('./components/home.html');
            break;
        
        case 'works':
            $('#main').load('./components/works.html');
            break;
        
        case 'contact':
            $('#main').load('./components/contact.html');
            break;
    
        default:
            $('#main').load('./components/home.html');
            break;
    }
}

function change_active(window) {
    $('ul li').removeClass('active');
    $("#" + window).addClass('active');
 }