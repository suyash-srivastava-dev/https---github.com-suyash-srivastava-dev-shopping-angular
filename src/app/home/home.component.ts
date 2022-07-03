import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ItemsArray: any[] = [];
  constructor(private crudService: CrudService) {}
  ngOnInit() {
    
    this.crudService.getStore().subscribe((res: any[]) => {
      this.ItemsArray = res;
    }); 
  }
  
}
