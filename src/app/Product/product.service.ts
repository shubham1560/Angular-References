import { Injectable } from '@angular/core';
import { IEmployee } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable()
export class ProductService{


    headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          Authorization: 'Token 961414ea9cd103f1722cc82c831866f938dd0e67',
        //   Authorization: `Token ${this.token}`,
          
        }
      );
    constructor(
        private httpClient: HttpClient,
      ) { }
    
    getArticles(): Observable<IEmployee> { 
        console.log("Service called");
        return this.httpClient.get<IEmployee>("http://localhost:8000/api/knowledge/", {headers: this.headers}) ;
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