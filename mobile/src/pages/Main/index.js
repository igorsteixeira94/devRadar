import React, {useEffect, useState} from 'react';

import MapView, {Marker, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PermissionsAndroid, Image, StyleSheet, View, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../services/api';

const App = ({navigation}) => {
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function location() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              const {latitude, longitude} = position.coords;
              setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              });
            },
            (error) => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true},
          );
        } else {
          throw Error('Acess diend');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    location();
  }, []);

  async function loadDevs() {
    const {latitude, longitude} = currentRegion;
    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      },
    });
    setDevs(response.data);
    console.log(response.data);
  }

  function handleRegion(region) {
    console.log(region);
    setCurrentRegion(region);
  }
  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegion}
        initialRegion={currentRegion}
        style={{flex: 1}}>
        {devs.map((dev) => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0],
            }}>
            <Image
              style={styles.avatar}
              source={{
                uri: dev.avatar_url,
              }}
            />
            <Callout
              onPress={() => {
                navigation.navigate('Profile', {
                  github_username: dev.github_username,
                });
              }}>
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <Text style={styles.devTechs}>{dev.techs.join('')}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.searchForm}>
        <TextInput
          placeholder="Buscar Devs por tecnologia"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          style={styles.searchInput}
          value={techs}
          onChangeText={setTechs}
        />
        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <Icon name="my-location" size={30} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: '#fff',
  },
  callout: {
    width: 200,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
  searchForm: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  loadButton: {
    marginLeft: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default App;
