import { Component } from './component.js';
import { seriesArr } from './seriesArr.js';
import { Pending } from './pending.js';
import { Watched } from './watched.js';

export class Score extends Component {
    template;
    series;
    constructor(selector, series) {
        super();
        this.selector = selector;
        this.series = seriesArr;

        this.template = this.createTemplate();
        this.outerRender(this.selector);
    }

    createTemplate() {
        let numOfStars = '';
        let score = this.series.score;
        /*let pending = this.series.filter((item) => !item.watched);
        pending.forEach((film) => {
            numOfStars = ` <ul class="score">
             <p class="info">SLOTWatchedFALSEL!!!</p>
                <li class="score__star"   role= "button" >
                <i class="icon--score far
                 fa-star" title="1/5"></i>
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
            </ul> `;
        });

        return numOfStars;
    }*/

        if (this.series.watched === true) {
            numOfStars += `
        <ul class="score">
             <p class="info">SLOTGENERAL!!!</p>
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
        </ul>`;
            return numOfStars;
        } else {
            numOfStars += `
        <ul class="score">
             <p class="info">SLOTelse!!!</p>
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
        </ul>`;
            return numOfStars;
        }
    }
}

//falta hacero 1 botón que cambie a negro/blanco
