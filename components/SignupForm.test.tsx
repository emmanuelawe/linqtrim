import { fireEvent, render, screen } from "@testing-library/react";
import { signup } from "@/app/(authentication)/login/actions";
import { useSearchParams } from "next/navigation";
import userEvent from "@testing-library/user-event";
import SignupForm from "@/components/SignupForm";

// Replace the real implementations with mock versions
jest.mock("@/app/(authentication)/login/actions");
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("SignupForm Component", () => {
  it("should render signup form and handle submit", async () => {
    // Mock useSearchParams to return a mock searchParams object
    const mockSearchParams = {
      get: jest.fn().mockReturnValue("Invalid details"),
    };
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    render(<SignupForm />);

    // Fill in the email and password fields
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });

    // Submit the form using userEvent
    await userEvent.click(
      screen.getByRole("button", { name: /create account/i })
    );

    // Check if the signup function was called with correct arguments
    expect(signup).toHaveBeenCalled();
    const formData = (signup as jest.Mock).mock.calls[0][0] as FormData;
    expect(formData.get("email")).toBe("test@example.com");
    expect(formData.get("password")).toBe("password");
  });
});
