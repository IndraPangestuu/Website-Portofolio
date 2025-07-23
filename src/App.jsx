import ThemeProvider from './components/layout/ThemeProvider';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
