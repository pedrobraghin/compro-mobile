import { Tabs } from 'expo-router';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Header } from '../../components/Header';

export default function TabLayout() {

  return (
    <Tabs
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          header: Header,
          title: 'Início',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />,
        }}
      />
    </Tabs >
  );
}
