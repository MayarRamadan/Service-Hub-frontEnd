import { Component, OnInit } from '@angular/core';
import { Register } from '../../Models/Register.model';
import { City } from '../../Models/City.model';
import { RegistrationService } from '../../Service/registration.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CityService } from '../../Service/city.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegistrationFormComponent implements OnInit{

  client: Register = new Register("", "", "", "", "", "", "", new Date());
  router: any;
  cities: City[] = [];
  constructor(private registrationService: RegistrationService, public cityservice:CityService) { }
  sub: Subscription | null = null;
ngOnInit(): void {
  this.cityservice.getAll().subscribe((c: City[]) => {
    console.log(c);
    this.cities = c;
  }
  )
}
  save() {
    this.sub = this.registrationService.register(this.client).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/Home");
    });
  }
  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
  }

