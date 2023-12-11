import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   username: string='';
  password: string='';
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}
  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      (data) => {
        console.log('Login successful:', data);
        this.router.navigate(['/welcome/welcome']);
        if (data && data.access_token) {
          console.log('Access Token:', data.access_token);
           // Navigate to the "welcome" page after successful login
          
        } else {
          console.error('Invalid access token received.');
        }
        // Handle other tasks after successful login
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., display an error message)
      }
    );
  }
 
  
}
