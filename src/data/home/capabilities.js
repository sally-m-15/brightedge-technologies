import architecturalImageMobile from '../../assets/images/architectural-lighting-600.webp'
import architecturalImage from '../../assets/images/architectural-lighting.webp'
import smartControlsImage from '../../assets/images/smart-controls.webp'
import smartControlsImageMobile from '../../assets/images/smart-controls-332.webp'
import hospitalityImage from '../../assets/images/hospitality.webp'
import workspacesImage from '../../assets/images/workspaces.webp'


export const capabilities = [
  {
    title: 'Architectural Lighting',
    description:
      'Precision fixtures that shape the geometry of a space, revealing textures, depth, and form.',
    image: {
  mobile: architecturalImageMobile,
  desktop: architecturalImage,
    },
    width: 736,
    height: 414,
      mobileWidth: 600,
  mobileHeight: 338,
    featured: true,
    gridClass: 'lg:col-span-2',
    icon: [
      {
        type: 'rect',
        x: 13,
        y: 14,
        width: 13,
        height: 20,
        rx: 1.5,
      },
      {
        type: 'rect',
        x: 26,
        y: 20,
        width: 9,
        height: 14,
        rx: 1.5,
      },
      {
        type: 'line',
        x1: 10,
        y1: 34,
        x2: 38,
        y2: 34,
      },
      {
        type: 'circle',
        cx: 17.5,
        cy: 18.5,
        r: 0.9,
      },
      {
        type: 'circle',
        cx: 21.5,
        cy: 18.5,
        r: 0.9,
      },
      {
        type: 'circle',
        cx: 17.5,
        cy: 22.5,
        r: 0.9,
      },
      {
        type: 'circle',
        cx: 21.5,
        cy: 22.5,
        r: 0.9,
      },
      {
        type: 'path',
        d: 'M17.5 34 V28.5 A2 2 0 0 1 21.5 28.5 V34',
      },
      {
        type: 'circle',
        cx: 30.5,
        cy: 24.5,
        r: 0.9,
      },
      {
        type: 'circle',
        cx: 30.5,
        cy: 28.5,
        r: 0.9,
      },
    ],
  },

  {
    title: 'Smart Controls',
    description: 'Intuitive scenes, daylight harvesting, and voice-ready automation from a single panel.',
      image: {
    mobile: smartControlsImageMobile,
    desktop: smartControlsImage,
  },
    width: 1024,
    height: 1024,
      mobileWidth: 332,
  mobileHeight: 332,
    featured: false,
    gridClass: 'lg:col-span-1',
    icon: [
      {
        type: 'line',
        x1: 12,
        y1: 16,
        x2: 36,
        y2: 16,
      },
      {
        type: 'circle',
        cx: 20,
        cy: 16,
        r: 3,
      },
      {
        type: 'line',
        x1: 12,
        y1: 24,
        x2: 36,
        y2: 24,
      },
      {
        type: 'circle',
        cx: 28,
        cy: 24,
        r: 3,
      },
      {
        type: 'line',
        x1: 12,
        y1: 32,
        x2: 36,
        y2: 32,
      },
      {
        type: 'circle',
        cx: 24,
        cy: 32,
        r: 3,
      },
    ],
  },

  {
    title: 'Hospitality',
    description:
      'Layered, welcoming ambiance engineered for lobbies, suites, and dining.',
    image: hospitalityImage,
    width: 735,
    height: 490,
    featured: false,
    gridClass: 'lg:col-span-1',
    icon: [
      {
        type: 'polygon',
        points: '19,14 29,14 33,23 15,23',
      },
      {
        type: 'line',
        x1: 22,
        y1: 14,
        x2: 26,
        y2: 14,
      },
      {
        type: 'line',
        x1: 24,
        y1: 23,
        x2: 24,
        y2: 33,
      },
      {
        type: 'line',
        x1: 21,
        y1: 28,
        x2: 27,
        y2: 28,
      },
      {
        type: 'line',
        x1: 18,
        y1: 33,
        x2: 30,
        y2: 33,
      },
    ],
  },

  {
    title: 'Workspaces',
    description:
      'Human-centric lighting that boosts focus, comfort, and wellbeing all day long.',
    image: workspacesImage,
    width: 735,
    height: 412,
    featured: false,
    gridClass: 'lg:col-span-2',
    icon: [
      {
        type: 'rect',
        x: 12,
        y: 18,
        width: 24,
        height: 4,
        rx: 1,
      },
      {
        type: 'line',
        x1: 15,
        y1: 22,
        x2: 15,
        y2: 34,
      },
      {
        type: 'line',
        x1: 33,
        y1: 22,
        x2: 33,
        y2: 34,
      },
      {
        type: 'path',
        d: 'M21 13 H27 V18 H21 Z',
      },
      {
        type: 'line',
        x1: 20,
        y1: 28,
        x2: 28,
        y2: 28,
      },
      {
        type: 'line',
        x1: 24,
        y1: 28,
        x2: 24,
        y2: 34,
      },
    ],
  },
]