let tab = [];
for (let i = 0; i < 5; i++) {
    tab[i] = prompt("Podaj zainteresowanie");
}


for (let i = 0; i < 5; i++) {
    document.getElementById(i.toString()).innerHTML = tab[i];
}
document.getElementById("ol").style.visibility = true;

function Klik() {
    document.getElementById("par").innerHTML = document.getElementById("text").value;
    document.getElementById("text").value = "";
    document.getElementById("par").style.color = "green"; 
    document.getElementById("par").style.fontWeight = "bold"; 
}

$(document).ready(function() {
    $("h2").fadeOut(1000, function() {
        $("h2").css("color","red").delay(5000).fadeIn(1000);
    });
});