import React from "react"
import Counter from "../Counter"
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Header renders correctly with correct text",()=>{
    const component=render(<Counter></Counter>); 
    const headerEl=component.getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter");
})

test("Counter initialy renders with zero",()=>{
     const {getByTestId}=render(<Counter></Counter>);
     const counterEl=getByTestId("counter");

     expect(counterEl.textContent).toBe("0");
})

test("Input exists and initial value is one",()=>{
    const {getByTestId}=render(<Counter></Counter>);
    const inputEl=getByTestId("input");

    expect(inputEl.value).toBe("1");
})


test("Add button renders plus sign",()=>{
    const {getByTestId}=render(<Counter></Counter>);
    const addBtnEl=getByTestId("add-btn");
    expect(addBtnEl.textContent).toBe("+");
})

test("Subtract button renders minus sign",()=>{
    const {getByTestId}=render(<Counter></Counter>);
    const subtractBtnEl=getByTestId("subtract-btn");
    expect(subtractBtnEl.textContent).toBe("-");
})

test("Change value of input works correctly",()=>{
    const {getByTestId}=render(<Counter></Counter>);
    const inputEl=getByTestId("input");
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");

})

test("Clicking on plus button adds one to counter",()=>{
    const {getByTestId}=render(<Counter></Counter>)
    const addBtn=getByTestId("add-btn");
    const counterEl=getByTestId("counter");
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("1"); 
})


test("Clicking on minus button removes one from counter",()=>{
    const {getByTestId}=render(<Counter></Counter>)
    const subtractBtn=getByTestId("subtract-btn");
    const counterEl=getByTestId("counter");
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-1"); 
})


test("Changing input value then clicking on add btn works correctly",()=>{
    const {getByTestId}=render(<Counter></Counter>)
    const addBtn=getByTestId("add-btn");
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");
    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    })
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("5"); 
})


test("Changing input value then clicking on subtract btn works correctly",()=>{
    const {getByTestId}=render(<Counter></Counter>)
    const subtractBtn=getByTestId("subtract-btn");
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");
    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    })
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-5"); 
})


test("Adding and then subtracting leads to the correct number",()=>{
    const {getByTestId}=render(<Counter></Counter>)
    const subtractBtn=getByTestId("subtract-btn");
    const addBtn=getByTestId("add-btn");
    const counterEl=getByTestId("counter");
    const inputEl=getByTestId("input");

    fireEvent.change(inputEl,{
        target:{
           value:5
        }
    })
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subtractBtn);
    fireEvent.change(inputEl,{
        target:{
           value:2
        }
    })
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("3");
})


