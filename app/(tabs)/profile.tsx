import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { User, Calendar, LogOut, Clock, Settings, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
  const userData = {
    name: 'Jennifer Lawrence',
    email: 'jennifer@example.com',
    phone: '(555) 123-4567',
    profileImage: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  };

  
  const upcomingAppointments = [
    {
      id: '1',
      service: 'Corte Feminino',
      stylist: 'Emma Thompson',
      date: 'Mon, Jun 12',
      time: '2:00 PM',
    },
    {
      id: '2',
      service: 'Manicure',
      stylist: 'Sofia Garcia',
      date: 'Thu, Jun 22',
      time: '11:30 AM',
    },
  ];

  
  const pastAppointments = [
    {
      id: '3',
      service: 'Coloração',
      stylist: 'Alex Parker',
      date: 'May 15, 2023',
      time: '10:00 AM',
    },
    {
      id: '4',
      service: 'Tratamento Facial',
      stylist: 'Emma Thompson',
      date: 'Apr 28, 2023',
      time: '3:30 PM',
    },
  ];

  const handleLogin = () => {
    
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.loginHeader}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.loginImage}
          />
          <View style={styles.loginTitleContainer}>
            <Text variant="h2" color="white" weight="semibold">
              Karoll Novo Estilo
            </Text>
            <Text variant="body" color="white">
              Faça login para gerenciar seus agendamentos
            </Text>
          </View>
        </View>
        
        <View style={styles.loginForm}>
          <Card style={styles.loginCard}>
            <Text variant="h3" weight="semibold" style={styles.loginTitle}>
              Bem-vindo de volta
            </Text>
            
            <Button
              title="Faça Login"
              onPress={handleLogin}
              style={styles.loginButton}
              size="lg"
            />
            
            <TouchableOpacity style={styles.signupLink}>
              <Text variant="body" color="secondary">
                Não tem uma conta?{' '}
                <Text variant="body" color="accent" weight="medium">
                  Cadastre-se
                </Text>
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho do Perfil */}
      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text variant="h3" weight="semibold" color="white">
              {userData.name}
            </Text>
            <Text variant="body" color="white">
              {userData.email}
            </Text>
            <Text variant="bodySmall" color="white">
              {userData.phone}
            </Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <Calendar size={20} color={Colors.primary[500]} />
          </View>
          <Text variant="bodySmall" style={styles.actionText}>
            Meus Agendamentos
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <Bell size={20} color={Colors.primary[500]} />
          </View>
          <Text variant="bodySmall" style={styles.actionText}>
            Notificações
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <Settings size={20} color={Colors.primary[500]} />
          </View>
          <Text variant="bodySmall" style={styles.actionText}>
            Configurações
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
          <View style={[styles.actionIcon, styles.logoutIcon]}>
            <LogOut size={20} color={Colors.error[500]} />
          </View>
          <Text variant="bodySmall" color="error" style={styles.actionText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Appointments */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text variant="h4" weight="semibold">
            Próximos Agendamentos
          </Text>
          <TouchableOpacity>
            <Text variant="bodySmall" color="accent">
              Ver Tudo
            </Text>
          </TouchableOpacity>
        </View>

        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentHeader}>
                <Text variant="h4" weight="semibold" color="accent">
                  {appointment.service}
                </Text>
                <View style={styles.appointmentBadge}>
                  <Text variant="caption" color="white">
                    Em Seguida
                  </Text>
                </View>
              </View>
              
              <View style={styles.appointmentDetails}>
                <View style={styles.appointmentDetail}>
                  <User size={16} color={Colors.neutral[600]} />
                  <Text variant="body" color="secondary" style={styles.appointmentDetailText}>
                    {appointment.stylist}
                  </Text>
                </View>
                
                <View style={styles.appointmentDetail}>
                  <Calendar size={16} color={Colors.neutral[600]} />
                  <Text variant="body" color="secondary" style={styles.appointmentDetailText}>
                    {appointment.date}
                  </Text>
                </View>
                
                <View style={styles.appointmentDetail}>
                  <Clock size={16} color={Colors.neutral[600]} />
                  <Text variant="body" color="secondary" style={styles.appointmentDetailText}>
                    {appointment.time}
                  </Text>
                </View>
              </View>
              
              <View style={styles.appointmentActions}>
                <Button
                  title="Reagendar"
                  variant="outline"
                  size="sm"
                  onPress={() => {}}
                  style={styles.appointmentActionButton}
                />
                <Button
                  title="Cancelar"
                  variant="ghost"
                  size="sm"
                  onPress={() => {}}
                  style={styles.appointmentActionButton}
                  textStyle={{ color: Colors.error[500] }}
                />
              </View>
            </Card>
          ))
        ) : (
          <Card style={styles.emptyStateCard}>
            <Calendar size={48} color={Colors.neutral[400]} />
            <Text variant="body" color="secondary" style={styles.emptyStateText}>
              Não há novos agendamentos
            </Text>
            <Button
              title="Agendar Agora"
              variant="primary"
              size="md"
              onPress={() => {}}
              style={styles.emptyStateButton}
            />
          </Card>
        )}
      </View>

      {/* Past Appointments */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text variant="h4" weight="semibold">
            Agendamentos Passados
          </Text>
          <TouchableOpacity>
            <Text variant="bodySmall" color="accent">
              Ver Tudo
            </Text>
          </TouchableOpacity>
        </View>

        {pastAppointments.map((appointment) => (
          <Card key={appointment.id} style={styles.pastAppointmentCard}>
            <Text variant="body" weight="medium">
              {appointment.service}
            </Text>
            <View style={styles.pastAppointmentDetails}>
              <Text variant="bodySmall" color="secondary">
                {appointment.stylist}
              </Text>
              <Text variant="bodySmall" color="secondary">
                {appointment.date} at {appointment.time}
              </Text>
            </View>
            <Button
              title="Agendar novamente"
              variant="outline"
              size="sm"
              onPress={() => {}}
              style={styles.bookAgainButton}
            />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  loginContainer: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  loginHeader: {
    height: 240,
    position: 'relative',
  },
  loginImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loginTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  loginForm: {
    padding: 16,
    marginTop: -24,
  },
  loginCard: {
    padding: 24,
  },
  loginTitle: {
    marginBottom: 32,
    textAlign: 'center',
  },
  loginButton: {
    marginBottom: 16,
  },
  signupLink: {
    alignItems: 'center',
  },
  profileHeader: {
    backgroundColor: Colors.primary[500],
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  profileDetails: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: -24,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionButton: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  logoutIcon: {
    backgroundColor: Colors.error[50],
  },
  actionText: {
    marginTop: 4,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentCard: {
    marginBottom: 12,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentBadge: {
    backgroundColor: Colors.primary[500],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  appointmentDetails: {
    marginBottom: 16,
  },
  appointmentDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  appointmentDetailText: {
    marginLeft: 8,
  },
  appointmentActions: {
    flexDirection: 'row',
  },
  appointmentActionButton: {
    marginRight: 8,
  },
  emptyStateCard: {
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    marginTop: 12,
    marginBottom: 16,
  },
  emptyStateButton: {
    minWidth: 120,
  },
  pastAppointmentCard: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pastAppointmentDetails: {
    flex: 1,
    marginLeft: 8,
  },
  bookAgainButton: {
    marginLeft: 8,
  },
});