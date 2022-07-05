import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { MatiereService } from './services/matiere.service';
import { ExerciceComponent } from './exercice/exercice.component';
import { EditExerciceComponent } from './edit-exercice/edit-exercice.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './services/course.service';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CoursEtudiantComponent } from './cours-etudiant/cours-etudiant.component';
import { ExercicesEtudiantComponent } from './exercices-etudiant/exercices-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ExerciceService } from './services/exercice.service';
import { AuthAdminService } from './services/auth-admin.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,

    EnseignantComponent,
    EditUserComponent,
    EditMatiereComponent,
    CourseComponent,
    ExerciceComponent,
    EditExerciceComponent,
    EditCourseComponent,
    AdministrateurComponent,
    EtudiantComponent,
    CoursEtudiantComponent,
    ExercicesEtudiantComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService ,
              MatiereService,
              CourseService,
            ExerciceService,
],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
