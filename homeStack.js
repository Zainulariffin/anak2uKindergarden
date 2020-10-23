import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home';
import State from './components/State';
import Detail from './components/Detail';

const screens = {
    Home: {
        screen: Home
    },
    State: {
        screen: State
    },
    Detail: {
        screen: Detail
    }
    
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);