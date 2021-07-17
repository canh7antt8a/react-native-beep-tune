import { NativeModules } from 'react-native';

type SoundTuneType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SoundTune } = NativeModules;

export default SoundTune as SoundTuneType;
