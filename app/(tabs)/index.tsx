import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const buttons = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '-'],
  ['0', 'C', '=', '+'],
];

export default function Calculator() {
  const [input, setInput] = useState('');

  function handlePress(value) {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const expr = input.replace(/×/g, "*").replace(/÷/g, "/");
        setInput(eval(expr).toString()); 
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.input}>{input || "0"}</Text>
      </View>

      <View>
        {buttons.map((row, index) => (
          <View key={index} style={styles.buttonsRow}>
            {row.map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.button,
                  (value === 'C' || value === '=') && styles.buttonSpecial,
                ]}
                onPress={() => handlePress(value)}
              >
                <Text style={styles.text}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    padding: 20,
  },

  screen: {
    minHeight: 120,
    width: "100%",
    borderColor: "#8A2BE2",
    borderWidth: 3,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  input: {
    fontSize: 48,
    color: "#fff",
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  button: {
    width: "22%",
    backgroundColor: "#8A2BE2",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonSpecial: {
    backgroundColor: "#D9534F",
  },

  text: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
});
