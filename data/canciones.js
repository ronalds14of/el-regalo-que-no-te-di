const canciones = [
    {
        titulo: "Close To You",
        artista: "Carpenters",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Carpenters+Close+To+You"
    },
    {
        titulo: "Chachachá",
        artista: "Jósean Log",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Jo%C3%A9sean+Log+Chachach%C3%A1"
    },
    {
        titulo: "Te Amo Y Más",
        artista: "Diego Luna",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Te+Amo+Y+M%C3%A1s+Diego+Luna"
    },
    {
        titulo: "Sincera Confesión",
        artista: "Arturo \"Zambo\" Cavero",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Sincera+Confesi%C3%B3n+Arturo+Cavero"
    },
    {
        titulo: "Noche de los Dos",
        artista: "Murder",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Murder+Noche+de+los+Dos"
    },
    {
        titulo: "Feels",
        artista: "Calvin Harris ft. Pharrell Williams, Katy Perry, Big Sean",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Calvin+Harris+Feels"
    },
    {
        titulo: "Do For Love",
        artista: "2Pac",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=2Pac+Do+For+Love"
    },
    {
        titulo: "rises the moon",
        artista: "Liana Flores",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Liana+Flores+rises+the+moon"
    },
    {
        titulo: "Amárrame",
        artista: "Mon Laferte ft. Juanes",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Mon+Laferte+Am%C3%A1rrame"
    },
    {
        titulo: "Melancolía",
        artista: "Mon Laferte",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Mon+Laferte+Melancol%C3%ADa"
    },
    {
        titulo: "Amor Completo",
        artista: "Mon Laferte",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Mon+Laferte+Amor+Completo"
    },
    {
        titulo: "A VOS",
        artista: "MILO J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=MILO+J+A+VOS"
    },
    {
        titulo: "M.A.I",
        artista: "MILO J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=MILO+J+MAI"
    },
    {
        titulo: "Olimpo",
        artista: "Milo J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Milo+J+Olimpo"
    },
    {
        titulo: "OJALÁ",
        artista: "MILO J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=MILO+J+OJAL%C3%81"
    },
    {
        titulo: "Poeta Maniaco",
        artista: "Gonzalo Genek",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Gonzalo+Genek+Poeta+Maniaco"
    },
    {
        titulo: "CARENCIAS DE CORDURA",
        artista: "MILO J ft. Yami Safdie",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=MILO+J+CARENCIAS+DE+CORDURA"
    },
    {
        titulo: "Lover Is a Day",
        artista: "CUCO",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=CUCO+Lover+Is+a+Day"
    },
    {
        titulo: "El Bolero",
        artista: "Yami Safdie, Milo J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Yami+Safdie+El+Bolero"
    },
    {
        titulo: "Eres",
        artista: "Café Tacvba",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Caf%C3%A9+Tacvba+Eres"
    },
    {
        titulo: "Francés Limón",
        artista: "Enanitos Verdes",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Franc%C3%A9s+Lim%C3%B3n+Enanitos+verdes"
    },
    {
        titulo: "Labios Rotos",
        artista: "Zoé",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Zo%C3%A9+Labios+Rotos+MTV+Unplugged"
    },
    {
        titulo: "Cuéntame",
        artista: "Pedro Suárez Vértiz",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Pedro+Su%C3%A1rez+V%C3%A9rtiz+Cu%C3%A9ntame"
    },
    {
        titulo: "SINCERA TE",
        artista: "MILO J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=MILO+J+SINCERA+TE"
    },
    {
        titulo: "Enamorado tuyo",
        artista: "",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Enamorado+tuyo"
    },
    {
        titulo: "Lamento Boliviano",
        artista: "Enanitos Verdes",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Enanitos+Verdes+Lamento+Boliviano"
    },
    {
        titulo: "Soñé",
        artista: "Zoé",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Zo%C3%A9+So%C3%B1%C3%A9+MTV+Unplugged"
    },
    {
        titulo: "Beso",
        artista: "Jósean Log",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Jo%C3%A9sean+Log+Beso"
    },
    {
        titulo: "Azul",
        artista: "Zoé",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Zo%C3%A9+Azul"
    },
    {
        titulo: "Doma",
        artista: "Jósean Log",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Jo%C3%A9sean+Log+Doma"
    },
    {
        titulo: "Niño",
        artista: "Milo J",
        mensaje: "Aquí explicaré por qué esta canción significa algo para mí y qué recuerdo o emoción une con este momento.",
        link: "https://www.youtube.com/results?search_query=Milo+J+Ni%C3%B1o+Letra"
    }
];
