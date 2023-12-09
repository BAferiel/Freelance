import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifinscriComponent } from './modifinscri.component';

describe('ModifinscriComponent', () => {
  let component: ModifinscriComponent;
  let fixture: ComponentFixture<ModifinscriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifinscriComponent]
    });
    fixture = TestBed.createComponent(ModifinscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
