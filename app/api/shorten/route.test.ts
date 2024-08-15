import { POST } from "@/app/(api)/shorten/route";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { userAgent, NextResponse } from "next/server";
import QRCode from "qrcode";

// Mocking external dependencies
jest.mock("qrcode");
jest.mock("@/utils/supabase/server", () => ({
  createClient: jest.fn(() => ({
    auth: {
      getUser: jest.fn().mockResolvedValue({
        data: { user: { id: "user-id" } },
        error: null,
      }),
    },
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue({ data: {}, error: null }),
  })),
}));

jest.mock("next/headers", () => ({
  headers: jest.fn().mockReturnValue(new Map([["x-forwarded-for", "121.0.0.1"]])),
}));

jest.mock("next/server", () => ({
  ...jest.requireActual("next/server"),
  userAgent: jest.fn(() => ({
    os: { name: "Windows" },
  })),
  NextResponse: {
    json: jest.fn((data) => ({
      ok: true,
      json: async () => data,
    })),
  },
}));

describe("URL Shortener API", () => {
  it("should shorten a URL and generate a QR Code", async () => {
    // Mock request object with necessary data
    const mockRequest = {
      json: jest.fn().mockResolvedValue({
        originalUrl: "https://test.com",
        customUrl: "custom-id",
      }),
      url: "http://localhost:3000/api/shorten",
    } as unknown as Request;

    // Mock the QR code generation
    (QRCode.toDataURL as jest.Mock).mockResolvedValue("mock-qr-code-url");

    // Call the POST function with the mock request
    const response = await POST(mockRequest);
    const data = await response.json();

    // Assertions to validate the expected behavior
    expect(data.shortUrl).toBe("http://localhost:3000/custom-id");
    expect(data.qrCodeUrl).toBe("mock-qr-code-url");
    expect(QRCode.toDataURL).toHaveBeenCalledWith("http://localhost:3000/custom-id");
    expect(createClient).toHaveBeenCalled();
  });
});
