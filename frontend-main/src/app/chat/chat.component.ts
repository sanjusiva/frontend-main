import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../shared/chat.service';
import { UserService } from '../shared/user.service';
import { Chat } from '../shared/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 message:Array<any>=[];
 hostname:string='';
 display:boolean=false;
  constructor(public chatService:ChatService,public userService:UserService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshMessageList();
    console.log(this.display);
    this.hostname=this.userService.username;
  }

onSubmit(chatForm:NgForm){
      console.log(chatForm.value);
      this.display=true;
      console.log(chatForm.value.message);
      console.log(chatForm.value.hostname);     
      //this.message.push(this.message)
      //console.log(this.message[0]);
      this.chatService.putMsg(chatForm.value).subscribe((res)=>{
        console.log(res);
        
      })
      this.message=[];
    this.refreshMessageList();
      
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.chatService.selectedChat= {
      _id:"",
     hostname:"",
      message : []
    }
  }
  refreshMessageList() {
    this.chatService.getMessageList().subscribe((res) => {
      this.chatService.chats = res as Chat[];
    });
  }

}
