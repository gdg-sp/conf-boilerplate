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
      price: "R$ 76,00",
      venue: "Hotel Braston, São Paulo - SP",
      address: "Rua Martins Fontes, 330",
      city: "São Paulo",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "INSCREVA-SE AGORA!",
        link: "https://credencial.imasters.com.br/devfest-sao-paulo-2013/"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://www.devfest.com.br/2013/",
      googleanalytics: "UA-36017802-1"
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
      //'partners',
      //'inscricao'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores & Apoiadores",
      partners: "Apoiadores",
      //inscricao: "INSCREVA-SE"
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
        name: "Anderson Leite",
        company: "R/GA",
        photo: "themes/yellow-swan/img/palestrantes/anderson_leite.jpg",
        bio: "", link: { href: "https://twitter.com/anderson_leite", text: "@anderson_leite" },
        presentation: {
          title: "Desenvolvimento de jogos em Android",
          description: "Uma visão do cenário de Jogos para Smarthphones no Brasil seguido de uma parte mais técnica pra quem quer saber que passos seguir para desenvolver seu primeiro game.",
          time: "10h40"
        }
      },
      {
        name: "A confirmar",
        company: "",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Workshop Web",
          description: "",
          time: "10h40"
        }
      },
      {
        name: "Marcelo Liberato",
        company: "ON Interactive",
        photo: "themes/yellow-swan/img/palestrantes/marcelo_liberato.jpg",
        bio: "", link: { href: "https://twitter.com/mliberato", text: "@mliberato" },
        presentation: {
          title: "Mobile Backend Starter: Backend fácil e escalável para Android e iOS",
          description: "Mobile Backend Starter é um provider de BaaS (Backend as a service), que fornece autenticação/autorização, push notifications, armazenamento em cloud, client library para Android e iOS. Por rodar no AppEngine, podemos contar com alta disponibilidade e escalabilidade para qualquer tipo de aplicação. Nesta palestra vamos apresentar a plataforma e mostrar passo a passo como criar um aplicativo, sem escrever nenhuma linha de código de backend.",
          time: "11h40"
        }
      },
      {
        name: "Renzo Nuccitelli",
        company: "QMagico",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "App Engine",
          description: "",
          time: "11h40"
        }
      },
      {
        name: "void interval(){\n\talmoco();\n}",
        time: "12h40"
      },


      {
        name: "Jean Silva",
        company: "DigitalBox",
        photo: "themes/yellow-swan/img/palestrantes/jean_silva.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Integrando Google Anlytics com Unity 3D",
          description: "Analisar o engajamento dos jogadores em games é muito importante, principalmente para saber onde o mesmo consegue proporcionar diversão e desafio, com isso em mente a palestra abordará a integração do Google Analytcis com em jogos para Android feitos com a engine Unity3D, além de mostrar melhores formas de tirar métricas através de eventos in-game.",
          time: "14h30"
        }
      },
      {
        name: "Bruno Germano",
        company: "ON Interactive",
        photo: "themes/yellow-swan/img/palestrantes/bruno_germano.jpg",
        bio: "", link: { href: "https://twitter.com/egermano", text: "@egermano" },
        presentation: {
          title: "Agilizando a criação e desenvolvimento de aplicações AngularJS com Yeoman",
          description: "O AngularJS tem uma série de peculiaridades e características eficientes e poderosas. Com a ajuda de algumas ferramentas como o Yeoman, Grunt e Bower eles tornam o processo de desenvolvimento incrivelmente rápido.",
          time: "14h30"
        }
      },
      {
        name: "George Silva",
        company: "Intel",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        // bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Workshop Mobile",
          description: "",
          time: "14h30"
        }
      },
      {
        name: "Ubiratan Soares",
        company: "",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Dicas para interfaces performáticas no seu app Android",
          description: "",
          time: "15h30"
        }
      },
      {
        name: "William Lepinski",
        company: "R/GA",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Prototipando aplicações utilizando Parse.com e AngularJS",
          description: "Você teve uma idéia legal para uma aplicação e quer testar seu conceito rapidamente sem precisar se preocupar com o backend, infraestrutura e afins? O Parse.com é um serviço de backend (Backend as a service) que facilita o processo de criação de um único código que pode ser aproveitado por diversos tipos de frontend. Nesta palestra iremos ver como é simples criar uma aplicação que utiliza os serviços do Parse.com e o poder do AngularJS na criação de protótipos funcionais.",
          time: "15h30"
        }
      },
      {
        name: "void interval(){\n\tnetworking();\n\tcafe();\n}",
        time: "16h30"
      },
      {
        name: "Lucas Mazza",
        company: "Plataformatec",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Manutenção e Refatoração de CSS",
          description: "A manutenção de CSS em projetos de grande porte é um problema que pode afligir qualquer equipe, atrapalhar a evolução do seu software e tirar o sono dos desenvolvedores. Esta palestra é sobre como evoluímos a forma em que escrevemos CSS na Plataformatec para evitar os problemas clássicos de projetos de longa data: código complicado e desnecessário, classes que ninguém sabe onde estão sendo usadas e complicações ao reaproveitar estilos entre partes diferentes do seu projeto.",
          time: "17h00"
        }
      },
      {
        name: "A confirmar",
        company: "",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "",
          description: "",
          time: "17h00"
        }
      },
      {
        name: "void stop() { \n\tencerramento(); \n\tsorteios();\n}",
        time: "18h",
      }

    ],

    // List of Sponsors
    sponsors: {
      partner: [
        //intel
        {
          name: "Intel",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-partner-intel.png",
          url: "http://www.intel.com/"
        }        
      ],
      diamond: [
        //google
        {
          name: "Google",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-diamond-google.png",
          url: "http://www.google.com/"
        },
        //on
        {
          name: "On Interactive",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-diamond-on.png",
          url: "http://www.oninteractive.com.br/"
        }
      ],
      gold: [
        //digitalbox
        {
          name: "DigitalBox",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-gold-digitalbox.png",
          url: "http://www.digitalbox.cc/"
        }
      ],
      silver: [
        //sendgrid
        {
          name: "SendGrid",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-silver-sendgrid.png",
          url: "http://www.sendgrid.com/"
        }
      ]
    },

    // List of Partners
    partners: [

      //imasters
      {
        name: "iMasters",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-imasters.png",
        url: "http://www.imasters.com.br"
      },
      //novatec
      {
        name: "Novatec",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-novatec.png",
        url: "http://www.novatec.com.br/"
      },
      //casa do codigo
      {
        name: "Casa do Código",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-casa-do-codigo.png",
        url: "http://www.casadocodigo.com.br/"
      },
      //caelum
      {
        name: "Caelum",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-caelum.png",
        url: "http://www.caelum.com.br/"
      }


    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
