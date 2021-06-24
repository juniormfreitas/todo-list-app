import { LIST_ACTION } from '../utils/constants';
import { ActionType } from '../utils/types'

const listReducer = (state = {}, action: ActionType) => {
  switch (action.type) {
    case LIST_ACTION.FETCH_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
