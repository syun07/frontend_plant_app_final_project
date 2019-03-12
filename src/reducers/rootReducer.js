import { combineReducers } from 'redux';
import plantReducer from './plantReducer'
import whichPageReducer from './whichPageReducer'

export default combineReducers({
	plantReducer, whichPageReducer
});
