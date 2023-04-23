import { combineReducers, configureStore} from '@reduxjs/toolkit';

// call reducers
import  questionReducer  from './question_red';
import  resultReducer  from './result_red';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

// create store with reducer
export default configureStore({reducer : rootReducer})