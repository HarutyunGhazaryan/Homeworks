function Song(songName, group) {
  this.songName = songName;
  this.group = group;
  this.isPlaying = false;
}

function Playlist() {
  this.songsArray = [];
  this.index = 0;
}

Playlist.prototype.add = function (song) {
  this.songsArray.push(song);
};

Playlist.prototype.play = function () {
  if (this.songsArray[this.index]) {
    this.songsArray[this.index].isPlaying = true;
    console.log(`${this.songsArray[this.index].songName} started to play`);
  }
};

Playlist.prototype.stop = function () {
  if (this.songsArray[this.index]) {
    this.songsArray[this.index].isPlaying = false;
    console.log(`${this.songsArray[this.index].songName} stopped`);
  }
};

Playlist.prototype.next = function () {
  this.stop();
  if (this.index + 1 >= this.songsArray.length) {
    this.index = 0;
  } else {
    this.index += 1;
  }
  this.play();
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started
