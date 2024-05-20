import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { AuthenticatedUser } from '../models/authenticated-user.model';
import { UserCredentials } from '../models/user-credentials.model';
import { User } from '../models/user.model';
import { Constants } from '../../../commons/constants/constants.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `${environment.API_URL}/auth`;


  isLoggedIn = new BehaviorSubject<boolean>(false)//começa falso
  constructor(private http: HttpClient) {}

  register(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }

  login(payload: UserCredentials): Observable<AuthenticatedUser> {
    return this.http.post<AuthenticatedUser>(`${this.apiUrl}/login`, payload);
  }

  checkAuthStatus() : Observable<boolean>{

    const token = localStorage.getItem(Constants.TOKEN_KEY)
    // toda vez que checar a função ceckAuthStatus, dispara um evento do tipo observable com valor boolean
    this.isLoggedIn.next(!!token) // !! transforma em boolean
    return this.isLoggedIn
    

  }
}
