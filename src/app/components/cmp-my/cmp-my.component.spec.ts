import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMyComponent } from './cmp-my.component';

describe('CmpMyComponent', () => {
  let component: CmpMyComponent;
  let fixture: ComponentFixture<CmpMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
