import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentUser: Tutorial = {
    username: "",
    password: "",
  };

  message = "";

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = "";
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id:string): void{
    this.tutorialService.get(id)
    .subscribe(
      data => {
        this.currentUser = data;
        console.log(data);
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  updateUser(): void {
    this.message = "";

    this.tutorialService.update(this.currentUser.id, this.currentUser)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message : "This user was updated successfully."
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  deleteUser(): void{
    this.tutorialService.delete(this.currentUser.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/users"]);
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
