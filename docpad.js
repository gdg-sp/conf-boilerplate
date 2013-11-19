module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DevFest São Paulo",
      description: "",
      date: "23 de Novembro de 2013",
      price: "R$ 110,00",
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
        name: "Abertura DevFest São Paulo 2013",
        company: "GDG-SP",
        time: "9h30",
      },

      {
        name: "Anderson Leite",
        company: "R/GA",
        photo: "themes/yellow-swan/img/palestrantes/anderson_leite.jpg",
        bio: "Trabalha com Marketing Digital na R/GA onde é Tech Leader. Desenvolve plataformas web e mobile e é autor do livro Desenvolvimento de Jogos para Android pela Casa do Código.",
        link: { href: "https://twitter.com/anderson_leite", text: "@anderson_leite" },
        presentation: {
          title: "Desenvolvimento de jogos em Android",
          description: "Uma visão do cenário de Jogos para Smarthphones no Brasil seguido de uma parte mais técnica pra quem quer saber que passos seguir para desenvolver seu primeiro game.",
          time: "10h10"
        }
      },
      {
        name: "Breno Ferreira",
        company: "Lambda3",
        photo: "themes/yellow-swan/img/palestrantes/default.jpg",
        bio: "Formado pelo Instituto Superior de Tecnologia de Petrópolis - RJ, desenvolvedor de software na Lambda 3. Instrutor de cursos de tecnologia. Possui experiência principalmente em .NET e Javascript, mas também brinca de programar em outras linguagens, como Scala, Python e Ruby. Membro do da comunidade .NET Architects.", 
        link: { href: "https://twitter.com/breno_ferreira", text: "@breno_ferreira" },
        presentation: {
          title: "Backbone.js in Action",
          description: "Aprenda com um Workshop 100% prático a utilizar o Backbone.js",
          time: "10h10"
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
          time: "11h10"
        }
      },
      {
        name: "Renzo Nuccitelli",
        company: "QMagico",
        photo: "themes/yellow-swan/img/palestrantes/renzo_nuccitelli.jpg",
        bio: "Engenheiro de Computação formado pelo ITA, Instrutor Python Pro, especialista em Google App Engine, usa Python desde 2009. Adora dar aulas, palestrar e participar de eventos da comunidade; conhecer novas pessoas e novas idéias.",
        //link: { href: "#", text: "" },
        presentation: {
          title: "Construindo um framework web no Google App Engine",
          description: "Veja como utilizar o microframework Arquitetura para Web Zen (https://github.com/renzon/zenwarch) no Google App Engine. Essa biblioteca foi construida há 3 anos para o site www.digitaldovale.com.br, onde já trafegaram mais de 1 milhão de arquivos. Sem stress com deploy e servidores. Você programa e o Google escala!",
          time: "11h10"
        }
      },
      
      {
        name: "void interval(){\n\talmoco();\n}",
        time: "12h10"
      },


      {
        name: "Jean Silva",
        company: "DigitalBox",
        photo: "themes/yellow-swan/img/palestrantes/jean_silva.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Integrando Google Anlytics com Unity 3D",
          description: "Analisar o engajamento dos jogadores em games é muito importante, principalmente para saber onde o mesmo consegue proporcionar diversão e desafio, com isso em mente a palestra abordará a integração do Google Analytcis com em jogos para Android feitos com a engine Unity3D, além de mostrar melhores formas de tirar métricas através de eventos in-game.",
          time: "14h00"
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
          time: "14h00"
        }
      },
      {
        name: "George Silva",
        company: "Intel",
        photo: "https://pbs.twimg.com/profile_images/2164927746/formaturaSmallSquare.jpg",
        bio: "Formado em Ciência da Computação e Engenharia Elétrica, é o Comunity Manager de Android da Intel do Brasil. Com experiência profissional na Coréia do Sul, participou do projeto LiMo Foundation desde 2008 pela LG Electronics. Em 2010, passou a desenvoler a plataforma Android para smartphones. Atualmente trabalha com o ecossistema de desenvolvimento de software brasileiro pela Intel Software. Áreas de interesse: software embarcado; programação distribuida e paralela.", 
        link: { href: "https://twitter.com/ghsilva", text: "@ghsilva" },
        presentation: {
          title: "AppLab Android Intel",
          description: "O AppLab é um treinamento técnico teórico e prático dirigido pelo Community Manager de Android da Intel. Além de abordar os principais tópicos de desenvolvimento, depuração e performance, o AppLab explora as ferramentas e técnicas que os desenvolvedores Android precisam para tirar o máximo de performance de suas Apps e manter compatibilidade com o maior número possível de dispositivos no mercado.",
          time: "14h00"
        }
      },
      {
        name: "Ubiratan Soares",
        company: "",
        photo: "themes/yellow-swan/img/palestrantes/ubiratan_soares.jpg",
        bio: "Formado em Ciências da Computação pela Universidade de São Paulo, brincando com mobile desde 2010. É entusiasta e desenvolvedor para Android por opção, embora também tenha familiriade com iOS. Atualmente colabora com a Start Apps, em São Paulo. Palestrante frequente em eventos para a comunidade técnica - como os Meetups do Google Developers Group (GDG) em São Paulo, TDC, DevFest e outros - pode ser encontrado em www.ubiratansoares.com.br.", 
        link: { href: "http://google.com/+UbiratanSoares", text: "+UbiratanSoares" },
        presentation: {
          title: "Aumentando a responsividade da interface do seu app Android",
          description: "Nessa palestra, veremos uma série de dicas que irão contribuir para tornar a sua apliação Android mais fluída e responsiva! \nFalaremos sobre como minimizar o impacto do Garbage Collector na sua aplicação (e por que isso importa); veremos alguma dicas de multi-threading, além de como codificar para favorecer o desempenho. Também veremos macetes de como criar layouts que mais otimizados para apresentar a sua interface, sem prejudicar a estética da sua aplicação. ",
          time: "15h00"
        }
      },
      {
        name: "William Lepinski",
        company: "R/GA",
        photo: "themes/yellow-swan/img/palestrantes/william_lepinski.jpg",
        bio: "Formado em Design de Multimídia pelo Senac/SP. Trabalha com desenvolvimento frontend a aproximadamente 10 anos, atuando principalmente no desenvolvimento de aplicações web. \nAtualmente trabalha como Open Standard Developer pela R/GA São Paulo.",
        link: { href: "#", text: "" },
        presentation: {
          title: "Prototipando aplicações utilizando Parse.com e AngularJS",
          description: "Você teve uma idéia legal para uma aplicação e quer testar seu conceito rapidamente sem precisar se preocupar com o backend, infraestrutura e afins? O Parse.com é um serviço de backend (Backend as a service) que facilita o processo de criação de um único código que pode ser aproveitado por diversos tipos de frontend. Nesta palestra iremos ver como é simples criar uma aplicação que utiliza os serviços do Parse.com e o poder do AngularJS na criação de protótipos funcionais.",
          time: "15h00"
        }
      },
      {
        name: "void interval(){\n\tnetworking();\n\tcafe();\n}",
        time: "16h00"
      },
      {
        name: "Lucas Mazza",
        company: "Plataformatec",
        photo: "themes/yellow-swan/img/palestrantes/lucas_massa.jpg",
        //, bio: "", link: { href: "#", text: "" },
        presentation: {
          title: "Manutenção e Refatoração de CSS",
          description: "A manutenção de CSS em projetos de grande porte é um problema que pode afligir qualquer equipe, atrapalhar a evolução do seu software e tirar o sono dos desenvolvedores. Esta palestra é sobre como evoluímos a forma em que escrevemos CSS na Plataformatec para evitar os problemas clássicos de projetos de longa data: código complicado e desnecessário, classes que ninguém sabe onde estão sendo usadas e complicações ao reaproveitar estilos entre partes diferentes do seu projeto.",
          time: "16h30"
        }
      },
      {
        name: "Lúcio Maciel",
        company: "Sappos",
        photo: "themes/yellow-swan/img/palestrantes/luciofm.jpg",
        bio: "Desenvolvedor Android na SAPPOS (https://sappos.com.br/), além de ser o responsável por diversos aplicativos Android, como o Muambator, Mobo, Noite Hoje, Turismo Bento, Guia Gourmet, Zynk, Clique Alimentos entre outros, instrutor de desenvolvimento Android, organizador da AndroidConf Brasil 2011 no Rio de Janeiro, e membro conhecido da comunidade AndroidBrasil-dev.\nAntes de entrar de cabeça no mundo da mobilidade foi desenvolvedor C/C++ para Linux e Unixes em geral por mais de 10 anos.",
        //link: { href: "#", text: "" },
        presentation: {
          title: "ANIME-SE - Encante e Divirta",
          description: "Como pequenas animações podem encantar e divertir seus usuários, melhorando a qualidade de seus aplicativos.",
          time: "16h30"
        }
      },
      {
        name: "void stop() { \n\tencerramento(); \n\tsorteios();\n}",
        time: "17h30",
      },
      {
        name: "After Party com Maestro Billy - Som na Caixa! \\o/ ",
        time: "19h00",
      },
      {
        name: "FIM!\nNos vemos no DevFest São Paulo 2014 ",
        time: "22h00",
      }

    ],

    // List of Sponsors
    sponsors: {
      partner: [
        //intel
        {
          name: "Intel",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-partner-intel.png",
          url: "http://intel.ly/HLEuL0"
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
        },
        //locaweb
        {
          name: "Locaweb",
          logo: "themes/yellow-swan/img/patrocinadores/patrocinio-diamond-locaweb.png",
          url: "http://www.locaweb.com.br/"
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
      },
      //globalcode
      {
        name: "Globalcode",
        logo: "themes/yellow-swan/img/patrocinadores/patrocinio-support-globalcode.png",
        url: "http://www.globalcode.com.br/"
      },
      //appies
      {
        name: "Appies_",
        logo:"themes/yellow-swan/img/patrocinadores/patrocinio-support-appies.jpeg",
        url: "http://www.appies.co"
      }

    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
