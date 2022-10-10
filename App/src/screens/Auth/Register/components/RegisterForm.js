import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
// Dependencies
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
// Redux
import { useSelector } from 'react-redux';
// Components
import MyText from '../../../../components/UI/MyText';
import { t } from '../../../../i18n';
import { goBack } from '../../../../navigation/RootNavigation';
import Colors from '../../../../utils/Colors';

export const RegisterForm = ({ RegisterProps: { handleChange, values, errors, handleBlur, handleSubmit } }) => {
    const isLoading = useSelector(state => state?.authReducer?.isLoading);
    const [showPass, setShowPass] = useState(false);

    const onloginTextPressed = () => goBack()

    return (
        <View>
            <View style={styles.textContainer}>
                <AntDesign name={'user'} size={15} style={{ marginEnd: 5 }} color={Colors.appWhite} />
                <MyText>name</MyText>
            </View>
            <TextInput
                style={styles.input}
                placeholder={t('app.name')}
                placeholderTextColor={Colors.text}
                mode={'flat'}
                onChangeText={handleChange('name')}
                value={values?.name}
                error={errors?.name}
                onBlur={handleBlur('name')}
                theme={{ colors: { text: Colors.text, error: '#B22323', primary: '#595959' }, roundness: 12 }}
            />
            {errors?.name ? <ErrorText error={errors?.name} /> : null}

            <View style={styles.textContainer}>
                <Entypo name={'mobile'} size={15} style={{ marginEnd: 5 }} color={Colors.appWhite} />
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

            <View style={styles.textContainer}>
                <Feather name={'lock'} size={15} style={{ marginEnd: 5 }} color={Colors.appWhite} />
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

            {isLoading ?
                <View
                    style={styles.registerButton}>
                    <ActivityIndicator size={'large'} color={'white'} />
                </View>
                :
                <TouchableOpacity
                    style={styles.registerButton}
                    activeOpacity={0.8}
                    onPress={handleSubmit}>
                    <MyText style={styles.signupText}>signup</MyText>
                </TouchableOpacity>
            }
            <View style={styles.haveAccount}>
                <TouchableOpacity onPress={onloginTextPressed} activeOpacity={0.8}>
                    <MyText style={styles.loginText}>login</MyText>
                </TouchableOpacity>
                <MyText>haveAccount</MyText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
    registerButton: {
        height: 50,
        backgroundColor: Colors.buttons,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        // shadow
        shadowColor: '#888888',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    input: {
        marginTop: 5,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    haveAccount: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    signupText: { color: Colors.white, fontSize: 18 },
    loginText: {
        color: Colors.buttons,
        textDecorationLine: 'underline'
    }
})

const ErrorText = ({ error }) => <MyText style={{ color: '#B22323', fontSize: 12 }}>{error}</MyText>