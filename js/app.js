


const elList = document.querySelector('.js-list');
const elSelect = document.querySelector('.js-select');
const form = document.querySelector('.form')
const input = document.querySelector('#input')


function renderList(array) {
    elList.innerHTML = ''
    array.forEach((el) => {

        // vaqtga doir / start

            let vaqt = new Date(el.release_date * 1000)
            let kun = String(vaqt.getDate() ).padStart(2, 0)
            let oy =  String(vaqt.getMonth() + 1).padStart(2, 0)
            let yil = String(vaqt.getFullYear()).padStart(2, 0)
            
            let releaseDate = `${kun}.${oy}.${yil}`

        // vaqtga doir / end

        let filmJanrlari = "";
            for (let a = 0; a <= el.genres.length - 1; a++) {
            filmJanrlari += `<span><b> ${el.genres[a]} </b></span>`;
        }
        elList.innerHTML += `
        
        <li class="card">
        <div class="card__img_wrapper">
            <img class="card__img" src="${el.poster}" alt="movie" />
        </div>
        
        <div class="card__aside">
            <div>
                <p class="card__title">${el.title}</p>
                <p class="card__filmDate"> date: ${releaseDate}</p>

                <p class="card__text"> ${filmJanrlari} </p>
            </div>
            <a href="./details.html?id=${el.id}"><button> tomosha qilish </button></a>
        </div>
    </li>
    `;
    
    });
}

renderList(films);

elSelect.addEventListener('change', function () {
    
        const elSelectedMovies =  films.filter( film => film.genres.includes(elSelect.value) )
        renderList(elSelectedMovies);

    // const elSelectedMovies = [];

    // films.forEach(function (el) {
    //     el.genres.forEach(function (e) {
    //         if (e === elSelect.value) {
    //             elSelectedMovies.push(el);
    //         }
    //     });
    // });
});  

form.addEventListener('submit',e=> e.preventDefault() )

input.addEventListener('input', ()=>{
    inVal = input.value.toLowerCase().trim()
    
    const searchFilm = films.filter( film => film.title.toLowerCase().includes(inVal));
    
    renderList(searchFilm)
})



