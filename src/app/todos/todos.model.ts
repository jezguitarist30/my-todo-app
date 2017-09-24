class Filter {
    keyword?: string;
}

export class TodoModel extends Filter {
    public Id: number;
    public Title: string;
    public Tasks: Array<TaskModel>;
}

export class TaskModel {
    public Id: number;
    public Task: string;
    public Done: boolean;
}
