import { ThemeOptions } from '@mui/material/styles';
import {grey, red} from '@mui/material/colors';

const lightThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: grey[900],
        },
        error: {
            main: red.A400,
        },
    },
};

export default lightThemeOptions;