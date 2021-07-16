import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app.reducer';

const appReducer = combineReducers({
  app,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
