$(function () {
    const envelope = $('#envelope');

    $('#open').on('click', () => {
        envelope.removeClass('close').addClass('open');
    });

    $('#reset').on('click', () => {
        envelope.removeClass('open').addClass('close');
    });

    envelope.on('click', () => {
        envelope.toggleClass('open close');
    });
});
