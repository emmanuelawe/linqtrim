import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "@/components/LoginForm";
import { login } from "@/app/(authentication)/login/actions";
import { useSearchParams } from "next/navigation";
import userEvent from "@testing-library/user-event";

// Replace the real implementations with mock versions
jest.mock("@/app/(authentication)/login/actions");
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("LoginForm Component", () => {
  it("should render login form and handle submit", async () => {
    // Mock useSearchParams to return a mock searchParams object
    const mockSearchParams = {
      get: jest.fn().mockReturnValue("Invalid login"),
    };
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    render(<LoginForm />);

    // Fill in the email and password fields
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });

    // Submit the form using userEvent
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));

    // Check if the signup function was called with correct arguments
    expect(login).toHaveBeenCalled();
    const formData = (login as jest.Mock).mock.calls[0][0] as FormData;
    expect(formData.get("email")).toBe("test@example.com");
    expect(formData.get("password")).toBe("password");
  });
});
