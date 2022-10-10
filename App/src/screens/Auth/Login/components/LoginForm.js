import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
// Dependencies
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { AntDesign, Feather } from '@expo/vector-icons';
// Redux
import { useSelector } from 'react-redux';
// Components
import MyText from '../../../../components/UI/MyText';
import { t } from '../../../../i18n';
import { navigate } from '../../../../navigation/RootNavigation';
import Colors from '../../../../utils/Colors';

export const LoginForm = ({ loginProps: { handleChange, values, errors, handleBlur, handleSubmit } }) => {

    const authLoading = useSelector((state) => state?.authReducer?.authLoading);
    const [showPass, setShowPass] = useState(false);

    const onRegisterTextPressed = () => navigate('Register', {})

    return (
        <View>
            <View style={styles.textContainer}>
                <AntDesign name={'user'} size={15} style={{ marginEnd: 5 }} color={Colors.text} />
                <MyText>phone</MyText>
            </View>
            <TextInput
                style={styles.input}
                placeholder={'05XXXXXXXX'}
                placeholderTextColor={Colors.text}
                mode={'flat'}
                onChangeText={handleChange('username')}
                value={values?.username}
                error={errors?.username}
                onBlur={handleBlur('username')}
                keyboardType="decimal-pad"
                theme={{ colors: { text: Colors.text, error: '#B22323', primary: '#595959' }, roundness: 12 }}
            />
            {errors?.username ? <ErrorText error={errors?.username} /> : null}

            <View style={[styles.textContainer, { marginTop: 30 }]}>
                <Feather name={'lock'} size={15} style={{ marginEnd: 5 }} color={Colors.text} />
                <MyText>password</MyText>
            </View>
            <TextInput
                style={styles.input}
                placeholder={t('app.password')}
                placeholderTextColor={Colors.text}
                mode={'flat'}
                onChangeText={handleChange('password')}
                value={values?.password}
                error={errors?.password}
                secureTextEntry={showPass ? false : true}
                onBlur={handleBlur('password')}
                theme={{ colors: { text: Colors.text, error: '#B22323', primary: '#595959' }, roundness: 12 }}
                right={
                    <TextInput.Icon
                        name={showPass ? 'eye' : 'eye-off'}
                        size={24}
                        color={Colors.buttons}
                        style={{ paddingRight: 10 }}
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            {errors?.password ? <ErrorText error={errors?.password} /> : null}

            <TouchableOpacity
                style={styles.loginButton}
                disabled={authLoading}
                activeOpacity={0.8}
                onPress={handleSubmit}>
                {authLoading ?
                    <ActivityIndicator size={'large'} color={'white'} />
                    :
                    <MyText style={styles.loginText}>login</MyText>
                }
            </TouchableOpacity>
            <View style={styles.newHere}>
                <MyText>newHere</MyText>
                <TouchableOpacity onPress={onRegisterTextPressed} activeOpacity={0.8}>
                    <MyText style={styles.signupText}>signup</MyText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginButton: {
        height: 50,
        backgroundColor: Colors.buttons,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginTop: 50,
        // shadow
        shadowColor: '#888888',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    loginText: { color: Colors.white, fontSize: 18 },
    input: {
        width: '100%',
        marginTop: 5,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    forgotPass: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 5
    },
    newHere: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    signupText: {
        color: Colors.text,
        textDecorationLine: 'underline'
    }
})

const ErrorText = ({ error }) => <MyText style={{ color: '#B22323', fontSize: 12 }}>{error}</MyText>