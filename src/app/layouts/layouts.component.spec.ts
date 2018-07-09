
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutsComponent } from './layouts.component';

describe('LayoutsComponent', () => {
  let component: LayoutsComponent;
  let fixture: ComponentFixture<LayoutsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
