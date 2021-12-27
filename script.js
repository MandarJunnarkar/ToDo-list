function newListItem() {
    var li = document.createElement('li');
    let inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue != '') {
        document.getElementById('myUl').appendChild(li);
    }
    else {
        alert("You should enter some title for the list item")
    }
    document.getElementById("myInput").value = "";
}

var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});