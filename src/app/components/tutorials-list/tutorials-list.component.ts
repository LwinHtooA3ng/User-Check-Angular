import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  users?: Tutorial[];
  currentuser: Tutorial = {};
  currentIndex = -1;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void{
    this.tutorialService.getAll()
    .subscribe(
      data => {
        this.users = data;
        console.log(data);
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  refreshList(): void{
    this.retrieveUsers();
    this.currentuser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: Tutorial, index : number): void{
    this.currentuser = user;
    this.currentIndex = index
  }

  removeAllUsers(): void{
    this.tutorialService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
