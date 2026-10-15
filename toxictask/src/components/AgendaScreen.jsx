import { MaterialIcons } from "@expo/vector-icons";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AgendaScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#f8f9fa]">
      {/* --- HEADER --- */}
      <View className="flex-row items-center justify-between h-16 px-4 bg-[#352044]">
        <View className="flex-row items-center gap-2">
          <View className="relative">
            <View className="w-10 h-10 rounded-full bg-[#1f0b2e] items-center justify-center">
              <MaterialIcons name="pest-control" size={24} color="#be87fd" />
            </View>
            <Text className="absolute -bottom-1 -right-1 bg-[#b5f64c] text-black text-[10px] px-1.5 rounded-full font-bold">
              LVL 2
            </Text>
          </View>
          <View>
            <Text className="text-white text-lg font-bold">Agenda</Text>
            <Text className="text-[#9ad930] text-xs">
              Rango: Flojo Promedio
            </Text>
          </View>
        </View>
        <View className="flex-row gap-4 items-center">
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={22} color="#a186b1" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={22} color="#a186b1" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-[#1f0b2e] items-center justify-center">
            <MaterialIcons name="person" size={18} color="white" />
          </View>
        </View>
      </View>

      {/* --- CONTENIDO PRINCIPAL SCROLLABLE --- */}
      <ScrollView className="flex-1 mb-16" showsVerticalScrollIndicator={false}>
        {/* --- CALENDARIO Y DÍAS --- */}
        <View className="px-4 py-4">
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-2">
              <TouchableOpacity>
                <MaterialIcons name="chevron-left" size={24} color="black" />
              </TouchableOpacity>
              <Text className="text-lg font-bold">Octubre 2024</Text>
              <TouchableOpacity>
                <MaterialIcons name="chevron-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="bg-[#ffdad6] px-2 py-1 rounded-full flex-row items-center">
              <MaterialIcons name="warning" size={14} color="#93000a" />
              <Text className="text-[#93000a] text-xs ml-1 font-bold">
                Semana de alta evasión
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row mt-2"
          >
            {/* Lunes */}
            <TouchableOpacity className="items-center bg-white rounded-xl p-2 min-w-[50px] mx-1 shadow-sm">
              <Text className="text-gray-500 text-[10px] font-bold">LUN</Text>
              <Text className="text-black text-lg font-bold">21</Text>
              <View className="w-1.5 h-1.5 rounded-full bg-[#9ad930] mt-1" />
            </TouchableOpacity>
            {/* Martes */}
            <TouchableOpacity className="items-center bg-white rounded-xl p-2 min-w-[50px] mx-1 shadow-sm">
              <Text className="text-gray-500 text-[10px] font-bold">MAR</Text>
              <Text className="text-black text-lg font-bold">22</Text>
              <View className="flex-row gap-0.5 mt-1">
                <View className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <View className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </View>
            </TouchableOpacity>
            {/* HOY (Miércoles) */}
            <TouchableOpacity className="items-center bg-[#1f0b2e] rounded-xl p-2 min-w-[50px] mx-1 relative shadow-md">
              <View className="absolute -top-1 w-2 h-2 rounded-full bg-[#b5f64c]" />
              <Text className="text-[#b5f64c] text-[10px] font-bold">HOY</Text>
              <Text className="text-white text-lg font-bold">23</Text>
              <MaterialIcons
                name="local-fire-department"
                size={14}
                color="#b5f64c"
              />
            </TouchableOpacity>
            {/* Jueves */}
            <TouchableOpacity className="items-center bg-white rounded-xl p-2 min-w-[50px] mx-1 shadow-sm">
              <Text className="text-gray-500 text-[10px] font-bold">JUE</Text>
              <Text className="text-black text-lg font-bold">24</Text>
              <View className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* --- TARJETA SLOTHBOT IA --- */}
        <View className="bg-[#1f0b2e] mx-4 p-4 rounded-2xl mb-4 shadow-md">
          <View className="flex-row gap-3">
            <View className="w-12 h-12 rounded-xl bg-[#be87fd] items-center justify-center">
              <MaterialIcons name="pest-control" size={28} color="#352044" />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-[#b5f64c] text-xs font-bold flex-row items-center">
                  <MaterialIcons name="psychology" size={12} color="#b5f64c" />{" "}
                  SLOTHBOT IA
                </Text>
                <Text className="bg-[#352044] text-[#a186b1] text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Certeza: 94%
                </Text>
              </View>
              <Text className="text-white text-sm leading-5">
                "Tienes 5 bloques agendados hoy. Las estadísticas dicen que
                procrastinarás 3 viendo reels de recetas que jamás cocinarás."
              </Text>
              <View className="mt-2 bg-[#ffffff1a] self-start px-2 py-1 rounded-full flex-row items-center">
                <MaterialIcons
                  name="hourglass-bottom"
                  size={14}
                  color="#b5f64c"
                />
                <Text className="text-[#b5f64c] text-[11px] ml-1 font-bold">
                  Tiempo útil estimado: 2h 15m (de 8h soñadas)
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* --- ESPACIO PARA LAS TAREAS (Filtros y lista) --- */}
        <View className="px-4 pb-8">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row mb-4"
          >
            <TouchableOpacity className="bg-[#1f0b2e] px-4 py-2 rounded-full mr-2">
              <Text className="text-[#b5f64c] font-bold text-xs">
                Ver Todos (4)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white px-4 py-2 rounded-full mr-2 shadow-sm">
              <Text className="text-gray-600 font-bold text-xs">
                Críticos (2)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white px-4 py-2 rounded-full mr-2 shadow-sm flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-red-500 mr-1" />
              <Text className="text-gray-600 font-bold text-xs">
                Postergados (1)
              </Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Ejemplo de un Bloque de Tarea (Desarrollo de Métricas Q3) */}
          <View className="bg-white rounded-2xl p-4 shadow-md border-t-4 border-t-[#7842b4]">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-[#7842b4] font-bold text-xs">
                ● 14:00 - 15:30 (Quedan 24 min)
              </Text>
              <Text className="bg-[#efdbff] text-[#2b0052] text-[10px] px-2 py-0.5 rounded-full font-bold">
                Pomodoro 45m
              </Text>
            </View>
            <Text className="text-xl font-bold text-black mb-1">
              Desarrollo de Métricas Q3
            </Text>
            <Text className="text-[#1f0b2e] text-[10px] font-bold uppercase tracking-wider mb-3">
              Bloque Intocable • Sin Alt-Tab
            </Text>

            <View className="bg-gray-100 rounded-xl p-3 mb-4">
              <Text className="text-black font-bold text-xs mb-1 flex-row items-center">
                <MaterialIcons name="alt-route" size={14} color="#7842b4" />{" "}
                Plan B Anti-Parálisis (Válido hoy):
              </Text>
              <Text className="text-gray-600 text-xs">
                Si te bloqueas en la query, solo documenta 2 funciones en vez de
                abrir Twitter/X y tirar la toalla.
              </Text>
            </View>

            <View className="flex-row gap-2">
              <TouchableOpacity className="flex-1 bg-[#b5f64c] py-3 rounded-xl flex-row items-center justify-center">
                <MaterialIcons name="check-circle" size={18} color="black" />
                <Text className="text-black font-bold text-xs ml-1 uppercase">
                  Marcar Hecha
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-gray-200 py-3 rounded-xl flex-row items-center justify-center">
                <MaterialIcons name="pause-circle" size={18} color="#ba1a1a" />
                <Text className="text-[#ba1a1a] font-bold text-xs ml-1 uppercase">
                  Pausar (-10 XP)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* --- NAVEGACIÓN INFERIOR (Fijada abajo) --- */}
      <View className="absolute bottom-0 w-full flex-row justify-around bg-[#352044] h-16 items-center pb-2 border-t border-[#ffffff1a]">
        <TouchableOpacity className="items-center">
          <MaterialIcons name="home" size={24} color="#a186b1" />
          <Text className="text-[#a186b1] text-[10px] mt-1">Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="calendar-today" size={24} color="#b5f64c" />
          <Text className="text-[#b5f64c] text-[10px] font-bold mt-1">
            Agenda
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color="#a186b1"
          />
          <Text className="text-[#a186b1] text-[10px] mt-1">Rachas</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="skull" size={24} color="#a186b1" />
          <Text className="text-[#a186b1] text-[10px] mt-1">Roast</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="group" size={24} color="#a186b1" />
          <Text className="text-[#a186b1] text-[10px] mt-1">Social</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
