const comment =
	'This is a code playground\nWe run languages like typescript, javascript,java ,  c++, c and python';

const dataJava = `class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}
`;

export const LANGUAGES = {
	javascript: {
		ext: '.js',
		initialContent: `/*${comment}*/`,
	},
	python: {
		ext: '.py',
		initialContent: `'''${comment}'''`,
	},
	typescript: {
		ext: '.ts',
		initialContent: `/*${comment}*/`,
	},
	c: {
		ext: '.c',
		initialContent: `/*${comment}*/`,
	},
	cpp: {
		ext: '.cpp',
		initialContent: `/*${comment}*/`,
	},
	java: {
		ext: '.java',
		initialContent: `/*${comment}*/\n${dataJava}`,
	},
};

export const DEFAULT_THEME = 'blackboard';
export const EXTENSIONS = Object.values(LANGUAGES).map((l) => l.ext);
