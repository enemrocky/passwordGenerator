import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
	const [range, setRange] = useState(6);
	const [withNumbers, setWithNumbers] = useState(false);
	const [specialCharacters, setSpecialCharacters] = useState(false);

	const [password, setPassword] = useState("");
	console.log(password);

	const generatePassword = (num) => {
		let generatedPassword = "";

		let items = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		const numbers = "1234567890";
		const specialCharacters = "~!@#$%^&*()_-+=?/][|,><";
		for (let i = 0; i <= range; i++) {
			generatedPassword += items[i];
		}

		setPassword(generatedPassword);
	};

	return (
		<>
			<div>
				<form className="bg-slate-600 p-4 text-white">
					<h1>Password Generator</h1>
					<div className="flex w-full my-6">
						<input
							className="py-2 w-5/6 rounded-s-xl outline-none"
							type="text"
							readOnly
						/>
						<button className="bg-green-500 py-2 -ml-1 rounded-s-none rounded-xl">
							copy
						</button>
					</div>
					<div className="inputs flex gap-4 align-middle">
						<div>
							<input
								type="range"
								name="length"
								id="length"
								defaultValue={6}
								min={6}
								max={14}
								onChange={(e) => {
									setRange(e.target.value);
								}}
							/>
							<label htmlFor="length">Length: {range}</label>
						</div>
						<div>
							<input
								type="checkbox"
								name="numbers"
								id="numbers"
								onChange={() => {
									generatePassword();
									setWithNumbers(true);
								}}
							/>
							<label htmlFor="numbers">Numbers</label>
						</div>
						<div>
							<input
								type="checkbox"
								name="char"
								id="char"
								onChange={() => {
									setSpecialCharacters(true);
								}}
							/>
							<label htmlFor="char">Characters</label>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
