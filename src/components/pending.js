import { Component } from './component.js';
//import { Score } from './score.js';
import { seriesArr } from './seriesArr.js';
import { Score } from './score.js';
export class Pending extends Component {
    constructor(selector, score) {
        super();
        this.score = score;
        this.selector = selector;
        this.series = seriesArr;
        this.template = this.createTemplate();
        this.outerRender(this.selector);
        this.showStars();
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
                                <slot class="score"></slot>
                                <i class="fas fa-times-circle icon--delete"></i>
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

    showStars() {
        this.series.forEach((serie) => {
            if (serie.watched === false) {
                new Score(`slot.score`);
            }
        });
    }

    deleteSerie() {
        document.querySelector('.icon--delete');
    }
}
