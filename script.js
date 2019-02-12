var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'https://is2-ssl.mzstatic.com/image/thumb/Video128/v4/55/60/fc/5560fcab-339a-1ca5-9193-555c9ff31df1/pr_source.lsr/268x0w.png'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'http://s3.viva.pl/newsy/krol-lew-plakat-filmu-427851-movie_cover.jpg'

    },
    {
        id: 3,
        title: 'Kiler',
        desc: 'Film o Cezarym Pazurze',
        image: 'https://ecsmedia.pl/c/kiler-kilerow-2-och-pakiet-w-iext37865778.jpg'

    },
    {
        id: 4,
        title: 'Zmina wojna',
        desc: 'Film o smutnej miłości',
        image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTF5ObHWECq04J6pUxZOIRtb6mjsNVXgWiskasoTTuMvOLEUnuz'

    }
];

var Movie = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired,
    },
    render: function() {
        return React.createElement('li', { key: this.props.id },
            React.createElement(MovieTitle, { title: this.props.title }),
            React.createElement(MovieDescription, { desc: this.props.desc }),
            React.createElement(MovieImage, { image: this.props.image }),


        );

    }
})

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.image, alt: "xxx" }),


    );
});



var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});




var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', { src: this.props.image, alt: "xxx" });
    }
});




var element = movies.map(function(movie) {
    return React.createElement(Movie, { title: movie.title, desc: movie.desc, image: movie.image, id: movie.id });
});


ReactDOM.render(React.createElement('ul', null, element), document.getElementById('app'));