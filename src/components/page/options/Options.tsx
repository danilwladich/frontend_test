import "./Options.css";
import { useDataStore, options } from "../../../hooks/useDataStore";

const optionsText = {
	first: "Opcja pierwsza",
	second: "Opcja druga",
	random: "Opcja losowa",
};

export function Option() {
	const { option: selectedOption, setOption } = useDataStore();

	return (
		<div className="main__block">
			<h3 className="main__block_title">BLOK PIERWSZY</h3>

			<div className="main__block_content">
				<div className="options">
					{options.map((option) => (
						<label key={option} className="options__item">
							<input
								type="radio"
								name="option"
								value={option}
								checked={option === selectedOption}
								className="options__item_input"
								onChange={() => setOption(option)}
							/>

							<div className="options__item_circle" />

							<span className="options__item_label">{optionsText[option]}</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
}
