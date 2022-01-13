console.log('https://github.com/hadizz')

const wrongInput = document.getElementById('wrong');
const validInput = document.getElementById('valid');

let translatorLanguage = 'fa';

const copyButton = document.getElementById('copy');

const enToFaDictionary = {
    'q': 'ض',
    'Q': 'ْ',
    'w': 'ص',
    'W': 'ٌ',
    'e': 'ث',
    'E': 'ٍ',
    'r': 'ق',
    'R': 'ً',
    't': 'ف',
    'T': 'ُ',
    'y': 'غ',
    'Y': 'ِ',
    'u': 'ع',
    'U': 'َ',
    'i': 'ه',
    'I': 'ّ',
    'o': 'خ',
    'O': ']',
    'p': 'ح',
    'P': '}',
    '[': 'ج',
    '{': '}',
    ']': 'چ',
    '}': '{',
    'a': 'ش',
    'A': 'ؤ',
    's': 'س',
    'S': 'ئ',
    'd': 'ی',
    'D': 'ي',
    'f': 'ب',
    'F': 'إ',
    'g': 'ل',
    'G': 'أ',
    'h': 'ا',
    'H': 'آ',
    'j': 'ت',
    'J': 'ة',
    'k': 'ن',
    'K': '»',
    'l': 'م',
    'L': '«',
    ';': 'ک',
    ':': ':',
    '\'': 'گ',
    '"': '؛',
    'z': 'ظ',
    'Z': 'ك',
    'x': 'ط',
    'X': 'ٓ',
    'c': 'ز',
    'C': 'ژ',
    'v': 'ر',
    'V': 'ٰ',
    'b': 'ذ',
    'B': '‌',
    'n': 'د',
    'N': 'ٔ',
    'm': 'پ',
    'M': 'ء',
    ',': 'و',
    '<': '<',
    '?': '؟',
};

const faToEnDictionary = {
    'ض': 'q',
    'ْ': 'Q',
    'ص': 'w',
    'ٌ': 'W',
    'ث': 'e',
    'ٍ': 'E',
    'ق': 'r',
    'ً': 'R',
    'ف': 't',
    'ُ': 'T',
    'غ': 'y',
    'ِ': 'Y',
    'ع': 'u',
    'َ': 'U',
    'ه': 'i',
    'ّ': 'I',
    'خ': 'o',
    ']': 'O',
    'ح': 'p',
    '[': 'P',
    'ج': '[',
    '}': '{',
    'چ': ']',
    '{': '}',
    'ش': 'a',
    'ؤ': 'A',
    'س': 's',
    'ئ': 'S',
    'ی': 'd',
    'ي': 'D',
    'ب': 'f',
    'إ': 'F',
    'ل': 'g',
    'أ': 'G',
    'ا': 'h',
    'آ': 'H',
    'ت': 'j',
    'ة': 'J',
    'ن': 'k',
    '»': 'K',
    'م': 'l',
    '«': 'L',
    'ک': ';',
    ':': ':',
    'گ': '\'',
    '؛': '"',
    'ظ': 'z',
    'ك': 'Z',
    'ط': 'x',
    'ٓ': 'X',
    'ز': 'c',
    'ژ': 'C',
    'ر': 'v',
    'ٰ': 'V',
    'ذ': 'b',
    '‌': 'B',
    'د': 'n',
    'ٔ': 'N',
    'پ': 'm',
    'ء': 'M',
    'و': ',',
    '<': '<',
    '.': '.',
    '>': '>',
    '/': '/',
    '؟': '?',
};

const translator = (lang = 'fa') => str =>
    str
        .trim()
        .split('')
        .map(s => {
            if (s === ' ') return ' ';
            if (lang === 'fa') {
                return enToFaDictionary.hasOwnProperty(s) ? enToFaDictionary[s] :
                    faToEnDictionary.hasOwnProperty(s) ? faToEnDictionary[s] :
                        s;
            }
            return faToEnDictionary.hasOwnProperty(s) ? faToEnDictionary[s] :
                enToFaDictionary.hasOwnProperty(s) ? enToFaDictionary[s] :
                    s;
        }).join('');

wrongInput?.addEventListener('input', event => {
    const str = event.target.value;
    validInput.value = translator(translatorLanguage)(str);
})

validInput?.addEventListener('change', event => {
})

copyButton?.addEventListener('click', () => {
    const copyText = validInput.value.trim();
    const message = document.getElementById('copyMessage')

    if (!!copyText) {
        validInput.select();
        validInput.setSelectionRange(0, 99999); /* For mobile devices */

        navigator.clipboard.writeText(copyText);

        message.textContent = 'کپی شد!'
        setTimeout(() => message.textContent = '', 2000);
    }
})