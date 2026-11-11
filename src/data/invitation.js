// All invitation copy lives here — edit this file to personalise the invite.

export const invitation = {
  groom: {
    first: 'Ukkasha',
    full: 'Ukkasha',
    qualification: 'B.Com., BAA (ICAI)', // shown under the name; '' to hide
    parents: 'Naina Mohamed',
  },
  bride: {
    first: 'Hafsa',
    full: 'Hafsa',
    qualification: 'Alima',
    parents: 'Shafeeq Ahamed',
  },

  // Show ﷽ at the top of the hero
  bismillah: true,

  hero: {
    request: 'Together with their families, we joyfully invite you to the Nikkah of',
    closing: 'As two hearts and two families come together in love.',
  },

  blessing: {
    title: 'Blessed Beginning',
    text: 'With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful promise with the love, prayers, and blessings of our families.',
  },

  // ISO date-time used by the countdown; the display strings below are shown as-is.
  eventDate: '2026-12-24T10:30:00+05:30',
  date: {
    label: 'A Date to Hold Close',
    titleBefore: 'Scratch to Reveal',
    titleAfter: 'Our promise begins',
    invited: "You're Invited!",
    long: 'December 24, 2026',
    dayTime: 'Thursday • 10:30 AM',
  },

  countdown: {
    label: 'Until we say Qubool',
    title: 'Counting every\nheartbeat',
  },

  // Optional sections: null hides them.
  // timeline:    { label, title, items: [{ time, title, note }] } — or null to hide
  timeline: {
    label: 'The Celebrations',
    title: 'Order of the Day',
    items: [
      { time: '10:30 AM', title: 'Nikkah', note: 'The marriage ceremony' },
      { time: '01:00 PM', title: 'Valima', note: 'Wedding lunch · same venue' },
    ],
  },

  venue: {
    label: 'The Venue',
    name: 'Chekkadi Masjid',
    address: 'Adirampattinam, Tamil Nadu',
    mapUrl: 'https://share.google/nPoJKhug622JiFi6M',
  },

  // dressCode:   { label, title, text, palette: ['#7a0c18', '#c9a35c', ...] }
  dressCode: null,
  // festivities: { label, title, events: [{ name, when, place, mapUrl }] }
  festivities: null,

  presence: {
    label: 'With all our hearts',
    title: 'Your presence is our present',
    text: 'Your love, blessings, and presence are the greatest gifts we could ever ask for.',
  },

  closing: {
    title: "We can't wait to\ncelebrate with you.",
    footer: 'December 24, 2026 · Chekkadi Masjid, Adirampattinam',
  },

  // Media in /public — the intro film ends on the hero background frame.
  media: {
    introVideo: '/video/intro.mp4',
    introPoster: '/images/intro-poster.jpg',
    heroBg: '/images/hero-bg.jpg',
    scratchFrame: '/images/scratch-frame.webp',
    garland: '/images/garland.webp',
  },

  // Background music — place an mp3 at /public/music.mp3 (the button hides itself if the file is missing)
  music: '/music.mp3',
}
