import { Component, OnInit } from '@angular/core';
import { AppApiService } from 'src/app/core/services/app-api.service'
import { Emails } from 'src/app/interfaces/emails';


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

  emails:any

  dateedit : string = "";
  date: string = ""
 

  constructor(
    private appApiService: AppApiService,
  ) { 
  }

  ngOnInit(): void {
    this.appApiService.getAllEmails().subscribe(
      (data)=>{
      this.emails = data
    }
    )
  }

  pesquisar() {
    if (this.date === ''){
      this.appApiService.getAllEmails()
    } else {
      this.appApiService.getByDate(this.date).subscribe((resp: Emails[]) => {
        this.emails = resp
      })
    }
    console.log(this.date + "-----------")
  }

  }
