import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  updatedUser: User = {
    id: '',
    name: '',
    email: '',
    phone: 0
  };

  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.usersService.getUser(id)
          .subscribe({
            next: (response) => {
              this.updatedUser = response;
            }
          })
        }
      }
    })
  }

  updateUser(){
    this.usersService.updateUser(this.updatedUser.id, this.updatedUser)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    })
  }

  deleteUser(id: string){
    this.usersService.deleteUser(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    })
  }
}
