import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';

// Services
import { CourseService } from './services/course.service';
import { UserService } from './services/user.service';
import { ModuleService } from './services/module.service';

@NgModule({
    declarations: [
        AppComponent,
        CourseGridComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        CourseViewerComponent,
        ModuleListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [
        CourseService,
        UserService,
        ModuleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
