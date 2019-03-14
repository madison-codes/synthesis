import * as React from "react";
import Fab from "../../components/atoms/Fab";

interface SettingsProps {}

interface SettingsState {}

export class Settings extends React.Component<SettingsProps, SettingsState> {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <Fab />
      </div>
    );
  }
}

export default Settings;
