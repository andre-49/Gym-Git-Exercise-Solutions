// THIS IS MY FILE WHERE I'M EXPLORING THE WORKINGS OF DOM

let helloSayer = document.getElementById('inputH');
helloSayer.innerText='Hey'; // This changes the heading text.
let inputPlaceHolder= document.getElementsByTagName('input');
// let inputPlaceHolder= document.querySelectorAll('input');

helloSayer.textContent='Sey'; // This changes the heading text using textContent.

//inputPlaceHolder.forEach(e => e.placeholder = 'forEach did it : |')

// for(let i=0; i<inputPlaceHolder.length; i++){
//     inputPlaceHolder[i].placeholder='Why are you running';
//   }// to modify components that you're keeping in an array you need to loop through all elements.
//inputPlaceHolder.forEach(e => {
//   e.placeholder='HTMLCollection';
//});//does nothing.

// let firstInput= document.getElementsByTagName('h2');
// firstInput[2].textContent= 'querySelector';
//____________________________________________________________
// NOW LET'S RECORD AND DISPLAY THE LIST WE GET FROM OUR USER.
let listArray=[];
let currentInput={'artist': '','song': ''};
//let innsArray = document.querySelectorAll('.form-input');
let recordButton= document.getElementById('submit-btn').addEventListener('click', subClick);
function subClick(){  // records values on click
    currentInput.artist= document.getElementById('artist-input').value;
    currentInput.song= document.getElementById('song-input').value;
    listArray.push(JSON.parse(JSON.stringify(currentInput)));//Performing a deep copy as work around for the mutability cemantics.
    document.getElementById('artist-input').value= '';
    document.getElementById('song-input').value= '';
    document.getElementById('artist-input').focus();

}
let displayButton= document.querySelector('#fetch-btn');
let ul= document.querySelector('#song-list');
displayButton.addEventListener('click', function (){
    if(listArray.length<2) alert('Not eNouGh iNpuTs');
    else{
    let duplicationOfficer= Array.from(document.getElementsByClassName('list-items')).length;
    if(document.getElementById('initial')) ul.removeChild(document.getElementById('initial'));
    ul.previousElementSibling.textContent= 'It seems you like'
    for(let i=0; i<listArray.length; i++){
        for(let j=0; j<=duplicationOfficer; j++){
            if(j>i) i++;
        }
        let li= document.createElement('li');
        li.classList.add('list-items');
        li.textContent= `${listArray[i].song} by ${listArray[i].artist}`;
        i%2===0 ? li.style.backgroundColor = '#af73c3':li.style.backgroundColor = '#008080';
        li.style.color = 'lightgrey';
        ul.appendChild(li);
    }
    //console.log('Fetch was triggered');
}
})
//#7A4B8A