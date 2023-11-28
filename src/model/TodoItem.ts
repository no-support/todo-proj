class TodoItem {
    public id: number; // private, public, protected
    public task: string;
    public complete: boolean = false;

    constructor(id: number, task: string, complete: boolean) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails(): void {
        console.log(
            `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
        );
    }
}

export  default TodoItem;