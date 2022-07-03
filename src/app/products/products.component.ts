import {Component,OnInit} from '@angular/core';
import { CrudService } from '../crud.service';
export interface PeriodicElement {
  itemId: number,
    name: string,
    mrp: number,
    discountPercent: number,
    availableQuantity: number,
    discountedSp: number,
    weightInGrams: number,
    outOfStock: boolean,
    quantity: number
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
 
  ItemsArray: any[] = [];
  constructor(private crudService: CrudService) {}
  ngOnInit() {
    this.crudService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
    }); 
  }
}
