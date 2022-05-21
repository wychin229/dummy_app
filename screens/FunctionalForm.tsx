import { useEffect, useState } from "react";

const FunctionalForm = () => {
	const [name, setName] = useState('A');
	const [counter, setCounter] = useState(0);

	const updateName = (event: any) => {
		setName(event.target.value)
	}

	useEffect(() => {
		setCounter(counter + 1);
		setName('B');

		return () => {
			alert('functional component will unmount')
		}
	}, []);

	useEffect(() => {
		console.log('component.did.update', counter.toString())
	}, [name, counter])

	return (
		<>
			<h1>Functional Form</h1>
			<text>{counter}</text>

			<input 
				name={'First Name'} 
				value={name} 
				onChange={updateName} 
			/>

			<button>Click me!</button>
		</>
	)
}

export default FunctionalForm;