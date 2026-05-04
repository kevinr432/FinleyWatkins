import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const tickets = [
  {
    name: 'Best Seats',
    subtitle: 'VIP Front Row',
    price: '$35',
    note: 'Closest view of the stage',
    url: 'https://square.link/u/bPtxOHod',
    className: 'red'
  },
  {
    name: 'Second Best Seats',
    subtitle: 'VIP Second and Third Rows',
    price: '$30',
    note: 'Premium reserved seating',
    url: 'https://square.link/u/ksj2oFpb',
    className: 'green'
  },
  {
    name: 'Third Best Seats',
    subtitle: 'VIP Fourth and Fifth Rows',
    price: '$25',
    note: 'Great reserved seating',
    url: 'https://square.link/u/cob0ti0B',
    className: 'blue'
  },
  {
    name: 'Main Floor',
    subtitle: 'Every Seat at The Melody is Good',
    price: '$15',
    note: 'General admission main floor seating',
    url: 'https://square.link/u/fpXJrZyr',
    className: 'sky'
  },
  {
    name: 'Balcony',
    subtitle: 'Balcony seating',
    price: '$10',
    note: 'Affordable view from above',
    url: 'https://square.link/u/CXUPZQnq',
    className: 'purple'
  }
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <img className="marquee" src="/assets/melody-marquee.jpg" alt="Melody Theater marquee advertising Finley Watkins" />
        <div className="heroText">
          <p className="eyebrow">Live at The Melody Theater</p>
          <h1>Finley Watkins</h1>
          <h2>Elvis and More</h2>
          <p className="date">Saturday, June 13 · 7:00 PM</p>
          <p className="address">301 S. Main St., Leachville, AR 72438</p>
        </div>
      </section>

      <section className="intro">
        <img className="performer" src="/assets/finley.jpg" alt="Finley Watkins performing" />
        <div>
          <p className="label">A tribute to Elvis and more</p>
          <h2>Reserve your seats now</h2>
          <p>
            Join us for a memorable night of music at The Melody Theater. Choose your ticket option below,
            then complete your purchase through Square.
          </p>
        </div>
      </section>

      <section className="tickets" aria-label="Ticket options">
        {tickets.map((ticket) => (
          <a key={ticket.name} className={`ticket ${ticket.className}`} href={ticket.url} target="_blank" rel="noreferrer">
            <div>
              <h3>{ticket.name}</h3>
              <p className="subtitle">{ticket.subtitle}</p>
              <p className="note">{ticket.note}</p>
            </div>
            <div className="buyBox">
              <span className="price">{ticket.price}</span>
              <span className="buy">Buy Tickets</span>
            </div>
          </a>
        ))}
      </section>

      <section className="seatingSection">
        <h2>Seating Guide</h2>
        <p>Use this chart to compare the seating areas before choosing your ticket option.</p>
        <img className="seating" src="/assets/seating.png" alt="Melody Theater seating chart" />
      </section>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
