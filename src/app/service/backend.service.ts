import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private token: string;
  private readonly baseUrl = "http://65.2.51.31:9001";
  currentUser: string;
  
  get isLogged() {
    return this.isLoggedIn.asObservable();
  } 

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl+'/retrive_update_user/');
  }
  getUser(id: number) {
    return this.http.get(this.baseUrl+'/retrive_update_user/'+id);
  }
  login(form: any) {
    this.isLoggedIn.next(true);
    this.currentUser = form.username;
    return this.http.post(this.baseUrl+'/login/', form)
  }
  register(form: any) {
    return this.http.post(this.baseUrl+'/register/', form);
  }
  logout() {
    this.isLoggedIn.next(false);
    return this.http.post(this.baseUrl+'/api/logout/', {});
    localStorage.removeItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
