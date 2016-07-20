$(document).ready(function() {
$(document).profanityFilter({
    customSwears:['fuck'],
    replaceWith: ['(>.<)'],
    externalSwears: '../data/badWords.json',
});
});
