import { POST } from "@/app/api/update-description/route";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// Replace the real implementations with mock versions
jest.mock("@/utils/supabase/server", () => ({
  createClient: jest.fn(() => ({
    auth: {
      getUser: jest
        .fn()
        .mockResolvedValue({ data: { user: { id: "user-id" } }, error: null }),
    },
    from: jest.fn(() => ({
      update: jest.fn(() => ({
        eq: jest.fn(() => ({
          eq: jest.fn(() => ({
            single: jest
              .fn()
              .mockResolvedValue({
                data: { id: "url-id", description: "new description" },
                error: null,
              }),
          })),
        })),
      })),
    })),
  })),
}));

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data) => ({
      ok: true,
      json: async () => data,
    })),
  },
}));

describe("Update Description API", () => {
  it("should update the description of a URL", async () => {
    // Mock data and dependencies
    const mockRequest = {
      json: jest
        .fn()
        .mockResolvedValue({ id: "url-id", description: "New Description" }),
    } as unknown as Request;

    const response = await POST(mockRequest);
    const json = await response.json();

    expect(json.data).toBeDefined();
  });
});
