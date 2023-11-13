var photos_wide = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    photos_long = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    url_web_long = "./img/photography/long/",
    url_web_wide = "./img/photography/Wide/";
function auto_wide() {
    rellenar("container_image_wide", url_web_wide + getnumber(20) + ".webp"),
            document.getElementById("container_image_wide").classList.remove("show_off"), rellenar("container_image_wide", url_web_wide + getnumber(20) + ".webp");
}
function auto_long() {
    rellenar("container_image_long", url_web_long + getnumber(11) + ".webp"),
      document.getElementById("container_image_long").classList.remove("show_off"), rellenar("container_image_long", url_web_long + getnumber(11) + ".webp");
}
function getnumber(e) {
    return Math.floor(Math.random() * e) + 1;
}
async function rellenar(e, n) {
    var o = document.getElementById(e);
    o.classList.add("show_off");
    var r = document.createElement("img");
    (r.src = n), r.classList.add("lazyload"), (o.innerHTML = null), o.append(r);
}
auto_wide(), auto_long();
// const interval1 = setInterval(() => {
//     auto_wide();
// }, 1000);
// const interval2 =setInterval(() => {
//   auto_long();
// }, 1000);

