import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.page.html',
  styleUrls: ['./insights.page.scss'],
  standalone:false
})
export class InsightsPage implements OnInit {

  constructor() { }
  barChartData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    datasets: [
      {
        label: 'Ganhos',
        data: [120, 200, 180, 90, 160],
        backgroundColor: '#14A662'
      }
    ]
  };
  
  barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  ngOnInit() {
  }

}
