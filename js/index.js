function change_content(a) {
    switch ((change_active(a), $("html, body").animate({ scrollTop: 0 }, "slow"), a)) {
        case "about":
        default:
            $("#main").load("./components/home.html");
            break;
        case "works":
            $("#main").load("./components/works.html");
            clearInterval(interval1);
            clearInterval(interval2);
            break;
        case "contact":
            $("#main").load("./components/contact.html");
    }
}
function change_active(a) {
    $("ul li").removeClass("active"), $("#" + a).addClass("active");
}
document.addEventListener("DOMContentLoaded", () => {
    $("#main").load("./components/home.html"), $("#about").addClass("active");
});
