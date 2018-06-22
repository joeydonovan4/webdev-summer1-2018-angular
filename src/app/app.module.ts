import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { LoginComponent } from './login/login.component';
import { CourseService } from './services/course.service';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseGridComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [
        CourseService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
