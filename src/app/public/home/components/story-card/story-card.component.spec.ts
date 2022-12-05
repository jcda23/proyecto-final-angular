import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoryCardComponent } from './story-card.component';

describe('StoryCardComponent', () => {
  let component: StoryCardComponent;
  let fixture: ComponentFixture<StoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryCardComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe existir el StoryCardComponent', () => {
    const fixture = TestBed.createComponent(StoryCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
