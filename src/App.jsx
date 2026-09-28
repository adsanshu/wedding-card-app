import "./index.css";

function App() {
  return (
    <div className="wedding-site">
      {/* Navigation */}
      <header className="navbar">
        <div className="brand">Our Wedding</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#invitation">Invitation</a>
          <a href="#events">Events</a>
          <a href="#memories">Memories</a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="hero">
          <div className="hero-decoration hero-decoration-left">❦</div>

          <div className="hero-content">
            <p className="eyebrow">Together with their families</p>

            <p className="small-title">YOU ARE CORDIALLY INVITED</p>

            <h1>
              A Beautiful
              <span>Beginning</span>
            </h1>

            <div className="ornament">✦ ❧ ✦</div>

            <p className="couple-name">
              Bride <span>&</span> Groom
            </p>

            <p className="wedding-date">
              11 · 12 · 2026
            </p>

            <button className="primary-button">
              View Invitation
            </button>
          </div>

          <div className="hero-decoration hero-decoration-right">❧</div>
        </section>

        {/* Invitation */}
        <section id="invitation" className="content-section">
          <p className="section-label">THE INVITATION</p>

          <h2>
            With love,
            <span>we invite you</span>
          </h2>

          <p className="section-text">
            Two hearts, two families and one beautiful journey.
            We would be delighted to celebrate this special day
            with you.
          </p>
        </section>

        {/* Events */}
        <section id="events" className="events-section">
          <p className="section-label">OUR CELEBRATIONS</p>

          <h2>
            Wedding
            <span>Events</span>
          </h2>

          <div className="event-grid">
            <article className="event-card">
              <div className="event-icon">❀</div>
              <h3>Haldi</h3>
              <p>10 December · 11:00 AM</p>
            </article>

            <article className="event-card">
              <div className="event-icon">✦</div>
              <h3>Mehndi</h3>
              <p>10 December · 5:00 PM</p>
            </article>

            <article className="event-card">
              <div className="event-icon">♡</div>
              <h3>Wedding</h3>
              <p>11 December · 7:00 PM</p>
            </article>
          </div>
        </section>

        {/* Memories */}
        <section id="memories" className="content-section memories-section">
          <p className="section-label">OUR STORY</p>

          <h2>
            Moments to
            <span>remember</span>
          </h2>

          <p className="section-text">
           
