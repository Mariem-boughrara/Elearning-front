import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent implements OnInit {
  matiere:any={}
  editForm: FormGroup

  constructor(private fd:FormBuilder , private  matiereservice : MatiereService) { }

  ngOnInit(): void {
    this.editForm=this.fd.group({
      id:[""],
      tite:[""]


    })

  }
  onEditMatiere(){
    console.log(this.matiere);

    this.matiereservice.updateMatiere(this.matiere).subscribe(data =>console.log(data));



  }

}
