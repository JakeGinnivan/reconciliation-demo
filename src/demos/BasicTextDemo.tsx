import * as React from 'react'

interface Props {}
interface State {
    name: string
    deepStructure: boolean
}

export default class BasicTextDemo extends React.Component<Props, State> {
    state: State = { name: '', deepStructure: false }
    textChanged = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.currentTarget.value })

    render() {
        const content = (
            <div>
                <h3>Basic text reconciliation</h3>
                <div>Editing 'Hi' then typing into the textbox will show that static
                     text is not updated as part of the reconciliation process</div>

                <div>Hi {this.state.name}</div>
                <div>Name: <input type="text" onChange={this.textChanged} value={this.state.name} /></div>
                <input
                    type="button"
                    onClick={() => { this.setState({ deepStructure: !this.state.deepStructure}) }}
                    value="Change DOM structure"
                />
            </div>
        )

        if (this.state.deepStructure) {
            return (
                <div>
                    {content}
                </div>
            )
        }
        return content
    }
}