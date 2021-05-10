import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindclaimComponent } from './findclaim.component';

describe('FindclaimComponent', () => {
  let component: FindclaimComponent;
  let fixture: ComponentFixture<FindclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
