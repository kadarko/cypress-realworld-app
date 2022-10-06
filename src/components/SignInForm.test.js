import {render, screen} from "@testing-library/react";
import SignInForm from "./SignInForm";

test('login button active', () => {
    render(<SignInForm username={{ id : "5"}} password={{ id : "5"}}/>)

    expect(screen.getByRole('button', {name: /SIGN IN/i})).toBeEnabled();
});