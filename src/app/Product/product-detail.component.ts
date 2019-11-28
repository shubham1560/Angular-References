import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  employee_id: number;
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.getAll('id');
    this.employee_id = id;
    console.log(id)
  }

}
