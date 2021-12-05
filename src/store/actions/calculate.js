import * as math from 'mathjs';

export const addToExpression = (input) => {
    return {
        type: 'ADD_TO_INPUT',
        payload: input
    }
}

export const handleExpressionEqualTo = (input) => {
    return {
        type: 'HANDLE_EQUAL_TO',
        payload: input
    }
}

export const clearInputExpression = () => {
    return {
        type: 'CLEAR_INPUT',
    }
}

export const removePreviousInputExpression = () => {
    return {
        type: 'REMOVE_PREVIOUS_INPUT',
    }
}

export const handleOperator = (input) => {
    return {
        type: 'HANDLE_OPERATOR',
        payload: input
    }
}

export const defaultState = () => {
    return {
        type: 'DEFAULT_STATE'
    }
}

export const error = () => {
    return {
        type: 'ERROR_OCCURRED'
    }
}

export const handleAdditionOfInput = (val) => (dispatch, getState) => {
    try {
        let { input } = getState().calculator;
        if(val === "." && input.substr(input.length-1)==="."){
            dispatch(defaultState());
        } else {
            dispatch(addToExpression(val));
        }
    } catch (e) {
        dispatch(error());
    }
}

export const handleEqualTo = () => (dispatch, getState) => {
    try {
        let { input, previousInput } = getState().calculator;
        if(input.length>0){
            if(previousInput === ""){
                let computedValue = math.evaluate(input).toString();
                dispatch(handleExpressionEqualTo(computedValue))
            } else {
                dispatch(error())
            }
        } else {
            dispatch(defaultState())
        }
    } catch (e) {
        dispatch(error())
    }
}

export const handleOperatorInput = (val) => (dispatch, getState) => {
    try {
        let { input, previousInput } = getState().calculator;

        if(val === "-" && (previousInput === "" || previousInput === "*")){
            dispatch(handleOperator(val))
        } else if(input.length>0 && previousInput === ""){
            switch(val){
                case "x":
                    dispatch(handleOperator("*"))
                    break;
                default:
                    dispatch(handleOperator(val))
                    break;
            }
        } else {
            dispatch(defaultState())
        }
    }
    catch (e) {
        dispatch(error())
    }
}

