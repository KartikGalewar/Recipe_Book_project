import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     


  constructor(private dataStorage:DataStorage) { }

  ngOnInit() {
  }
    
  onSaveData(){
   this.dataStorage.saveData();
  }
  
  onFetchData(){
    this.dataStorage.fetchData().subscribe();
  }

 
  

}
