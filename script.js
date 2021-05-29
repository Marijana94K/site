
    const mrkonjicgrad = document.querySelectorAll('.mrkonjicgrad');
    const banjaluka = document.querySelectorAll('.banjaluka');
    const budimpesta = document.querySelectorAll('.budimpesta');
    const novisad = document.querySelectorAll('.novisad');
    const sarajevo = document.querySelectorAll('.sarajevo');


function pickCity () {
    chooseCity = document.querySelector('.chooseCity').value;
     posts = document.querySelectorAll('.fade-in');

    if (chooseCity == 'Mrkonjic Grad') {
        posts.forEach((e) =>{
        e.classList.add('hide');
        })
        mrkonjicgrad.forEach((e) =>{
            e.classList.remove('hide');
        })
    }  else if (chooseCity == 'Banja Luka'){
        posts.forEach((e) =>{
            e.classList.add('hide');
            })
            banjaluka.forEach((e) =>{
                e.classList.remove('hide');
            })
    } else if (chooseCity == 'Budimpesta'){
        posts.forEach((e) =>{
            e.classList.add('hide');
            })
            budimpesta.forEach((e) =>{
                e.classList.remove('hide');
            })
        } else if (chooseCity == 'Novi Sad'){
            posts.forEach((e) =>{
                e.classList.add('hide');
                })
                novisad.forEach((e) =>{
                    e.classList.remove('hide');
                })
        } else if (chooseCity == 'Sarajevo'){
            posts.forEach((e) =>{
                e.classList.add('hide');
                })
                sarajevo.forEach((e) =>{
                    e.classList.remove('hide');
                })
        } else {
            posts.forEach((e) => {
                e.classList.remove('hide');
            })
        }
}  
