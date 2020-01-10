import {css, ThemedCssFunction, DefaultTheme} from 'styled-components';


type Breakpoints = {
    small: ThemedCssFunction<DefaultTheme>;
    medium:ThemedCssFunction<DefaultTheme>;
    large: ThemedCssFunction<DefaultTheme>;
};
const breakpoints:any = {
    small: '768px', 
    medium: '1024px',
    large: '1280px',
};

export const colors = { //preferencia na paleta https://material-ui.com/pt/customization/color/
    white: '#fff',
    red900: '#ff1c1c',
    red600:'#ff5656',
    grey100: '#f5f5f5',
    grey700: '#616161',
    grey800: '#424242',
};

export const boxShadow = {
    a: css`box-shadow: 0 2px 4px rgba(0,0,0,.2);`,
};

/**
 * Media mixin
 */
export const media:Breakpoints = Object.keys(breakpoints).reduce((accumulator:any, label) => {
	accumulator[label] = (...args:any[]) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css`${args.join('')}`};
		}
	`;
	return accumulator;
}, {});