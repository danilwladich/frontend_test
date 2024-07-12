import { useSettingsStore } from "../../../hooks/useSettingsStore";
import { Chevron } from "../../common/Chevron";

export function Settings() {
	const { showHeaderInfo, setShowHeaderInfo } = useSettingsStore();

	function onReset() {
		localStorage.clear();
		window.location.reload();
	}

	return (
		<div className="settings">
			<button className="settings__button" onClick={onReset}>
				<Chevron className="settings__button_icon" />
				<span>zresetuj ustawienia</span>
			</button>
			<button
				className="settings__button"
				onClick={() => setShowHeaderInfo(!showHeaderInfo)}
			>
				<Chevron className="settings__button_icon" />

				{showHeaderInfo ? (
					<span>ukryj dane osobowe</span>
				) : (
					<span>pokaż dane osobowe</span>
				)}
			</button>
		</div>
	);
}
