import "./Output.css";
import { useDataStore } from "../../../hooks/useDataStore";

export function Output() {
	const { output } = useDataStore();

	return (
		<div className="main__block big">
			<h3 className="main__block_title center">
				BLOK Z DŁUGą nazwą która sama się przytnie ...
			</h3>

			<div className="main__block_content">
				<div className="output">
					{output.map((o) => (
						<span key={o.id}>{o.text}</span>
					))}
				</div>
			</div>
		</div>
	);
}
