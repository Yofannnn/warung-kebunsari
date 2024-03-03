// parallax
const header = document.querySelector('header');
window.addEventListener('scroll' , function() {
    let scroll = window.scrollY;
     
    header.lastElementChild.style.transform = `translateY(${0 + (scroll*.3)}px)`;
    header.firstElementChild.firstElementChild.style.transform = `scale(${1 - (scroll*.0006)})`;
});

const showMenu = async function(){
    try{
        const getData = await getDataMenu();
        showUIMenu(getData);
    }catch(err){
        console.log(err);
    };
};
showMenu();

function showUIMenu (menu){
    let cards = '';
    menu.forEach(x => {
        let {id, name, price, image} = x
        cards += card(id, name, price, image);
        const wrappedCardMenu = document.querySelector('.container-menu .wrapped');
        wrappedCardMenu.innerHTML = cards;
    });
};

const showModal = async function (el){
    try{
        const getData = await getDataMenu();
        showUIModal(getData, el);
    } catch (err){
        console.log(err);
    };
};

function showUIModal (menu, el){
    let modalDetail = '';
    menu.forEach(x => {
        let {id, name, price, description, image} = x
        modalDetail = modal(id, name, price, description, image);
        containerModal = document.querySelector('.container-modal');
        if(el.dataset.idcard === x.id){
            containerModal.innerHTML = modalDetail;
            // make body can't scroll
            const body = document.querySelector('body');
            body.classList.add('stop');
            // close product detail
            const closeProductDetail = document.querySelector('.close-btn-pop-up');
            closeProductDetail.addEventListener('click' , function(e) {
                e.target.parentElement.parentElement.classList.add('close');
                body.classList.remove('stop');
            });
        };
    });
};

// choose 
const category = document.querySelectorAll('.menu-scroll li a');
category.forEach(x => {
    x.addEventListener('click', function(){
        category.forEach(x => x.classList.remove('active'));
        if(!this.classList.contains('active'))this.classList.add('active');
        let choice = this.innerHTML.toLowerCase();
        showChoice(choice);
    });
});

const showChoice = async function(choice){
    try{
        const getData = await getDataMenu();
        showUIChoice(getData, choice);
    } catch(err){
        console.log(err);
    };
}

function showUIChoice (menu, choice){
    let cards = '';
    let filteredMenu;
    if(choice === "menu"){
        filteredMenu = menu;
    } else filteredMenu = menu.filter(x => choice === x.category.toLowerCase());
    filteredMenu.forEach(x => {
        let {id, name, price, image} = x
        cards += card(id, name, price, image);
    });
    const wrappedCardMenu = document.querySelector('.container-menu .wrapped');
    wrappedCardMenu.innerHTML = cards;
};

function getDataMenu (){
    return fetch('assets/data/menu.json')
    .then(response => {
        if(!response.ok){
            throw new Error(response.Error);
        }
        return response.json();
    })
    .then(response => {
        if(response.Response === 'False'){
            throw new Error(response.Error);
        }
        return response.menu;
    });
};

let rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits : 0 ,
});

function card (id, name, price, image){
    return `<div id="${id}" class="card" data-idcard="${id}" onclick="showModal(this)">
                <div class="image"><img src="assets/img-menu/${image}" alt=""></div>
                <span class="title">${name}</span>
                <span class="price">${rupiah.format(price)}</span>
            </div>`
};

function modal (id, name, price, description, image){
    return `<div class="modal" data-idmodal="${id}">
              <div class="container-left">
                  <div class="img"><img src="assets/img-menu/${image}" alt=""></div>
              </div>
              <div class="container-right">
                  <h3 class="modal-title">${name}</h3>
                  <h3 class="modal-price">${rupiah.format(price)}</h3>
                  <p class="modal-description">${description}</p>
                  <div class="close-btn-pop-up">
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>`
};
