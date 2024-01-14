import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabatexComponent } from './rabatex.component';

describe('RabatexComponent', () => {
  let component: RabatexComponent;
  let fixture: ComponentFixture<RabatexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RabatexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RabatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
