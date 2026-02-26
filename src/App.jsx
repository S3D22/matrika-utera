import "./App.css";

export default function App() {
  return (
    <div className="site">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbarInner">
          <a className="brand" href="#top">
            <div className="brandName">Mátrika Útera</div>
            <div className="brandTag">CICLO · CUERPO · FUERZA</div>
          </a>

          <nav className="nav">
            <a href="#metodo">Método</a>
            <a href="#libro">Libro</a>
            <a href="#embarazo">Embarazo & Postparto</a>
            <a href="#shop">Shop</a>
          </nav>

          <a className="ctaTop" href="#libro">COMPRAR</a>
        </div>
      </header>

      {/* HERO */}
      <section className="heroBanner" id="top">
        <img className="heroImg" src="/img/hero.jpg" alt="Mátrika Útera" />
        <div className="heroOverlay">
          <div className="heroKicker">Entrenamiento cíclico · ciencia hormonal</div>
          <h1 className="heroTitle">Entrena según tu biología</h1>
          <p className="heroSub">
            Un método para mujeres que quieren entender su energía, su cuerpo y su fuerza
            sin forzarse en un ritmo lineal.
          </p>
          <div className="heroBtns">
            <a className="btnGhost" href="#metodo">EXPLORAR MÉTODO</a>
            <a className="btnGhost" href="#libro">VER LIBRO</a>
          </div>
        </div>
      </section>

      {/* WELCOME / MANIFIESTO */}
      <section className="welcome">
        <div className="welcomeGrid">
          <div className="welcomeImgWrap">
            <img className="welcomeImg" src="/img/welcome.jpg" alt="Welcome" />
          </div>

          <div className="welcomeText">
            <div className="welcomeTitle">Welcome</div>
            <p className="welcomeP">
              Nos enseñaron a entrenar como si nuestro cuerpo fuera lineal.
              Mátrika Útera nace para devolver el ritmo: ciencia hormonal, movimiento
              consciente y estructura real para tu ciclo.
            </p>
            <p className="welcomeP">
              Aquí no entrenas más. Entrenas mejor. Según tu biología.
            </p>

            <a className="btnSoftLight" href="#libro">NUESTRA MISIÓN</a>
          </div>
        </div>
      </section>

      {/* MÉTODO (3 pilares) */}
      <section className="section" id="metodo">
        <div className="sectionHead">
          <h2 className="sectionTitle">El Método Mátrika</h2>
          <p className="sectionSub">
            Ciencia + conciencia cíclica aplicada a entrenamiento, nutrición y vida diaria.
          </p>
        </div>

        <div className="pillars">
          <div className="pillarCard">
            <h3>Ciencia hormonal</h3>
            <p>Entiende estrógenos, progesterona, FSH y LH con claridad y sin ruido.</p>
          </div>
          <div className="pillarCard">
            <h3>Movimiento cíclico</h3>
            <p>Entrena con inteligencia según fase y energía real. Menos fricción, más resultados.</p>
          </div>
          <div className="pillarCard">
            <h3>Ritmo femenino</h3>
            <p>Nutrición, productividad y autocuidado sincronizados con tu ciclo.</p>
          </div>
        </div>
      </section>

      {/* SHOP / PRODUCTOS */}
      <section className="section" id="shop">
        <div className="sectionHead">
          <h2 className="sectionTitle">Shop</h2>
          <p className="sectionSub">
            Empieza por la base. Después iremos sumando programas y herramientas.
          </p>
        </div>

        <div className="productGrid">
          {/* Libro 12€ */}
          <article className="productCard" id="libro">
            <img className="productImg" src="/img/book.jpg" alt="Libro Mátrika" />
            <div className="productBody">
              <div className="productKicker">EDICIÓN FUNDADORA</div>
              <div className="productName">Guía Maestra del Ciclo Menstrual</div>
              <div className="productMeta">PDF · Descarga inmediata</div>
              <div className="productPrice">12,00 EUR</div>

              <ul className="productList">
                <li>4 fases hormonales explicadas + aplicación práctica</li>
                <li>Entrenamiento por fase</li>
                <li>Nutrición hormonal por fase</li>
                <li>Productividad cíclica + rituales sobrios</li>
                <li>Bonus: tracker + planner + registros</li>
              </ul>

              <button
                className="btnDark"
                onClick={() => alert("Aquí conectaremos el pago (Stripe/Gumroad/Payhip)")}
              >
                COMPRAR AHORA
              </button>

              <div className="productNote">
                *Cuando conectemos el pago, esto será compra real con descarga automática.
              </div>
            </div>
          </article>

          {/* Próximos productos */}
          <article className="productCard mini">
            <img className="productImg" src="/img/phase.jpg" alt="Programas por fases" />
            <div className="productBody">
              <div className="productKicker">PRÓXIMAMENTE</div>
              <div className="productName">Entrenamiento por Fases</div>
              <div className="productMeta">Sistema mensual · progresiones</div>
              <div className="productPrice">—</div>
              <button className="btnOutline" disabled>COMING SOON</button>
            </div>
          </article>

          <article className="productCard mini" id="embarazo">
            <img className="productImg" src="/img/preg.jpg" alt="Embarazo y postparto" />
            <div className="productBody">
              <div className="productKicker">PRÓXIMAMENTE</div>
              <div className="productName">Embarazo & Postparto</div>
              <div className="productMeta">Trimestres · parto · recuperación</div>
              <div className="productPrice">—</div>
              <button className="btnOutline" disabled>COMING SOON</button>
            </div>
          </article>
        </div>
      </section>

      {/* BANNER FINAL (tipo ON SALE) */}
      <section className="saleBanner">
        <img className="saleImg" src="/img/sale.jpg" alt="Edición fundadora" />
        <div className="saleOverlay">
          <div className="saleTitle">EDICIÓN FUNDADORA</div>
          <div className="saleSub">Precio especial · 12€ · por tiempo limitado</div>
          <a className="btnGhost" href="#libro">SHOP NOW</a>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Mátrika Útera</div>
        <div className="footerSmall">Ciencia + conciencia cíclica</div>
      </footer>
    </div>
  );
}