import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightEngine } from '../../../services/insight-engine';
import { MoodChartComponent } from '../mood-chart/mood-chart';

@Component({
  standalone: true,
  imports: [CommonModule, MoodChartComponent],
  templateUrl: './insights.html',
  styleUrls: ['./insights.css']
})
export class Insights implements OnInit {

  stats: any;
  advice = '';

  constructor(private engine: InsightEngine) {}

  ngOnInit() {
    this.stats = this.engine.getMoodSummary();
    this.advice = this.engine.generateAdvice();
  }
}