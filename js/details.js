let container = document.querySelector('.container')
let wrapper = document.querySelector('.allWrapper')
let path = new URLSearchParams(window.location.search);

const id = path.get('id');
let copyFilms = films

copyFilms.forEach(film =>{

            // vaqtga doir / start
            let vaqt = new Date(film.release_date * 1000)
            let yil = String(vaqt.getFullYear()).padStart(2, 0)
            // vaqtga doir / end

    if (film.id === id){
        wrapper.innerHTML += 
        `
            <div class="header">
                <span> <a href="./index.html">← orqaga</a> </span> 
            </div>
    
            <div class="main">
                <div class="main-imgWrapper">
                <img src="${film.poster}" alt="film picture" class="film-img">
                </div>
            <div class="main-rightWrapper">
                <h2 class="film-name">${film.title}</h2>
            
                    <div class="details-wrapper">
                        <div class="movie-icon">movie</div>
                        <div class="movie-icon2">HD</div>
                        <div class="movie-genres">${film.genres}</div>
                        <div class="movie-time">[ ⏲ ${yil} ]</div>
                    </div>
                    <div class="movie-overview">${film.overview}</div>
                </div>
                        <div class="btn-watch">
                        <button> watch now </button>
                        </div>
            </div>
        `
    }

    wrapper.appendChild(container)
})
