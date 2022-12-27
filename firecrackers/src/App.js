/** @jsxRuntime classic /
/** @jsx jsx */
import { css } from "@emotion/react";
import { jsx } from "@emotion/react";
import { useTheme } from "emotion-theming";
import Fireworks from 'react-native-fireworks'

function App({ isDark, setIsDark }) {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        height: 100vh;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}
    >
      {!isDark && <h1>Lets have a firecracker show</h1>}
      {!isDark && <h2>Lets celebrate together</h2>}
      {isDark && <h1>Happy New Year</h1>}
      {isDark && <h2>!!! Welcome to 2023 !!!</h2>}
      <button
        css={css`
          margin-top: 30px;
          border: 2px solid ${theme.buttonBorder};
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 14px 28px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Turn of the lights !!!
      </button>
      {isDark && <Fireworks/>}
      {isDark && 
        <Fireworks
          speed={3}
          density={8}
          colors={['#ff0','#ff3','#cc0','#ff4500','#ff6347']}
          iterations={100}
          height={150}
          width={100}
          zIndex={2}
          circular={true}
       />}
    </div>
  );
}

export default App;
