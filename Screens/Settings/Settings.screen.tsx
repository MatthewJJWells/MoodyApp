import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SettingsProps } from '../../Interfaces/SettingInterface/Settings.interface';
import { loginConnector } from '../../Utilities/Login.utlilities';
import styles from './Settings.style';

const Settings: React.FC<SettingsProps> = ({ logout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => logout()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default loginConnector(Settings);
