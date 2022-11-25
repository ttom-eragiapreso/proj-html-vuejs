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
    ],
    description: 'Fractional or exclusive road cargo transportation to all regions, with small, medium and large vehicles',
    vehicleTypes: [
      {
        type: 'Light',
        description: 'Max Weight 1200KG',
        img: 'src/assets/img/truck-1.png'
      },
      {
        type: 'Medium',
        description: 'Max Weight 6000KG',
        img: 'src/assets/img/truck-1.png'
      },
      {
        type: 'Heavy',
        description: 'Max Weight 24000KG',
        img: 'src/assets/img/truck-1.png'
      },
    ],
    certifications: [
      {
        name: 'test',
        img: 'src/assets/img/certificate.png'
      },
      {
        name: 'test',
        img: 'src/assets/img/certificate.png'
      }
    ]
  }
})