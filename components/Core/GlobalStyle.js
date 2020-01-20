import css from 'styled-jsx/css'

export default css.global`
*{
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: 'Prompt', sans-serif;
    margin: 0;
    padding: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  canvas {
    display: block;
  }
 
@font-face {
    font-family: 'Prompt-light' ;
    src: url('/font-family/Prompt/Prompt-Light.woff2') , url('/font-family/Prompt/Prompt-Light.woff');
    font-weight: medium;
    font-style: normal;
    font-display: swap; 
}
@font-face {
    font-family: 'Prompt-regular';
    src:  url('/font-family/Prompt/Prompt-Regular.woff2') , url('/font-family/Prompt/Prompt-Regular.woff');
    font-weight: medium;
    font-style: normal;
    font-display: swap; 
  }
@font-face {
    font-family: 'Prompt-medium';
    src: url('/font-family/Prompt/Prompt-Medium.woff2') ,  url('/font-family/Prompt/Prompt-Medium.woff'); 
    font-weight: medium;
    font-style: normal;
    font-display: swap; 
  }
  @font-face {
    font-family: 'ChakraPetch-Bold';
    src: url('/font-family/Chakra/ChakraPetch-Bold.woff2') , url('/font-family/Chakra/ChakraPetch-Bold.woff');
    font-weight: medium;
    font-style: normal;
    font-display: swap; 
  }
  @font-face {
    font-family: 'ChakraPetch-Regular';
    src: url('/font-family/Chakra/ChakraPetch-Regular.woff2') , url('/font-family/Chakra/ChakraPetch-Regular.woff');
    font-weight: medium;
    font-style: normal;
    font-display: swap; 
  }
 
`