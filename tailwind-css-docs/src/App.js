import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="w-full h-20 flex bg-black text-red-600 items-center justify-between">
        Navbar
      </nav>
      {/* container */}
      <div className="container rounded-3xl h-32 bg-red-500 md:w-1/2 md:mx-auto ">
        Container
      </div>
      <div class="box-border h-32 w-32 p-4 border-4 border-red-500 md:mx-auto"></div>

      <div className="block md:flex lg:flex-row-reverse visible md:invisible">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
      </div>
      <p class="ordinal slashed-zero tabular-nums ...">1234567890</p>
      <div class="w-30">
        <div class="whitespace-pre">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem
          itaque beatae, rem tenetur quia iure, eum natus enim maxime laudantium
          quibusdam illo nihil, reprehenderit saepe quam aliquid odio accusamus.
        </div>
      </div>
      <div class="text-7xl font-extrabold ...">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500">
          Hello world
        </span>
      </div>
    </div>
  );
}

export default App;
