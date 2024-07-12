import { useState } from "react";
import { useDataStore, type Output } from "./useDataStore";

type Action = "append" | "replace";

function checkIfElementExists(arr: Output, element: Output[number]) {
	return arr.some((v) => v.id === element.id);
}

function getRandomElement(arr: Output) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

async function fetchData() {
	const res = await fetch("/data.json");
	const data: Output = await res.json();
	localStorage.setItem("data", JSON.stringify(data));

	return data;
}

export function useDataActions() {
	const [isLoaded, setIsLoaded] = useState(false);
	const { option, output, setOutput } = useDataStore();

	async function getData(action: Action) {
		if (!option) {
			throw new Error("Nie wybrano opcji!");
		}

		const storedData = localStorage.getItem("data");
		const data: Output = storedData
			? JSON.parse(storedData)
			: await fetchData();

		// First option
		if (option === "first") {
			const result = data[0];

			if (action === "append" && checkIfElementExists(output, result)) {
				throw new Error("Ten element już istnieje!");
			}

			return result;
		}

		// Second option
		if (option === "second") {
			const result = data[1];

			if (action === "append" && checkIfElementExists(output, result)) {
				throw new Error("Ten element już istnieje!");
			}

			return result;
		}

		// Random option
		const randomData = [...data];
		let result = getRandomElement(randomData);

		while (action === "append" && checkIfElementExists(output, result)) {
			const index = randomData.indexOf(result);
			randomData.splice(index, 1);

			if (!randomData.length) {
				throw new Error("Wszystkie elementy już istnieją!");
			}

			result = getRandomElement(randomData);
		}

		return result;
	}

	async function onAppend() {
		setIsLoaded(true);

		try {
			const data = await getData("append");

			const newOutput = [...output, data];
			const sortedOutput = newOutput.sort((a, b) => {
				if (a.text < b.text) {
					return -1;
				}
				if (a.text > b.text) {
					return 1;
				}
				return 0;
			});

			setOutput(sortedOutput);
		} catch (e: unknown) {
			const error = e as Error;
			alert(error.message);
		}

		setIsLoaded(false);
	}

	async function onReplace() {
		setIsLoaded(true);

		try {
			const data = await getData("replace");

			setOutput([data]);
		} catch (e: unknown) {
			const error = e as Error;
			alert(error.message);
		}

		setIsLoaded(false);
	}

	return { isLoaded, onAppend, onReplace };
}
