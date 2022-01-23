import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Fonts, Head } from '../components/';
import '../styles/globals.css';

const theme = extendTheme({
	components: {
		Select: {
			defaultProps: {
				size: 'lg',
			},
		},
		Input: {
			defaultProps: {
				size: 'lg',
			},
		},
		Button: {
			defaultProps: {
				size: 'lg',
				variant: 'base',
			},
			variants: {
				base: {},
			},
		},
	},
	fonts: {
		heading: 'Inconsolata-Bold',
		body: 'Inconsolata',
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Head description="Online Editor for Ts, Js, C , Cpp and Python" />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
