type PluralizeMap = {
	one: string;
	many: string;
};

export const pluralize = (map: PluralizeMap) => (count: number) => {
	return count === 1 ? map.one : map.many;
};
