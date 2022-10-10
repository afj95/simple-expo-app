// import i18n from 'i18n-js';
// import ar from './ar';
// import en from './en';

// i18n.fallbacks = true;
// i18n.translations = { ar, en };

// i18n.locale = 'ar';

// const t = (name) => {
//     return i18n.t(name);
// }

// export { t };

import ar from './ar';
import en from './en';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
    en: en,
    ar: ar
};

const i18n = new I18n(translations);

i18n.locale = Localization.locale;

i18n.locale = 'ar'

i18n.enableFallback = true;

const t = (name) => {
    return i18n.t(name);
}

export { t, i18n }
