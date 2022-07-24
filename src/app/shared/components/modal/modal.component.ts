import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  isVisible = false;
  data: any;
  @Output() dataOutput: EventEmitter<any>;

  toggleModal(data?: any) {
    this.isVisible = !this.isVisible;
    this.data = data;
    this.opened();
  }

  opened() {
    this.dataOutput.emit(this.data);
  }

  constructor() {
    this.dataOutput = new EventEmitter();
  }

  ngOnInit(): void {}
}
