export class Task {
  id: number = 0;
  title: string = '';
  description: string = '';
  number: Date = new Date(Date.now());
  isComplete: boolean = false;
}
