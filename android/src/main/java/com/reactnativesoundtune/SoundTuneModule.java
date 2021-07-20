package com.reactnativesoundtune;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.reactnativesoundtune.tune.instance.PerfectTune;
@ReactModule(name = SoundTuneModule.NAME)
public class SoundTuneModule extends ReactContextBaseJavaModule {
    public static final String NAME = "SoundTune";
    public PerfectTune perfectTune = new PerfectTune();

    public SoundTuneModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void multiply(int a, int b, Promise promise) {
        promise.resolve(a * b);
    }
    @ReactMethod
    public void playTune(Promise promise){
        perfectTune.playTune();
        promise.resolve(true);
    }
    @ReactMethod
    public void setTuneFreq(double tuneFreq, Promise promise) {
        perfectTune.setTuneFreq(tuneFreq);
        promise.resolve(true);
    }
    @ReactMethod
    public void stopTune(Promise promise){
        perfectTune.stopTune();
        promise.resolve(true);
    }

    public static native int nativeMultiply(int a, int b);
}
