import * as React from "react";
import { Todo } from "../../models/Todo";
import { TodoItemsArrayList } from "../../data/TodosArrayList";

interface IProps {}

interface IState {
  todoItems: Array<Todo>;
  userName: string;
  password: number;
  telephone: string;
}

class TodoList extends React.Component<{}, IState> {
  // constructor(props: {}, state: IState) {
  //     super(props, state);

  //     this.state = {
  //         todoItems: TodoItemsArrayList
  //     }
  // }

  state: IState = {
    todoItems: TodoItemsArrayList,
    password: 1234,
    telephone: "123456",
    userName: "Jimmy",
  };

  render() {
    const { userName, password, todoItems } = this.state;
    const [firstTask, secondTask] = todoItems;

    console.log(`${userName} ${password}`);

    // console.log(firstTask);
    // console.log(segundo);

    return (
      <div>
        {firstTask.name}
        {secondTask.name}
        {/* <TodoItem item={firstTask} /> */}
      </div>
    );
  }
}

export default TodoList;
