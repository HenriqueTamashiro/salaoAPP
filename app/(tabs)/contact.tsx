import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react-native';

export default function ContactScreen() {
  const salonInfo = {
    name: 'Karoll Novo',
    address: 'Rua Artur Alvim 141',
    phone: ' (11) 98989-4471',
    email: 'estudanteana2@gmail.com',
    hours: [
      { day: 'Terça - Domingo', hours: '9:00 AM - 7:00 PM' },
      { day: 'Segunda', hours: 'Fechado' },
    ],
    socialMedia: [
      { name: 'Instagram', icon: <Instagram size={24} color={Colors.primary[500]} />, url: 'https://www.instagram.com/hairstyleanacarolina?utm_source=qr' },
      { name: 'Facebook', icon: <Facebook size={24} color={Colors.primary[500]} />, url: 'https://facebook.com' },
      { name: 'X', icon: <Twitter size={24} color={Colors.primary[500]} />, url: 'https://x.com/' },
    ],
  };

  const handleCall = () => {
    Linking.openURL(`tel:${salonInfo.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${salonInfo.email}`);
  };

  const handleGetDirections = () => {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salonInfo.address)}`;
    Linking.openURL(url);
  };

  const handleSocialMedia = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="h2" weight="semibold">
          Nos Contate
        </Text>
        <Text variant="body" color="secondary" style={styles.headerSubtitle}>
          Adoraríamos ouvi-lo
        </Text>
      </View>

      {/* Map placeholder */}
      <View style={styles.mapContainer}>
        <View style={styles.map}>
          <MapPin size={48} color={Colors.primary[500]} />
          <Text variant="body" weight="medium" style={styles.mapText}>
            Mapa interativo
          </Text>
          <Text variant="bodySmall" color="secondary">
            Toque para abrir em Mapas
          </Text>
        </View>
        <Button
          title="Ver no Mapa"
          onPress={handleGetDirections}
          style={styles.directionsButton}
        />
      </View>

      {/* Informações de contato */}
      <View style={styles.section}>
        <Text variant="h3" weight="semibold" style={styles.sectionTitle}>
          Quem Somos
        </Text>

        <Card style={styles.infoCard}>
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <MapPin size={20} color={Colors.primary[500]} />
            </View>
            <View style={styles.infoContent}>
              <Text variant="bodySmall" color="secondary">
                Endereço
              </Text>
              <Text variant="body">{salonInfo.address}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.infoItem} onPress={handleCall}>
            <View style={styles.infoIconContainer}>
              <Phone size={20} color={Colors.primary[500]} />
            </View>
            <View style={styles.infoContent}>
              <Text variant="bodySmall" color="secondary">
                Telefone para contato
              </Text>
              <Text variant="body" color="accent">
                {salonInfo.phone}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem} onPress={handleEmail}>
            <View style={styles.infoIconContainer}>
              <Mail size={20} color={Colors.primary[500]} />
            </View>
            <View style={styles.infoContent}>
              <Text variant="bodySmall" color="secondary">
                Email
              </Text>
              <Text variant="body" color="accent">
                {salonInfo.email}
              </Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>

      {/* Horário de funcionamento */}
      <View style={styles.section}>
        <Text variant="h3" weight="semibold" style={styles.sectionTitle}>
          Nossos Horários
        </Text>

        <Card style={styles.hoursCard}>
          <View style={styles.hoursHeader}>
            <Clock size={20} color={Colors.primary[500]} />
            <Text variant="body" weight="medium" style={styles.hoursHeaderText}>
              Horário de Funcionamento
            </Text>
          </View>

          {salonInfo.hours.map((item, index) => (
            <View key={index} style={styles.hoursItem}>
              <Text variant="body" weight="medium">
                {item.day}
              </Text>
              <Text
                variant="body"
                color={item.hours === 'Fechado' ? 'error' : 'secondary'}
              >
                {item.hours}
              </Text>
            </View>
          ))}
        </Card>
      </View>

      {/* Redes Sociais */}
      <View style={styles.section}>
        <Text variant="h3" weight="semibold" style={styles.sectionTitle}>
          Nos Siga
        </Text>

        <View style={styles.socialContainer}>
          {salonInfo.socialMedia.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialButton}
              onPress={() => handleSocialMedia(social.url)}
            >
              <View style={styles.socialIcon}>{social.icon}</View>
              <Text variant="body" weight="medium">
                {social.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Formulário de contato */}
      <View style={styles.section}>
        <Text variant="h3" weight="semibold" style={styles.sectionTitle}>
          Mande uma Mensagem
        </Text>

        <Card style={styles.formCard}>
          <Text variant="body" color="secondary" style={styles.formText}>
            Tem dúvidas ou precisa entrar em contato? 
            Envie-nos uma mensagem e entraremos em contato o mais breve possível.
          </Text>
          <Button
            title="Nos Contate"
            onPress={handleEmail}
            style={styles.contactButton}
            size="lg"
          />
        </Card>
      </View>
    </ScrollView>
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
  mapContainer: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  map: {
    height: 200,
    backgroundColor: Colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    marginTop: 8,
  },
  directionsButton: {
    margin: 16,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  infoCard: {
    padding: 0,
  },
  infoItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[100],
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  hoursCard: {
    padding: 0,
  },
  hoursHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[100],
  },
  hoursHeaderText: {
    marginLeft: 8,
  },
  hoursItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[100],
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  socialIcon: {
    marginBottom: 8,
  },
  formCard: {
    padding: 24,
  },
  formText: {
    marginBottom: 24,
  },
  contactButton: {
    alignSelf: 'center',
    minWidth: 200,
  },
});