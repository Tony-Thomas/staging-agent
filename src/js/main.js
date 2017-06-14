// Load Backstretch arguments
$(".hero").backstretch("./img/hero.jpg");

// lightGallery Youtube, Vimeo Video Gallery
// https://sachinchoolur.github.io/lightGallery/demos/videos.html
$('#video-gallery').lightGallery();

$('#video-player-param').lightGallery({
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
    vimeoPlayerParams: {
        byline: 0,
        portrait: 0,
        color: 'A90707'
    }
});

$('#video-thumbnails').lightGallery({
    loadYoutubeThumbnail: true,
    youtubeThumbSize: 'default',
    loadVimeoThumbnail: true,
    vimeoThumbSize: 'thumbnail_medium',
});



$('#aniimated-thumbnials').lightGallery({
    thumbnail: true
});
