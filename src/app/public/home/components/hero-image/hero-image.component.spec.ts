import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeroImageComponent } from './hero-image.component';

describe('HeroImageComponent', () => {
  let component: HeroImageComponent;
  let fixture: ComponentFixture<HeroImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroImageComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe existir el HeroImageComponent', () => {
    const fixture = TestBed.createComponent(HeroImageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('Se debe renderizar el titulo de hero image', () => {
    const fixture = TestBed.createComponent(HeroImageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.email-form__content')?.textContent
    ).toContain('¿Quieres comenzar tu aventura?');
  });
});
