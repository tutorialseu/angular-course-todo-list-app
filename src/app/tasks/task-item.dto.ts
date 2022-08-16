export class TaskItem {

  constructor(public title: string) {
  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
