module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest", // Para procesar archivos .tsx con ts-jest
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        '<rootDir>/jest.setup.ts'
    ]
};
