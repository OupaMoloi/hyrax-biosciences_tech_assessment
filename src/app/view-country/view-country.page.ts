import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.page.html',
  styleUrls: ['./view-country.page.scss'],
})
export class ViewCountryPage implements OnInit {
  id: number;
  country: any;
  dataObj: any;
  url:any = {};
  constructor(public activatedRoute: ActivatedRoute, public router: Router,  public apiService: DataService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get country details using id
    this.apiService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.country = response;
      this.dataObj  = {
        name : this.country.data.attributes.name,
        region : this.country.data.attributes.region,
        population : this.country.data.attributes.population,
        area : this.country.data.attributes.area,
        gdp : this.country.data.attributes.gdp,
        population_density : this.country.data.attributes.population_density,
        net_migration : this.country.data.attributes.net_migration,
        infant_mortality : this.country.data.attributes.infant_mortality,
        literacy : this.country.data.attributes.literacy,
        phones_per_1000 : this.country.data.attributes.phones_per_1000,
        arable_land_percentage : this.country.data.attributes.arable_land_percentage,
        climate : this.country.data.attributes.climate,
        birthrate : this.country.data.attributes.birthrate,
        deathrate : this.country.data.attributes.deathrate,
        agriculture : this.country.data.attributes.agriculture,
        industry : this.country.data.attributes.industry,
        service : this.country.data.attributes.service,
        latitude : this.country.data.attributes.latitude,
        longitude : this.country.data.attributes.longitude,
        capital : this.country.data.attributes.capital,
        code : this.country.data.attributes.code,
        crops_percentage : this.country.data.attributes.land_types.crops_percentage,
        other_percentage : this.country.data.attributes.land_types.other_percentage,
        
      }
      console.log(this.dataObj);
      this.url = "https://www.google.com/maps/embed/v1/place?q="+this.dataObj.latitude +","+ this.dataObj.longitude + "&amp;key=AIzaSyAKzcbG1DkSRo8LI7wXCnp_3OJtVljvv9Y";
      console.log(this.url);
    },
    (error) => console.log(error),
    () => console.log("Complete")
  )}

}
