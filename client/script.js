var modal = document.getElementById('myModal');
var btn = document.getElementById('Plus_button');
var span = document.getElementById('close');
var submit_btn = document.getElementById('submit');

var guns = [];

function loadGuns() {
    fetch('/gun')
    .then(res => res.json())
    .then(data => {
        guns.push(...data);
        RenderList();
    });
}

function RenderList() {
    // Get the content parent
    var content = document.getElementById('content');
    // Clear the current list
    content.innerHTML = "";

    // Create a div for each list item
    guns.forEach(gun => {
        // TODO: Restyle this shit and add extra funtionality like deleting and blah blah blah
        const listItem = document.createElement('div');
        listItem.className = 'gun-listitem';
        listItem.innerHTML += gun.name;
        listItem.innerHTML += gun.calibre;
        listItem.innerHTML += gun.prn;

        
        content.appendChild(listItem);
    });
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

submit_btn.onclick = function(){
    var name = document.getElementById('name_input');
    var calibre = document.getElementById('calibre_input');
    var prn = document.getElementById('prn_input');
    var src = document.getElementById('src_input');
    var description = document.getElementById('description_input');

    var gun = {
        "name": name.value,
        "calibre": calibre.value,
        "prn": prn.value,
        "src": src.value,
        "description": description.value
    }

    name.value = "";
    calibre.value = "";
    prn.value = "";
    src.value = "";
    description.value = "";

    modal.style.display = "none";
    
    guns.push(gun);

    RenderList();

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('/gun', {
        method: 'POST', 
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(gun)
    });
}

loadGuns();