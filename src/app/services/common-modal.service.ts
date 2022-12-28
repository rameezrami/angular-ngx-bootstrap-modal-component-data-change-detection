import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonModalService {
  modalHiddenSub$?: Subscription;
  modalData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  bsModalRef?: BsModalRef;

  constructor(private bsModalService: BsModalService) {}

  launchModal(component: any, options: any = {}) {
    this.modalHiddenSub$?.unsubscribe();

    this.bsModalRef = this.bsModalService.show(component, options);
    this.modalHiddenSub$ = this.bsModalRef.onHidden?.subscribe(() => {
      this.setModalData(null);
    });
  }
  closeModal() {
    this.bsModalRef?.hide();
  }

  setModalData(data: any) {
    console.log('SET DATA:', data);
    this.modalData$.next(data);
  }
}
