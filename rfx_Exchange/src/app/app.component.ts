import { Router,ActivatedRoute } from '@angular/router';
import { HostListener, OnInit, AfterViewInit ,AfterContentInit, ElementRef, Component} from '@angular/core';
import { AuthenticationService } from './services/authServices/authentication.service';
import { User } from './models/user-validate';
import { XchangeDashboardComponent } from './rfxChange/components/vrsMain/xchange-vrs-dashboard/xchange-dashboard/xchange-dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' 
})

export class AppComponent implements OnInit,AfterViewInit  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  currentUser:any = User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => 
          this.currentUser = 
          console.log("currentUser",this.currentUser));
    }

  ngAfterViewInit(): void {
    console.log('Check2');
  }
  ngOnInit(): void {
    console.log('Check1');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}


