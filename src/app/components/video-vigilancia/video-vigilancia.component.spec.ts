import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoVigilanciaComponent } from './video-vigilancia.component';

describe('VideoVigilanciaComponent', () => {
  let component: VideoVigilanciaComponent;
  let fixture: ComponentFixture<VideoVigilanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoVigilanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoVigilanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
