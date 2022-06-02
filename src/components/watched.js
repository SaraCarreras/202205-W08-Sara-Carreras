import { Component } from './component.js';
//import { Score } from './score.js';
import { seriesArr } from './seriesArr.js';
export class Watched extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.series = seriesArr;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        //new Score(`slot.score`);
    }
    createTemplate() {
        let htmlSeriesW = '';

        this.series.forEach((element) => {
            if (element.watched === true) {
                htmlSeriesW += `
                            <li class="serie">
                                <img
                                    class="serie__poster"
                                    src="${element.poster}"
                                    alt="${element.name} poster"
                                />
                                <h4 class="serie__title">"${element.name}</h4>
                                <p class="serie__info">"${element.creator} ("${element.year})</p>
                                <ul class="score" data-id="${element.id}">
                                    <ul class="score">
             <p class="info">Watched!!!</p>
            <li class="score__star"   role= "button" >
                <i class="icon--score fas fa-star" title="1/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score  fas fa-star" title="2/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score fas fa-star" title="3/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score fas fa-star" title="4/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score fas fa-star" title="5/5"></i>
            </li>
        </ul>
                                </ul>
                                <i class="fas fa-times-circle icon--delete"></i>
                            </li>
                            `;
            }
        });
        return ` 
            <section class="series-watched">
                        <h3 class="subsection-title">Watched series</h3>
                        ${this.watchedSeriesCounter()}
                        <ul class="series-list">
                        ${htmlSeriesW}
                         </ul>
                        </section> `;
    }

    watchedSeriesCounter() {
        let count = 0;
        this.series.forEach((item) => {
            if (item.watched === true) {
                count++;
            }
        });

        const counterToString = count.toString();
        if (counterToString !== '0') {
            return `
                <p class="info">You have watched ${counterToString}  series </p>
            
            `;
        } else {
            return `
                <p class="info">You have not watched any serie! </p>
            `;
        }
    }
    /*
    showStars() {
        this.series.forEach((serie) => {
            if (serie.watched === true) {
                
            }
        });
       }*/
}

//console.log('watched');
//console.log(new Watched('slot.watched'));
