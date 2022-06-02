import { Component } from './component.js';
//import { Score } from './score.js';
import { seriesArr } from './seriesArr.js';
//import { DeleteButton } from './delete_button.js';
export class Watched extends Component {
    constructor(selector, prueba) {
        super();
        this.selector = selector;
        this.series = seriesArr;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        this.manageComponentW();

        //new DeleteButton('i.fas');
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
                                <p class="serie__info">"${element.creator} ("${
                    element.year
                })</p>
                                <ul class="score" ">
                                    <ul class="score">
            
            <li class="score__star">
                <i class="icon--score serie-${
                    this.series.id
                }fas fa-star" title="1/5"    role= "button" data-number=1    ></i>
            </li>
            <li class="score__star">
                <i class="icon--score  fas fa-star" title="2/5"      role= "button" data-number=${3}    ></i>
            </li>
            <li class="score__star">
                <i class="icon--score fas fa-star" title="3/5"     role= "button" data-number=${3}    ></i>
            </li>
            <li class="score__star">
                <i class="icon--score fas fa-star" title="4/5"    role= "button" data-number=${4}    ></i>
            </li>
            <li class="score__star">
                <i class="icon--score fas fa-star" title="5/5"  role= "button" data-number=${5}   ></i>
            </li>
        </ul>
                                </ul>
          <i class="fas fa-times-circle icon--delete"  data-id= ${
              element.id
          } ></i>
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

    manageComponentW() {
        document
            .querySelectorAll('i.icon--delete')
            .forEach((item) =>
                item.addEventListener(
                    'click',
                    this.handlerButtonDelete.bind(this)
                )
            );
    }
    handlerButtonDelete(ev) {
        const selectedId = ev.target.dataset.id;

        this.series = this.series.filter((item) => item.id !== +selectedId);
        console.log(this.series);
        this.template = this.createTemplate();
        super.outerRender();
        this.manageComponentW();
    }

    manageStars() {
        document
            .querySelectorAll(`.icon--score.serie-${this.serie.id}`)
            .forEach((item) =>
                item.addEventListener('click', this.handlerStars.bind(this))
            );
    }

    handlerStars(ev) {
        const selectedStar = ev.target.dataset.number;
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
