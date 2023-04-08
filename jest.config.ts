
const config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.css$": "jest-transform-css",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|png|svg)$": "identity-obj-proxy",
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleDirectories: [
        'node_modules',
    ],
    setupFilesAfterEnv: [
        "<rootDir>/src/jest.setup.ts"
    ]
}

export default config