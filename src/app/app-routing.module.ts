import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { CoursEtudiantComponent } from './cours-etudiant/cours-etudiant.component';
import { CourseComponent } from './course/course.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ExercicesEtudiantComponent } from './exercices-etudiant/exercices-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: "users" , component :  UserComponent},
  {path : "courses" , component :  CourseComponent },
  {path : "exercices" , component :  ExerciceComponent },
  {path : "enseignant" , component :  EnseignantComponent },
  {path : "login-admin" , component : LoginAdminComponent},
  {path : "etudiant" , component :  EtudiantComponent },
  {path : "cours-etudiant" , component :  CoursEtudiantComponent },
  {path : "exercices-etudiant" , component : ExercicesEtudiantComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
