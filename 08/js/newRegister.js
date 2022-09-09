function newRegister () {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.vaule);
    newP.appendChild(newText);

    var nameList = document.querySelector("#nameList");
    nameList.appendChild(newP);
    userName.vaule="";
}