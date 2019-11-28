import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudarticlesComponent } from './fraudarticles.component';

describe('FraudarticlesComponent', () => {
  let component: FraudarticlesComponent;
  let fixture: ComponentFixture<FraudarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
