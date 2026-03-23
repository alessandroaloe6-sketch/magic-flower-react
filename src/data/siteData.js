import foto1 from '../assets/img_gallery/foto1.jpg'
import foto2 from '../assets/img_gallery/foto2.jpg'
import foto3 from '../assets/img_gallery/foto3.jpg'
import foto4 from '../assets/img_gallery/foto4.jpg'

// ── Informazioni di contatto ──────────────────────────────
export const CONTACT = {
  phone: '+39 351 411 76 70',
  phoneHref: 'tel:+393514117670',
  whatsapp: 'https://wa.me/393514117670',
  email: 'aloerosy7@gmail.com',
  address: 'Viale 2 Giugno 29',
  city: "40064 Ozzano dell'Emilia (BO)",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Viale+2+Giugno+29,+40064+Ozzano+dell'Emilia+BO+Italy",
  instagram: 'https://www.instagram.com/magicflowersandevents?igsh=ZnAyZmc2YTR2OWd2',
  facebook: 'https://www.facebook.com/share/1FknWAgdTk/',
}

// ── Orari ─────────────────────────────────────────────────
export const ORARI = [
  { giorno: 'Lunedì – Sabato',  orario: '9:00 – 12:30 / 16:00 – 19:00' },
  { giorno: 'Domenica',         orario: '9:00 – 13:00 (solo invernale)' },
]

export const ORARI_ESTATE = [
  { giorno: 'Lunedì – Venerdì', orario: '9:00 – 13:00 / 16:00 – 19:30' },
  { giorno: 'Sabato',           orario: '9:00 – 13:00' },
  { giorno: 'Domenica',         orario: 'Chiuso' },
]

// ── Navigazione ───────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#process',   label: 'Come funziona' },
  { href: '#eventi',    label: 'Servizi' },
  { href: '#matrimoni', label: 'Matrimoni' },
  { href: '#galleria',  label: 'Galleria' },
  { href: '#about',     label: 'Chi siamo' },
  { href: '#contatti',  label: 'Contatti' },
]

// ── Badge Hero ────────────────────────────────────────────
export const HERO_BADGES = [
  { icon: '💍', title: 'Matrimoni',         desc: 'Cerimonie & ricevimenti da sogno' },
  { icon: '🎊', title: 'Feste & Anniversari', desc: "18°, 25°, 50° e ogni ricorrenza" },
  { icon: '⛪', title: 'Cerimonie Religiose', desc: 'Comunioni, cresime, battesimi' },
  { icon: '🎁', title: 'Bomboniere & Regali', desc: 'Selezione artigianale su misura' },
]

// ── Steps Process ─────────────────────────────────────────
export const STEPS = [
  {
    num: '1',
    title: 'Ci conosciamo',
    text: 'Vieni in negozio o contattaci: ascoltiamo la tua storia, i tuoi gusti e le tue aspettative in un incontro gratuito e senza impegno.',
  },
  {
    num: '2',
    title: 'Progettiamo insieme',
    text: 'Creiamo un concept visivo personalizzato: moodboard, palette colori e proposte di allestimento studiate apposta per te.',
  },
  {
    num: '3',
    title: 'Organizziamo tutto',
    text: 'Ci occupiamo di ogni dettaglio: fiori, allestimenti, decorazioni e coordinamento. Tu devi solo emozionarti.',
  },
  {
    num: '4',
    title: 'Il grande giorno',
    text: "Il giorno dell'evento siamo presenti per la supervisione e l'allestimento finale, garantendo un risultato perfetto.",
  },
]

