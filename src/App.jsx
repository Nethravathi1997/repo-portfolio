


function App() {
   const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
     <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />

     <div className="sections">
     <Intro />
     <Portfolio />
     <Projects />
     <Contact />
     </div>
    </div>
  );
}

export default App;
