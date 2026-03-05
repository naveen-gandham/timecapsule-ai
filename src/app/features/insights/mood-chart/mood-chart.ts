import { Component, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { InsightEngine } from '../../../services/insight-engine';

@Component({
  selector:'app-mood-chart',
  standalone:true,
  template:`<canvas id="moodChart"></canvas>`
})
export class MoodChartComponent implements AfterViewInit {

  constructor(private engine:InsightEngine){}

  ngAfterViewInit(){

    const stats = this.engine.getStats();

    new Chart(
      document.getElementById('moodChart') as any,
      {
        type:'doughnut',
        data:{
          labels:['Happy','Sad','Motivated'],
          datasets:[{
            data:[
              stats.happy,
              stats.sad,
              stats.motivated
            ]
          }]
        }
      }
    );
  }
}