import "./Footer.css";
import { Settings } from "./Settings";
import { Chevron } from "../../common/Chevron";

export function Footer() {
	return (
		<>
			<footer className="footer">
				<Settings />

				<div className="container">
					<div className="footer__row">
						<div className="footer__logo">
							<div className="footer__logo_container">
								<p className="footer__logo_text">
									CSS
									<br />
									IS
									<br />
									AWESOME
								</p>

								<div className="footer__logo_border" />
							</div>
						</div>

						<div className="footer__info">
							<p className="footer__info_text">nabthat</p>
						</div>

						<div className="footer__settings">
							<label className="footer__settings_button">
								<input
									type="checkbox"
									value="settings"
									className="footer__settings_button_input"
								/>

								<span className="footer__settings_button_text">pokaż</span>

								<Chevron className="footer__settings_button_icon" />
							</label>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
