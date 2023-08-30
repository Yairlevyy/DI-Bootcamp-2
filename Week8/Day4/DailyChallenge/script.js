class Video {
    constructor(title,uploader,time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };

     watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}`;
     }
};

const movie = new Video('the ultimate movie','Yair','1 Hour');
console.log(movie.watch());

const movie2 = new Video('the second ultimate movie','Isaac','1 Hour and 40 min');
console.log(movie2.watch());

const movies = [
    {
        title: 'Movie One',
        name: 'Yair',
        time: '1 Hour and 15 min'
    },
    {
        title: 'Movie Two',
        name: 'Yair',
        time: '1 Hour and 25 min'
    },
    {
        title: 'Movie Three',
        name: 'Yair',
        time: '1 Hour and 35 min'
    },
    {
        title: 'Movie Four',
        name: 'Yair',
        time: '1 Hour and 45 min'
    },
    {
        title: 'Movie Five',
        name: 'Yair',
        time: '1 Hour and 55 min'
    },
];

let arrayMovies = [];

movies.forEach((item)=>{
    const new_movie = new Video(item.title,item.name,item.time)
    arrayMovies.push(new_movie)
})

console.log(arrayMovies)