import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBoardComponent } from './welcome-board.component';

describe('WelcomeBoardComponent', () => {
  let component: WelcomeBoardComponent;
  let fixture: ComponentFixture<WelcomeBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeBoardComponent]
    });
    fixture = TestBed.createComponent(WelcomeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
