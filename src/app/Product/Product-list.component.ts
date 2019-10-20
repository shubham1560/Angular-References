import { Component } from '@angular/core';
import { IEmployee } from './product';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',   
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent { 
    title: string = "well";
    imageWidth: number = 50;
    imageMargin: number = 2;
    filter: string = "cart";
    
    imageShow:boolean = true;

    toggleImage = function toggle():void { 
        console.log("function called");
        this.imageShow = !this.imageShow
    }
    

    key(): void { 
        console.log("keyup");
    }

    employees: IEmployee[] = [
        {
            id: 3149750,
            name: "Shubham Sinha",
            company: "Nagarro",
            img: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
        },
        {
            id: 3149749,
            name: "Arun Singh",
            company: "Nagarro",
            img: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
        }
    ]

}