// ── Servizi / Events ──────────────────────────────────────
export const EVENTI = [
  { num: '01', icon: '💍', title: 'Matrimoni',          text: 'Allestimenti completi per cerimonia e ricevimento. Bouquet, archi floreali, centrotavola e scenografie su misura per il giorno più bello della tua vita.' },
  { num: '02', icon: '🥂', title: 'Anniversari',        text: 'Dal 25° al 50° e oltre. Rinnova la magia del vostro amore con allestimenti eleganti per ogni anniversario speciale.' },
  { num: '03', icon: '🎂', title: '18° Compleanno',     text: 'Un traguardo importante che merita una festa indimenticabile. Scenografie, archi, centrotavola e decorazioni a tema personalizzato.' },
  { num: '04', icon: '✝️', title: 'Comunioni & Cresime', text: 'Decorazioni delicate ed eleganti per i sacramenti dei tuoi figli. Composizioni floreali, addobbi chiesa e salone.' },
  { num: '05', icon: '👶', title: 'Battesimi',           text: 'Allestimenti teneri e raffinati per accogliere il tuo bambino. Composizioni pastello e scenografie per questo momento di gioia.' },
  { num: '06', icon: '🏢', title: 'Eventi Aziendali',   text: "Allestimenti professionali per gala dinner, inaugurazioni e presentazioni. Decorazioni che valorizzano l'immagine della tua azienda." },
  { num: '07', icon: '🌹', title: '25° Anniversario',   text: 'Le nozze d\'argento: un traguardo straordinario. Allestimenti romantici in tema argento e bianco con fiori freschi su misura.' },
  { num: '08', icon: '👑', title: '50° Anniversario',   text: "Le nozze d'oro: mezzo secolo d'amore. Scenografie dorate, composizioni sontuose e atmosfera davvero magica." },
  { num: '09', icon: '🎁', title: 'Bomboniere & Regali', text: 'Ampia selezione di bomboniere artigianali e articoli da regalo per ogni occasione. Ogni dettaglio curato con gusto e creatività.' },
]

// ── Wedding features ──────────────────────────────────────
export const WEDDING_FEATURES = [
  'Consulenza personalizzata e sopralluogo gratuito',
  'Allestimento floreale cerimonia e ricevimento',
  'Bouquet sposa, boutonnieres e addobbi damigelle',
  'Archi floreali, centrotavola e scenografie su misura',
  "Coordinamento e supervisione il giorno dell'evento",
  'Preventivo dettagliato senza impegno',
]

export const WEDDING_BOXES = [
  { icon: '🌸', title: 'Fiori Freschi di Stagione', text: 'Selezioniamo personalmente i fiori migliori per garantire freschezza e qualità al massimo livello.' },
  { icon: '🎨', title: 'Design Personalizzato',     text: 'Creiamo moodboard e concept visivi su misura per la vostra storia d\'amore.' },
  { icon: '⏰', title: 'Puntualità Garantita',       text: "Gestiamo i tempi con precisione: il giorno delle nozze tutto sarà perfetto all'orario stabilito." },
]

// ── Gallery slides ────────────────────────────────────────
export const SLIDES = [
  { bg: 'linear-gradient(135deg,#e8c9bc,#c4786a)', image: foto1, emoji: '💐', label: 'Matrimoni', caption: 'Allestimenti floreali per il giorno più bello' },
  { bg: 'linear-gradient(135deg,#b5c9b0,#7a9a72)', image: foto2, emoji: '🌿', label: 'Cerimonie', caption: 'Decorazioni verdi e naturali per ogni cerimonia' },
  { bg: 'linear-gradient(135deg,#e8d5ad,#c9a96e)', image: foto3, emoji: '🕯️', label: 'Anniversari', caption: 'Atmosfere romantiche per ogni anniversario' },
  { bg: 'linear-gradient(135deg,#f9f5f0,#e8c9bc)', image: foto4, emoji: '🎂', label: 'Compleanni', caption: 'Feste indimenticabili con dettagli unici' },
]

// ── Stats ─────────────────────────────────────────────────
export const STATS = [
  { num: '500+', label: 'eventi realizzati' },
  { num: '2025', label: 'anno di apertura' },
  { num: '100%', label: 'personalizzato' },
  { num: '❤️',   label: 'con passione' },
]

// ── Footer links ──────────────────────────────────────────
export const FOOTER_SERVICES = [
  'Matrimoni',
  'Anniversari 25° & 50°',
  '18° Compleanno',
  'Comunioni & Cresime',
  'Battesimi',
  'Eventi Aziendali',
  'Bomboniere & Regali',
]
