import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  user: Tutorial = {
    username: "",
    password: ""
  };

  checkmessage = "";

  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }


  saveUser(): void{
    const data = {
      username: this.user.username,
      password: this.user.password
    }



    this.tutorialService.create(data)
    .subscribe(
      response=>{
        console.log(response);
        this.submitted = true
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  newUser(): void{
    this.submitted = false;
    this.user = {
      username: "",
      password: "",
    }
  }

}

// 


