// Client info - update when client sends details

export const clientInfo = {
  name: 'Moshe Berkowitz Photography',
  tagline: 'Israel Based',
  instagram: 'moshe_b_photography',
  email: '', // Add when client provides
  phone: '', // Add when client provides
  location: 'Israel',
  yearsActive: '2026',
  
  about: {
    bio: 'About text will go here when client sends it.',
    yearsExperience: null, // Add when known
    specialties: ['Weddings', 'Portraits', 'Events'],
  },

  services: [
    // Add services when client provides
    // Example structure:
    // {
    //   name: 'Wedding Photography',
    //   description: 'Full day coverage...',
    //   price: 'Starting at $X',
    //   includes: ['Full day coverage', 'Edited photos', 'Online gallery'],
    // }
  ],

  portfolio: {
    categories: ['Weddings', 'Portraits', 'Events', 'All'],
    
    // Images array - add when client sends photos
    images: [
      // Example structure:
      // {
      //   id: 1,
      //   src: '/images/portfolio/wedding-1.jpg',
      //   alt: 'Bride and groom at sunset',
      //   category: 'Weddings',
      //   featured: true,
      // }
    ],
  },

  testimonials: [
    // Add testimonials when client provides
    // {
    //   text: 'Amazing photographer!',
    //   author: 'Client Name',
    //   role: 'Bride',
    // }
  ],
};

// Helper function to get images by category
export const getImagesByCategory = (category: string) => {
  if (category === 'All') return clientInfo.portfolio.images;
  return clientInfo.portfolio.images.filter(img => img.category === category);
};
