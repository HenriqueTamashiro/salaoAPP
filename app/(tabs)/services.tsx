import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { Clock, DollarSign } from 'lucide-react-native';

export default function ServicesScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos os serviços' },
    { id: 'hair', name: 'Cortes' },
    { id: 'nails', name: 'Unhas' },
    { id: 'face', name: 'Facial' },
    { id: 'massage', name: 'Massagem' },
    { id: 'makeup', name: '<Maquiagem>' },
  ];

  const services = [
    {
      id: '1',
      title: 'Women\'s Haircut & Styling',
      description: 'Includes consultation, shampoo, cut, and blow dry styling',
      price: 45,
      time: '45 min',
      category: 'hair',
      image: 'https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      title: 'Men\'s Haircut',
      description: 'Classic cut with styling and finishing',
      price: 30,
      time: '30 min',
      category: 'hair',
      image: 'https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      title: 'Hair Coloring',
      description: 'Single process color with professional products',
      price: 85,
      time: '90 min',
      category: 'hair',
      image: 'https://images.pexels.com/photos/3993123/pexels-photo-3993123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '4',
      title: 'Classic Manicure',
      description: 'Nail shaping, cuticle care, hand massage, and polish',
      price: 35,
      time: '45 min',
      category: 'nails',
      image: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '5',
      title: 'Gel Pedicure',
      description: 'Long-lasting gel polish with foot spa treatment',
      price: 55,
      time: '60 min',
      category: 'nails',
      image: 'https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '6',
      title: 'Hydrating Facial',
      description: 'Deep cleansing and moisturizing treatment for all skin types',
      price: 70,
      time: '60 min',
      category: 'face',
      image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text variant="h2" weight="semibold">
          Our Services
        </Text>
        <Text variant="body" color="secondary" style={styles.headerSubtitle}>
          Discover our range of beauty treatments
        </Text>
      </View>

      {/* Categories */}
      <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              activeCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setActiveCategory(category.id)}
          >
            <Text
              variant="body"
              color={activeCategory === category.id ? 'white' : 'secondary'}
              weight={activeCategory === category.id ? 'medium' : 'regular'}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
        </View>

      {/* Services List */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.servicesContainer}>
        {filteredServices.map((service) => (
          <Card key={service.id} style={styles.serviceCard} variant="elevated">
            <View style={styles.serviceContent}>
              <View style={styles.serviceTextContent}>
                <Text variant="h4" weight="semibold">
                  {service.title}
                </Text>
                <Text variant="bodySmall" color="secondary" style={styles.serviceDescription}>
                  {service.description}
                </Text>
                
                <View style={styles.serviceMetaContainer}>
                  <View style={styles.serviceMeta}>
                    <DollarSign size={16} color={Colors.neutral[600]} />
                    <Text variant="body" color="secondary" style={styles.serviceMetaText}>
                      ${service.price}
                    </Text>
                  </View>
                  
                  <View style={styles.serviceMeta}>
                    <Clock size={16} color={Colors.neutral[600]} />
                    <Text variant="body" color="secondary" style={styles.serviceMetaText}>
                      {service.time}
                    </Text>
                  </View>
                </View>
                
                <Button
                  title="Book Now"
                  onPress={() => router.push('/appointments')}
                  style={styles.bookButton}
                />
              </View>
              <Image source={{ uri: service.image }} style={styles.serviceImage} />
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: Colors.white,
  },
  headerSubtitle: {
    marginTop: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: Colors.neutral[100],
  },
  categoryButtonActive: {
    backgroundColor: Colors.primary[500],
  },
  servicesContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  serviceCard: {
    marginBottom: 16,
  },
  serviceContent: {
    flexDirection: 'row',
  },
  serviceTextContent: {
    flex: 1,
    paddingRight: 8,
  },
  serviceDescription: {
    marginTop: 4,
    marginBottom: 8,
  },
  serviceMetaContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  serviceMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceMetaText: {
    marginLeft: 4,
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  bookButton: {
    alignSelf: 'flex-start',
  },
});