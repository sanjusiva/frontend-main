import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from './chat.model'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
repHost:string='';
repMsg:string='';
newRep:any;
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
      console.log(chat.reply);
      this.newRep=chat.reply;
      this.setNewRepMsg=this.newRep;
      console.log(chat.message);   
      console.log(chat.hostname);
      console.log("Service"+this.getRepHost);
      console.log("Service"+this.getRepMsg);
      
  if(chat.reply){
    console.log("reply eruku");
    
    return this.http.put(this.baseURL + `/${chat.hostname}`+`/${this.getRepMsg}`+`/${chat.reply}`+`/${this.getRepHost}`, chat);

  }
  else{
    console.log("reply illa");
      return this.http.put(this.baseURL + `/${chat.hostname}`+`/${chat.message}`, chat);
  }
    }
  
    getMessageList() {
      return this.http.get(this.baseURL);
    }
    getRepMessageList(chat:Chat,repmsg:string) {
      console.log(this.getRepMsg,repmsg);
      return this.http.get(this.baseURL+ `/${this.getRepMsg}`+`/${repmsg}`);
      
    }

    deleteMessage(_id: string) {
      return this.http.delete(this.baseURL + `/${_id}`);
    }

    set setRepHost(val:string){
      this.repHost=val;
      console.log("show username"+this.repHost);
      console.log("show name"+this.repHost);
    }
    get getRepHost(){
      console.log("get "+this.repHost);
      
      return this.repHost;
    }
    set setRepMsg(val:string){
      this.repMsg=val;
      console.log("show username"+this.repMsg);
      console.log("show name"+this.repMsg);
    }
    get getRepMsg(){
      console.log("get "+this.repMsg);
      
      return this.repMsg;
    }
    set setNewRepMsg(val:any){
      this.newRep=val;
      console.log("show username"+this.newRep);
      console.log("show name"+this.newRep);
    }
    get getNewRepMsg(){
      console.log("get "+this.newRep);
      
      return this.newRep;
    }
}
