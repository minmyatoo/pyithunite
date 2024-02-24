import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Modal, StyleSheet, Clipboard } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; // Import various icon sets
import quotesData from './quotesData'; // Importing quotesData from the separate file

const categories = [
  { name: 'အိမ်၌', icon: 'home', color: '#FF5733' },       // Coral
  { name: 'ကျောင်း၌', icon: 'school', color: '#1E8449' }, // Emerald Green
  { name: 'လမ်း၌', icon: 'music', color: '#9B59B6' },     // Amethyst Purple
  { name: 'ကစားစဉ်၌', icon: 'bicycle', color: '#3498DB' }, // Dodger Blue
  { name: 'ခရီးသွားစဉ်၌', icon: 'plane', color: '#F39C12' }, // Orange
  { name: 'အထွေထွေ', icon: 'globe', color: '#E74C3C' } // Alizarin Red
];
const Dashboard = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
    filterQuotes(selectedCategory, text);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterQuotes(category, searchText);
  };

  const handleQuoteSelect = (quote) => {
    setSelectedQuote(quote);
    setModalVisible(true);
  };

  const filterQuotes = (category, text) => {
    let filtered = quotesData;
    if (category) {
      filtered = filtered.filter(quote => quote.category === category);
    }
    if (text) {
      filtered = filtered.filter(quote => quote.text.toLowerCase().includes(text.toLowerCase()));
    }
    setFilteredQuotes(filtered);
  };

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
  };

  const renderCategory = (category, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.categoryCard, { backgroundColor: category.color }, category.name === selectedCategory && styles.selectedCategory]}
      onPress={() => handleCategorySelect(category.name)}
    >
      {category.icon === 'home' && <Ionicons name="home-outline" size={28} color="#fff" />}
      {category.icon === 'school' && <Ionicons name="school-outline" size={28} color="#fff" />}
      {category.icon === 'music' && <Ionicons name="walk-outline" size={28} color="#fff" />}
      {category.icon === 'bicycle' && <MaterialCommunityIcons name="bike" size={28} color="#fff" />}
      {category.icon === 'plane' && <FontAwesome name="plane" size={28} color="#fff" />}
      {category.icon === 'globe' && <FontAwesome name="globe" size={28} color="#fff" />}
      <Text style={{ marginLeft: 15, fontSize: 16, color: '#fff' }}>{category.name}</Text>
    </TouchableOpacity>
  );

  const renderQuoteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.quoteItem}
      onPress={() => handleQuoteSelect(item)}
    >
      <View style={styles.quoteContent}>
        <Text style={styles.quoteText}>{item.text}</Text>
        <Text style={styles.categoryText}>{item.category} ယဉ်ကျေးခြင်း</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="ရှာရန်..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => renderCategory(category, index))}
      </View>
      <FlatList
        data={filteredQuotes}
        renderItem={renderQuoteItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />

      {/* Modal */}
     <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalQuoteText}>{selectedQuote?.text}</Text>
      <View style={styles.modalActions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.copyButton]}
          onPress={() => copyToClipboard(selectedQuote?.text)}
        >
          <Ionicons name="copy" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.closeButton]}
          onPress={() => setModalVisible(false)}
        >
          <Ionicons name="close-circle" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCategory: {
    backgroundColor: 'lightblue',
  },
  quoteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quoteContent: {
    flex: 1,
  },
  quoteText: {
    fontSize: 16,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 9,
    color: '#666',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalQuoteText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  copyButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    
    padding: 10,
    borderRadius: 5,
  },
});

export default Dashboard;
