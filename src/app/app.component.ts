import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommentsComponent } from './comments/comments.component';
import { CommonModalService } from './services/common-modal.service';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  bsModalRef?: BsModalRef;

  constructor(private commonModalService: CommonModalService) {}

  launchModal(setData: boolean) {
    //settting initial data
    if (setData) {
      const comments = [...Array(10).keys()].map((item, ind) => {
        return { comment: ` A simple primary alert comment - ${ind + 1}` };
      });
      const initialState = {
        title: 'Initial Comments Title',
        comments,
      };
      this.commonModalService.setModalData(initialState);
    }

    //launching Modal
    const options = {};
    this.commonModalService.launchModal(CommentsComponent, options);
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
