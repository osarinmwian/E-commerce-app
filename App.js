import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigation/MainNavigation';
import { Providers } from './src/redux/provider';

export default function App() {
   return (
   
    <Providers>    
    <NavigationContainer> 
      <MainNavigation/> 
    </NavigationContainer>
    </Providers>
    
  );
}
