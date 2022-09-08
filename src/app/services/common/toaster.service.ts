import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ToastType } from 'src/app/model/toast';
import { Toast } from 'src/app/model/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  subject: BehaviorSubject<Toast>;
  toast$: Observable<Toast>;

  constructor() {
    this.subject = new BehaviorSubject<Toast>(null!);
    this.toast$ = this.subject
      .asObservable()
      .pipe(filter((toast) => toast !== null));
  }

  show(type: ToastType, title: string, delay: number) {
    this.subject.next({ type, title: title, delay: delay });
  }
}
