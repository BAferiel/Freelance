import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username!: string;
  isLoggedIn: boolean = false; // Declare the isLoggedIn property

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Decode the token and extract the username
    const token = this.userService.getToken();
    this.username = this.decodeTokenAndGetUsername(token);

    // Set isLoggedIn based on the presence of the token or any other criteria
    this.isLoggedIn = !!token;
  }

  private decodeTokenAndGetUsername(token: string): string {
    // Implement the logic to decode the token (use a library like jwt-decode)
    // Extract the username and return it
    // Example using jwt-decode (install it first: npm install jwt-decode)
    const decodedToken: any = jwtDecode(token);
    return decodedToken.sub; // Assuming 'sub' contains the username
  }
}
