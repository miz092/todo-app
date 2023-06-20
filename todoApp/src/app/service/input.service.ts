import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://something:6969/xy';
  }

  async getAllTasks(): Promise<Task[]> {
    const data = await fetch(this.URL);
    return (await data.json()) ?? [];
  }

  async getTaskById(id: number): Promise<Task | undefined> {
    const data = await fetch(`${this.URL}/${id}`);
    return (await data.json()) ?? {};
  }

  async createTask(task: Task): Promise<Task> {
    const response = await fetch(this.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    return response.json();
  }
}
