import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMsg } from '../shared/chat-msg.model';
import { ChatMsgService } from '../shared/chat-msg.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.scss']
})
export class ChatMsgComponent implements OnInit {
  message:Array<any>=[];
  reply:Object | undefined;
  hostname:string='';
  repMsg:string='';
  repHost:string='';
  display:boolean=false;
  chatMsgs:any;
  constructor(private chatMsgService:ChatMsgService,private userService:UserService) { }

  ngOnInit(): void {
    this.refreshMessageList();
    this.hostname=this.userService.username;
  }
  onSubmit(chatForm:NgForm){
    this.chatMsgService.postMsg(chatForm.value).subscribe((res)=>{
      console.log(res);      
    })
  }
  
  refreshMessageList() {
    this.chatMsgService.getMessage().subscribe((res) => {
      // console.log(Object.values(res));
      console.log(res);
      
      // console.log(Object.values(res)[1]);
      
      this.chatMsgs = res as ChatMsg[];
    });
  }
  

}
