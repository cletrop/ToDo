import * as React from 'react';
import { Todo } from '../../models/Todo';

interface IProps {

}

interface IState {
    // todoItems: Todo[];
    todoItems: Array<Todo>;
}

class TodoList extends React.Component<{}, IState> {
    render() {
        return(
            <div>
                TodoList
            </div>
        )
    }
}

export default TodoList;