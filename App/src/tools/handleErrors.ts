import { showMessage } from "react-native-flash-message"
import { t } from "../i18n";
import { useDispatch, useSelector } from 'react-redux';

export const handle_API_errors = (errorState: Object, description: string, reset: Function) => {
    const dispatch = useDispatch()

    // server Error
    if (errorState === 500) {
        showMessage({
            message: t('app.serverError'),
            description: description,
            type: 'danger',
            icon: 'auto',
            duration: 3000,
            style: { paddingTop: 35 },
        })
        // wrong data error
    } else if (errorState === 400) {
        showMessage({
            message: t('app.wrongData'),
            description: description,
            type: 'danger',
            icon: 'auto',
            duration: 3000,
            style: { paddingTop: 35 },
        })
    }

    reset();

    return null;
}