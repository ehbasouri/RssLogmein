import {RESET_GENERAL_PROPS, UPDATE_GENERAL_PROPS} from '../../consts';

export interface PayloadProps {
  key: string;
  value: any;
}

export const updateGeneralProps = (payload: PayloadProps | PayloadProps[]) => {
  return {
    type: UPDATE_GENERAL_PROPS,
    payload,
  };
};
export const resetGeneralProps = () => {
  return {
    type: RESET_GENERAL_PROPS,
  };
};
