import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import LoginPage, { LoginForm } from "./LoginForm";

it("Form can be submited & input field is modifiable", () => {

    const mockSubmit = jest.fn();
    const { debug, queryByTestId } = render(<LoginForm handleSubmit={mockSubmit}/>);

    fireEvent.change(queryByTestId("input"), { target: { value: 'Heba Saad' } }); // invoke handleChange
    fireEvent.submit(queryByTestId("form"));
//tobe
    expect(mockSubmit).toHaveBeenCalled(); // Test if handleSubmit has been called 
    expect(mockSubmit.mock.calls).toEqual([[{name: 'Heba Saad'}]]); // Test if handleChange works

});