export const capabilitiesData = [
    {
        id:1,
        number: '01',
        title: 'Architectural Lighting',
        subtitle: 'Light that becomes part of the architecture.',
        descrription: 'Precision fixtures that shape the geometry of a space, reveal material texture, depth, and form.',
        image: {
            mobile: '',
            desktop: '',
        },
        imagePosition: 'left',
        ButtonText: 'EXPLORE ARCHITECTURAL LIGHTING',
        features:
        [
        {
            title: 'Linear Lighting',
            description: 'ontinuous lines for seamless illumination',
            icon: [
                {
                type: 'path',
                d: 'M4 6h16v4H4z'
                },
                {
                    type: 'path',
                    d: 'M7 10v4h10v-4',
                },
                {
                    type: 'path',
                    d: 'M9 14v4h6v-4',
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 7,
                    r: 1,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M4 6V4h16v2'
                }
            ]
        },
        {
            title: 'Recessed Lighting',
            description: 'Clean integration for a refined ceiling finish',
            icon: [
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 8
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 5
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy:12,
                    r: 2.5,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M4 12H2M22 12h-2M12 4V2M12 22v-2',
                },
                {
                    type: 'path',
                    d: 'M6 6l-1.5-1.5M19.5 19.5L18 18M6 18l-1.5 1.5M19.5 4.5L18 6',
                },
            ]
        },
        {
            title: 'Surface Lighting',
            description: 'Versatile solutions for walls and ceilings',
            icon: [
                {
                    type: 'rect',
                    x: 6,
                    y: 4,
                    width: 12,
                    height: 10,
                    rx: 2,
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 9,
                    r: 2,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M8 17l-3 4M16 17l3 4M12 17v4'
                },
                {
                    type: 'path',
                    d: 'M10 14h4'
                }
            ]
        },
        {
            title: 'Facade Lighting',
            description: 'Enhance building identity day and night',
            icon: [
                {
                    type:'path',
                    d: 'M5 21V10a7 7 0 0 1 14 0v11',
                },
                 {
                    type:'path',
                    d: 'M9 21v-5a3 3 0 0 1 6 0v5',
                },
                 {
                    type:'path',
                    d: 'M3 21h18',
                },
                 {
                    type:'path',
                    d: 'M12 6v-2',
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 10,
                    r: 1.5,
                    fill: 'var(--color-primary)',
                }
            ]
        },
        {
            title: 'Custom Solutions',
            description: 'Tailored lighting designed for every project',
            icon: [
                {
                    type: 'circle',
                    cx: 9,
                    cy: 9,
                    r: 4
                },
                {
                    type: 'circle',
                    cx: 16,
                    cy: 14,
                    r: 4,
                },
                {
                    type: 'path',
                    d: 'M9 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
                },
                {
                    type: 'path',
                    d: 'M16 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
                },
                {
                    type: 'path',
                    d: 'M12 5l2 2M10 17l2 2',
                },

            ]
        },
        ]

    },
    {
        id: 2,
        number: '02',
        title: 'SMART CONTROLS',
        subtitle: 'Intelligent control without unnecessary complexity.',
        descrription: 'Create the right atmosphere, improve efficiency, and adapt lighting to every moment.',
        image: {
            mobile: '',
            desktop: '',
        },
        imagePosition: 'right',
        ButtonText: 'EXPLORE SMART CONTROLS',
        features:
        [
        {
            title: 'Scene Control',
            description: 'Set scenes for every activity',
            icon: [
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 8,
                },
                {
                    type: 'path',
                    d:'M12 8v4l3 3'
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 2,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M12 2v2M12 20v2M2 12h2M20 12h2'
                }
            ]
        },
        {
            title: 'Dimming',
            description: 'CSmooth, flicker-free lighting control',
            icon : [
                {
                    type: 'path',
                    d: 'M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9z',
                },
                {
                    type: 'path',
                    d: 'M12 3v18',
                    strokeDasharray: '2 2',
                },
                {
                    type: 'path',
                    d: 'M12 5a7 7 0 0 1 0 14z',
                    fill: 'var(--color-primary)',
                },
                {
                    type: 'circle',
                    cx: 6,
                    cy: 12,
                    r: 1,
                    fill: 'var(--color-primary)'
                },
            ]
        },
        {
            title: 'Daylight Harvesting',
            description: 'Maximize natural light and savings',
            icon: [
                {
                    type: 'circle',
                    cx: 12,
                    cy:12,
                    r: 4,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'
                },
                {
                    type: 'path',
                    d: 'M16 12a4 4 0 0 1-4 4'
                }
            ]
        },
        {
            title: 'Automation',
            description: 'Schedules, sensors and smart triggers',
            icon: [
                {
                    type: 'path',
                    d: 'M12 2l7 4v6c0 5.5-3.8 10.7-7 12-3.2-1.3-7-6.5-7-12V6l7-4z'
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 11,
                    r: 2.5,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M12 13.5V17'
                },
                {
                    type: 'path',
                    d: 'M10 17h4'
                },
            ]
        },
        {
            title: 'Remote Access',
            description: 'Control from anywhere',
            icon: [
                {
                    type: 'rect',
                    x: 7,
                    y: 2,
                    width: 10,
                    height: 20,
                    rx: 3,
                },
                {
                    type: 'path',
                    d: 'M11 5h2',
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 15,
                    r: 2,
                    fill: 'var(--color-primary)',
                },
                {
                    type: 'path',
                    d: 'M12 11v2',
                },
                {
                    type: 'path',
                    d: 'M10 18h4',
                },
            ]
        },
        ]
    },
    {
        id: 3,
        number: '03',
        title: 'CUSTOM SOLUTIONS',
        subtitle: 'Designed around the demands of your project.',
        descrription: 'From concept to execution, we collaborate with architects, designers, and developers to deliver unique lighting solutions.',
        image: {
            mobile: '',
            desktop: '',
        },
            imagePosition: 'left',
            ButtonText: 'EXPLORE CUSTOM SOLUTIONS',
            features:
        [
        {
            icon: [
                {
                    type: 'path',
                    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
                },
                {
                    type: 'circle',
                    cx: 9,
                    cy: 7,
                    r: 4,
                },
                {
                    type: 'path',
                    d: 'M22 21v-2a4 4 0 0 0-3-3.87',
                },
                {
                    type: 'path',
                    d: 'M16 3.13a4 4 0 0 1 0 7.75',
                },
                {
                    type: 'path',
                    d: 'M9 7h.01',
                    strokeWidth : 2,
                },
            ],
            title: 'Design Collaboration',
            description: 'We work with you from the early design stage',
        },
        {
            icon: [
                {
                    type: 'path',
                    d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
                },
                {
                    type: 'path',
                    d: 'M3.27 6.96L12 12.01l8.73-5.05'
                },
                {
                    type: 'path',
                    d: 'M12 22.08V12'
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 2,
                    fill: 'var(--color-primary)'
                }
            ],
            title: 'Tailored Products',
            description: 'Custom dimensions, finishes and performance',
        },
        {
            icon: [
                {
                    type: 'path',
                    d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 1.5,
                    fill: 'var(--color-primary)'
                }
            ],
            title: 'Technical Support',
            description: 'Expert guidance throughout the entire process',
        },
        {
            icon: [
                {
                    type: 'path',
                    d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14'
                },
                {
                    type: 'polyline',
                    points: '22 4 12 14.01 9 11.01',
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 14,
                    r: 1.5,
                    fill: 'var(--color-primary)'
                }
            ],
            title: 'Project Delivery',
            description: 'Reliable delivery for projects of any scale',
        },
        ]
    },
    {
        id: 4,
        number: '04',
        title: 'LIGHTING SYSTEMS',
        subtitle: 'Complete systems that work seamlessly together.',
        descrription: ' High-quality components, perfectly integrated for consistent performance.',
        image: {
            mobile: '',
            desktop: '',
        },
            imagePosition: 'right',
            ButtonText: 'EXPLORE LIGHTING SYSTEMS',
            features:
        [
        {
            icon: [
                {
                    type: 'path',
                    d: 'M3 8h18v3H3z'
                },
                {
                    type: 'path',
                    d: 'M6 11v5h12v-5'
                },
                {
                    type: 'circle',
                    cx: 9,
                    cy: 9.5,
                    r: 1,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'circle',
                    cx: 15,
                    cy: 9.5,
                    r: 1,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M8 16l-2 3M16 16l2 3'
                },
            ],
            title: 'Linear Systems',
            description: 'Architectural lines and tracks',
        },
        {
            icon: [
                {
                    type: 'path',
                    d: 'M2 5h20'
                },
                {
                    type: 'rect',
                    x: 6,
                    y: 8,
                    width: 4,
                    height: 6,
                    rx: 1,
                },
                {
                    type: 'path',
                    d: 'M8 5v3'
                },
                {
                    type: 'path',
                    d: 'M6 14l-2 4M10 14l2 4'
                },
                {
                    type: 'rect',
                    x: 14,
                    y: 8,
                    width: 4,
                    height: 6,
                    rx: 1,
                },
                {
                    type: 'path',
                    d: 'M16 5v3'
                },
                {
                    type: 'path',
                    d: 'M14 14l-2 4M18 14l2 4'
                },
                {
                    type: 'circle',
                    cx: 8,
                    cy: 11,
                    r: 1,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'circle',
                    cx: 16,
                    cy: 11,
                    r: 1,
                    fill: 'var(--color-primary)'
                }
            ],
            title: 'Track Systems',
            description: 'Flexible and reconfigurable',
        },
        {
            icon: [
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 9
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 6
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 12,
                    r: 2.5,
                    fill: 'var(--color-primary)'
                },
            ],
            title: 'Recessed Systems',
            description: 'Minimal and high performance',
        },
        {
            icon: [
                {
                    type: 'path',
                    d: 'M12 2a5 5 0 0 0-5 5c0 2 1.1 3.8 2.7 4.7l.8 3.3h3l.8-3.3C15.9 10.8 17 9 17 7a5 5 0 0 0-5-5z',
                },
                {
                    type: 'path',
                    d: 'M9.5 18h5',
                },
                {
                    type: 'path',
                    d: 'M10.5 21h3',
                },
                {
                    type: 'circle',
                    cx: 12,
                    cy: 7,
                    r: 1.5,
                    fill: 'var(--color-primary)'
                },
                {
                    type: 'path',
                    d: 'M4 12l-2 2M20 12l2 2',
                },
            ],
            title: 'Control Integration',
            description: 'Lighting and controls working as one',
        },
        ]
    }
]