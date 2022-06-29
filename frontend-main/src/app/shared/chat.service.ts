import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from './chat.model'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  selectedChat!: Chat;
  chats: Chat[] =[];
  chatMsg:any;
  readonly baseURL = 'http://localhost:3000/chats';
  constructor(private http: HttpClient,public userService:UserService) { }
  postMsg(chat:Chat) {
    console.log(chat.hostname);
    console.log(this.userService.username); 
    return this.http.post(this.baseURL,chat);
  }
  putMsg(chat: Chat) {
      console.log("putttt 1");
      console.log(chat.hostname);
  
      return this.http.put(this.baseURL + `/${chat.hostname}`+`/${chat.message}`, chat);
    }
  
    getMessageList() {
      return this.http.get(this.baseURL);
    }

    deleteMessage(_id: string) {
      return this.http.delete(this.baseURL + `/${_id}`);
    }
}
