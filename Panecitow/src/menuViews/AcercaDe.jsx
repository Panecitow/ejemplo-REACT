import './AcercaDe.css';
function AcercaDe() {
    return (
        <div className='about-container'>
            <header className="about-header">
                <h1>VocaFans</h1>
                <p className="subtitle">Conectando el mundo virtual con tu realidad</p>
            </header>

            <div className="cards-grid">
                {/* Tarjeta 1: Misión */}
                <section className="info-card">
                    <div className="icon">🎵</div>
                    <h2>¿Qué hacemos?</h2>
                    <p>
                        Somos el puente entre tu primera nota y tu obra maestra. 
                        Nos dedicamos a guiar tanto a los nuevos <strong>Masters</strong> como a los fans veteranos, 
                        dándole el reflector a los artistas emergentes que mantienen vivo el latido de Vocaloid, UTAU y más.
                    </p>
                </section>

                {/* Tarjeta 2: Visión */}
                <section className="info-card">
                    <div className="icon">💾</div>
                    <h2>¿Cómo lo hacemos?</h2>
                    <p>
                        Transformamos la pasión en herramientas. Lo que nació como un refugio digital hoy es una biblioteca viva: 
                        curamos <strong>sintetizadores gratuitos</strong>, facilitamos licencias oficiales y preservamos 
                        el legado visual y sonoro de la comunidad (MMD, VSQx y clásicos).
                    </p>
                </section>

                {/* Tarjeta 3: Ética (Disclaimer) */}
                <section className="info-card warning-card">
                    <div className="icon">🛡️</div>
                    <h2>¿Quiénes somos?</h2>
                    <p>
                        <strong>Fans apoyando a Creadores.</strong> Creemos en el juego limpio. 
                        No promovemos la piratería ni descargas ilegales. Promovemos el uso ético; 
                        porque apoyar a los desarrolladores oficiales es la única forma de que la música nunca pare.
                    </p>
                </section>
            </div>
            {/* --- AQUÍ COMIENZA LA NUEVA SECCIÓN LEGAL --- */}
            <div className="legal-section">
                <h3>⚖️ Aviso Legal y Términos de Uso</h3>
                
                <div className="legal-content">
                    <p><strong>1. Propiedad Intelectual:</strong> VocaFans es un proyecto comunitario sin fines de lucro. Todos los personajes, nombres, logotipos y software mencionados (incluyendo pero no limitado a Vocaloid™, UTAU™, Synthesizer V™) son marcas registradas de sus respectivos propietarios (Yamaha Corporation, Crypton Future Media, Internet Co., Ltd., etc.). El uso de material visual se realiza bajo los términos de "Fair Use" con fines educativos e informativos.</p>
                    
                    <p><strong>2. Descargo de Responsabilidad:</strong> Este sitio actúa únicamente como un índice y repositorio de información. VocaFans no aloja, distribuye ni promueve software pirata o "crackeado". Los enlaces a descargas externas son responsabilidad de sus respectivos alojadores.</p>
                    
                    <p><strong>3. Responsabilidad del Usuario:</strong> El usuario final asume total responsabilidad por el uso que dé a las herramientas y recursos aquí mostrados. Recomendamos encarecidamente adquirir las licencias oficiales para apoyar el desarrollo de la industria.</p>
                </div>
                
                <p className="copyright">© 2026 VocaFans Project. Hecho con 🩵 por fans para fans.</p>
            </div>
        </div>
    );


}

export default AcercaDe;