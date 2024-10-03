// Enter your code below.


//console.log(document.querySelector('.javascript-resources'));
//console.log(document.querySelector('#show-resources'));

const getResourceButton = document.getElementById('show-resources');
const changeClassName = document.getElementsByClassName('javascript-resources');

getResourceButton.addEventListener('click', onChangeClassName);

function onChangeClassName(){
    changeClassName.replace('d-none ', '');
    
}
