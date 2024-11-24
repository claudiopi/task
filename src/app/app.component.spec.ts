import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxAvatarModule, IgxDropDownModule, IgxButtonGroupModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxAvatarModule, IgxDropDownModule, IgxButtonGroupModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
