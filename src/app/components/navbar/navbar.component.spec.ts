import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to home', () => {
    const homeLink = fixture.debugElement.query(By.css('a[href="/"]'));
    expect(homeLink).toBeTruthy();
  });

  it('should have a link to gallery', () => {
    const galleryLink = fixture.debugElement.query(By.css('a[href="/#/gallery"]'));
    expect(galleryLink).toBeTruthy();
  });

  it('should have a link to about', () => {
    const aboutLink = fixture.debugElement.query(By.css('a[href="/#/about"]'));
    expect(aboutLink).toBeTruthy();
  });
});
