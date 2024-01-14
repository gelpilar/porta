import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmoComponent } from './cosmo.component';

describe('CosmoComponent', () => {
  let component: CosmoComponent;
  let fixture: ComponentFixture<CosmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CosmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
