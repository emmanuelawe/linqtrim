import { render, screen, fireEvent } from "@testing-library/react";
import InputURL from "@/components/InputURL";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
import Image from "next/image";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));



// Mock the next/image component to avoid dealing with image optimization in tests
jest.mock("next/image", () => {
    const MockedImage = (props: any) => <img {...props} />;
    MockedImage.displayName = "Image"; // Add display name here
    return MockedImage;
  });

describe("InputURL Component", () => {
  it("should redirect to login if user is not authenticated", async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<InputURL />);

    fireEvent.change(screen.getByPlaceholderText(/paste long url/i), {
      target: { value: "https://example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/yourname/i), {
      target: { value: "custom-id" },
    });
    
    // Submit the form using userEvent
    await userEvent.click(screen.getByRole("button", { name: /shorten!/i }));

    expect(pushMock).toHaveBeenCalledWith("/login");
  });

  it("should shorten URL and display shortened URL and QR code when user is authenticated", async () => {
    const pushMock = jest.fn();
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          shortUrl: "http://short.url/custom-id",
          qrCodeUrl: "http://example.com/qr-code.png",
        }),
    });

    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    global.fetch = fetchMock;

    render(<InputURL />);

    fireEvent.change(screen.getByPlaceholderText(/paste long url/i), {
      target: { value: "https://example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/unique id/i), {
      target: { value: "custom-id" },
    });

    // Submit the form using userEvent
    await userEvent.click(screen.getByRole("button", { name: /shorten!/i }));

    // Check if fetch was called with the correct arguments
    expect(fetchMock).toHaveBeenCalledWith("/api/shorten", {
      method: "POST",
      body: JSON.stringify({
        originalUrl: "https://example.com",
        customUrl: "custom-id",
      }),
    });

    // Check if shortened URL and QR code are displayed
    expect(await screen.findByText(/shortened url:/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/qr code/i)).toHaveAttribute(
      "src",
      "http://example.com/qr-code.png"
    );
  });
});
