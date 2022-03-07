
function myFunction() {
    var x = document.getElementById("menuBar");
    if (x.className === "topMenu") {
        x.className += " responsive";
    } else {
        x.className = "topMenu";
    }
}