import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../Service/worker.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Worker } from '../Models/worker.model';
import { City } from '../Models/City.model';
import { CityService } from '../Service/city.service';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit
{

  workers: Worker[] = [];
  cities: City[] = [];

  constructor(public workerService: WorkerService, public cityServices: CityService) { }
  ngOnInit() {
    this.workerService.getAll().subscribe((data: Worker[]) => {
      console.log(data);
      this.workers = data;
      this.cityServices.getAll().subscribe((c: City[]) => {
        console.log(c);
        this.cities = c;
      }
     ) }
      );

    }

  }
