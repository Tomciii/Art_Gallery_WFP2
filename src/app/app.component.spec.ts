import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'JenkinsApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('JenkinsApp');
  });
});
