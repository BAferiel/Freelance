import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutinscriComponent } from './ajoutinscri.component';

describe('AjoutinscriComponent', () => {
  let component: AjoutinscriComponent;
  let fixture: ComponentFixture<AjoutinscriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutinscriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutinscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
