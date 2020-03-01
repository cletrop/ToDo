import { Todo } from '../models/Todo';


const todo1: Todo = {
    id: 1,
    completed: false,
    name: "Primera tarea"
}

const todo2: Todo = {
    id: 2,
    completed: true,
    name: "Otra tarea"
}

export const TodoItemsArrayList: Todo[] =
    [todo1,
        todo2,
        { id: 3, completed: true, name: "Mi tercera tarea" }];


// export default TodoItemsArrayList;