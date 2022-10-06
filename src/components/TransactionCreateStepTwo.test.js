import { render, screen } from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"


test('screen appearing', () => {
    render(<TransactionCreateStepTwo sender={{id : "5"}} receiver={{ id : "5"}}/>);

    screen.debug();
});

test("pay button enabled", () => {
    render(<TransactionCreateStepTwo sender={{id : "6"}} receiver={{id : "6"}}/>);

    expect(screen.getByRole('button', {name: /pay/i})).toBeEnabled();
});