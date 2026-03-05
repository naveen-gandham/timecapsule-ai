import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleCard } from './capsule-card';

describe('CapsuleCard', () => {
  let component: CapsuleCard;
  let fixture: ComponentFixture<CapsuleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsuleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsuleCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
