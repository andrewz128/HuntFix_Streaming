import React, {Component} from 'react';
import {TermOfUse} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class TermOfUseScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header:null
  })

  render() {
    const {navigation} = this.props;
    return <TermOfUse navigation={navigation} />
  }

}

export default TermOfUseScreen;
