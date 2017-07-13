import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ngMaterialModule } from "app/module/ngMaterial.module";
import { SrvMyService } from "app/services/srv-my.service";
import { CmpMyComponent } from "app/components/cmp-my/cmp-my.component";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule , ngMaterialModule , NoopAnimationsModule],
      declarations: [AppComponent ,CmpMyComponent],
      providers: [SrvMyService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
