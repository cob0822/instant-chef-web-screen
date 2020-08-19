import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(readonly user: UserService) { }
}
