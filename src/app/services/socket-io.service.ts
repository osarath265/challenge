import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  socket;
public notifications:String[];

  constructor() { }
  setupSocketConnection(userobj) {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('user-data', userobj)



  }


  getSocketData(socket_data) {
    this.socket.emit('challenge-send', socket_data)
  }


  public receiveChallenge() {
    return Observable.create((observer) => {
      this.socket.on('challenge-receive', (data) => {
        observer.next(data);
        this.notifications.push(data.name);
      });
    });
  }


  public getOnlineUsers = () => {
    return Observable.create((observer) => {
      this.socket.on('online-users', (message) => {
        observer.next(message);
      });
    });
  }

}

