export function Chevron({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			className={className}
		>
			<path d="m18 15-6-6-6 6" />
		</svg>
	);
}
