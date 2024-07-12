import "./Main.css";
import { Actions } from "../actions/Actions";
import { Option } from "../options/Options";
import { Output } from "../output/Output";

export function Main() {
	return (
		<main className="main">
			<div className="container">
				<div className="main__title">
					<h1 className="main__title_content">Nagłówek H1</h1>
				</div>

				<div className="main__blocks">
					<Option />

					<Actions />

					<Output />
				</div>
			</div>
		</main>
	);
}
