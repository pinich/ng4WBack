import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMyComponent } from './cmp-my.component';
import { SrvMyService } from '../../services/srv-my.service';

describe('CmpMyComponent', () => {
  let component: CmpMyComponent;
  let fixture: ComponentFixture<CmpMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpMyComponent ],
      providers: [SrvMyService]
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
