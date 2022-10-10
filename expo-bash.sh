#!/bin/bash
projectName=$1

if [ -z "$projectName" ]
then #empty name
    echo -e "Error: Please add the project name after the command"
else
    echo -e "Creating new project: $projectName\n"

    expo init $projectName --template blank

    echo -e "$projectName Created successfully\n"

    echo -e "Installing packages\n"

    cd $projectName

    expo install \
    @react-native-community/masked-view \
    react-native-safe-area-context \
    @react-navigation/bottom-tabs \
    @react-native-async-storage/async-storage \
    @react-navigation/core \
    @react-navigation/native \
    @react-navigation/stack \
    expo-localization \
    axios \
    expo-splash-screen \
    expo-status-bar \
    expo-updates \
    formik \
    i18n-js \
    moment \
    react-native-flash-message \
    react-native-gesture-handler \
    react-native-paper \
    react-native-screens \
    react-redux \
    redux \
    react-navigation \
    redux-devtools-extension \
    redux-persist \
    redux-promise \
    redux-thunk \
    underscore

    cd ..

    cp -a ./App/. ./$projectName/

    cd $projectName

    echo ""
    echo "Project has been created successfully.."
    echo "Type 'code .' to open it with VSCode"
fi