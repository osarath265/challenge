import { Component } from '@angular/core';
import { SocialLoginService,Provider } from 'ngx-social-login';
import { UserdataService } from './services/userdata.service';
import { Router } from '@angular/router';
import { SocketIoService } from './services/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public user:any;
  public notifications:any;
  
  constructor(private _service:SocialLoginService,private userDataService:UserdataService, private router:Router,private socketservice:SocketIoService){


      }
  ngOnInit()
  {
    this.socketservice.receiveChallenge().subscribe((data) => {
      this.notifications = data.name;
      console.log("notifying  ", this.notifications);
    });

  }
 


  loginWithGoogle(): void {
    this._service.login(Provider.GOOGLE).subscribe(user => 
      {
        this.user=user;
        this.userDataService.userObj=user;
        this.router.navigate(['challenge']);
    });
  }

  logout(): void {
    this._service.logout().subscribe({
      complete: () => console.log('Logout success'),
      error: err => console.log(err)
    });
    this.user=null;
  }


}
