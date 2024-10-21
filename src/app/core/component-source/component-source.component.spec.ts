import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSourceComponent } from './component-source.component';

describe('ComponentSourceComponent', () => {
  let component: ComponentSourceComponent;
  let fixture: ComponentFixture<ComponentSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
