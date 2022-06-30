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
 reply:Object | undefined;
 hostname:string='';
 repMsg:string='';
 repHost:string='';
 newRep:string='';
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
      console.log(chatForm.value.reply);
      console.log("Rep host on submit"+this.chatService.getRepHost);
      this.chatService.setNewRepMsg=chatForm.value.reply;
      //this.message.push(this.message)
      //console.log(this.message[0]);
      this.chatService.putMsg(chatForm.value).subscribe((res)=>{
        console.log(res);      
      })
      this.chatService.getRepMessageList(chatForm.value,chatForm.value.reply).subscribe((res)=>{
        // this.chatService.chats = res as Chat[];
        // console.log(this.chatService.chats);
        console.log(res);
        
        console.log(Object.values(res)[0]);
        
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
onReply(hostname:string,message:string){
this.repMsg=message;
this.repHost=hostname;
this.chatService.setRepHost=this.repHost;
this.chatService.setRepMsg=this.repMsg;
this.display=true;
console.log(this.repMsg);
console.log("repHost: "+this.repHost);

}
}
