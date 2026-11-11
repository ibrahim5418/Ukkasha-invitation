// All invitation copy lives here — edit this file to personalise the invite.
// NOTE: the names, date, venue and map link below are placeholders — replace them with the real details.

export const invitation = {
  groom: {
    first: 'Groom',
    full: 'N. Groom Full Name',
    parents: 'Father Name',
  },
  bride: {
    first: 'Bride',
    full: 'F. Bride Full Name',
    parents: 'Father Name',
  },

  // Show ﷽ at the top of the hero
  bismillah: true,

  hero: {
    request: 'Together with their families, we joyfully invite you to the engagement of',
    closing: 'As two hearts and two families come together in love.',
  },

  blessing: {
    title: 'A Blessed Beginning',
    text: 'With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful promise with the love, prayers, and blessings of our families.',
  },

  // ISO date-time used by the countdown; the display strings below are shown as-is.
  eventDate: '2027-01-15T19:00:00+05:30',
  date: {
    label: 'A Date to Hold Close',
    titleBefore: 'Scratch to Reveal',
    titleAfter: 'Our promise begins',
    invited: "You're Invited!",
    long: 'January 15, 2027',
    dayTime: 'Friday • 07:00 PM',
  },

  countdown: {
    label: 'Until the rings are exchanged',
    title: 'Counting every\nheartbeat',
  },

  // Optional sections: null hides them.
  // timeline:    { label, title, items: [{ time, title, note }] }
  timeline: null,

  venue: {
    label: 'The Venue',
    name: 'Venue',
    address: 'Area, City',
    mapUrl: 'https://maps.google.com/?q=Venue+Area+City',
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
    footer: 'January 15, 2027 · Venue, Area',
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
