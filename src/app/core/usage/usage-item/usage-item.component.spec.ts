import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageItemComponent } from './usage-item.component';

describe('UsageItemComponent', () => {
  let component: UsageItemComponent;
  let fixture: ComponentFixture<UsageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
