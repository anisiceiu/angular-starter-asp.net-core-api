import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

const USER = 'user';
const JWT_TOKEN = 'jwt_t';
const USER_DETAILS = 'user_details';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  
  constructor(private _tokenService: TokenService) {}

  clearAll() {
    localStorage.clear();
    sessionStorage.clear();
  }

  clearAuth() {
    const token = this.JWTToken;
    this.clearAll();
    this.JWTToken = token;
  }

  public set JWTToken(token: string) {
    localStorage.setItem(JWT_TOKEN, token);
  }

  public get JWTToken(): string {
    if (localStorage.getItem(JWT_TOKEN)){
      return localStorage.getItem(JWT_TOKEN) || '';
    }else{
      return '';
    }
  }


  public get user() {
    const token = this.JWTToken;
    return this._tokenService.getDecodedAccessToken(token);
  }

  public set user(user) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public set UserDetails(user: any) {
    localStorage.setItem(USER_DETAILS, JSON.stringify(user));
  }

  public get UserDetails(): any {
    if (localStorage.getItem(USER_DETAILS)){
      return JSON.parse(localStorage.getItem(USER_DETAILS) || '');
    }else{
      return '';
    }
    
  }

}
