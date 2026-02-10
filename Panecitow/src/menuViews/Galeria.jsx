

const galleryImages = [
    { id: 1, src: "https://i.pinimg.com/736x/a7/0a/73/a70a7370f41ce7de2be1d70f0a69c5e3.jpg", title: "Teto Territory" },
    { id: 2, src: "https://wallpapers-clan.com/wp-content/uploads/2023/12/hatsune-miku-pfp-29.jpg", title: "Miku V4X" },
    { id: 3, src: "https://i.pinimg.com/736x/b4/12/43/b412430230733a29ed0a8a20f348d786.jpg", title: "Neru Phone" },
    { id: 4, src: "https://compote.slate.com/images/cbd09c56-0bb9-4168-80a7-6b88b616e497.png", title: "Live concert" },
    { id: 5, src: "https://i.scdn.co/image/ab67616d0000b2739fac3d3a0102bcc19f5c0f69", title: "Triple Baka" },
    { id: 6, src: "https://images.gamebanana.com/img/ss/wips/68a56b5ca7609.jpg", title: "Neru Break" },
    { id: 7, src: "https://japanimehunter.com/cdn/shop/files/90068493-661E-4C2E-9AE3-04041A00BA24.jpg?v=1714209837&width=1445", title: "Miku synthesizer" },
    { id: 8, src: "https://pbs.twimg.com/media/GaKfMkObEAABy1Q.png", title: "Kasane Tetanos" },
];

function Galeria() {
    return (
        <section className="gallery-section">
            <h2 className="section-title">Our Gallery ✨</h2>
            <div className="gallery-grid">
                {galleryImages.map((img) => (
                    <div key={img.id} className="gallery-item">
                        <img src={img.src} alt={img.title} />
                        <div className="overlay">
                            <h3>{img.title}</h3>
                            <span className="icon">📷</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Galeria;