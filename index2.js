
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
    userinput.classList.toggle("fixed");
    input.classList.toggle("fixedx");
    forsearch.classList.toggle("fixedy");
})