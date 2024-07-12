import "./Actions.css";

import { useDataActions } from "../../../hooks/useDataActions";

export function Actions() {
	const { isLoaded, onAppend, onReplace } = useDataActions();

	return (
		<div className="main__block">
			<h3 className="main__block_title right">BLOK DRUGI</h3>

			<div className="main__block_content">
				<div className="actions">
					<button
						className="actions__button"
						disabled={isLoaded}
						onClick={onReplace}
					>
						zastąp
					</button>
					<button
						className="actions__button"
						disabled={isLoaded}
						onClick={onAppend}
					>
						doklej
					</button>
				</div>
			</div>
		</div>
	);
}
