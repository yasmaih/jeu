const TROUVE = 100;
const PASTROUVE = 20;
let paires_consec = 0; 
let arrayImagesIds = [];
let arrayImagesTrouve = [];
let arrayImages = {};
let carte1,carte2,active,score; 


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
let compareCartes = function(){
    //console.dir(arrayImagesTrouves);
    //console.log('on compare '+carte1.substring(0,carte1.length - 1)+' et '+carte2.substring(0,carte2.length - 1));
    if(carte1.substring(0,carte1.length - 1) === carte2.substring(0,carte2.length - 1)){
        arrayImagesTrouve.push(parseInt(carte1.substring(0,carte1.length - 1)));
        carte1 = null;
        carte2 = null;
        paires_consec += 1;
        score += TROUVE * paires_consec;
        document.getElementById('scoreDiv').innerHTML = score;
        document.getElementById('monScore').value = score;
        active = true;
        console.log('imagesIds :'+arrayImagesIds[0].length+ ' --- '+arrayImagesTrouve.length);
        if(arrayImagesIds[0].length === arrayImagesTrouve.length){
            //console.log('Partie terminée');
            document.getElementById('score2').innerHTML = score;
            document.getElementById('score2').value = score;
            document.getElementById('jeuCartes').style.display = 'none';
            document.getElementById('resultat').style.display = 'block';
        }
    }else{
        //console.log('perdu...');
        setTimeout(function(){
            document.getElementById(carte1).src = 'images/back.jpg';
            document.getElementById(carte2).src = 'images/back.jpg';
            carte1 = null;
            carte2 = null;
            score -= PASTROUVE;
            paires_consec = 0;
            if(score < 0){
                score = 0;
            }
            document.getElementById('scoreDiv').innerHTML = score;
            active = true;
        }, 1000);

}
}

function tourne(elem){
    console.log('carte');
    if(elem.id !== carte1
        &&active
        && !arrayImagesTrouve.includes(parseInt(elem.id.substring(0,elem.id.length)))){
            elem.src = "images/"+elem.id+'.jpg';
            if(!carte1){
                carte1 = elem.id;
            }else if(!carte2){
                carte2 = elem.id;
            }
            if(carte1 && carte2){
                active = false;
                compareCartes();
            }

        }
}





function shuffleArray(array){
    for(let i = array.length - 1; i > 0;i--){
        let j = Math.floor(Math.random()*(i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j]= temp;
    }
    return array;
}




function rejouer(){
    initGame();
}

let initCartes = function(){
    let table = document.getElementById('tdBody');
    let cpt = 0;
    for(i=0; i < table.children.length;i++){
        let tr = table.children[i];
        for(j=0; j < tr.children.length;j+=2){
            tr.children[j].children[0].id = arrayImagesIds[0][cpt]+'a';
            tr.children[j+1].children[0].id = arrayImagesIds[1][cpt]+'b';
            arrayImages[arrayImagesIds[0][cpt]+'a'] = 'images/'+arrayImagesIds[0][cpt]+'a.jpg';
            arrayImages[arrayImagesIds[0][cpt]+'b'] = 'images/'+arrayImagesIds[0][cpt]+'b.jpg';
            tr.children[j].children[0].src = 'images/back.jpg';
            tr.children[j+1].children[0].src = 'images/back.jpg';
            cpt++;
        }
    }
}


let setScore = function () {
    document.getElementById('errorMessage').innerText = '';
    document.forms["formulaire"]["monNom"].value = document.forms["formulaire"]["monNom"].value.trim();
    if(document.forms["formulaire"]["monNom"].value){
        document.forms["formulaire"]["monScore"].value = document.getElementById('score2').innerHTML;
        document.forms["formulaire"].submit();
        let scoresLink = document.createElement('a');
    scoresLink.href = 'scores.php';
    scoresLink.innerText = 'ENREGISTRER MON SCORE';
    document.getElementById('formulaire').parentNode.appendChild(scoresLink);
    }else{
        document.getElementById('errorMessage').innerText = 'Votre nom doit être renseigné!';
    }
}