import { Component, OnInit } from '@angular/core';
import { IEmployee } from './product';

// import {}

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',   
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit { 

    title: string = "Products Angular";
    imageWidth: number = 50;
    imageMargin: number = 2;
    filter: string = "cart";
    
    imageShow:boolean = true;

    ngOnInit(): void { 
        console.log("implementation");
    }

    toggleImage = function toggle():void { 
        console.log("function called");
        this.imageShow = !this.imageShow
    }
    

    _listfilter: string;

    get listFilter(): string { 
        console.log(this._listfilter)
        return this._listfilter;
    }

    set listFilter(value: string) { 
        // this._listfilter = value;
        this._listfilter = value;
        this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
    }


    constructor() { 
        this.filteredEmployees = this.employees;
        this.listFilter = '';
    }

    key(): void { 
        console.log(this.listFilter);
    }

    filteredEmployees: IEmployee[] = [];

    employees: IEmployee[] = [
        {
            id: 3149750,
            name: "Shubham Sinha",
            company: "Nagarro",
            img: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
            star: 4,
        },
        {
            id: 3149749,
            name: "Arun Singh",
            company: "Nagarro",
            img: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
            star: 3,
        }
    ]


    // performFilter(filterBy: string): IEmployee {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.employees.filter(
    //         (employee: IEmployee) =>
    //             employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    //     )
    // }
    
    performFilter(filterBy: string): IEmployee[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.employees.filter((product: IEmployee) =>
          product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
    

}