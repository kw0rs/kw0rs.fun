import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow">
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
