import { Platform, Dimensions } from 'react-native';

import variable from './../variables/platform';

const deviceHeight = Dimensions.get('window').height;
export default (variables = variable) => {
  return {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
  };
};
