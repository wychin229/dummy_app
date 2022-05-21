import { ChangeEventHandler, Component, FormEvent } from "react";

interface ClassFormState {
	name: string;
	counter: number;
}

interface ClassFormProps {}

class ClassForm extends Component<ClassFormProps, ClassFormState> {
	constructor(props: ClassFormProps) {
		super(props)
		this.state = {
			name: 'A',
			counter: 0,
		}
		this.setName = this.setName.bind(this);
		this.updateCounter = this.updateCounter.bind(this);
	}

	private setName(event: any) {
		this.setState({ name: event.target.value });
	}

	private updateCounter() {
		const newCounter = this.state.counter + 1;
		this.setState({ counter: newCounter })
	}

	public componentDidMount() {
		this.updateCounter();
	}

	public componentDidUpdate() {
		console.log('component did update', this.state.counter, this.state.name)
	}

	public componentWillUnmount() {
		alert('component will unmount')
	}

	render() {
		const { name, counter } = this.state;
		return (
			<>
				<h1>Class Form</h1>
				<text>{counter}</text>
				<input 
					name={'First Name'} 
					value={name} 
					onChange={this.setName} 
				/>

				<button>Click me!</button>
			</>
		)
	}
}

export default ClassForm;