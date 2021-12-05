import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import calculatorReducer from './reducers/calculatorReducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const middlewareBasedOnEnv = [thunk]

const enhancers = composeEnhancers(
    applyMiddleware(...middlewareBasedOnEnv),
);

const store = createStore(
    rootReducer,
    enhancers,
)

export const getExpressionToBeCalculated = (state) => {
    return state.calculatorReducer.expression
}

export const getComputedValue = (state) => {
    return state.calculatorReducer.computedValueTotal
}


export default store;