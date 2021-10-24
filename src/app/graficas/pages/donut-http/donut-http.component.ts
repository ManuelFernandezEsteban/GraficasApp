import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  public colors:Color[]=[
    {
      backgroundColor:
      ['#7719FF','#3212E3','#2036FA','#125BE3','#149EFB']
  }];

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100,200]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    /*this.graficasService.getUsuariosRedesSociales().subscribe(data=>{
      console.log(data);

      const label=Object.keys(data);
      const values=Object.values(data);
      this.doughnutChartLabels=label;
      this.doughnutChartData.push(values);

    })*/

    this.graficasService.getUsuariosRedesSocialesDonutData().subscribe(({label, values})=>{
      this.doughnutChartLabels=label;
      this.doughnutChartData.push(values);
    })
  }

}
