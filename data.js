const translations = {

  en: {
    questions: [
      {
        text: "What time do you wake up?",
        options: [
          { text: "Early and ready", type: "studyGirl" },
          { text: "Take my time", type: "socialGirl" },
          { text: "Early for training", type: "sportBoy" },
          { text: "Just before school", type: "studyBoy" }
        ]
      },
      {
        text: "What do you do after school?",
        options: [
          { text: "Homework first", type: "studyGirl" },
          { text: "Meet friends", type: "socialGirl" },
          { text: "Football practice", type: "sportBoy" },
          { text: "Gaming or coding", type: "studyBoy" }
        ]
      },
      {
        text: "Favorite subject?",
        options: [
          { text: "Science", type: "studyGirl" },
          { text: "Art", type: "socialGirl" },
          { text: "PE", type: "sportBoy" },
          { text: "Technology", type: "studyBoy" }
        ]
      }
    ],
    results: {
      studyGirl: {
        name: "Maya",
        city: "Jerusalem",
        image: "images/maya.jpg",
        background: "images/bg-maya.jpg",
        story: "Maya loves science and dreams of becoming a doctor."
      },
      socialGirl: {
        name: "Noa",
        city: "Tel Aviv",
        image: "images/noa.jpg",
        background: "images/bg-noa.jpg",
        story: "Noa loves fashion and spending time with friends."
      },
      studyBoy: {
        name: "Daniel",
        city: "Herzliya",
        image: "images/daniel.jpg",
        background: "images/bg-daniel.jpg",
        story: "Daniel is passionate about technology and startups."
      },
      sportBoy: {
        name: "Itay",
        city: "Haifa",
        image: "images/itay.jpg",
        background: "images/bg-itay.jpg",
        story: "Itay trains football every day."
      }
    }
  },

  he: {
    questions: [
      {
        text: "באיזו שעה את/ה קם/ה?",
        options: [
          { text: "מוקדם ומוכן/ה", type: "studyGirl" },
          { text: "לאט ובכיף", type: "socialGirl" },
          { text: "מוקדם לאימון", type: "sportBoy" },
          { text: "ברגע האחרון", type: "studyBoy" }
        ]
      },
      {
        text: "מה את/ה עושה אחרי בית ספר?",
        options: [
          { text: "שיעורי בית", type: "studyGirl" },
          { text: "חברים", type: "socialGirl" },
          { text: "אימון כדורגל", type: "sportBoy" },
          { text: "גיימינג או קוד", type: "studyBoy" }
        ]
      },
      {
        text: "מקצוע אהוב?",
        options: [
          { text: "מדעים", type: "studyGirl" },
          { text: "אמנות", type: "socialGirl" },
          { text: "ספורט", type: "sportBoy" },
          { text: "טכנולוגיה", type: "studyBoy" }
        ]
      }
    ],
    results: {
      studyGirl: {
        name: "מאיה",
        city: "ירושלים",
        image: "images/maya.jpg",
        background: "images/bg-maya.jpg",
        story: "מאיה אוהבת מדעים וחולמת להיות רופאה."
      },
      socialGirl: {
        name: "נועה",
        city: "תל אביב",
        image: "images/noa.jpg",
        background: "images/bg-noa.jpg",
        story: "נועה אוהבת אופנה וחברים."
      },
      studyBoy: {
        name: "דניאל",
        city: "הרצליה",
        image: "images/daniel.jpg",
        background: "images/bg-daniel.jpg",
        story: "דניאל אוהב טכנולוגיה."
      },
      sportBoy: {
        name: "איתי",
        city: "חיפה",
        image: "images/itay.jpg",
        background: "images/bg-itay.jpg",
        story: "איתי מתאמן בכדורגל כל יום."
      }
    }
  },

  fr: {
    questions: [
      {
        text: "À quelle heure te réveilles-tu ?",
        options: [
          { text: "Très tôt", type: "studyGirl" },
          { text: "Tranquillement", type: "socialGirl" },
          { text: "Pour l'entraînement", type: "sportBoy" },
          { text: "Juste à temps", type: "studyBoy" }
        ]
      },
      {
        text: "Que fais-tu après l'école ?",
        options: [
          { text: "Devoirs", type: "studyGirl" },
          { text: "Amis", type: "socialGirl" },
          { text: "Football", type: "sportBoy" },
          { text: "Jeux / Code", type: "studyBoy" }
        ]
      },
      {
        text: "Matière préférée ?",
        options: [
          { text: "Science", type: "studyGirl" },
          { text: "Art", type: "socialGirl" },
          { text: "Sport", type: "sportBoy" },
          { text: "Technologie", type: "studyBoy" }
        ]
      }
    ],
    results: {
      studyGirl: {
        name: "Maya",
        city: "Jérusalem",
        image: "images/maya.jpg",
        background: "images/bg-maya.jpg",
        story: "Maya adore la science."
      },
      socialGirl: {
        name: "Noa",
        city: "Tel Aviv",
        image: "images/noa.jpg",
        background: "images/bg-noa.jpg",
        story: "Noa aime la mode et ses amis."
      },
      studyBoy: {
        name: "Daniel",
        city: "Herzliya",
        image: "images/daniel.jpg",
        background: "images/bg-daniel.jpg",
        story: "Daniel aime la technologie."
      },
      sportBoy: {
        name: "Itay",
        city: "Haïfa",
        image: "images/itay.jpg",
        background: "images/bg-itay.jpg",
        story: "Itay joue au football chaque jour."
      }
    }
  },

  es: {
    questions: [
      {
        text: "¿A qué hora te despiertas?",
        options: [
          { text: "Muy temprano", type: "studyGirl" },
          { text: "Con calma", type: "socialGirl" },
          { text: "Para entrenar", type: "sportBoy" },
          { text: "Justo a tiempo", type: "studyBoy" }
        ]
      },
      {
        text: "¿Qué haces después de la escuela?",
        options: [
          { text: "Tareas", type: "studyGirl" },
          { text: "Amigos", type: "socialGirl" },
          { text: "Fútbol", type: "sportBoy" },
          { text: "Videojuegos / Código", type: "studyBoy" }
        ]
      },
      {
        text: "¿Materia favorita?",
        options: [
          { text: "Ciencia", type: "studyGirl" },
          { text: "Arte", type: "socialGirl" },
          { text: "Deporte", type: "sportBoy" },
          { text: "Tecnología", type: "studyBoy" }
        ]
      }
    ],
    results: {
      studyGirl: {
        name: "Maya",
        city: "Jerusalén",
        image: "images/maya.jpg",
        background: "images/bg-maya.jpg",
        story: "Maya ama la ciencia."
      },
      socialGirl: {
        name: "Noa",
        city: "Tel Aviv",
        image: "images/noa.jpg",
        background: "images/bg-noa.jpg",
        story: "Noa ama la moda."
      },
      studyBoy: {
        name: "Daniel",
        city: "Herzliya",
        image: "images/daniel.jpg",
        background: "images/bg-daniel.jpg",
        story: "Daniel ama la tecnología."
      },
      sportBoy: {
        name: "Itay",
        city: "Haifa",
        image: "images/itay.jpg",
        background: "images/bg-itay.jpg",
        story: "Itay entrena fútbol cada día."
      }
    }
  }

};