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
  employee_name: string;
  ngOnInit() {

    this.route.params.subscribe(params => {
      let id = params['id'];
      let guid = params['name'];
      // this.employee_name = `${guid}`;  
      console.log(`${id},${guid}`);
      });

    let id = +this.route.snapshot.paramMap.getAll('id');
    // console.log(+this.route.snapshot.paramMap.get('name'));
    let name = this.route.snapshot.paramMap.get('name');
    this.employee_id = id;
    this.employee_name = name;
    ;
    console.log(id)
  }

}
