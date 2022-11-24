import {reactive} from 'vue'

export const store = reactive({
  // Raccolgo tutte le info del business in un oggetto con diverse proprietà
  businessInfo: {
    name: 'Nexgen',
    openingDays: 'Mon - Sat',
    openingHours: '9:00 - 18:00',
    phoneNumber: '+1(305) 1234-5678',
    emailAddress: 'hello@example.com',
    socialLinks: [
      {
        name: 'Facebook',
        href: '#',
        icon: 'fa-brands fa-facebook-f'
      },
      {
        name: 'Twitter',
        href: '#',
        icon: 'fa-brands fa-twitter'
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: 'fa-brands fa-linkedin'
      }
    ],
    navbarLinks: [
      {
        title: 'HOME',
        href: '#'
      },
      {
        title: 'ABOUT',
        href: '#'
      },
      {
        title: 'SERVICES',
        href: '#'
      },
      {
        title: 'PROCESS',
        href: '#'
      },
      {
        title: 'TESTIMONIALS',
        href: '#'
      },
    ]
  }
})