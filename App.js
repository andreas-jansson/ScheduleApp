import { StatusBar } from 'expo-status-bar';
import React, { useState, compontent, TextInput, Webview } from 'react';
import { Button, StyleSheet, Text, View , scrollView,  RefreshControl, SafeAreaView, popOverView } from 'react-native';
import HTMLView from 'react-native-htmlview';
//import HTMLView from 'react-native-render-html';



export default function App() {
  const [outputText, setOutputText] = useState('Uppdaterad');

  console.log('Trying...');


 const getData = () => {
  var param = 'startDatum=idag&slutDatum=2021-04-2&sprak=SV&sokMedAND=true&forklaringar=true&resurser=p.H%C3%B6gskoleingenj%C3%B6r+-+Datateknik+%C3%A5k+2-';
  return fetch('https://kronox.oru.se/setup/jsp/Schema.jsp?' + param)
    .then((response) => response.text())
    .then((data) => {
      console.log('getting data');
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};





var xdd = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Schema</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style-schema.css') }}">
</head>

<body>
<div class="header">
<h1>Vecka 7</h1>
</div>
<table>
    <tbody>
<tr class="row-1"><td></td><td>Tis</td><td>9 Feb</td><td>08:15-10:00</td><td>Datorteknik</td><td>tsv</td><td>Digital undervisning</td><td></td><td>Datorteknik Blackboard Collaborate</td><td>2020-11-09</td></tr><tr class="row-0"><td></td><td></td><td></td><td>10:15-12:00</td><td>Artificiell intelligens</td><td>asaffio</td><td>Digital undervisning</td><td></td><td>AI</td><td>2020-11-17</td></tr><tr class="row-1"><td></td><td></td><td></td><td>13:15-17:00</td><td>Datorteknik</td><td>tsv</td><td>T004</td><td></td><td>Datorteknik - Övning grupp 1</td><td>2020-11-09</td></tr><tr class="row-0"><td></td><td>Ons</td><td>10 Feb</td><td>08:15-10:00</td><td>Datorteknik</td><td>tsv</td><td>Digital undervisning</td><td></td><td>Datorteknik Blackboard Collaborate</td><td>2020-11-09</td></tr><tr class="row-1"><td></td><td></td><td></td><td>13:15-17:00</td><td>Datorteknik</td><td>tsv</td><td>T004</td><td></td><td>Datorteknik - Övning grupp 2</td><td>2020-11-09</td></tr><tr class="row-0"><td></td><td>Tor</td><td>11 Feb</td><td>15:15-17:00</td><td>Artificiell intelligens</td><td>asaffio</td><td>Digital undervisning</td><td></td><td>AI</td><td>2020-11-17</td></tr><tr class="row-1"><td></td><td>Fre</td><td>12 Feb</td><td>08:15-12:00</td><td>Artificiell intelligens</td><td>nan</td><td>T004</td><td></td><td>AI - Övning grupp 1</td><td>2020-11-30</td></tr><tr class="row-0"><td></td><td></td><td></td><td>13:15-17:00</td><td>Artificiell intelligens</td><td>nan</td><td>T004</td><td></td><td>AI - Övning grupp 1</td><td>2020-11-30</td>
        </tbody>
    </table>
 </body>
</html>`

let htmlstring = getData();

htmlstring.then(function(result) {
  return result;   
  })

//const printTags = (tags) => console.log(tags.map(t => t.toString()).join(' '));

const parseData = (string) => {
  console.log('parseData');
  var htmltext = string;
  var JSSoup = require('jssoup').default;
  var soup = new JSSoup(htmltext);
  var soup2 = new JSSoup(soup.findAll('table', { class: 'schemaTabell' }));
  var soup3 = new JSSoup(soup.findAll('table', { class: 'commonCell' }));
  console.log(soup3.toString());
  return soup3.toString();
};

//parseData(xdd);

const test = () => {
  var teststr = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Schema</title>
      <link rel="stylesheet" href="{{ url_for('static', filename='css/style-schema.css') }}">
  </head>
  
  <body>
  <div class="header">
  <h1>Vecka 7</h1>
  </div>
  <table>
      <tbody>
  <tr class="row-1"><td></td><td>Tis</td><td>9 Feb</td><td>08:15-10:00</td><td>Datorteknik</td><td>tsv</td><td>Digital undervisning</td><td></td><td>Datorteknik Blackboard Collaborate</td><td>2020-11-09</td></tr><tr class="row-0"><td></td><td></td><td></td><td>10:15-12:00</td><td>Artificiell intelligens</td><td>asaffio</td><td>Digital undervisning</td><td></td><td>AI</td><td>2020-11-17</td></tr><tr class="row-1"><td></td><td></td><td></td><td>13:15-17:00</td><td>Datorteknik</td><td>tsv</td><td>T004</td><td></td><td>Datorteknik - Övning grupp 1</td><td>2020-11-09</td></tr><tr class="row-0"><td></td><td>Ons</td><td>10 Feb</td><td>08:15-10:00</td><td>Datorteknik</td><td>tsv</td><td>Digital undervisning</td><td></td><td>Datorteknik Blackboard Collaborate</td><td>2020-11-09</td></tr><tr class="row-1"><td></td><td></td><td></td><td>13:15-17:00</td><td>Datorteknik</td><td>tsv</td><td>T004</td><td></td><td>Datorteknik - Övning grupp 2</td><td>2020-11-09</td></tr><tr class="row-0"><td></td><td>Tor</td><td>11 Feb</td><td>15:15-17:00</td><td>Artificiell intelligens</td><td>asaffio</td><td>Digital undervisning</td><td></td><td>AI</td><td>2020-11-17</td></tr><tr class="row-1"><td></td><td>Fre</td><td>12 Feb</td><td>08:15-12:00</td><td>Artificiell intelligens</td><td>nan</td><td>T004</td><td></td><td>AI - Övning grupp 1</td><td>2020-11-30</td></tr><tr class="row-0"><td></td><td></td><td></td><td>13:15-17:00</td><td>Artificiell intelligens</td><td>nan</td><td>T004</td><td></td><td>AI - Övning grupp 1</td><td>2020-11-30</td>
          </tbody>
      </table>
   </body>
  </html>
  `
  return teststr
}

//var xd = '';
//xd = parseData(getData());
//console.log(xd);


  return (
    //<SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mitt Schema</Text>
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Vecka: 7</Text>

        <HTMLView HTML={parseData(htmlstring) || '<p>Empty</p>'} styleSheet={styles.table} />
      </View>

      <View>
        <Text>{outputText}</Text>
        <View style={styles.button}>
          <Button title="Program" onPress={() => setOutputText('Uppdaterat!')} />
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
    //</SafeAreaView>
  );
}




//whole screen
const styles = StyleSheet.create({
  safeContainer: {
    flex:1,
    backgroundColor: 'white'
  },

  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#343536',
    height:'100%',
    borderColor: 'black',
    borderWidth: 2
  },

  header: {
    flex:1,
    color: 'white',
    height:'10%',
    paddingTop:4,
    justifyContent: 'center',
  //  borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
//    borderWidth: 2
  },

  tableContainer: {
    flex:6,
    backgroundColor: '#c0ede5',
    height: '80%',
    borderColor: 'black',
    borderWidth: 2,
  },

  headerTitle: {
    color: 'white', 
    height: 'auto',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 50,
    paddingTop:15
//  borderColor: 'blue',
//    borderWidth: 2
  },

  tableTitle: {
    color: 'white', 
    height: 'auto',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    textDecorationLine: 'underline',
    alignSelf:'center'

  },

  button: {
    alignSelf:'center',
    marginBottom: 100
  }

}); 

