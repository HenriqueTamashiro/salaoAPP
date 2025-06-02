import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { Calendar as CalendarIcon, Clock, Check } from 'lucide-react-native';

export default function AppointmentsScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);

  const currentDate = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    return date;
  });

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const services = [
    { id: '1', name: 'Women\'s Haircut & Styling', price: 45, duration: '45 min' },
    { id: '2', name: 'Men\'s Haircut', price: 30, duration: '30 min' },
    { id: '3', name: 'Hair Coloring', price: 85, duration: '90 min' },
    { id: '4', name: 'Classic Manicure', price: 35, duration: '45 min' },
    { id: '5', name: 'Gel Pedicure', price: 55, duration: '60 min' },
  ];

  const stylists = [
    { id: '1', name: 'Emma Thompson', role: 'Senior Stylist' },
    { id: '2', name: 'Alex Parker', role: 'Color Specialist' },
    { id: '3', name: 'Sofia Garcia', role: 'Nail Technician' },
    { id: '4', name: 'James Wilson', role: 'Master Barber' },
  ];

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const weekday = date.toLocaleString('default', { weekday: 'short' });
    return { day, month, weekday };
  };

  const isDateSelected = (date: Date) => {
    return selectedDate === date.toDateString();
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date.toDateString());
  };

  const handleBookAppointment = () => {
    // Implement booking logic here
    alert('Appointment booked successfully!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="h2" weight="semibold">
          Book Appointment
        </Text>
        <Text variant="body" color="secondary" style={styles.headerSubtitle}>
          Select a date, time, and service
        </Text>
      </View>

      {/* Date Selection */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <CalendarIcon size={20} color={Colors.primary[500]} />
          <Text variant="h4" weight="semibold" style={styles.sectionTitle}>
            Select Date
          </Text>
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.datesContainer}
        >
          {dates.map((date, index) => {
            const { day, month, weekday } = formatDate(date);
            const isSelected = isDateSelected(date);
            
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  isSelected && styles.dateCardSelected,
                ]}
                onPress={() => handleDateSelect(date)}
              >
                <Text
                  variant="bodySmall"
                  color={isSelected ? 'white' : 'secondary'}
                  style={styles.weekday}
                >
                  {weekday}
                </Text>
                <Text
                  variant="h3"
                  weight="semibold"
                  color={isSelected ? 'white' : 'primary'}
                >
                  {day}
                </Text>
                <Text
                  variant="bodySmall"
                  color={isSelected ? 'white' : 'secondary'}
                >
                  {month}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Time Selection */}
      {selectedDate && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Clock size={20} color={Colors.primary[500]} />
            <Text variant="h4" weight="semibold" style={styles.sectionTitle}>
              Select Time
            </Text>
          </View>
          
          <View style={styles.timeContainer}>
            {timeSlots.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeCard,
                  selectedTime === time && styles.timeCardSelected,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  variant="body"
                  color={selectedTime === time ? 'white' : 'secondary'}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Service Selection */}
      {selectedTime && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Check size={20} color={Colors.primary[500]} />
            <Text variant="h4" weight="semibold" style={styles.sectionTitle}>
              Select Service
            </Text>
          </View>
          
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.serviceCard,
                selectedService === service.id && styles.serviceCardSelected,
              ]}
              onPress={() => setSelectedService(service.id)}
            >
              <View style={styles.serviceInfo}>
                <Text
                  variant="body"
                  weight="medium"
                  color={selectedService === service.id ? 'accent' : 'primary'}
                >
                  {service.name}
                </Text>
                <View style={styles.serviceDetails}>
                  <Text
                    variant="bodySmall"
                    color="secondary"
                    style={styles.serviceDetail}
                  >
                    ${service.price}
                  </Text>
                  <Text variant="bodySmall" color="secondary">
                    {service.duration}
                  </Text>
                </View>
              </View>
              {selectedService === service.id && (
                <View style={styles.checkContainer}>
                  <Check size={16} color={Colors.white} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Stylist Selection */}
      {selectedService && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <CalendarIcon size={20} color={Colors.primary[500]} />
            <Text variant="h4" weight="semibold" style={styles.sectionTitle}>
              Select Stylist
            </Text>
          </View>
          
          {stylists.map((stylist) => (
            <TouchableOpacity
              key={stylist.id}
              style={[
                styles.stylistCard,
                selectedStylist === stylist.id && styles.stylistCardSelected,
              ]}
              onPress={() => setSelectedStylist(stylist.id)}
            >
              <View style={styles.stylistInfo}>
                <Text
                  variant="body"
                  weight="medium"
                  color={selectedStylist === stylist.id ? 'accent' : 'primary'}
                >
                  {stylist.name}
                </Text>
                <Text variant="bodySmall" color="secondary">
                  {stylist.role}
                </Text>
              </View>
              {selectedStylist === stylist.id && (
                <View style={styles.checkContainer}>
                  <Check size={16} color={Colors.white} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Booking Button */}
      {selectedDate && selectedTime && selectedService && selectedStylist && (
        <View style={styles.bookingSection}>
          <Card style={styles.summaryCard}>
            <Text variant="h4" weight="semibold" style={styles.summaryTitle}>
              Appointment Summary
            </Text>
            
            <View style={styles.summaryItem}>
              <Text variant="bodySmall" color="secondary">
                Date:
              </Text>
              <Text variant="body" weight="medium">
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
            </View>
            
            <View style={styles.summaryItem}>
              <Text variant="bodySmall" color="secondary">
                Time:
              </Text>
              <Text variant="body" weight="medium">
                {selectedTime}
              </Text>
            </View>
            
            <View style={styles.summaryItem}>
              <Text variant="bodySmall" color="secondary">
                Service:
              </Text>
              <Text variant="body" weight="medium">
                {services.find(s => s.id === selectedService)?.name}
              </Text>
            </View>
            
            <View style={styles.summaryItem}>
              <Text variant="bodySmall" color="secondary">
                Stylist:
              </Text>
              <Text variant="body" weight="medium">
                {stylists.find(s => s.id === selectedStylist)?.name}
              </Text>
            </View>
          </Card>
          
          <Button
            title="Confirm Booking"
            onPress={handleBookAppointment}
            size="lg"
            style={styles.bookButton}
          />
        </View>
      )}
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
  section: {
    marginTop: 16,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    marginLeft: 8,
  },
  datesContainer: {
    paddingRight: 8,
  },
  dateCard: {
    width: 64,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  dateCardSelected: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  weekday: {
    marginBottom: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeCard: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  timeCardSelected: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  serviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  serviceCardSelected: {
    borderColor: Colors.primary[500],
  },
  serviceInfo: {
    flex: 1,
  },
  serviceDetails: {
    flexDirection: 'row',
    marginTop: 4,
  },
  serviceDetail: {
    marginRight: 16,
  },
  stylistCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  stylistCardSelected: {
    borderColor: Colors.primary[500],
  },
  stylistInfo: {
    flex: 1,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingSection: {
    margin: 16,
    marginBottom: 32,
  },
  summaryCard: {
    marginBottom: 16,
  },
  summaryTitle: {
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bookButton: {
    marginTop: 8,
  },
});