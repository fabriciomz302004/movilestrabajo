import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegistroScreen from "../screens/RegistroScreen";
import GaleriaScreen from "../screens/GaleriaScreen";
import CalcularScreen from "../screens/CalcularScreen";
import BoletosScreen from "../screens/BoletosScreen";
import ListaLocalScreen from "../screens/ListaLocalScreen";
import ListaExternaScreen from "../screens/ListaExternaScreen";


const Tab = createBottomTabNavigator()

function MyTabs(){
    return (
        <Tab.Navigator initialRouteName="Local">
           {/* <Tab.Screen  name="Welcome" component={WelcomeScreen}/>*/}
            <Tab.Screen  name="Registro" component={RegistroScreen}/>
            <Tab.Screen  name="Galeria" component={GaleriaScreen}/>
            <Tab.Screen  name="Calculo" component={CalcularScreen}/>
            <Tab.Screen  name="Boletos" component={BoletosScreen}/>
            <Tab.Screen  name="Local" component={ListaLocalScreen}/>
            <Tab.Screen name="Externo" component={ListaExternaScreen}/>
        
        </Tab.Navigator>
    )
}
    export default function Navegador(){
        return(
        <NavigationContainer>
        <MyTabs/>
        </NavigationContainer>
        )
    }
