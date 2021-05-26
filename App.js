import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import logo from './assets/logo.png';


export default function App() {
  
  const nameData = [
    {
      firstName: "Jaime",
      lastName: "No Known Last Name",
      fullName: "Jaime Lynn",
      firstEntry: 0,
      lastEntry: 4,
    },
    {
      firstName: "Rindi",
      lastName: "Trainer",
      fullName: "Rindi Trainer",
      firstEntry: 5,
      lastEntry: 6,
    },
    {
      firstName: "Rebecca Stewart",
      lastName: "Trainer",
      fullName: "Rebecca Stewart",
      firstEntry: 7,
      lastEntry: 7,
    },
    {
      fullName: "Sonia Pierce",
      firstEntry: 8,
      lastEntry: 8,
    },
    {
      fullName: "Aubrey Conklin",
      firstEntry: 9,
      lastEntry: 9,
    },
    {
      fullName: "Kelly Simmons",
      firstEntry: 10,
      lastEntry: 10,
    },
    {
      fullName: "Hayley Earwood",
      firstEntry: 11,
      lastEntry: 15,
    },
    {
      fullName: "@Cat.Reese.5",
      firstEntry: 16,
      lastEntry: 26,
    },
    {
      fullName: "@Itsyayacreations",
      firstEntry: 27,
      lastEntry: 29,
    },
    {
      fullName: "@Sportsmama03",
      firstEntry: 30,
      lastEntry: 30,
    },
    {
      fullName: "@Patel2013",
      firstEntry: 31,
      lastEntry: 35,
    },
    {
      fullName: "Michelle Bisarick",
      firstEntry: 36,
      lastEntry: 37,
    },
    {
      fullName: "Ashley Collier",
      firstEntry: 38,
      lastEntry: 46,
    },
    {
      fullName: "@Lashedbyliz_",
      firstEntry: 47,
      lastEntry: 51,
    },
    {
      fullName: "Maria De La Cruz",
      firstEntry: 52,
      lastEntry: 52,
    },
    {
      fullName: "Rita Clark Sands",
      firstEntry: 53,
      lastEntry: 53,
    },
    {
      fullName: "@AnimalNerd1",
      firstEntry: 54,
      lastEntry: 54,
    },
    {
      fullName: "Liz Pena",
      firstEntry: 55,
      lastEntry: 55,
    },
    {
      fullName: "Tiffany Contento Gaines",
      firstEntry: 56,
      lastEntry: 57,
    },
    {
      fullName: "Shannon Stephenson-Fears",
      firstEntry: 58,
      lastEntry: 60,
    },
    {
      fullName: "Kaycee Giammarco",
      firstEntry: 61,
      lastEntry: 62,
    },
    {
      fullName: "Zach Smith",
      firstEntry: 63,
      lastEntry: 63,
    },
    {
      fullName: "Jennifer Edwards",
      firstEntry: 64,
      lastEntry: 65,
    },
    {
      fullName: "@jg75218",
      firstEntry: 66,
      lastEntry: 66,
    },
    {
      fullName: "Deanna Fielder",
      firstEntry: 67,
      lastEntry: 69,
    },
    {
      fullName: "@nbrianard",
      firstEntry: 70,
      lastEntry: 70,
    },
    {
      fullName: "@nixunderfire",
      firstEntry: 71,
      lastEntry: 74,
    },
    {
      fullName: "@sunnyshey",
      firstEntry: 75,
      lastEntry: 76,
    },
    {
      fullName: "Will Applewhite",
      firstEntry: 77,
      lastEntry: 79,
    },
  ];

  let pickName = () => {
    let randomNumber = Math.floor(Math.random() * nameData[nameData.length-1].lastEntry);
    let finalName = "";
    nameData.forEach(element => {
      if(randomNumber <= element.lastEntry && randomNumber >= element.firstEntry) {
        finalName = element.fullName;
      }
    });
    return finalName;
  }

  const handlePress = () => {
    let winnerName = pickName();
    Alert.alert('The prize goes to: ' + winnerName + '!!!');
  }
  
  return (
    <View style={styles.container}>
      
      <Image  
        style={{width: 250, height: 300, marginBottom: 10}}
        source={require("./assets/logo.png")}
      />
      <Text style={styles.secondText}>First cookie giveaway!</Text>
      <Button title="PICK THE WINNER"  onPress={handlePress}>
        
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondText: {
    marginBottom: 100,
  },
});
