//Se me ocurrió tener un botón para tranquilizar a la persona accidentada
//ofreciendo al usuario una opción para escuchar música mientras espera la ayuda
const reproduceMusica = document.getElementById('music')

//Aplico un evento click que dentro llevará un sweetalert y a su vez
//
reproduceMusica.addEventListener('click', () => {
	
    swal({
        title: `Reproduce tu canción favorita para calmarte`,
        text: 'Búscala por su nombre ejm: "Desire - Gryffin Remix".',
        content: "input",
        button: {
          text: "Buscar!",
          closeModal: false,
        },
      })
      .then(name => {
        if (!name) throw null;
       
        return fetch(`https://itunes.apple.com/search?term=${name}&entity=song`);
      })
      .then(results => {
        return results.json();
      })
      .then(json => {
        const song = json.results[0];
       
        if (!song) {
          return swal("La canción no fue encontrada!"); //Si no se encuentra la canción
        }
       
        const name = song.trackName;
        const artist = song.artistName;
        const imageURL = song.artworkUrl100;
        const previewUrl = song.previewUrl;
       
        swal({
          title: "Top result:",
          text: `${name} by ${artist}`,
          icon: imageURL,
          buttons: {
            play: {
              text: "Reproduce",
              value: "play",
            },
            close: {
              text: "Cierra",
              value: "close",
            },
          },
        })
        .then((value) => {
          if (value === "play") {
            const audio = new Audio(previewUrl);
            audio.play();
          }
        });
      })
      .catch(err => {
        if (err) {
          swal("Oh no!", "Itunes está fallando!", "error"); //Si aparece algún error
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
      

});