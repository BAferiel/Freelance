import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheInscriComponent } from './affiche-inscri.component';

describe('AfficheInscriComponent', () => {
  let component: AfficheInscriComponent;
  let fixture: ComponentFixture<AfficheInscriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheInscriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheInscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
