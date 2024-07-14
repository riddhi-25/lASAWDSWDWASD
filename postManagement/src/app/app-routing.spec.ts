import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { Router } from "@angular/router";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";

describe("App Routing",()=>{
    let router:Router;
    let fixture:ComponentFixture<AppComponent>;
    let headerFixture:ComponentFixture<HeaderComponent>;
    let location:Location;
    let el:DebugElement;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            imports:[RouterTestingModule.withRoutes(routes)],
            declarations:[AppComponent,LoginComponent,]
        }).compileComponents();
    }));
    beforeEach(()=>{
        router=TestBed.inject(Router);
        location=TestBed.inject(Location);
        router.initialNavigation();
        fixture=TestBed.createComponent(AppComponent);
        headerFixture=TestBed.createComponent(HeaderComponent);
        el=headerFixture.debugElement;
    });

    it("should navigate to default=",waitForAsync(()=>{
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            expect(location.pathname).toBe('');
        })
    }));
    it("should navigate to heaader on submit",(()=>{
        headerFixture.detectChanges()
        let links=el.queryAll(By.css('a'));
        links[0].nativeElement.click();
        headerFixture.whenStable().then(()=>{
            expect(location.pathname).toBe('/header')
        })
    }))
});