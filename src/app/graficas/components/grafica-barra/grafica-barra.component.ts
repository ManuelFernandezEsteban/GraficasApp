import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal:boolean=false;

  public barChartOptions: ChartOptions = {
    responsive: true    
  };

  @Input() barChartLabels: Label[] = [
    //'2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#F6A845',hoverBackgroundColor:'#D4513B'},
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor:'#D47C3B' ,hoverBackgroundColor:'#F65959'}
  ];


  constructor() { }

  ngOnInit(): void {
    if (this.horizontal){
      this.barChartType='horizontalBar';
    }
  }

}
