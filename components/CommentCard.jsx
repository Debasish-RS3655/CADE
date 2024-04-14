import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

const CommentCard = () => {
  return (
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{
          flex: 1,
          width: "100%",
          backgroundColor: "white",
          flexDirection: 'column',

        }}>
            <View style={{flexDirection: 'row',padding: 10,
          gap: 10, backgroundColor: 'white'}}>
            <Image source={{uri: 'https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}} style={{height: 45, width: 45, borderRadius: 30}}/>
            <View style={{flexDirection: 'column', rowGap: 7}}>
                <View style={{flexDirection: 'row', gap: 7, alignItems: 'center'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Julia_Thakuria</Text>
                    <Text style={{fontSize: 12}}>1hr ago</Text>
                </View>
                <View style={{width: '91%'}}>
                    <Text style={{textAlign: 'auto', fontSize: 13}}>An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.An artist in every sense! </Text>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>267</Text>
                    </View>
                    <TouchableOpacity><Text style={{fontSize: 13, fontWeight: 'bold'}}>Reply</Text></TouchableOpacity>
                </View>
            </View>
        </View>
            <View style={{flexDirection: 'row',padding: 10,
          gap: 10, backgroundColor: 'white'}}>
            <Image source={{uri: 'https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}} style={{height: 45, width: 45, borderRadius: 30}}/>
            <View style={{flexDirection: 'column', rowGap: 7}}>
                <View style={{flexDirection: 'row', gap: 7, alignItems: 'center'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Julia_Thakuria</Text>
                    <Text style={{fontSize: 12}}>1hr ago</Text>
                </View>
                <View style={{width: '91%'}}>
                    <Text style={{textAlign: 'auto', fontSize: 13}}>An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.An artist in every sense! </Text>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>267</Text>
                    </View>
                    <TouchableOpacity><Text style={{fontSize: 13, fontWeight: 'bold'}}>Reply</Text></TouchableOpacity>
                </View>
            </View>
        </View>
            <View style={{flexDirection: 'row',padding: 10,
          gap: 10, backgroundColor: 'white'}}>
            <Image source={{uri: 'https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}} style={{height: 45, width: 45, borderRadius: 30}}/>
            <View style={{flexDirection: 'column', rowGap: 7}}>
                <View style={{flexDirection: 'row', gap: 7, alignItems: 'center'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Julia_Thakuria</Text>
                    <Text style={{fontSize: 12}}>1hr ago</Text>
                </View>
                <View style={{width: '91%'}}>
                    <Text style={{textAlign: 'auto', fontSize: 13}}>An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.An artist in every sense! </Text>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>267</Text>
                    </View>
                    <TouchableOpacity><Text style={{fontSize: 13, fontWeight: 'bold'}}>Reply</Text></TouchableOpacity>
                </View>
            </View>
        </View>


{/* Reply Comment */}
        <View style={{flexDirection: 'row',padding: 10,
          gap: 10, backgroundColor: 'white', marginLeft: 45}}>
            <Image source={{uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'}} style={{height: 35, width: 35, borderRadius: 30}}/>
            <View style={{flexDirection: 'column', rowGap: 5}}>
                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Text style={{fontSize: 13, fontWeight: 'bold'}}>Alex_kalita</Text>
                    <Text style={{fontSize: 12}}>10min ago</Text>
                </View>
                <View style={{width: '91%'}}>
                    <Text style={{textAlign: 'auto', fontSize: 12}}>An artist in every sense! An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>24</Text>
                    </View>
                    <TouchableOpacity><Text style={{fontSize: 13, fontWeight: 'bold'}}>Reply</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{flexDirection: 'row',padding: 10,
          gap: 10, backgroundColor: 'white'}}>
            <Image source={{uri: 'https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'}} style={{height: 45, width: 45, borderRadius: 30}}/>
            <View style={{flexDirection: 'column', rowGap: 7}}>
                <View style={{flexDirection: 'row', gap: 7, alignItems: 'center'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Julia_Thakuria</Text>
                    <Text style={{fontSize: 12}}>1hr ago</Text>
                </View>
                <View style={{width: '91%'}}>
                    <Text style={{textAlign: 'auto', fontSize: 13}}>An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.An artist in every sense! </Text>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>267</Text>
                    </View>
                    <TouchableOpacity><Text style={{fontSize: 13, fontWeight: 'bold'}}>Reply</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        {/* Reply Comment */}
        <View style={{flexDirection: 'row',padding: 10,
          gap: 10, backgroundColor: 'white', marginLeft: 45}}>
            <Image source={{uri: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'}} style={{height: 35, width: 35, borderRadius: 30}}/>
            <View style={{flexDirection: 'column', rowGap: 5}}>
                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Text style={{fontSize: 13, fontWeight: 'bold'}}>Alex_kalita</Text>
                    <Text style={{fontSize: 12}}>10min ago</Text>
                </View>
                <View style={{width: '91%'}}>
                    <Text style={{textAlign: 'auto', fontSize: 12}}>An artist in every sense! An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.An artist in every sense! Absolutely love his work.</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>24</Text>
                    </View>
                    <TouchableOpacity><Text style={{fontSize: 13, fontWeight: 'bold'}}>Reply</Text></TouchableOpacity>
                </View>
            </View>
        </View>

        </View>
      </View>
  )
}

export default CommentCard