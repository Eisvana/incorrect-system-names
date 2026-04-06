// Recognize all CSS files as module imports. See https://www.typescriptlang.org/tsconfig/#noUncheckedSideEffectImports
declare module '*.css' {}

// oxlint-disable-next-line unicorn/require-module-specifiers
export {}; // this needs to be here so the file is recognised as a module (oxc complains otherwise)
