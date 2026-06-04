export const BUSINESS_INFO = {
  phone: {
    display: '+91 9031422273',
    link: 'tel:+919031422273',
  },
  whatsapp: {
    link: 'https://wa.me/919031422273',
    prefill: 'Hello Anvi Paints, I would like information about your paint products and pricing.',
    get href() {
      return `${this.link}?text=${encodeURIComponent(this.prefill)}`;
    },
  },
  maps: {
    link: 'https://www.google.com/maps/dir//Anvi+Paints+And+Hardware,+near+SBI+Bank,+Tetartoli,+Morabadi,+Ranchi,+Jharkhand+834008/@25.6016384,85.1083264,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f4e147883f52c7:0xf48edb7906b1a42a!2m2!1d85.3342253!2d23.3943464?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
  },
};
