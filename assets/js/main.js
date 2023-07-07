let writeTitle = document.getElementById('writeTitle');
let writeNote = document.getElementById('writeNote');
let addNote = document.getElementById('addNote');
addNote.addEventListener("click", function()
{
	const myNotediv = document.createElement("li");
    myNotediv.setAttribute("class", "note-box");
    let randomId = (Math.random() + 1).toString(36).substring(7);
    let randomId2 = (Math.random() + 1).toString(36).substring(7);
    myNotediv.setAttribute("id", randomId);
    document.body.appendChild(myNotediv);
    let inner = document.createElement("div");
    inner.setAttribute("class","note-box-inner")
    inner.setAttribute("id",randomId2)
    document.getElementById(randomId).append(inner);
    const title = document.createElement("h1");
    title.innerText = writeTitle.value;
    const myNote = document.createElement("p");
    myNote.innerText = writeNote.value;
    const deletButton = document.createElement("button");
    deletButton.innerHTML = 'Delete';
    deletButton.onclick = function()
    {
        myNotediv.style.display = "none";
        this.style.display = "none";
    }
    document.getElementById(randomId2).append(title,myNote,deletButton);
})