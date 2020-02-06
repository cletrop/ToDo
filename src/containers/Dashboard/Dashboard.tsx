import * as React from 'react';
// import { Todo } from '../../models/Todo';

// export interface IDashboardProps extends Todo {
//     userName: string;
// }

export interface IDashboardProps {
    message: string;
}

class Dashboard extends React.Component<IDashboardProps> {

    render() {

        // const description = this.props.userName;

        // TODO
        // Aqui deberíamos poner el otro componente de lista de todos

        return (
            <div>
                {this.props.message}

                {/* <TodoItemsList /> */}
            </div>
        );
    }
}

export default Dashboard;
