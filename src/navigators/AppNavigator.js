import React, { Component } from 'react';  
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { isReadyRef, navigationRef, navigate } from './NavgationService';
import { connect } from 'react-redux'
import { checkIfLogin } from '../redux/actions/AuthActions';
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

class AppNavigator extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.checkIfLogin();
  }

  render(){ 
    if (this.props.showSplash) {
      // We haven't finished checking for the token yet
      return <SplashScreen />;
    }
    else{
      return(
      <SafeAreaView style={{ flex:1 }}>
        <NavigationContainer 
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}
        >
          <Stack.Navigator headerMode="none" > 
          { !this.props.isLoggedIn ? 
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
            </>
            :
            <>
              <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
            </>
        }
          </Stack.Navigator> 
        </NavigationContainer>
      </SafeAreaView>
    )
  } 
}
}


const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.Auth.isLoggedIn,
    showSplash: state.Auth.showSplash
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  checkIfLogin: () => dispatch(checkIfLogin())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
