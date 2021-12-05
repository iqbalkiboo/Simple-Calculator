import * as actionTypes from '../actionTypes';
// import calculate from '../../utils/calculate';

const defaultState = {
    input: "",
    previousInput: "",
    invalidExpression: false
}

const calculatorReducer = (state = defaultState, action) => {
    const { input } = state;
    switch(action.type){
        case actionTypes.ADD_TO_INPUT:
            return {
                ...state,
                input: input + action.payload,
                previousInput: action.payload==="."? "." : "",
                invalidExpression: false
            }

        case actionTypes.HANDLE_EQUAL_TO:
            return {
                ...state,
                input: action.payload,
                previousInput: ""
            }

        case actionTypes.CLEAR_INPUT:
            return {
                ...state,
                input: "",
                previousInput: "",
                invalidExpression: false
            }

        case actionTypes.REMOVE_PREVIOUS_INPUT:
            let modifiedExpression = input.substring(0, input.length-1);
            return {
                ...state,
                input: modifiedExpression,
                previousInput: "",
                invalidExpression: false
            }

        case actionTypes.HANDLE_OPERATOR:
            const val = action.payload;
            return {
                ...state,
                input: input + val,
                previousInput: val,
                invalidExpression: false
            }

        case actionTypes.ERROR_OCCURRED:
            return {
                ...state,
                invalidExpression: true
            }

        default:
            return state;
    }
}

export default calculatorReducer;