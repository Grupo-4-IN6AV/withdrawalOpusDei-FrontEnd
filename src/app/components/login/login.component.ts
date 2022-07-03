import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from 'src/app/models/user.model';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  user:  UserModel;

  constructor
  (
    private router: Router,
    private userRest: CredentialsRestService,
  ) { 
    this.user = new UserModel('', '', '', '', '', '', '', '','');
  }

  ngOnInit(): void {
    
  }

  login()
  {
    this.userRest.login(this.user).subscribe({
      next: (res:any)=>{
        localStorage.setItem('identity', JSON.stringify(res.already));
        localStorage.setItem('token', res.token);
        
        Swal.fire({
          icon:'success',
          title: res.message,
          html:'Welcome <b>'+ res.already.username+'</b>',
          confirmButtonColor: '#28B463'
        })

        const verificarAdmin = res.already.role;
        //VERIFICA A DONDE LLEVARME//
        if(verificarAdmin == 'ADMINISTRADOR')
         {this.router.navigate(['/admin/home']);}
        else
        {this.router.navigate(['/organizer/home'])}
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }
}