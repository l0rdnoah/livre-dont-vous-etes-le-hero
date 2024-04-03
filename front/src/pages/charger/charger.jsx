import logo from '../../assets/logo_v1.png';
import ChargerPersonnage from '../../component/charger_personnage/charger_personnage';
import './charger.css';

function Charger() {
  document.title = "Charger";

  const [texte, setTexte] = useState('');


  const fetchData = async () => {
    try {
      sessionStorage.setItem('id_utilisateur', 12);
      console.log('test')
      const id_utilisateur = sessionStorage.getItem('id_utilisateur');
      const response = await fetch(`http://localhost:3000/api/utilisateur/${id_utilisateur}/personnages`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const persos = await response.json();
      setTexte(data[0]['texte']);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTexte("Erreur de chargement des personnages");
    }
  };

  fetchData();
  
  return (
      <div id="wrapper">
        <img id="logo" src={logo} alt="" />
        <div className="text">
          {texte}
        </div>
        <div>
          {persos.map((personnage, index) => (
            <ChargerPersonnage key={index} personnage={personnage} />
          ))}
        </div>
      </div>
  );
}

export default Charger;
