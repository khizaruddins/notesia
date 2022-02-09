import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleadsBannerComponent } from './googleads-banner.component';

describe('GoogleadsBannerComponent', () => {
  let component: GoogleadsBannerComponent;
  let fixture: ComponentFixture<GoogleadsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleadsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleadsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
