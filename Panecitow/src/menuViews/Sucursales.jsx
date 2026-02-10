import './Sucursales.css';

const branches = [
    {
        id: 1,
        company: "Crypton Future Media",
        character: "Hogar de Hatsune Miku y Vocaloid en General",
        address: "Sapporo, Hokkaido, Japón",
        description: "El norte helado donde nació la diva número 1. Aquí se cocina la magia del Snow Miku.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3QXB1o5s0mJI42uVnHv9cLocKwTAa8XqwhDVlsgEvz1u61Ph4XqQOXpVFgp4eYp3oruCmU5TxCGVmOFn6wUjMCbw844gCNsw1oFsEi5w_UhmEBo9RPlLc_ZZxqgLX7nI2NnsRNY9zDkk/s1600/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD.jpg", // Torre del Reloj de Sapporo
        color: "#39D5E0" // Cyan Miku
    },
    {
        id: 2,
        company: "Twin Drills / Dreamtonics",
        character: "Territorio Kasane Teto",
        address: "Chiyoda, Tokio, Japón",
        description: "El centro neurálgico donde Teto evolucionó de broma a leyenda SynthV AI.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/640px-Skyscrapers_of_Shinjuku_2009_January.jpg", // Tokyo Skyline
        color: "#FF66AA" // Rojo Teto
    },
    {
        id: 3,
        company: "Yamaha Corporation",
        character: "El Laboratorio Original",
        address: "Hamamatsu, Shizuoka, Japón",
        description: "La ciudad de la música. Aquí se escribió la primera línea de código del motor Vocaloid.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Yamaha_Corporation.jpg", // Hamamatsu Act City
        color: "#8844FF" // Violeta Gakupo/Vocaloid
    }
];

function Sucursales() {
    return (
        <section className="branches-section">
            <h2 className="section-title">📍 Sedes Principales</h2>
            <div className="branches-grid">
                {branches.map((branch) => (
                    <article 
                        key={branch.id} 
                        className="branch-card"
                        style={{ '--card-color': branch.color }} // Pasamos el color como variable CSS
                    >
                        <div className="branch-image">
                            <img src={branch.image} alt={branch.address} />
                            <div className="location-badge">🇯🇵 JP</div>
                        </div>
                        <div className="branch-info">
                            <h3 className="company-name">{branch.company}</h3>
                            <h4 className="character-ref">{branch.character}</h4>
                            <p className="address-text">📍 {branch.address}</p>
                            <p className="description-text">{branch.description}</p>
                            <button className="map-btn">Ver en Mapa</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Sucursales;