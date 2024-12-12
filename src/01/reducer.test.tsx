import {reducer, StateType} from "./Reducer";

test('reducer should change value to opposite valuue', () => {

    const state: StateType = {
        collapsed: false
    }

    const endState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(endState.collapsed).toBe(true)
})

test('reducer error', () => {

    const state: StateType = {
        collapsed: false
    }

    expect( () => {
        reducer(state, {type: "FAKE TYPE"})
    } ).toThrowError()

})