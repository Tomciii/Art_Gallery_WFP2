import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, NavbarComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
