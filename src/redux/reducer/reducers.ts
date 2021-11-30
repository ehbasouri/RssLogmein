import {Feed} from 'feed';
import {UPDATE_GENERAL_PROPS, RESET_GENERAL_PROPS} from '../../consts';
import {PayloadProps} from '../actions';

interface INITIAL_STATES_GENERAL_PROPS {
  favouriteFeeds: Feed[];
}

interface ActionProps {
  type: string;
  payload: PayloadProps;
}

const INITIAL_STATES_GENERAL: INITIAL_STATES_GENERAL_PROPS = {
  favouriteFeeds: [],
};

export function general_reducer(
  state = INITIAL_STATES_GENERAL,
  action: ActionProps,
): INITIAL_STATES_GENERAL_PROPS {
  switch (action.type) {
    case UPDATE_GENERAL_PROPS:
      var newProps = {};
      if (Array.isArray(action.payload)) {
        for (var prop of action.payload) {
          newProps = {...newProps, [prop.key]: prop.value};
        }
        return {...state, ...newProps};
      }
      return {...state, [action.payload.key]: action.payload.value};
    case RESET_GENERAL_PROPS:
      return INITIAL_STATES_GENERAL;
    default:
      return state;
  }
}
