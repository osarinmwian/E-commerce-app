import React, { useState } from 'react'
import { View, Text, StyleSheet, 
  TouchableOpacity, Image, TextInput,  Alert , 
  KeyboardAvoidingView, ScrollView, Platform} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants/theme';
import Button from '../../../component/button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setUserLogin } from '../../../redux/loginSlice';
const Login =() =>{
  const signUpData = useAppSelector((state) => state.signup);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
const [secureTextEntry, setSecureTextEntry] = useState(true)
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .required("Email field is required")
      .matches(
        /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/,
        "Invalid email address",
      ),
    password: Yup
    .string()
    .required("Password field is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+@^_])[\w!#$%&()*+@^]{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character (!@#$%^&*()_+)",
    ),
    
  });
  const handleSubmit = async (values) => {
    setIsLoading(true);
    setTimeout(() => {
      const { email: signUpEmail, password: signUpPassword } = signUpData;
      if (values.email !== signUpEmail || values.password !== signUpPassword) {
        Alert.alert('Error', 'Invalid user details.Please create an account');
      } else {
        Alert.alert('Success', 'Login Successful');
        dispatch(setUserLogin(signUpData));
        navigation.navigate('BottomTabNavigation');
      }

      setIsLoading(false);
    }, 2000); 
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={150}
      style={{ height: "100%" }}
      >
      <ScrollView
       bounces={false}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
        paddingBottom: SIZES.xSmall,
        
       }}
       >
       <Image style={styles.cover} source={require('../../../assets/images/bk.png')}/>
       <Text style={styles.welcomeText}>Log in to your account</Text>
       <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, values, errors, setFieldTouched, touched }) => (
            <View>
                <View style={styles.inputWrapper}>
                
              <View style={styles.inputContainer}>
              <TextInput
                placeholder='Email'
                onFocus={()=>{setFieldTouched("email")}}
                onBlur={()=>{setFieldTouched("email", "")}}
                value={values.email}
                onChangeText={handleChange("email")}
                autoCapitalize='none'
                autoCorrect={false} 
                style={{flex: 1}}
                />
              </View>
              {touched.email && errors.email  &&(
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              </View>

              <View style={styles.inputWrapper}>
                
                <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Password'
                  onFocus={()=>{setFieldTouched("password")}}
                  onBlur={()=>{setFieldTouched("password", "")}}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  autoCapitalize='none'
                  autoCorrect={false} 
                  secureTextEntry={secureTextEntry}
                  style={{flex: 1}}
                  />
                  <TouchableOpacity
                    onPress={() => setSecureTextEntry((prev) => !prev)}
                    style={styles.secure}
                  >
                    <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="black" />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password  &&(
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
                </View>
                <Button
                title={isLoading ? 'Logging In...' : 'LOGIN'}
                onPress={handleSubmit}
              />
              <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}         
                  >
                 <Text style={styles.text}>New here? Setup your account</Text>
                  </TouchableOpacity>
                  
            </View>
          )}
        </Formik>
      
    </ScrollView>
    </KeyboardAvoidingView>
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
    container: {
  marginHorizontal: 12 ,
  flex: 1 
    },  
    cover: {
        height: SIZES.height/2.4,
        width: SIZES.width-60,
        resizeMode: "contain",
        marginBottom: SIZES.xxLarge
      },
      label: {
        fontSize: SIZES.xSmall,
        marginBottom: SIZES.xxSmall,
        textAlign: "left"
      },
      
      inputContainer: {
       backgroundColor: COLORS.lightWhite,
        borderColor: COLORS.offwhite,
          borderWidth: SIZES.xxSmall -4.7,
         height: SIZES.medium * 3.5,
         borderRadius: SIZES.small,
         paddingHorizontal: SIZES.small,
         flexDirection: "row",
         justifyContent: "space-between"
      },

      inputWrapper: {
        marginBottom: SIZES.large
      },
      errorMessage: {
        color: COLORS.red,
        marginTop: 5,
        fontSize: SIZES.small,
        marginLeft: 5
      },
      secure: {
        justifyContent: "center", 
        alignItems: "center"
      },
      text: {
        marginVertical: SIZES.medium,
        textAlign: "center"
      },
      welcomeText:{
        marginVertical: SIZES.medium,
        textAlign: "center",
        fontSize: SIZES.medium +4
      }
  });