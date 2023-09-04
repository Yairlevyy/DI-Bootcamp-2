let form = document.forms[0];

form.addEventListener('submit',function(event){
    event.preventDefault();

    let fname = form.elements.fname.value;
    let lname = form.elements.lname.value;
    let object = {
        name:fname,
        lastname:lname
    };
    let json = JSON.stringify(object);
    let id = document.getElementById("json");
    id.innerHTML = json;

})