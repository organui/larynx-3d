export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group:
    'Cartilages and bone' | 'Ligaments and membranes' | 'Muscles' | 'Airway' | 'Neighbouring organs'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
}

export const anatomySource =
  'https://training.seer.cancer.gov/anatomy/respiratory/passages/larynx.html'
export const structures: Structure[] = [
  {
    id: 'hyoid-bone',
    fma: 'FMA52749',
    name: 'Hyoid bone',
    sourceName: 'hyoid bone',
    group: 'Cartilages and bone',
    concepts: ['FMA52749'],
    elements: ['FJ2772'],
    color: '#e6d8b8',
    description:
      'A U-shaped bone above the larynx that touches no other bone. The larynx hangs from it by the thyrohyoid membrane.',
    note: 'Included because it frames the top of the larynx. The muscles that attach to it are omitted.',
  },
  {
    id: 'thyroid-cartilage',
    fma: 'FMA55099',
    name: 'Thyroid cartilage',
    sourceName: 'thyroid cartilage',
    group: 'Cartilages and bone',
    concepts: ['FMA55099'],
    elements: ['FJ2808'],
    color: '#9fb9c4',
    description:
      'The largest cartilage of the larynx. Its two plates meet at the front to form the laryngeal prominence, the Adam’s apple, and shield the vocal folds.',
    note: 'Select it, or hide it, to see the vocal folds and muscles it encloses.',
  },
  {
    id: 'cricoid-cartilage',
    fma: 'FMA9615',
    name: 'Cricoid cartilage',
    sourceName: 'cricoid cartilage',
    group: 'Cartilages and bone',
    concepts: ['FMA9615'],
    elements: ['FJ2769'],
    color: '#88a8b8',
    description:
      'The only complete ring of cartilage in the airway, narrow at the front and tall at the back. It sits below the thyroid cartilage and on top of the trachea.',
    note: 'The source has three identical copies of this mesh; one is used.',
  },
  {
    id: 'epiglottis',
    fma: 'FMA55130',
    name: 'Epiglottis',
    sourceName: 'epiglottis',
    group: 'Cartilages and bone',
    concepts: ['FMA55130'],
    elements: ['FJ2770'],
    color: '#b7c99e',
    description:
      'A leaf-shaped flap of elastic cartilage behind the tongue. It tips back over the entrance of the larynx when you swallow.',
    note: 'Shown in its resting, upright position.',
  },
  {
    id: 'arytenoid-cartilages',
    fma: 'FMA55113',
    name: 'Arytenoid cartilages',
    sourceName: 'right and left arytenoid cartilages',
    group: 'Cartilages and bone',
    concepts: ['FMA55113', 'FMA55114'],
    elements: ['FJ2792', 'FJ2775'],
    color: '#7e9cc2',
    description:
      'Two small pyramids on the back of the cricoid. The vocal ligaments attach to them, so their rocking and sliding opens and closes the vocal folds.',
    note: 'Left and right are grouped as one selectable pair. Best seen from the posterior view.',
  },
  {
    id: 'corniculate-cuneiform-cartilages',
    fma: 'FMA55115',
    name: 'Corniculate and cuneiform cartilages',
    sourceName: 'right and left corniculate and cuneiform cartilages',
    group: 'Cartilages and bone',
    concepts: ['FMA55115', 'FMA55116', 'FMA55117', 'FMA55118'],
    elements: ['FJ2793', 'FJ2776', 'FJ2795', 'FJ2773'],
    color: '#a99cc7',
    description:
      'Tiny nodules of cartilage. The corniculates cap the arytenoids and the cuneiforms stiffen the aryepiglottic folds at the entrance of the larynx.',
    note: 'Four very small source meshes are grouped as one selectable set. Isolate them to find them.',
  },
  {
    id: 'thyrohyoid-membrane',
    fma: 'FMA55134',
    name: 'Thyrohyoid membrane',
    sourceName: 'thyrohyoid membrane with median and lateral thyrohyoid ligaments',
    group: 'Ligaments and membranes',
    concepts: ['FMA55133', 'FMA55134', 'FMA55138', 'FMA55140', 'FMA55141'],
    elements: ['FJ2804', 'FJ2786', 'FJ2790', 'FJ2797', 'FJ2779'],
    color: '#d9c48f',
    description:
      'A sheet that hangs the thyroid cartilage from the hyoid bone. It is thickened in the midline and at its back edges into the thyrohyoid ligaments.',
    note: 'Both halves and the three ligaments are grouped as one selectable set.',
  },
  {
    id: 'cricothyroid-ligament',
    fma: 'FMA55237',
    name: 'Median cricothyroid ligament',
    sourceName: 'median cricothyroid ligament',
    group: 'Ligaments and membranes',
    concepts: ['FMA55237'],
    elements: ['FJ2789'],
    color: '#e0b56e',
    description:
      'Bridges the gap at the front between the thyroid and cricoid cartilages. It can be felt just below the Adam’s apple.',
    note: 'Educational illustration only, not procedural guidance.',
  },
  {
    id: 'conus-elasticus',
    fma: 'FMA55251',
    name: 'Conus elasticus',
    sourceName: 'right and left conus elasticus',
    group: 'Ligaments and membranes',
    concepts: ['FMA55251', 'FMA55252'],
    elements: ['FJ2794', 'FJ2777'],
    color: '#c7b07a',
    description:
      'An elastic membrane rising from the cricoid toward the vocal folds. Its free upper edge thickens into the vocal ligaments.',
    note: 'It lies inside the thyroid cartilage. Select it to see it through the ghosted structures.',
  },
  {
    id: 'vocal-ligaments',
    fma: 'FMA55245',
    name: 'Vocal ligaments',
    sourceName: 'right and left vocal ligaments',
    group: 'Ligaments and membranes',
    concepts: ['FMA55245', 'FMA55246'],
    elements: ['FJ2805', 'FJ2787'],
    color: '#f0d27a',
    description:
      'Two bands running from the back of the thyroid cartilage to the arytenoids. With the vocalis muscles they form the vocal folds, which vibrate to make sound.',
    note: 'The mucosa covering the vocal folds is not modelled. The gap between them, the glottis, is shown open.',
  },
  {
    id: 'epiglottic-ligaments',
    fma: 'FMA55227',
    name: 'Epiglottic ligaments',
    sourceName: 'hyo-epiglottic and thyro-epiglottic ligaments',
    group: 'Ligaments and membranes',
    concepts: ['FMA55227', 'FMA55230'],
    elements: ['FJ2771', 'FJ2807'],
    color: '#cdb98c',
    description:
      'Tie the epiglottis forward to the hyoid bone and its stalk down to the inside of the thyroid cartilage.',
    note: 'Two source ligaments are grouped as one selectable set.',
  },
  {
    id: 'cricothyroid-muscle',
    fma: 'FMA46611',
    name: 'Cricothyroid',
    sourceName: 'straight and oblique parts of right and left cricothyroid',
    group: 'Muscles',
    concepts: ['FMA46611', 'FMA46612', 'FMA46613', 'FMA46614'],
    elements: ['FJ2801', 'FJ2783', 'FJ2799', 'FJ2781'],
    color: '#c56b5c',
    description:
      'The only intrinsic muscle on the outside of the larynx. It tilts the thyroid cartilage forward, stretching the vocal folds and raising the pitch of the voice.',
    note: 'Straight and oblique parts of both sides are grouped as one selectable set.',
  },
  {
    id: 'posterior-crico-arytenoid',
    fma: 'FMA46577',
    name: 'Posterior crico-arytenoid',
    sourceName: 'right and left posterior crico-arytenoid',
    group: 'Muscles',
    concepts: ['FMA46577', 'FMA46578'],
    elements: ['FJ2800', 'FJ2782'],
    color: '#b45a52',
    description:
      'On the back of the cricoid. It is the only muscle that opens the vocal folds, which keeps the airway open for breathing.',
    note: 'Best seen from the posterior view. Left and right are grouped.',
  },
  {
    id: 'lateral-crico-arytenoid',
    fma: 'FMA46580',
    name: 'Lateral crico-arytenoid',
    sourceName: 'right and left lateral crico-arytenoid',
    group: 'Muscles',
    concepts: ['FMA46580', 'FMA46581'],
    elements: ['FJ2796', 'FJ2778'],
    color: '#d07f6b',
    description: 'Rotates the arytenoids inward to bring the vocal folds together.',
    note: 'Hidden behind the thyroid cartilage. Left and right are grouped.',
  },
  {
    id: 'arytenoid-muscles',
    fma: 'FMA46582',
    name: 'Arytenoid muscles',
    sourceName: 'transverse arytenoid and right and left oblique arytenoid',
    group: 'Muscles',
    concepts: ['FMA46582', 'FMA46584', 'FMA46585'],
    elements: ['FJ2809', 'FJ2798', 'FJ2780'],
    color: '#a8524f',
    description:
      'Span the backs of the two arytenoids. They pull the cartilages together to close the back of the glottis.',
    note: 'The transverse muscle and the crossing oblique pair are grouped as one selectable set.',
  },
  {
    id: 'thyro-arytenoid',
    fma: 'FMA46589',
    name: 'Thyro-arytenoid',
    sourceName: 'right and left thyro-arytenoid',
    group: 'Muscles',
    concepts: ['FMA46589', 'FMA46590'],
    elements: ['FJ2802', 'FJ2803', 'FJ2784', 'FJ2785'],
    color: '#d99282',
    description:
      'Runs beside the vocal folds from the thyroid cartilage to the arytenoids. It shortens and relaxes the folds, lowering the pitch.',
    note: 'Each side has two source meshes. Identical “thyro-arytenoid proper” copies in the source are not used.',
  },
  {
    id: 'vocalis',
    fma: 'FMA46592',
    name: 'Vocalis',
    sourceName: 'right and left vocalis',
    group: 'Muscles',
    concepts: ['FMA46592', 'FMA46593'],
    elements: ['FJ2806', 'FJ2788'],
    color: '#e3a08c',
    description:
      'The innermost fibres of the thyro-arytenoid, lying along each vocal ligament. They fine-tune the tension of the vocal folds.',
    note: 'Inside the larynx. Select it, or use the superior view, to find it.',
  },
  {
    id: 'aryepiglottic-muscle',
    fma: 'FMA46604',
    name: 'Aryepiglottic',
    sourceName: 'right and left aryepiglotticus',
    group: 'Muscles',
    concepts: ['FMA46604', 'FMA46605'],
    elements: ['FJ2791', 'FJ2774'],
    color: '#bd7468',
    description:
      'Thin fibres running from the arytenoids up to the sides of the epiglottis. They help narrow the entrance of the larynx when you swallow.',
    note: 'Left and right are grouped.',
  },
  {
    id: 'trachea',
    fma: 'FMA7394',
    name: 'Trachea',
    sourceName: 'trachea',
    group: 'Airway',
    concepts: ['FMA7394'],
    elements: ['FJ2541'],
    color: '#d7a1a4',
    description:
      'The windpipe. It continues from the cricoid cartilage down into the chest, held open by C-shaped rings of cartilage, and divides into the two main bronchi.',
    note: 'Shown as one surface; individual rings are not separate meshes. The main bronchi are left to the lungs explorer.',
  },
  {
    id: 'thyroid-gland',
    fma: 'FMA13368',
    name: 'Thyroid gland',
    sourceName: 'right and left lobes and isthmus of thyroid gland',
    group: 'Neighbouring organs',
    concepts: ['FMA13368', 'FMA13369', 'FMA49178'],
    elements: ['FJ3672', 'FJ3671', 'FJ3670'],
    color: '#a5675f',
    description:
      'A hormone gland wrapped around the front of the upper trachea. Its isthmus crosses the trachea just below the cricoid cartilage.',
    note: 'Included for orientation. Both lobes and the isthmus are one selectable structure.',
  },
]
export const groups = [
  'Cartilages and bone',
  'Ligaments and membranes',
  'Muscles',
  'Airway',
  'Neighbouring organs',
] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Anterior' | 'Posterior' | 'Left lateral' | 'Superior'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'thyroid-cartilage',
    title: 'A box of cartilage',
    text: 'The larynx sits at the top of the trachea. Its largest cartilage, the thyroid cartilage, forms the Adam’s apple at the front of the neck.',
    view: 'Anterior',
  },
  {
    id: 'cricoid-cartilage',
    title: 'A complete ring',
    text: 'Below it, the cricoid cartilage is the airway’s only complete ring. Turn to the side to see how it rises tall at the back.',
    view: 'Left lateral',
  },
  {
    id: 'vocal-ligaments',
    title: 'Where the voice comes from',
    text: 'The vocal ligaments run from the front of the thyroid cartilage to the arytenoids. Air pushed between them makes them vibrate.',
    view: 'Superior',
  },
  {
    id: 'posterior-crico-arytenoid',
    title: 'Keeping the airway open',
    text: 'On the back of the cricoid, the posterior crico-arytenoid muscles are the only ones that pull the vocal folds apart for breathing.',
    view: 'Posterior',
  },
  {
    id: 'epiglottis',
    title: 'A lid for swallowing',
    text: 'The epiglottis is isolated here. It folds back over the entrance of the larynx when you swallow. Restore all to see it in place.',
    view: 'Left lateral',
    isolate: true,
  },
  {
    id: 'trachea',
    title: 'Down to the chest',
    text: 'The trachea carries air from the larynx into the chest. The thyroid gland wraps around its upper end.',
    view: 'Anterior',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits behind or inside other geometry (vocal folds, intrinsic muscles).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
