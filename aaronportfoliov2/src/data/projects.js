import labPlates from '../assets/optimized/pov/IMG_0043.jpg'
import gel from '../assets/optimized/pov/IMG_0065.jpg'
import sunrise from '../assets/optimized/pov/IMG_0561.jpg'
import canyon from '../assets/optimized/pov/IMG_0727.jpg'
import bird from '../assets/optimized/pov/IMG_1418.jpg'
import cloudMountains from '../assets/optimized/pov/IMG_1531.jpg'
import bighorn from '../assets/optimized/pov/IMG_1721.jpg'
import sunsetField from '../assets/optimized/pov/IMG_1788.jpg'
import snow from '../assets/optimized/pov/IMG_6008.jpg'
import nightSky from '../assets/optimized/pov/IMG_1794.jpg'
import njsrsOne from '../assets/optimized/njsrs/1.jpg'
import njsrsTwo from '../assets/optimized/njsrs/2.jpg'
import njsrsFive from '../assets/optimized/njsrs/5.jpg'
import biocatOne from '../assets/optimized/biocat/Screenshot 2026-10-17 at 1.48.24 PM.jpg'
import biocatTwo from '../assets/optimized/biocat/biocat2.jpg'
import biocatThree from '../assets/optimized/biocat/biocat3.jpg'
import xneocryptOne from '../assets/optimized/xneocrypt/Screenshot 2026-10-17 at 1.53.40 PM.jpg'
import xneocryptTwo from '../assets/optimized/xneocrypt/Screenshot 2026-10-17 at 1.55.59 PM.jpg'
import xneocryptThree from '../assets/optimized/xneocrypt/Screenshot 2026-10-17 at 1.56.28 PM.jpg'
import scholarhackOne from '../assets/optimized/scholarhack/Screenshot 2026-10-17 at 1.59.15 PM.jpg'
import scholarhackTwo from '../assets/optimized/scholarhack/Screenshot 2026-10-17 at 1.59.49 PM.jpg'
import scholarhackThree from '../assets/optimized/scholarhack/Screenshot 2026-10-17 at 2.00.41 PM.jpg'

export const projects = [
  {
    slug: 'nj-science-research-symposium',
    title: 'NJ Science Research Symposium',
    shortDescription:
      'A statewide student research symposium built to give young researchers a serious place to present their work.',
    overview:
      'I founded the New Jersey Science Research Symposium to connect student researchers with scientists and with one another across the state.',
    approach:
      'I recruited more than 50 PhD students and professors as judges, coordinated submissions from 14 schools, and built the judging systems that kept the event moving.',
    impact:
      'The symposium supported 61 student researchers and grew into a statewide event with 172 participants. Now, I am leading the development of a national organization to spread this to other states.',
    tags: ['Community', 'Research', 'Leadership'],
    images: [njsrsOne, njsrsTwo, njsrsFive],
    links: [
      { label: 'NJSRS (old site)', url: 'https://njsrs.org/' },
      { label: 'ASERS (new site)', url: 'https://asers.org/' }
    ],
  },
  {
    slug: 'tumor-antigen-discovery-pipeline',
    title: 'XNeoCrypt',
    shortDescription:
      'A pipeline for finding promising tumor targets from proteomics, RNA data, and structure models from overlooked sources.',
    overview:
      'I built a model using Python/R to rank more than 123,000 cancer targets and narrow them to a shortlist that could realistically be tested in a low-resource lab.',
    approach:
      'The work combined biological data with structure prediction and a practical filter for what a small lab could actually make and test.',
    impact: 'The final shortlist helped turn a very large search space into 25 candidates. The project became an ISEF finalist and won first place at TNJSF and NJAS.',
    tags: ['Oncology', 'ML', 'Pipelines'],
    images: [xneocryptOne, xneocryptTwo, xneocryptThree],
    links: [{ label: 'ISEF 2026', url: 'https://isef.net/project/cbio050-xneocrypt-ranking-noncanonical-tumor-antigens' }],
  },
  {
    slug: 'biocatalysis-initiative',
    title: 'BioCataalysis',
    shortDescription:
      'A student biology community built around learning, competitions, and making research feel more accessible.',
    overview:
      'BioCataalysis is a biology learning community I started for students who wanted more ways to learn and compete outside of class.',
    approach:
      'I built the community on Discord, organized a team of 15, and worked with volunteers to run webinars and two BioLeague competitions.',
    impact: 'The community reached students in 15+ countries and served 300+ students. We are also working with UnivaDev on UnivaBio, a global health-tech hackathon with 800+ participants and $40K+ in prizes.',
    tags: ['Biotech', 'Leadership', 'Sustainability'],
    images: [biocatOne, biocatTwo, biocatThree],
    links: [
      { label: 'BioCataalysis', url: 'https://biocataalysis.org/' },
      { label: 'UnivaBio hackathon', url: 'https://univabio.devpost.com/' },
    ],
  },
  {
    slug: 'patent-extraction-with-llms',
    title: 'Patent Extraction with LLMs',
    shortDescription:
      'A tool that searches biomedical patents and pulls out new enzyme ideas with sources attached.',
    overview:
      'I worked on a pipeline that extracts drug-discovery information from biomedical patents and returns the relevant passages with each result.',
    approach:
      'I tuned the extraction process, tested it against labeled examples, and focused on making the results more reliable without making the system more expensive to run.',
    impact: 'The changes cut compute costs by more than 50% and improved extraction performance from 74.45% to 89.89%.',
    tags: ['LLMs', 'NLP', 'IP Intelligence'],
    images: [],
  },
  {
    slug: 'scholarhack-adaptive-sat-platform',
    title: 'ScholarHack Adaptive SAT Platform',
    shortDescription:
      'A study tool that changes its practice questions based on what a student needs next.',
    overview:
      'ScholarHack is a free SAT vocabulary tool I co-founded after meeting students who could not afford expensive practice programs.',
    approach:
      'We built the web and App Store versions in React and used adaptive difficulty to focus practice on each student’s weaker areas.',
    impact: 'The tool reached 300+ users and recorded more than 5,000 questions answered.',
    tags: ['EdTech', 'Product', 'Students'],
    images: [scholarhackOne, scholarhackTwo, scholarhackThree],
    imageFits: ['cover', 'cover', 'contain'],
    links: [{ label: 'ScholarHack', url: 'https://scholarhack.com/' }],
  },
]

export const povImages = [
  { src: labPlates, alt: 'Lab plates under blue light', note: 'bench notes' },
  { src: gel, alt: 'A stained gel in the lab', note: 'the messy middle' },
  { src: sunrise, alt: 'Sunrise over a mountain valley', note: 'early starts' },
  { src: canyon, alt: 'Sunset over a canyon', note: 'outside the lab' },
  { src: bird, alt: 'A blue bird in the trees', note: 'small observations' },
  { src: cloudMountains, alt: 'Clouds over distant mountains', note: 'zooming out' },
  { src: bighorn, alt: 'A bighorn sheep on rocks', note: 'field notes' },
  { src: sunsetField, alt: 'Warm sunset over a field', note: 'long view' },
  { src: snow, alt: 'A snowy mountain trail', note: 'keep moving' },
  { src: nightSky, alt: 'The Milky Way above the mountains', note: 'look up' },
]

export default projects
