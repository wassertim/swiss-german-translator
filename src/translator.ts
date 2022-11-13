import { levenshteinEditDistance } from "../deps.ts"
import { parseDictionary } from "./parser.ts"

interface ClosestMatch {
	key: string
	value: string
	distance: number
}

function getDictionaryFromFile (
	filename: string,
	sourceLanguage = "de",
): string[][] {
	const decoder = new TextDecoder("utf-8")
	const text = decoder.decode(Deno.readFileSync(filename))
	const dictionary = parseDictionary(text, sourceLanguage === "de")

	return dictionary
}

function closestMatch (word: string, dictionary: string[][]): ClosestMatch[] {
	const closestMatches: ClosestMatch[] = []
	let closestDistance = 5
	dictionary.forEach((entry) => {
		const [key, value] = entry

		const distance = levenshteinEditDistance(word, key)
		if (distance < closestDistance) {
			closestDistance = distance
			closestMatches.push({ key, value, distance })
			closestMatches.sort((a, b) => a.distance - b.distance)
		}
	})
	return closestMatches
}

function translate (word: string, sourceLanguage = "de") {
	const dictionary = getDictionaryFromFile("bern-german.txt", sourceLanguage)
	const translation = closestMatch(word.trim(), dictionary)

	return translation
}

export { getDictionaryFromFile, translate }
