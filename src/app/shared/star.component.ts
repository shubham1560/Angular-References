import { OnChanges, Component, Input } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
})

export class StarComponent implements OnChanges { 
    
    @Input() rating: number = 4;
    starWidth: number = 5;
    
    ngOnChanges(): void {
        this.starWidth = this.rating*75/5
    }
}