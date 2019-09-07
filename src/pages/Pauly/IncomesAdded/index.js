import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import paulyincomesAdded from'../../assets/paulyincomesAdded.png';
import { withNavigation } from 'react-navigation';

const IncomesAdded = ({ navigation }) => (
  <PageBackground source={paulyincomesAdded}>
    <ActionButton onPress={() => navigation.navigate('ProfileNoGoals')} />
  </PageBackground>
);

export default withNavigation(IncomesAdded);
