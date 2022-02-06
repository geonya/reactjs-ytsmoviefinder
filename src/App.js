import { useEffect, useState } from "react";
function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [coinPrice, setCoinPrice] = useState(0);
	const [usd, setUsd] = useState(0);
	const handleSelect = (event) => setCoinPrice(event.target.value);
	const handleInput = (event) => setUsd(event.target.value);

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
				setCoinPrice(json[0].quotes.USD.price);
			});
	}, []);

	return (
		<div>
			<h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<div>
					<select onChange={handleSelect}>
						{coins.map((coin) => (
							<option key={coin.id} value={coin.quotes.USD.price}>
								{coin.name}({coin.symbol}){" "}
								{coin.quotes.USD.price} USD
							</option>
						))}
					</select>
					<input onChange={handleInput} type="number" value={usd} />
					<h3>{usd / coinPrice} Coins</h3>
				</div>
			)}
		</div>
	);
}

export default App;
