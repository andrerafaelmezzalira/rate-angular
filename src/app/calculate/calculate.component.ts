import { Component, OnInit } from '@angular/core';

import { RateService } from '../rate.service';
import { PlanService } from '../plan.service';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  private rates = [];
  private plans = [];

  constructor(private rateService: RateService, 
    private planService: PlanService, private calculateService: CalculateService) {

    rateService.get().subscribe((res : any[])=>{
      this.rates = res;
    });

    planService.get().subscribe((res : any[])=>{
      this.plans = res;
    });
  }

  calculate(rate:any, minutes:any, minutesPlan:any) {
    this.calculateService.calculate(rate.origin, rate.target, minutes, minutesPlan).subscribe((res : any[])=>{
      rate.withPlan = res;
    });
    this.calculateService.calculate(rate.origin, rate.target, minutes, undefined).subscribe((res : any[])=>{
      rate.withoutPlan = res;
    });
  }

  ngOnInit() {
  }

}
