/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./resources/views/**/*.blade.php', './App/View/**/*.php', './App/Livewire/**/*.php', './resources/js/**/*.js', './resources/css/**/*.css'],

    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'system-ui', 'sans-serif'],
                inter: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },

    plugins: [
        function ({ addUtilities }) {
            const newFlexItems = {
                '.flexc': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                '.flexb': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },
                '.flexx': {
                    display: 'flex',
                    justifyContent: 'center',
                },
                '.flexy': {
                    display: 'flex',
                    alignItems: 'center',
                },
                '.colc': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                '.colb': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },
                '.colx': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                },
                '.coly': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                },
            };
            addUtilities(newFlexItems);
        },
        function ({ addVariant, e }) {
            addVariant('placeholder-shown', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`placeholder-shown${separator}${className}`)}:placeholder-shown`;
                });
            });
        },
    ],
};
