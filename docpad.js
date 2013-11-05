module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DevFest São Paulo",
      description: "",
      date: "23 de Novembro de 2013",
      // If your event is free, just comment this line
      price: "R$ 70,00",
      venue: "Hotel Branston, São Paulo - SP",
      address: "Rua Martins Fontes, 330",
      city: "São Paulo",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "INSCREVA-SE AGORA!",
        link: "http://credencial.imasters.com.br/devfest-sao-paulo-2013/"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'inscricao'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Apoiadores",
      inscricao: "INSCREVA-SE"
      // contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "void setup() { \n\tcredenciamento();  \n\twelcome_coffee(); \n}",
        time: "8h00"
      },

      {
        name: "Keynote",
        time: "9h30",
      },

      {
        name: "NOME",
        company: "EMPRESA",
        photo: "themes/yellow-swan/img/speaker.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "TITULO APRESENTACAO",
          description: "",
          time: "10h40"
        }
      },
      {
        name: "NOME",
        company: "EMPRESA",
        photo: "themes/yellow-swan/img/speaker.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Workshop Web",
          description: "",
          time: "10h40"
        }
      },
      {
        name: "NOME",
        company: "EMPRESA",
        photo: "themes/yellow-swan/img/speaker.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "TITULO APRESENTACAO",
          description: "",
          time: "11h40"
        }
      },

      {
        name: "void interval(){\n\talmoco();\n}",
        time: "12h40"
      },


      {
        name: "NOME",
        company: "EMPRESA",
        photo: "themes/yellow-swan/img/speaker.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "TITULO APRESENTACAO",
          description: "",
          time: "14h30"
        }
      },
      {
        name: "NOME",
        company: "EMPRESA",
        photo: "themes/yellow-swan/img/speaker.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Workshop Mobile",
          description: "",
          time: "14h30"
        }
      },
      {
        name: "NOME",
        company: "EMPRESA",
        photo: "themes/yellow-swan/img/speaker.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "TITULO APRESENTACAO",
          description: "",
          time: "15h30"
        }
      },

      {
        name: "void interval(){\n\tnetworking();\n\tcafe();\n}",
        time: "16h30"
      },


      {
        name: "Keynote",
        time: "17h30",
      },

      {
        name: "void stop() { \n\tencerramento(); \n\tsorteios(); \n}",
        time: "18h00",
      }





    ],

    // List of Sponsors
    sponsors: {
      partner: [
        //intel
        {
          name: "Intel",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-partner-intel.png",
          url: "#"
        }        
      ],
      diamond: [
        //google
        {
          name: "Google",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-diamond-google.png",
          url: "#"
        },
        //on
        {
          name: "On Interactive",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-diamond-on.png",
          url: "#"
        }
      ],
      gold: [
        //digitalbox
        {
          name: "DigitalBox",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-gold-digitalbox.png",
          url: "#"
        }
      ],
      silver: [
        //sendgrid
        {
          name: "SendGrid",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-silver-sendgrid.png",
          url: "#"
        }
      ]
    },

    // List of Partners
    partners: [

      //imasters
      {
        name: "iMasters",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-imasters.png",
        url: "#"
      },
      //novatec
      {
        name: "Novatec",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-novatec.png",
        url: "#"
      },
      //casa do codigo
      {
        name: "Casa do Código",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-casa-do-codigo.png",
        url: "#"
      },
      //caelum
      {
        name: "Caelum",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-caelum.jpg",
        url: "#"
      }


    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
