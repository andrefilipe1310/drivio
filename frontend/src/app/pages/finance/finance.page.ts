import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
  standalone:false
})
export class FinancePage implements OnInit {

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
