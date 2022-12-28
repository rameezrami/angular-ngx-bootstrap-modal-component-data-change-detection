import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModalService } from '../services/common-modal.service';
@Component({
  selector: 'example-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  modalDataSub$: Subscription = Subscription.EMPTY;

  title = 'Default Comments Title';
  comments: any = [];
  constructor(private commonModalService: CommonModalService) {}

  ngOnInit() {
    this.listenData();
  }
  ngOnDestroy() {
    this.modalDataSub$.unsubscribe();
  }

  private listenData() {
    this.modalDataSub$ = this.commonModalService.modalData$.subscribe(
      (data: any) => {
        console.log('MODAL DATA:', data);
        if (data) {
          this.title = data.title;
          const comments = data.comments ?? [];
          this.comments = comments;
        }
      }
    );
  }

  closeModal() {
    this.commonModalService.closeModal();
  }

  changeModalData() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const comments = [...Array(randomNumber).keys()].map((item, ind) => {
      return {
        comment: ` Changed primary alert comment - ${randomNumber}${ind + 1}`,
      };
    });
    const changedState = {
      title: 'Changed Comments Title',
      comments,
    };
    this.commonModalService.setModalData(changedState);
  }
}
