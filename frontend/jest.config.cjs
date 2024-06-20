module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
		"^.+\\.css$": "jest-transform-css",
	},
	moduleNameMapper: {
		"^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
	},
	setupFilesAfterEnv: ["./jest.setup.tsx"],
};
