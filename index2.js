
var text = document.getElementById('text');
var userinput = document.getElementById('details');
var forsearch = document.getElementById('searchbtn');
var input = document.getElementById('input');

var searchvalue;
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

forsearch.addEventListener("click", function(){
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var client = JSON.parse(xhr.responseText);
            console.log(client.data);
            generateHTML(client.data);
        }
    });
    if(input.value!==null)
    var fetchreq = "https://deezerdevs-deezer.p.rapidapi.com/search?q="+ input.value;
    xhr.open("GET", fetchreq);
    xhr.setRequestHeader("x-rapidapi-key", "6b53c05b24msh8cf9f0c519bf9ccp10324ejsn97e34d83dbe7");
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    
    xhr.send(data);
})


function generateHTML(results) {
    //container.classList.remove("initial");
    let generatedHTML = "";
      generatedHTML += `
      <div class="card">
        <div class="image">
          <img src="${results[1].album.cover}"/>
        </div>
        <div class="details">
          <div class="center">
            <ul>
              <li><a href="#"><i class="fas fa-heart"></i></a></li>
              <li><a href="${results[1].artist.preview}"><i class="fa fa-play"></i></a></li>
              <li>"${results[1].album.title}</li>
            </ul>
          </div>
        </div>
    </div>
      `;
  document.getElementById('output').innerHTML = generatedHTML;
  }
  