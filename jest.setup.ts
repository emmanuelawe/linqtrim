// jest.setup.ts
import "@testing-library/jest-dom";

import { jest } from "@jest/globals";

// Explicitly type the global.fetch mock
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;
global.Headers = jest.fn() as unknown as typeof Headers;
global.Request = jest.fn() as unknown as typeof Request;
global.Response = jest.fn() as unknown as typeof Response;
