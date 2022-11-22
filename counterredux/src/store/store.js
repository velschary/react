import { createStore } from 'redux';
import counterReducer from "../reducer/counterRecuder";

export const store = createStore(counterReducer)