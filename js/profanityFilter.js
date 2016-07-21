$(document).ready(function() {
$(document).profanityFilter({
    customSwears:['fuck'],
    externalSwears: '../data/badWords.json',
    replaceWith: ['(>.<)'],
});
});
