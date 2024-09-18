import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ContainerComponent} from "./container/container.component";
import {AboutMeComponent} from "./about-me/about-me.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        AboutMeComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    expect(component.title).toEqual('portfolio');
  });

  it('should render the app-container (ContainerComponent)', () => {
    const compiled = fixture.nativeElement;
    const appContainerElement = compiled.querySelector('app-container');
    expect(appContainerElement).toBeTruthy(); // Check if app-container exists in the template
  });
});
