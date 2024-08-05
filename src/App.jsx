import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const [range, setRange] = useState(6);
	const [withNumbers, setWithNumbers] = useState(false);
	const [specialCharacters, setSpecialCharacters] = useState(false);
	const [password, setPassword] = useState("");
	const passwordRef = useRef(null);
	const generatePassword = useCallback(() => {
		let generatedPassword = "";
		let items = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (withNumbers) items += "1234567890";
		if (specialCharacters) items += "~!@#$%^&*()_-+=?/][|,><";
		for (let i = 1; i <= range; i++) {
			const itemsIndex = Math.floor(Math.random() * items.length + 1);
			generatedPassword += items.charAt(itemsIndex);
		}
		setPassword(generatedPassword);
	}, [range, withNumbers, specialCharacters]);

	useEffect(() => {
		generatePassword();
	}, [range, withNumbers, specialCharacters]);

	const copyPasswordToClipboard = () => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(password);
	};

	return (
		<>
			<form className="bg-slate-600 p-16 text-white">
				<h1>Password Generator</h1>
				<div className="flex w-full my-6">
					<input
						className="py-2 px-4 w-5/6 rounded-s-xl outline-none text-green-600"
						type="text"
						value={password}
						ref={passwordRef}
						readOnly
					/>
					<button
						className="bg-green-500 py-2 -ml-1 rounded-s-none rounded-xl shrink-0"
						onClick={copyPasswordToClipboard}>
						copy
					</button>
				</div>
				<div className="inputs flex gap-4 align-middle">
					<div>
						<input
							type="range"
							name="length"
							className="cursor-pointer"
							defaultValue={range}
							min={6}
							max={20}
							onChange={(e) => setRange(e.target.value)}
						/>
						<label htmlFor="length"> Length: {range}</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="numbers"
							defaultChecked={withNumbers}
							onChange={() => {
								setWithNumbers((prevState) => !prevState);
							}}
						/>
						<label htmlFor="numbers"> Numbers</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="char"
							defaultChecked={specialCharacters}
							onChange={() => {
								setSpecialCharacters((prevState) => !prevState);
							}}
						/>
						<label htmlFor="char"> Characters</label>
					</div>
				</div>
			</form>
		</>
	);
}

export default App;
