import { SafeAreaView, Text, View } from 'react-native';
import mascara from './css/style';

export default function App() {
  return (
    <SafeAreaView style={mascara.container}>
      <Text style={mascara.paragraph}>Aula 5</Text>
      <View style={mascara.cx1}></View>
      <Text style={mascara.titulo}>Suzano</Text>
      <View style={mascara.cx2}></View>
    </SafeAreaView>
  );
}
