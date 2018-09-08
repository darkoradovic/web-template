import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  

  constructor() { }

  createDb() {
    const users = [
      { id: 11, firstname: 'Thomas', lastname: 'Doe', email: 'thomas@test.com', password: 'thomas' },
      { id: 12, firstname: 'John', lastname: 'Doe', email: 'john@test.com', password: 'john'  }
    ];
    return {users};
  }

  getToken(user){
    return 'this is a token';
    
  }
  


  post(reqInfo: RequestInfo){
    if(reqInfo.id === 'Login'){
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
          const users = reqInfo.collection.find(user =>{
           return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
          });
          let responseBody = {};

          if(users){
            responseBody = {
              id: users.id,
              firstname: users.firstname,
              lastname: users.lastname,
              email: users.email,
              token: this.getToken(users)
            };
          }

          const options: ResponseOptions = responseBody ?
          {
            body: dataEncapsulation ? { responseBody } : responseBody,
            status: 200
          } :
          {
            body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
            status: 404
          };
  
          options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
          options.headers = reqInfo.headers;
          options.url = reqInfo.url;
          return options;


      });
    }else if(reqInfo.id ===  'Signup'){
      reqInfo.id = null;
      console.log('from sighup')
    }
  }


}
