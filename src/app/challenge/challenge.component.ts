import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserdataService } from '../services/userdata.service';
import { SocketIoService } from '../services/socket-io.service';

export interface PeriodicElement {
  id:number;
  name: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  // { position: 1, name: 'Cherry',points:200 },
  // { position: 2, name: 'Varma',points:189  },
  // { position: 3, name: 'Elon Musk',points:150 },
  // { position: 4, name: 'Player X',points:143 },
  // { position: 5, name: 'Darling',points:120  },
  // { position: 6, name: 'Babai',points:110 },
  // { position: 7, name: 'Iam me',points:90 },
  // { position: 8, name: 'Hello world',points:75  },
  // { position: 9, name: 'Programmmer',points:60 },
  // { position: 10, name: 'Classy coder',points:50 },
];


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  public name:any;
  public challengeOn=false;
  public user:any
  public socket_Data:any;
  constructor(private userDataService:UserdataService,private socketService:SocketIoService) { }

  ngOnInit() {
   console.log(this.user);
   
   
  }
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  assignUser(num:number)
  {
    if(num==1)
    {
      this.user={'name':'sarath',id:1}

    }
    else if(num==2)
    {
      this.user={'name':'charan',id:2}
    }
    else{
      this.user={'name':'varma',id:'2'}
    }
    this.socketService.setupSocketConnection(this.user);
    this.socketService.getOnlineUsers().subscribe((data) => {
      console.log(data)
      ELEMENT_DATA = data;
      console.log("element data",ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    });
    this.socketService.receiveChallenge().subscribe((dat)=>
    {
      console.log(`notification ${JSON.stringify(dat)}`);
    })

  }
  challengeFriend(per:any)
  {
    console.log("per",per)
    this.socketService.getSocketData(per.socket_id);
  }
    
}
