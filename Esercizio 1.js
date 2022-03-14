"use strict" ;

const dayjs = require('dayjs');

function Film (id, title, favorite=false, date, rating){

    this.id = id;
    this.title = title;
    this.favorite = favorite;
    if(date != undefined){
        this.date = date;
    }
    if(rating != undefined){
        this.rating = rating;
    }

}

function FilmLibrary () {
    
    let filmList = [];

    this.addNewFilm = (film) => {
        filmList.push(film);
    }

    this.print = () => {
        for(let film of filmList){
            console.log(film);
        }
    }
}

const filmCollection = new FilmLibrary();

filmCollection.addNewFilm(new Film(1, 'Pulp Fiction', true, dayjs('20220310'), 5));
filmCollection.addNewFilm(new Film(2, '21 Grams', true, dayjs('20220317') , 4));
filmCollection.addNewFilm(new Film(3, 'Star Wars', false));
filmCollection.addNewFilm(new Film(4, 'Matrix', false));
filmCollection.addNewFilm(new Film(5, 'Shrek', false, dayjs('20220321'), 3));

filmCollection.print();