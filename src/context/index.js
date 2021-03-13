import GlobalStyle from "components/styles/GlobalStyle";

const AppProviders = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default AppProviders;
