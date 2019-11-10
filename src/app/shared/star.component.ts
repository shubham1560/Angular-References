import { OnChanges, Component, Input } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
})

export class StarComponent implements OnChanges { 
    
    @Input() rating: number;
    starWidth: number = 5;
    
    ngOnChanges(): void {
        (this.rating)
    }

    notify(num) { 
        console.log("Clicked the fun! " + num);
        this.rating = num;
    }
}