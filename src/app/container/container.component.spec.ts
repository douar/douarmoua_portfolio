import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import {AboutMeComponent} from "../about-me/about-me.component";

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        AboutMeComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-about-me (AboutMeComponent)', () => {
    // Arrange & Act
    const compiled = fixture.nativeElement;
    const appAboutMeElement = compiled.querySelector('app-about-me');

    // Assert
    expect(appAboutMeElement).toBeTruthy();
  });
});
