import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
	--color-primary: #2584ff;
	--color-secondary: #00d9ff;
	--color-accent: #ff3400;
	--color-headings: #1b0760;
	--color-body: #918ca4;
}

//  Typography
html {
	font-size: 62.5%;
}

body {
	font-family: Inter, Arial, Helvetica, sans-serif;
	color: var(--color-body);
	line-height: 1.5;
	font-size: 2.4rem;
}

h1,
h2,
h3 {
	color: var(--color-headings);
}

h1 {
	font-size: 7rem;
}

h2 {
	font-size: 4rem;
}

h3 {
	font-size: 3rem;
	margin-bottom: 1rem;
}

p {
	margin-top: 0;
}

@media screen and(min-width: 64em) {
	body {
		font-size: 1.8rem;
	}
	h1 {
		font-size: 8rem;
	}
	h2 {
		font-size: 4rem;
	}
	h3 {
		font-size: 2.4rem;
	}
}

// Links
a {
	text-decoration: none;
}

.link-arrow {
	color: var(--color-accent);
	text-transform: uppercase;
	font-size: 2rem;
	font-weight: bold;
	&:after {
		content: "-->";
		margin-left: 5px;
		transition: margin 0.25s;
	}
	&:hover {
		&:after {
			margin-left: 10px;
		}
	}
}

@media screen and (min-width: 64em) {
	.link-arrow {
		font-size: 1.5rem;
	}
}
`;

export default GlobalStyle;
