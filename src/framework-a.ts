import { someCoreFunction } from "./core";

export const someAdapterFunction = () => {
    const coreContent = someCoreFunction();

    return `adapter: ${coreContent}`;
}