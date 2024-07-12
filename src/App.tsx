import "./App.css";
import { Header } from "./components/layout/header/Header";
import { Main } from "./components/page/main/Main";
import { Footer } from "./components/layout/footer/Footer";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<Main />

			<Footer />
		</div>
	);
}

export default App;
