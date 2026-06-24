document.addEventListener("DOMContentLoaded", () => {

    const galleries = document.querySelectorAll(
        ".image1, .image2, .image3, .image4, .image5, .image6, .image21, .photo, .galerie"
    );

    galleries.forEach(gallery => {

        let position = 0;

        setInterval(() => {

            position += 1;

            gallery.scrollLeft = position;

            if (
                position >=
                gallery.scrollWidth - gallery.clientWidth
            ) {
                position = 0;
                gallery.scrollLeft = 0;
            }

        }, 20);

    });

});