import * as React from 'react';
import * as styles from './App.scss';

const logos = require('./logo.svg');

class App extends React.Component {

  render() {
    // tslint:disable-next-line:no-console
    console.log(styles);
    const { app, logo, header} = styles;
    return (
      <div className={app}>
        <div className={header}>
          <img src={logos} className={logo} alt="logo" />
          <h2>
            Congrats, you now have Sass & CSS Modules in your React project! 
            <span role="img" aria-label="emoji">😎</span></h2>
        </div>
      </div>
    );
  }
}

export default App;
