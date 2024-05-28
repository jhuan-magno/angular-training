import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndParagraphComponent } from './title-and-paragraph.component';

describe('TitleAndParagraphComponent', () => {
  let component: TitleAndParagraphComponent;
  let fixture: ComponentFixture<TitleAndParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAndParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAndParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
