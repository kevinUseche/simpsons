const count = document.querySelector('#count');
const quote = document.querySelector('#quote');
const character = document.querySelector('.content-character');
let a = '';

function view(result){
    quote.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
        a = document.createElement('a');
        a.appendChild(document.createTextNode(`${result[i].quote}`));
        a.addEventListener('click', (e)=> {
            e.preventDefault();
            character.innerHTML = `<h3>${result[i].character}</h3>
            <img src="${result[i].image}">`;
        });
        quote.appendChild(a);
    }

}

function get(count){
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
        .then(result => result.json())
        .then(result => view(result))
}
 
count.addEventListener('change', ()=>{
    get(count.value);
});