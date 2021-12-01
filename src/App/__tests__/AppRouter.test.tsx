import {render} from '@testing-library/react-native';
import React from 'react';
import {AppStack} from '../AppRouter';
import {NavigationContainer} from '@react-navigation/native';

describe('App router tests', () => {
  it('test', async () => {
    const component = (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );

    const {findByText} = render(component);
    const header = await findByText('Feed List');
    expect(header).toBeTruthy();
  });
});
