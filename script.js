var modal = document.getElementById('myModal');

var btn = document.getElementById('Plus_button');

var span = document.getElementById('close');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

