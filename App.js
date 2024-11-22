import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DimensionExample = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Ervi Lidya Wati</Text>

      {/* Dua kotak di sisi kiri dan kanan */}
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    textAlign: 'center', // Pastikan teks berada di tengah
    marginBottom: 30, // Jarak antara teks dan kotak
  },
  row: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    alignItems: 'center', // Kotak sejajar secara vertikal
    width: '80%', // Lebar baris agar kotak tidak menempel di tepi layar
  },
  box1: {
    backgroundColor: '#F08080', // Warna kotak 1 (bebas)
    width: 100, // Lebar 100
    height: 100, // Tinggi 100
  },
  box2: {
    backgroundColor: '#87CEEB', // Warna kotak 2 (bebas)
    width: 100, // Lebar 100
    height: 100, // Tinggi 100
  },
});

export default DimensionExample;
