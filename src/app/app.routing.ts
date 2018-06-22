import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
    {path: '', component: CourseGridComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'courses/:courseId', component: CourseViewerComponent}
]

export const routing = RouterModule.forRoot(appRoutes);