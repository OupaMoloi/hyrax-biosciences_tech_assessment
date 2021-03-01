import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countryData: any;
  filterTerm: string;
  constructor(private apiServ: DataService) {
    this.countryData = [];
  }

  ngOnInit() {
     this.getAllCountries();
  }

  getAllCountries(): void {
    this.apiServ.getList().subscribe(
      response => {
        this.countryData = response;
        console.log(response);
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }

  searchFilter(): void{
    
  }

}
