import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9b7fad',
            main: '#6b517c',
            dark: '#3f2850',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#ffb7bb',
            main: '#de868b',
            dark: '#aa585e',
            contrastText: '#000000'
        }
    }
})