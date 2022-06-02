import { Component } from './component.js';
//import { Score } from './score.js';
import { seriesArr } from './seriesArr.js';
//import { DeleteButton } from './delete_button.js';
export class Pending extends Component {
    constructor(selector, score) {
        super();
        this.score = score;
        this.selector = selector;
        this.series = seriesArr;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        //this.manageComponentW();

        //new DeleteButton('i.fas');

        //this.showStars();
    }

    createTemplate() {
        let htmlSeriesP = '';

        this.series.forEach((element) => {
            if (element.watched === false) {
                htmlSeriesP += `
                            <li class="serie">
                                <img
                                    class="serie__poster"
                                    src="${element.poster}"
                                    alt="${element.name} poster"
                                />
                                <h4 class="serie__title">"${element.name}</h4>
                                <p class="serie__info">"${element.creator} ("${element.year})</p>
                                <ul class="score" data-id="${element.id}" >
             <p class="info">P!</p>
            <li class="score__star"   role= "button" >
                <i class="icon--score far fa-star" title="1/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="2/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="3/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="4/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="5/5"></i>
            </li>
        </ul>
                                <i class="fas fa-times-circle icon--delete"   role= "button"   data-id= ${element.id} ></i>
                            </li>
                            `;
            }
        });
        return ` 
            <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        ${this.pendingSeriesCounter()}
                        <ul class="series-list">
                        ${htmlSeriesP}
                         </ul>
                        </section> `;
    }

    pendingSeriesCounter() {
        let count = 0;
        this.series.forEach((item) => {
            if (item.watched === false) {
                count++;
            }
        });

        const counterToString = count.toString();
        if (counterToString !== '0') {
            return `
                <p class="info">You have  ${counterToString}  series pending to watch</p>
            
            `;
        } else {
            return `
                <p class="info">You already have not pending any serie</p>
            `;
        }
    }
    /*
    manageComponentW() {
        document
            .querySelectorAll('i.fas')
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
        this.createTemplate();
        this.outerRender(this.selector);
        this.manageComponentW();
    }*/
}
