import { create } from "zustand";

export const options = ["first", "second", "random"] as const;

type Option = (typeof options)[number] | null;
export type Output = {
	id: number;
	text: string;
}[];

interface DataStore {
	option: Option;
	setOption: (option: Option) => void;
	output: Output;
	setOutput: (output: Output) => void;
}

const initialOption = localStorage.getItem("option") as
	| (typeof options)[number]
	| null;

const storedOutput = localStorage.getItem("output");
const initialOutput = storedOutput ? (JSON.parse(storedOutput) as Output) : [];

export const useDataStore = create<DataStore>((set) => ({
	option: initialOption,
	setOption: (option) => {
		localStorage.setItem("option", option || "null");
		set({ option });
	},
	output: initialOutput,
	setOutput: (output) => {
		localStorage.setItem("output", JSON.stringify(output));
		set({ output });
	},
}));
