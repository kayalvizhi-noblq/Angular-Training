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
  isModalOpen: boolean = false;
  user = { id: null, name: '', username:'', email: '', phone: '', website:'', company:''};

  constructor(private apiService: APIService) {
    const storedData = localStorage.getItem('users');
    if (storedData) {
      this.data = JSON.parse(storedData);
    }
  }

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

  openModal() {
    this.isModalOpen = true;
    this.user = { id: null, name: '', username: '', email: '', phone: '', website: '', company: '' };
  }

  closeModal() {
    this.isModalOpen = false; 
  }

  saveUser() {
    if (this.user.name && this.user.username && this.user.email && this.user.phone && this.user.company) {
      this.user.id = this.data.length > 0 ? this.data[this.data.length - 1].id + 1 : 1;
      this.data.push(this.user);
      localStorage.setItem('users', JSON.stringify(this.data));
      this.closeModal();
    } else {
      alert('Please fill in all required fields');
    }
    this.resetForm()
  }

  resetForm() {
    this.user = { id:null, name: '', username:'', email: '', phone: '', website:'', company:''}; 
  }
}
