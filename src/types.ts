export interface ModalEdit {
    id: number | undefined;
    open: boolean;
}

export interface Task {
  id: number;
  task: string;
  created: string;
  completed: boolean;
}