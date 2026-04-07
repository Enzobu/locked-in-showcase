import {
  AppWindow,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  MapPinned,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  TramFront,
  Warehouse,
} from 'lucide-react';

export const siteConfig = {
  name: "Locked'In",
  description:
    'Casiers connectés modulaires pour sécuriser, piloter et optimiser les espaces partagés.',
  navigation: [
    { href: '/', label: 'Accueil' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/platform', label: 'Plateforme' },
    { href: '/contact', label: 'Contact' },
  ],
};

export const productSizes = [
  {
    id: 's',
    name: 'S',
    dimensions: '40 × 40 × 40 cm',
    label: 'Effets personnels compacts',
    description: 'Pour petits objets, portefeuille, casque léger ou accessoires de courte durée.',
  },
  {
    id: 'm',
    name: 'M',
    dimensions: '40 × 40 × 60 cm',
    label: 'Usage quotidien',
    description: 'Pour sac, ordinateur portable et effets personnels du quotidien.',
  },
  {
    id: 'l',
    name: 'L',
    dimensions: '40 × 40 × 90 cm',
    label: 'Volume renforcé',
    description: 'Pour équipements plus volumineux ou besoins d’usage prolongé.',
  },
  {
    id: 'xl',
    name: 'XL',
    dimensions: '40 × 40 × 120 cm',
    label: 'Grande capacité',
    description: 'Pour objets encombrants et contextes professionnels exigeants.',
  },
  {
    id: 'scooter',
    name: 'Trottinette',
    dimensions: 'Module dédié',
    label: 'Mobilité électrique sécurisée',
    description:
      'Passage guidon, point d’ancrage et recharge intégrée pour la mobilité douce.',
  },
];

export const valueProps = [
  {
    title: 'Modulaire',
    description: 'Composez une baie sur mesure en mélangeant tailles et usages dans une même installation.',
    icon: Building2,
  },
  {
    title: 'Connecté',
    description: 'Réservation, ouverture et supervision centralisées via application mobile et backoffice.',
    icon: Smartphone,
  },
  {
    title: 'Sécurisé',
    description: 'Serrure électronique, suivi d’état et expérience fluide pour les utilisateurs comme les gestionnaires.',
    icon: ShieldCheck,
  },
  {
    title: 'Évolutif',
    description: 'Déployez une baie standard aujourd’hui et faites-la évoluer selon vos besoins demain.',
    icon: AppWindow,
  },
];

export const useCases = [
  {
    title: 'Entreprises',
    description: 'Pour sécuriser les effets personnels, fluidifier les espaces communs et moderniser l’expérience collaborateur.',
    icon: Warehouse,
  },
  {
    title: 'Écoles & campus',
    description: 'Pour proposer une solution fiable et simple à gérer dans les établissements privés, publics ou universitaires.',
    icon: GraduationCap,
  },
  {
    title: 'Commerces & cinémas',
    description: 'Pour offrir un service premium de dépôt sécurisé et améliorer le confort des visiteurs.',
    icon: ShoppingBag,
  },
  {
    title: 'Collectivités & mobilité',
    description: 'Pour accompagner la mobilité douce avec des modules dédiés à la trottinette électrique.',
    icon: TramFront,
  },
];

export const platformFeatures = [
  {
    title: 'Application mobile',
    description: 'Voir les baies disponibles, trouver les plus proches, réserver un casier et le déverrouiller depuis le mobile.',
    icon: Smartphone,
  },
  {
    title: 'Backoffice gestionnaire',
    description: 'Superviser les baies, suivre les casiers libres, occupés, réservés ou KO et piloter l’exploitation au quotidien.',
    icon: ClipboardList,
  },
  {
    title: 'Vision géolocalisée',
    description: 'Identifier les points de service les plus proches pour guider l’utilisateur vers la bonne baie.',
    icon: MapPinned,
  },
  {
    title: 'Suivi d’état',
    description: 'Visualiser rapidement la disponibilité, l’occupation ou l’état d’anomalie de chaque casier.',
    icon: CheckCircle2,
  },
  {
    title: 'Électronique intégrée',
    description: 'Serrure électronique native et gestion unifiée du matériel connecté.',
    icon: Cable,
  },
  {
    title: 'Pilotage premium',
    description: 'Une expérience simple pour l’utilisateur, une gestion claire pour l’exploitant.',
    icon: Camera,
  },
];

export const sectors = [
  'Espaces de bureaux',
  'Écoles privées et campus',
  'Magasins et centres commerciaux',
  'Cinémas et lieux de loisirs',
  'Collectivités et espaces publics',
  'Mobilité douce et hubs urbains',
];

export const solutionHighlights = [
  {
    title: 'Gamme standard',
    description: 'Formats S, M, L et XL pour couvrir la majorité des usages professionnels.',
  },
  {
    title: 'Casier trottinette',
    description: 'Module dédié avec recharge intégrée et système de sécurisation adapté.',
  },
  {
    title: 'Baies mixtes',
    description: 'Associez plusieurs tailles et types de casiers dans une même composition.',
  },
  {
    title: 'Configuration sur mesure',
    description: 'Préparez des installations pensées pour vos espaces, vos flux et vos contraintes.',
  },
];

export const contactInfo = [
  {
    label: 'Projet',
    value: 'Étude d’un besoin, d’une baie type ou d’un déploiement multi-sites',
  },
  {
    label: 'Cible',
    value: 'Entreprises, établissements, commerces, collectivités',
  },
  {
    label: 'Réponse',
    value: 'Un premier échange clair autour de votre usage et de votre configuration idéale',
  },
];

export const footerLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/platform', label: 'Plateforme' },
  { href: '/contact', label: 'Contact' },
  { href: '/configurator', label: 'Configurateur' },
];

export const platformJourney = [
  'L’utilisateur localise une baie disponible',
  'Il réserve un casier depuis l’application',
  'La serrure électronique est pilotée depuis le mobile',
  'Le gestionnaire suit les états depuis le backoffice',
];

export const configuratorSteps = [
  'Définir librement une grille de baie',
  'Mélanger les formats S, M, L, XL et trottinette',
  'Visualiser dimensions globales et composition',
  'Obtenir un total et une vue claire de l’installation',
];

export const heroStats = [
  { value: '5', label: 'formats de casiers' },
  { value: '1', label: 'plateforme unifiée' },
  { value: '∞', label: 'compositions possibles' },
];

export const sectorCards = [
  { title: 'Entreprises', icon: Building2 },
  { title: 'Campus', icon: GraduationCap },
  { title: 'Commerces', icon: Store },
  { title: 'Mobilité', icon: TramFront },
];
