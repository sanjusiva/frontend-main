import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatMsg } from './chat-msg.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatMsgService {
  readonly baseURL = 'http://localhost:3000/chatMsg';
  chats: ChatMsg[] =[];

  constructor(private http: HttpClient,public userService:UserService) { }
  getMessage() {
    return this.http.get(this.baseURL);
  }
  postMsg(chat:ChatMsg) {
    return this.http.post(this.baseURL,chat);
  }
}
