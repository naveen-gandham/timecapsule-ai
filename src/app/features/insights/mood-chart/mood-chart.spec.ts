import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodChart } from './mood-chart';

describe('MoodChart', () => {
  let component: MoodChart;
  let fixture: ComponentFixture<MoodChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
