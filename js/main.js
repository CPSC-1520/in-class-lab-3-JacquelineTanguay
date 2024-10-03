// Enter your code below.


//console.log(document.querySelector('.javascript-resources'));
//console.log(document.querySelector('#show-resources'));

const getResourceButton = document.getElementById('show-resources');


getResourceButton.addEventListener('click', onGetResource);

function onGetResource(){
    const classReplacement = document.getElementsByClassName('#d-none javascript-resources list-group');
    classReplacement.ClassList.replace('d-none ', '');
}
