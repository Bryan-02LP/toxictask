import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function SlothBotDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <MaterialIcons name="bug-report" size={24} color="#be87fd" />
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>LVL 2</Text>
            </View>
          </View>
          <View>
            <Text style={styles.headerTitle}>Inicio</Text>
            <Text style={styles.headerSubtitle}>Rango: Flojo Promedio</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}><MaterialIcons name="notifications" size={24} color="#a186b1" /></TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}><MaterialIcons name="settings" size={24} color="#a186b1" /></TouchableOpacity>
          <View style={styles.profileIcon}><MaterialIcons name="person" size={20} color="#fff" /></View>
        </View>
      </View>

      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
        
        {/* ALERTA DE ANOMALÍA (Hero Card) */}
        <View style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View style={styles.alertBadge}>
              <MaterialIcons name="military-tech" size={16} color="#121f00" />
              <Text style={styles.alertText}>¡ALERTA DE ANOMALÍA!</Text>
            </View>
            <Text style={styles.timeText}>Hoy, 18:42</Text>
          </View>
          
          <View style={styles.heroContent}>
            <View style={styles.robotIcon}>
              <MaterialIcons name="smart-toy" size={36} color="#efdbff" />
              <View style={styles.exclamation}><Text style={styles.exclamationText}>!</Text></View>
            </View>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroTitle}>¿Quién eres y qué hiciste con el vago?</Text>
              <Text style={styles.heroDesc}>SlothBot está fingiendo un colapso de orgullo.</Text>
            </View>
          </View>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>
              “Completaste <Text style={{color: '#b5f64c', fontWeight: 'bold'}}>«Terminar presentación Q3»</Text> con solo 3 días de retraso. Guarda el champán, no te daremos un Nobel.”
            </Text>
          </View>

          <View style={styles.successCriteria}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="verified" size={16} color="#a186b1" />
              <Text style={styles.successText}> Criterio de éxito: Muy por debajo del promedio.</Text>
            </View>
            <View style={styles.miracleBadge}><Text style={styles.miracleText}>MILAGRO #42</Text></View>
          </View>
        </View>

        {/* SECCIÓN DE BOTÍN */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Botín Por Esfuerzo Mínimo</Text>
          <Text style={styles.leagueText}>LIGA PLATA</Text>
        </View>

        <View style={styles.grid}>
          <View style={styles.gridCard}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, {backgroundColor: '#efdbff'}]}><MaterialIcons name="bolt" size={20} color="#2b0052" /></View>
              <View style={styles.xpBadge}><Text style={styles.xpText}>+100 XP</Text></View>
            </View>
            <Text style={styles.cardTitle}>+100 XP</Text>
            <Text style={styles.cardDesc}>Productividad forzada</Text>
            <View style={styles.progressBarBg}><View style={styles.progressBarFill} /></View>
            <Text style={styles.progressText}>78% a «Medio Decente»</Text>
          </View>

          <View style={styles.gridCard}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, {backgroundColor: '#f3daff'}]}><MaterialIcons name="shield" size={20} color="#543e64" /></View>
              <View style={styles.activeBadge}><Text style={styles.activeText}>Activo</Text></View>
            </View>
            <Text style={styles.cardTitle}>+1 Escudo</Text>
            <Text style={styles.cardDesc}>Anti-Humillación</Text>
            <Text style={styles.progressText}>Inmune a 1 meme público por hoy. Respira.</Text>
          </View>
        </View>

        <View style={styles.streakCard}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.fireIcon}><MaterialIcons name="local-fire-department" size={24} color="#b5f64c" /></View>
            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.streakTitle}>25 DÍAS </Text>
                <View style={styles.savedBadge}><Text style={styles.savedText}>RACHA SALVADA</Text></View>
              </View>
              <Text style={styles.streakDesc}>Tus cenizas siguen ardiendo, por suerte.</Text>
            </View>
          </View>
          <MaterialIcons name="auto-awesome" size={28} color="#121f00" />
        </View>

        {/* PROTOCOLO ANTI-RELAJO */}
        <View style={styles.warningCard}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
            <MaterialIcons name="warning" size={20} color="#ba1a1a" />
            <Text style={styles.warningTitle}> PROTOCOLO ANTI-RELAJO ACTIVADO</Text>
          </View>
          <Text style={styles.warningDesc}>No te duermas en tus laureles de papel. Aún te quedan <Text style={{fontWeight: 'bold'}}>2 tareas pendientes</Text> marcadas como críticas para antes de medianoche.</Text>
          <View style={styles.taskItem}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.redDot} />
              <Text style={styles.taskText}>Mandar informe financiero sin excusas</Text>
            </View>
            <Text style={styles.taskTime}>Hoy 23:59</Text>
          </View>
        </View>

        {/* BOTONES FINALES */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Siguiente Obligación</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <MaterialIcons name="bedtime" size={18} color="#4b454d" />
          <Text style={styles.secondaryButtonText}>Volver al Inicio a descansar cobardemente</Text>
        </TouchableOpacity>
        
        <View style={{height: 40}} />
      </ScrollView>

      {/* NAVEGACIÓN INFERIOR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#b5f64c" />
          <Text style={[styles.navText, {color: '#b5f64c'}]}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="calendar-today" size={24} color="#a186b1" />
          <Text style={styles.navText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="local-fire-department" size={24} color="#a186b1" />
          <Text style={styles.navText}>Rachas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="mood-bad" size={24} color="#a186b1" />
          <Text style={styles.navText}>Roast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="group" size={24} color="#a186b1" />
          <Text style={styles.navText}>Social</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#352044', paddingTop: 50 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { position: 'relative', marginRight: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#1f0b2e', justifyContent: 'center', alignItems: 'center' },
  levelBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: '#b5f64c', paddingHorizontal: 6, borderRadius: 10 },
  levelText: { fontSize: 10, fontWeight: 'bold', color: '#121f00' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  headerSubtitle: { color: '#9ad930', fontSize: 12 },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { marginHorizontal: 8 },
  profileIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#1f0b2e', justifyContent: 'center', alignItems: 'center' },
  scrollArea: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 100 },
  heroCard: { backgroundColor: '#352044', borderRadius: 16, padding: 16, marginBottom: 16 },
  heroHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  alertBadge: { flexDirection: 'row', backgroundColor: '#b5f64c', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, alignItems: 'center' },
  alertText: { fontSize: 10, fontWeight: 'bold', marginLeft: 4, color: '#121f00' },
  timeText: { color: '#9ad930', fontSize: 12 },
  heroContent: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  robotIcon: { width: 64, height: 64, borderRadius: 12, backgroundColor: '#1f0b2e', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  exclamation: { position: 'absolute', top: -5, right: -5, backgroundColor: '#ba1a1a', width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  exclamationText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  heroTextContainer: { flex: 1 },
  heroTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  heroDesc: { color: '#a186b1', fontSize: 12, marginTop: 4 },
  quoteBox: { backgroundColor: 'rgba(31, 11, 46, 0.7)', padding: 12, borderRadius: 8, marginBottom: 12 },
  quoteText: { color: '#f0f1f2', fontStyle: 'italic', fontSize: 12 },
  successCriteria: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  successText: { color: '#a186b1', fontSize: 12 },
  miracleBadge: { backgroundColor: '#1c2e00', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  miracleText: { color: '#b5f64c', fontSize: 10, fontWeight: 'bold' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#191c1d' },
  leagueText: { fontSize: 10, fontWeight: 'bold', color: '#7842b4' },
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  gridCard: { backgroundColor: '#fff', width: '48%', borderRadius: 16, padding: 16 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  iconBox: { width: 36, height: 36, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  xpBadge: { backgroundColor: '#be87fd', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, justifyContent: 'center' },
  xpText: { fontSize: 10, fontWeight: 'bold', color: '#4f1089' },
  activeBadge: { backgroundColor: '#b5f64c', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, justifyContent: 'center' },
  activeText: { fontSize: 10, fontWeight: 'bold', color: '#121f00' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#191c1d' },
  cardDesc: { fontSize: 12, color: '#4b454d', marginBottom: 8 },
  progressBarBg: { height: 6, backgroundColor: '#e7e8e9', borderRadius: 3, marginBottom: 4 },
  progressBarFill: { width: '78%', height: '100%', backgroundColor: '#7842b4', borderRadius: 3 },
  progressText: { fontSize: 10, color: '#7c757d' },
  streakCard: { backgroundColor: '#b5f64c', borderRadius: 16, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  fireIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#352044', justifyContent: 'center', alignItems: 'center' },
  streakTitle: { fontSize: 18, fontWeight: 'bold', color: '#121f00' },
  savedBadge: { backgroundColor: '#352044', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  savedText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  streakDesc: { color: '#334f00', fontSize: 12, marginTop: 4 },
  warningCard: { backgroundColor: '#e7e8e9', borderRadius: 16, padding: 16, marginBottom: 16 },
  warningTitle: { color: '#ba1a1a', fontWeight: 'bold', fontSize: 12 },
  warningDesc: { color: '#191c1d', fontSize: 14, marginBottom: 12 },
  taskItem: { backgroundColor: '#fff', padding: 8, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  redDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ba1a1a', marginRight: 8 },
  taskText: { fontSize: 12, color: '#191c1d' },
  taskTime: { fontSize: 10, color: '#ba1a1a', fontWeight: 'bold' },
  primaryButton: { backgroundColor: '#352044', height: 56, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  primaryButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 8 },
  secondaryButton: { height: 44, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  secondaryButtonText: { color: '#4b454d', fontSize: 14, marginLeft: 8 },
  bottomNav: { position: 'absolute', bottom: 0, width: '100%', height: 70, backgroundColor: '#352044', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 15 },
  navItem: { alignItems: 'center' },
  navText: { color: '#a186b1', fontSize: 10, marginTop: 4 }
});