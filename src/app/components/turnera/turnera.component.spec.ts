import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurneraComponent } from './turnera.component';

describe('TurneraComponent', () => {
  let component: TurneraComponent;
  let fixture: ComponentFixture<TurneraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurneraComponent]
    });
    fixture = TestBed.createComponent(TurneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
