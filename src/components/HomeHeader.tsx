import React from 'react';
import { Colors, CommonStyles, FONTS, IMAGES, normalize } from '_styles';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.instagramText}>Instagram</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert('like')}
        >
          <Image
            source={IMAGES.like}
            style={CommonStyles.marginH_16}
            tintColor={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert('Go to message')}
        >
          <Image
            source={IMAGES.message}
            style={CommonStyles.marginH_16}
            tintColor={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instagramText: {
    fontSize: normalize(20),
    color: Colors.white,
    fontFamily: FONTS.POPPINS_SEMI_BOLD_ITALIC,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
