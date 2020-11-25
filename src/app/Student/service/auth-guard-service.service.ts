import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor(private router: Router) {

   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     debugger;
    var values = JSON.parse(localStorage.getItem("token"));
    if (values!=null) {
      return true;
    } else {
      this.router.navigate(['login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
