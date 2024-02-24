// About.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; // Import ScrollView
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* Version Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Version</Text>
          <Text style={styles.infoText}>1.2.0</Text>
        </View>

        {/* Developer Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>တီထွင်သူ</Text>
          <Text style={styles.infoText}>Min Myat Oo</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>UI/UX ဒီဇိုင်နာ</Text>
          <Text style={styles.infoText}>Thu Rein Kaung</Text>
        </View>
        {/* History of the Application */}
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>သမိုင်းကြောင်း</Text>
          <Text style={styles.historyText}>
            ယဉ်ကျေးမှု ဆိုသည်မှာ သဘာဝပတ်ဝန်းကျင်မှ လူတိုင်းကိုယ်တိုင်ဖန်တီးယူသော
            အစိတ်အပိုင်း တစ်ခုဖြစ်သည်။ ယဉ်ကျေးမှု ဆိုသည်မှာ လူတစ်မျိုး၏
            ဘဝတည်ဆောက် ပျိုးထောင်ပုံ နည်းနာများသာ ဖြစ်သည်။
            လူ့ဘောင်အဖွဲ့အစည်းအတွင်း၌ လူတို့ ဆက်ဆံ နေထိုင်စားသောက် လှုပ်ရှားသည့်
            ပုံစံသည် လူတို့၏ ယဉ်ကျေးမှု စံနစ်ဖြစ်သည်။
          </Text>
          <Text style={styles.historyText}>
            ယဉ်ကျေးမှုအရပ်ရပ်ကို အောက်ပါအတိုင်း မှတ်သားသင့်ပေသည်
          </Text>
          <View style={styles.orderedListContainer}>
            <Text style={styles.historyText}>
              1. အိမ်၌ ယဉ်ကျေးခြင်း (၃၂) မျိုး {'\n'}
              2. ကျောင်း၌ ယဉ်ကျေးခြင်း (၁၄) မျိုး {'\n'}
              3. လမ်း၌ ယဉ်ကျေးခြင်း (၁၄) မျိုး {'\n'}
              4. ကစားစဉ်၌ ယဉ်ကျေးခြင်း (၁၀) မျိုး {'\n'}
              5. ခရီးသွားစဉ်၌ ယဉ်ကျေးခြင်း (၁၁) မျိုး {'\n'}
              6. အထွေထွေ ယဉ်ကျေးခြင်း (၂၁) မျိုး
            </Text>
          </View>

          {/* Data Credit */}
          <Text style={styles.dataCredit}>"လိမ္မာယဉ်ကျေး ပြည့်ရင်သွေး၊ ပြည်သူ့နီတိ နှင့် လောကနီတိ၊ မောင်⁠မောင်တိုး။" စာအုပ်မှ ကိုးကားဖော်ပြထားပါသည်။</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
  },
  historyContainer: {
    marginTop: 20, // Increase top margin for history section
    alignItems: 'center', // Align text to the left
  },
  historyTitle: {
    fontSize: 24, // Increase font size for history title
    fontWeight: 'bold', // Add bold font weight to history title
    marginBottom: 10,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 20, // Increase bottom margin for history text
    textAlign: 'left', // Align text to the left
  },
  orderedListContainer: {
    marginBottom: 20, // Add margin bottom for spacing
    alignItems: 'flex-start', // Align text to the left
  },
  dataCredit: {
    marginTop: 20,
    fontSize: 14,
    color: '#888', // Add color for the data credit text
    fontStyle: 'italic', // Add italic style for the data credit text
  },
});

export default About;
