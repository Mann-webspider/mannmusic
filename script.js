function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

const options = {
  bottom: '6.4rem', // default: '32px'
  right: 'unset', // default: '32px'
  left: '3.2rem', // default: 'unset'
  time: '1s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#f6f6f6',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

//   const darkmode =  new Darkmode();
// darkmode.toggle();
// console.log(darkmode.isActivated()) // will return true
