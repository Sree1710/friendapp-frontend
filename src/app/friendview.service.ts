import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendviewService {

  constructor(private http:HttpClient) { }
  viewFriend=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view");
  }
}