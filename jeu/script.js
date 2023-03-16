const TROUVE = 100;
const PASTROUVE = 20;
let paires_consec = 0; 
let arrayImagesIds = [];
let arrayImagesTrouve = [];
let arrayImages = {};
let carte1,carte2,active,score; 

function shuffleArray(array){
    for(let i = arrary.length - 1; i > 0;i--){
        let j = Math.floor(Math.random()*(i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j]= temp;
    }
    return array;
}


function initGame(){
    alert('loaded');
    document.getElementById('resultat').style.display ='none';
    document.getElementById('jeu').style.display = 'block';
    paires_consec = 0;
    arrayImagesIds[0]=[1,2,3,4,5,7,8,9,10,11,12,13,14,15];
    arrayImagesIds[1]=[1,2,3,4,5,7,8,9,10,11,12,13,14,15];
    arrayImagesIds[0]= shuffleArray(arrayImagesIds[0]);
    arrayImagesIds[1]= shuffleArray(arrayImagesIds[1]);
    carte1 = null;
    carte2 = null;
    active = true;
    score = 0;
    arrayImagesTrouve = [];
    document.getElementById('scoreNumber').innerHTML = score;
    document.getElementById('score2').innerHTML = score;
    initCartes();

}
function rejouer(){
    initGame();
}

function initCartes(){
    let table = document.getElementById('tdBody');
    let cpt = 0;
    for(i=0;i< table.children.length;i+1){
        let tr = table.children[i];
        for(j=0; j < tr.table.children; j+=2)
        tr.children[j].children[0].id = arrayImagesIds[0][cpt]+'a';
        tr.children[j+1].children[0].id = arrayImagesIds[1][cpt]+'b';
        arrayImages[arrayImagesIds[0][cpt]+'a'] = "images/"+arrayImagesIds[0][cpt]+'a.jpg';
        arrayImages[arrayImagesIds[0][cpt]+'a'] = "images/"+arrayImagesIds[0][cpt]+'b.jpg';
        tr.children[j].children[0].src = "images/back.jpg";
        tr.children[j].children[0].src = "images/back.jpg";
cpt++;

    }
}
function tourne(elem){
    console.log('carte')
}