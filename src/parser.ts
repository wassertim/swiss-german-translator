function parseDictionary (text: string, rightSideAsKey = false) {
	const lines = text.split("\n").filter((line) => line.length > 0)

	if (!rightSideAsKey) {
		return lines.map(getKeyAndValue)
	}

	return lines
		.map(getKeyAndValue)
		.map((entry) => entry.reverse())
}

function getKeyAndValue (line: string) {
	const match = line.match(/^(.+?)(?: |)=/)
	let key = ""
	if (match) {
		key = match[1]
	}
	const value = line.substring(key.length + 2).trim()
	return [key, value]
}

export { parseDictionary }
