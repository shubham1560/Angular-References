import { Injectable } from '@angular/core';
import { IEmployee } from './product';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService{

    constructor(
        private httpClient: HttpClient,
      ) { }
    
    getArticles() { 
        console.log("Service called");
        return this.httpClient.get("http://localhost:8000/api/knowledge/") ;
      }
    
    getEmployees(): IEmployee[]{ 
        return [
            {
                id: 3149750,
                name: "Shubh Sinha",
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
    }
}