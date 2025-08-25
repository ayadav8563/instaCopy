import { Colors, normalize, vw } from '_styles';
import React, { memo, useCallback, useState, useMemo } from 'react';
import { 
  ActivityIndicator, 
  ImageProps, 
  Image as RNImage, 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

type StoryProfileProps = FastImageProps & {
  fallbackSource?: ImageProps['source'];
  showLoadingIndicator?: boolean;
  borderWidth?: number;
  gap?: number;
  profileStyle?: ImageProps;
  storyType?: 'reel' | 'story';
  seen?: boolean;
  removeBorder?: boolean;
};

const DEFAULT_BORDER_COLORS = ['#FF9FF3', '#FECA57', '#FF6B6B', '#48DBFB'];
const NO_COLORS = [Colors.black, Colors.black, Colors.black, Colors.black];
const REEL_SEEN_COLORS = [Colors.lightGray, Colors.lightGray, Colors.lightGray];
const REEL_UNSEEN_COLORS = [Colors.lightGreen, Colors.lightGreen, Colors.lightGreen];
const STORY_COLORS = ['#FBAA47', '#D91A46', '#A60F93'];

const StoryProfile = ({
  source,
  fallbackSource,
  profileStyle,
  resizeMode = 'cover',
  showLoadingIndicator = true,
  borderWidth = 4,
  gap = 2,
  seen = false,
  storyType = 'story',
  ...props
}: StoryProfileProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadEnd = useCallback(() => setIsLoading(false), []);
  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const gradientColors = useMemo(() => {
    if(props.removeBorder) {
      return NO_COLORS;
    }
    if (storyType === 'reel') {
      return seen ? REEL_SEEN_COLORS : REEL_UNSEEN_COLORS;
    }
    return STORY_COLORS;
  }, [storyType, seen]);

  const containerStyle = useMemo(() => ({
    width: vw(90),
    height: vw(90),
    borderRadius: '50%',
  }), []);

  const imageStyle = useMemo(() => [
    styles.image,
    profileStyle,
  ], [profileStyle]);

  const renderContent = useCallback(() => (
    <>
      <FastImage
        source={source}
        style={imageStyle}
        resizeMode={resizeMode}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        {...props}
      />
      {isLoading && showLoadingIndicator && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="small" color="#999" />
        </View>
      )}
    </>
  ), [source, imageStyle, resizeMode, handleLoadEnd, handleError, isLoading, showLoadingIndicator, props]);

  const renderFallback = useCallback(() => (
    <RNImage
      source={fallbackSource}
      style={imageStyle}
      resizeMode={resizeMode}
      {...props}
    />
  ), [fallbackSource, imageStyle, resizeMode, props]);

  if (hasError && fallbackSource) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={DEFAULT_BORDER_COLORS}
          style={containerStyle}
          angle={45}
          useAngle
        >
          {renderFallback()}
        </LinearGradient>
      </View>
    );
  }

  return (
    <View>
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={[containerStyle, {justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}]}
        angle={45}
        useAngle
      >
        <View style={styles.borderInnerView}>
          {renderContent()}
        </View>
      </LinearGradient>
    </View>
    {props.removeBorder ? (
            <View style={styles.uploadView}><Text style={styles.uploadText}>+</Text></View>
          ) : null}
    </View>
  );
};

export default memo(StoryProfile);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw(6),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  borderInnerView: {
    width: '95%',
    height: '95%',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.black,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  uploadView: {
    height: vw(30),
    width: vw(30),
    borderRadius: vw(15),
    backgroundColor: Colors.white,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  uploadText: {
    color: Colors.black,
    fontSize: normalize(25),
  },
});