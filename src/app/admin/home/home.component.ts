import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChart = new Chart({
    chart: {
      type: 'line'
    },

    title: {
      text: 'Patients'
    },

    credits: {
      enabled: false
    },

    series: [
      {
        name: 'Patients admis',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  })

  donutChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
     
    credits: {
      enabled: false
    },
    
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Maladies',

    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },

          { name: 'VIH/SIDA', y: 2, color: '#393e46' },

          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'AUTRES', y: 4, color: '#eeeeee' },
          { name: 'DIABÈTE', y: 5, color: '#506ef9' },
        ],
      },
    ],

  })

}
