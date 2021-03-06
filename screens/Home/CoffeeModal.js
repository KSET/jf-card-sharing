import React from 'react';
import { PropTypes } from 'prop-types';
import NumericInput from 'react-native-numeric-input';
import { Button, List, ListItem, Text } from 'native-base';
import Toast from 'react-native-root-toast';
import BaseModal from '../BaseModal';
import SlackService from '../../services/SlackService';

export default class CoffeeModal extends BaseModal {

  constructor(props) {
    super(props);
    this.state = {
      espresso: 0,
      macchiato: 0,
      isVisible: this.props.isVisible,
    };
    this.slack = new SlackService();
    this.requestCoffeeAction.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.isVisible !== this.state.isVisible) {
      this.setState({ isVisible: props.isVisible });
    }
  }

  requestCoffeeAction() {
    this.slack.requestCoffee({
      Espresso: this.state.espresso,
      Macchiato: this.state.macchiato,
    }).then(() => {
      this.setState({ isVisible: false, espresso: 0, macchiato: 0 });
      Toast.show('Your coffee is on it\'s way!', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }).catch((err) => {
      console.log('err', err);
      this.setState({ isVisible: false });
      Toast.show(err, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    });
  }

  canOrder = () => (this.state.espresso + this.state.macchiato) <= 0

  render() {
    return (
      <BaseModal isVisible={this.state.isVisible} onClose={this.props.onClose}>
        <Text>Please select coffee you prefer:</Text>
        <List style={{ width: '100%' }}>
          <ListItem
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: 0,
              paddingRight: 0,
            }}
          >
            <Text>Espresso</Text>
            <NumericInput
              value={this.state.espresso}
              onChange={espresso => this.setState({ espresso })}
              iconSize={25}
              totalHeight={50}
              step={1}
              editable={false}
              minValue={0}
              maxValue={5}
              valueType="integer"
              textColor="black"
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor="#191938"
              leftButtonBackgroundColor="#191938"
            />
          </ListItem>
          <ListItem
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: 0,
              paddingRight: 0,
            }}
          >
            <Text>Macchiato</Text>
            <NumericInput
              value={this.state.macchiato}
              onChange={macchiato => this.setState({ macchiato })}
              iconSize={25}
              totalHeight={50}
              step={1}
              minValue={0}
              maxValue={5}
              editable={false}
              valueType="integer"
              textColor="black"
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor="#191938"
              leftButtonBackgroundColor="#191938"
            />
          </ListItem>
        </List>
        <Button
          disabled={this.canOrder()}
          title="Request coffee"
          onPress={() => this.requestCoffeeAction()} block
        >
          <Text>Request coffee</Text>
        </Button>
      </BaseModal>
    );
  }
}

CoffeeModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
