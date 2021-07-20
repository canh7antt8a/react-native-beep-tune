import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SoundTune from 'react-native-sound-tune';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    SoundTune.multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TouchableOpacity
        onPress={() => {
          SoundTune.setTuneFreq(20000).then((data) => {
            console.log(data);
          });
        }}
      >
         <Text>SET FREQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          SoundTune.playTune().then((data) => {
            console.log(data);
          });
        }}
      >
        <Text>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          SoundTune.stopTune().then((data) => {
            console.log(data);
          });
        }}
      >
        <Text>STOP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
