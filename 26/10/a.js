// 10. Создайте класс Playlist, в который передаётся массив песен ({ title, duration }). Добавьте метод 
// getShortSongs(), возвращающий песни короче 3 минут с помощью filter().
// Массив:
// const songs = [ { title: "Song A", duration: 2.5 }, { title: "Song B", duration: 3.2 }, { title: "Song C", duration: 2.8 }, { 
// title: "Song D", duration: 4.0 }, { title: "Song E", duration: 1.9 }, { title: "Song F", duration: 2.2 }, { title: "Song G", 
// duration: 3.5 }, { title: "Song H", duration: 2.7 }, { title: "Song I", duration: 5.1 }, { title: "Song J", duration: 2.4 } ];

class Playlist {
    constructor(song) {
        this.song = song;
    }
    getShortSongs() {
        const resArr = this.song.filter(el => {
            return el.duration < 3 ? true : false;
        })
        console.log(resArr);
    }
}

const songs = [{ title: "Song A", duration: 2.5 }, { title: "Song B", duration: 3.2 }, { title: "Song C", duration: 2.8 },
{ title: "Song D", duration: 4.0 }, { title: "Song E", duration: 1.9 }, { title: "Song F", duration: 2.2 },
{ title: "Song G", duration: 3.5 }, { title: "Song H", duration: 2.7 }, { title: "Song I", duration: 5.1 }, { title: "Song J", duration: 2.4 }];

const playlist = new Playlist(songs);
playlist.getShortSongs();