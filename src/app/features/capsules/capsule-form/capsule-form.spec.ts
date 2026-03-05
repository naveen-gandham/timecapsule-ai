import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleForm } from './capsule-form';

describe('CapsuleForm', () => {
  let component: CapsuleForm;
  let fixture: ComponentFixture<CapsuleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsuleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsuleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
