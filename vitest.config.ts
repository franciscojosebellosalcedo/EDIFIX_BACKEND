import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ["./tests/setup.ts"],
        testTimeout: 10000,
        reporters: ["verbose"],
        include: [
            "tests/*.spec.ts"
        ]
    }
})