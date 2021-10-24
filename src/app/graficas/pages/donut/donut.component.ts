import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {

  public colors:Color[]=[
    {
      backgroundColor:
      ['#7719FF','#3212E3','#2036FA','#125BE3','#149EFB']
  }];

  public doughnutChartLabels: Label[] = [
    'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,200]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
