import * as radixColors from '@radix-ui/colors';

export default {
	transparent: 'transparent',
	current: 'currentColor',
	white: 'white',
	black: 'black',
	...transformRadixColors()
};

function transformRadixColors() {
	const colors = {};

	for (const [radixColorName, radixColor] of Object.entries(radixColors)) {
		if (radixColorName.endsWith('A')) {
			continue;
		}

		const colorName = radixColorName.toLowerCase();

		const color = {};
		for (const [radixScale, value] of Object.entries(radixColor)) {
			const regexResult = radixScale.match(/\d+$/);
			if (!regexResult || !regexResult[0]) {
				continue;
			}
			const scale = regexResult[0];
			color[scale] = value;
		}

		colors[colorName] = color;
	}

	return colors;
}
