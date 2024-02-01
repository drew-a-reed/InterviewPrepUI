import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  newUser: User = {
    id: '',
    name: '',
    email: '',
    phone: 0
  };

  constructor(private usersService: UsersService,
    private router: Router){}

  ngOnInit(): void {

  }

  addUser(){
    this.usersService.addUser(this.newUser)
    .subscribe({
      next: (user) => {
        this.router.navigate(['users']);
        console.log(user);

      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
