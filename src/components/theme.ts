import { css } from 'styled-components';

export const background = "#f4f8fb";
export const contentBackground = "#fff";

export const colors = {
    link: "#26a8ed",
    text: "#3c484e",
    accent: "#0047A0",
    primary: "#CD2E3A",
}

export const font = {
    size: "16px",
    h1: "3em",
    h2: "2em",
    h3: "1.5em",
    h4: "1.2em",
    p: "1.2em",
}

export const maxWidth = 980;

export const breakpoints = {
    huge: 1220,
    large: 1024,
    medium: 768,
    small: 576,
};


const query = (label: string) => (...args: any[]) => css`
@media (min-width: ${breakpoints[label] / 16}em) {
${css(args[0], ...args.splice(1))}
}`;

export const media = {
    huge: query('huge'),
    large: query('large'),
    medium: query('medium'),
    small: query('small')
};
