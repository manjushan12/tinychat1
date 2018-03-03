import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ChatReducer from './reducer_chat'
import SelectedUserReducer from './reducer_selected_user'
import HandleReducer from './reducer_handle'

const rootReducer = combineReducers({
    handle: HandleReducer,
    chat: ChatReducer,
    selectedUser: SelectedUserReducer,
    form: formReducer
});

export default rootReducer;
