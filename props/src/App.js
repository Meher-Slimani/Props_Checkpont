import "./App.css";
import Profile from "./profile/Profile";
import photo from "./photo2.jpg";

function App() {
  let monNom = "Meher Slimani";
  const handleName = (name) => {
    alert(monNom);
  };

  return (
    <div className="App">
      <Profile
        fullName="Meher Slimani"
        bio="I'm a Fullstack Javascript Developper and it is kind of pure fun !!!"
        profession="Developper"
        handleName={handleName}
        phoneNumber="12345678"
      >
        {photo}
      </Profile>
    </div>
  );
}

export default App;
