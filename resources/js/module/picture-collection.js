import $ from 'jquery';
window.jQuery = $;
require('fancybox');


$(() => {
    const $parentContainer = $('.card-show__items'),
        $pictureCollection = $parentContainer.find('.card-show__picture-collection');

    if (window.matchMedia('(max-width: 1199px)').matches) {
        let moveSelector = $pictureCollection.detach();

        console.log(moveSelector);

        $('.card-show__text-container').append(moveSelector);

    }

    $(".fancybox").fancybox();
});
