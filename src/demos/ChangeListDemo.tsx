import * as React from 'react'

interface TodoItem {
    done: boolean
    id: string
    task: string
}
interface Props {}
interface State {
    idSeed: number
    todoItems: TodoItem[]
    adding: boolean
    newTask: string
    includesKey: boolean
}

export default class ChangeListDemo extends React.Component<Props, State> {
    listDiv: HTMLDivElement

    state: State = {
        idSeed: 3,
        todoItems: [
            { task: 'Task 1', done: false, id: 'task1' },
            { task: 'Task 2', done: false, id: 'task2' },
            { task: 'Task 3', done: false, id: 'task3' },
        ],
        adding: false,
        newTask: '',
        includesKey: true
    }

    listDivRef = (ref: HTMLDivElement) => {
        this.listDiv = ref
    }

    insertTask = () => {
        const idSeed = this.state.idSeed + 1
        this.setState({
            idSeed,
            todoItems: [{
                task: 'React inserted task' + idSeed,
                id: 'reactid' + idSeed,
                done: false,
            },
            ...this.state.todoItems]
        })
    }

    insertTaskViaDom = () => {
        if (!this.listDiv) {
            return
        }

        const task = document.createElement('div')
        task.innerHTML = `
            <input type="checkbox" />
            Inserted Task
        `
        this.listDiv.insertBefore(task, this.listDiv.childNodes.item(2))
    }

    completeAll = () => {
        this.setState({
            todoItems: this.state.todoItems.map(i => ({ ...i, done: true }))
        })
    }

    toggleDone = (toToggle: number) => {
        this.setState((s: State) => ({
            todoItems: s.todoItems.map((todoItem, i) => {
                if (i === toToggle) {
                    return {
                        ...todoItem,
                        done: !todoItem.done
                    }
                }

                return todoItem
            })
        }))
    }

    render() {
        return (
            <div>
                <div ref={this.listDivRef}>
                    {this.state.todoItems.map((todoItem, i) => (
                        <div key={this.state.includesKey ? todoItem.id : undefined}>
                            <input
                                type="checkbox"
                                onChange={() => this.toggleDone(i)}
                                checked={todoItem.done}
                            />
                            {todoItem.task}
                        </div>
                    ))}
                </div>

                {this.state.adding
                    ? <div>
                        <input type="text" onChange={(e) => this.setState({ newTask: e.currentTarget.value })} />
                        <input
                            type="button"
                            value="create"
                            onClick={() => {
                                const idSeed = this.state.idSeed + 1
                                this.setState({
                                    adding: false,
                                    newTask: '',
                                    idSeed,
                                    todoItems: [
                                        ...this.state.todoItems,
                                        { id: 'task' + idSeed, task: this.state.newTask, done: false }
                                    ]
                                })
                            }}
                        />
                    </div>
                    : <input type="button" value="New Task" onClick={() => this.setState({ adding: true })} />}

                <div>
                    <h4>Actions</h4>
                    <div><input type="button" value="Insert task via DOM" onClick={this.insertTaskViaDom} /></div>
                    <div><input type="button" value="Insert task at start via React" onClick={this.insertTask} /></div>
                    <div><input type="button" value="Complete all" onClick={this.completeAll} /></div>
                </div>
            </div>
        )
    }
}