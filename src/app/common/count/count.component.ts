import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { APIService } from '../../api.service';
import { response } from 'express';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent implements OnInit, OnChanges, OnDestroy {
  @Input() count: number = 0;
  @Input() appTitle: string = '';
  @Output() incrementChange = new EventEmitter();
  @Output() decrementChange = new EventEmitter();
  @Output() hideClick = new EventEmitter();

  data: any;

  constructor(private apiService: APIService) {}

  increment() {
    this.incrementChange.emit();
  }

  decrement() {
    this.decrementChange.emit();
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  deleteUser(userId: number): void {
    this.apiService.deleteData(userId).subscribe(
      (response) => {
        alert('User deleted successfully!');
        this.data = this.data.filter((user:any) => user.id !== userId);
      },
      (error) => {
        alert('Failed to delete the user. Please try again.');
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('count changes', changes);
  }

  onButtonHide() {
    this.hideClick.emit();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  editUser(user: any): void {
    console.log('Editing user:', user);
  }
}
