import { assertEquals } from "../test-deps.ts"
import { translate } from "./translator.ts"

Deno.test("should traslate a word from swiss german to german", () => {
	const word = "Grüessech"
	const translation = translate(word, "de-CH")
	assertEquals(
		translation[0].value,
		'Gruss (Grüss Euch = Höflichkeitsform oder Mehrzahl; "Grüezi" ist für einen Berner fast eine Beleidigung, "Grüzi" ganz sicher.)²³',
	)
})
