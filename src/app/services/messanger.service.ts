import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  
  private subject$: BehaviorSubject<any>;
   
  constructor() {
    this.subject$ =  new BehaviorSubject<any>(null);
   }

  /**
   * name
   */
  public sendMessage(productId):void {
    this.subject$.next(productId);
    
  }

  /**
   * name
   */
  public getMessage(): Observable<any> {
    return this.subject$.asObservable();    
  }
}
