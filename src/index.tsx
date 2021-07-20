import { NativeModules } from 'react-native';

type SoundTuneType = {
  multiply(a: number, b: number): Promise<number>;
  playTune(): Promise<boolean>;
  setTuneFreq(tuneFreq: number): Promise<boolean>;
  stopTune(): Promise<boolean>;
};

const { SoundTune } = NativeModules;

export default SoundTune as SoundTuneType;
