// import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
// import React from 'react'
// import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'; 

// const MessagingPage = () => {
//     const navigation = useNavigation();
//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>

//     <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10, height: 50, paddingBottom: 10, paddingLeft: 12 }}>
//         <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'relative'}}>
//         <AntDesign name="arrowleft" size={24} color="black" />
//         </TouchableOpacity>
//       <Text style={{position: 'relative', fontSize: 16, fontWeight: 'bold'}}>MessagingPage</Text>
//     </View>
//     <ScrollView style={{flex: 1}} justifyContent='center' alignItems='center'>
//       <Text>Coming Soon...</Text>
//     </ScrollView>
//     </View>
//   )
// }

// export default MessagingPage
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const MessagingPage = () => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10, height: 50, paddingBottom: 10, paddingLeft: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'relative' }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ position: 'relative', fontSize: 16, fontWeight: 'bold' }}>MessagingPage</Text>
      </View>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MessagingPage;
