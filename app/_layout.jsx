/*import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (<Stack>
    <Stack.Screen 
      name="pomodoro" 
      options={{ headerShown: false }}
    />
    </Stack>);
}*/

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#021123' },
          headerTintColor: '#fff',
          drawerStyle: { backgroundColor: '#021123' },
          drawerLabelStyle: { color: '#fff' },
          headerShadowVisible: false
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ headerShown: false /*esconde icone do drawer no header*/, 
          drawerItemStyle: { display: 'none' } }} /*esconde página do drawer*/
        />
        <Drawer.Screen
          name="add-task/index"
          options={{ drawerItemStyle: { display: 'none' }, 
          title: '', 
          headerLeft: ()=>{
            return <Ionicons name='arrow-back' size={24} color='#FFF' style={{marginLeft: 16}} onPress={() => router.navigate('/tasks')}/>
          }
        }} 
        />
        <Drawer.Screen
          name="pomodoro"
          options={{ drawerLabel: 'Timer', /*nome da pagina no drawer*/
            title: ""}}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{ drawerLabel: 'Lista de Tarefas', title: "" }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}