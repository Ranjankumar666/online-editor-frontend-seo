import NextHead from 'next/head';

const Head = ({ title, description }) => {
	return (
		<NextHead>
			<meta charSet="utf-8" />
			<title>{title || `Snippetor`}</title>
			<link rel="canonical" href="https://ranjan.netstorm.in" />
			<meta property="og:type" content="webpage" />
			<meta property="og:title" content={title || `Snippetor`} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content="https://editor.netstorm.in" />
			<meta property="og:site_name" content="editor.netstorm.in" />
			<meta name="description" content="" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title || `Snippetor`} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:site" content="" />
			<meta name="twitter:creator" content="Netstorm" />
			<meta property="og:image" content="" />
			<meta name="twitter:image" content="" />
		</NextHead>
	);
};

export default Head;

{
	/* <meta name="description" content="" />
<meta property="og:type" content="website" />
<meta name="og:title" property="og:title" content="" />
<meta name="og:description" property="og:description" content="" />
<meta property="og:site_name" content="" />
<meta property="og:url" content="" />  
<meta name="twitter:card" content="summary" /> 
<meta name="twitter:title" content="" />
<meta name="twitter:description" content={props.desc} />
<meta name="twitter:site" content="" />
<meta name="twitter:creator" content="" />
<link rel="icon" type="image/png" href="/static/images/favicon.ico" />
<link rel="apple-touch-icon" href="/static/images/favicon.ico" />
<link rel="stylesheet" href="" />
<meta property="og:image" content="" />  
<meta name="twitter:image" content="" />   
<link rel="canonical" href="" /> */
}
