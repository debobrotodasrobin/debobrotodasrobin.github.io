// Simple-Jekyll-Search setup
// https://github.com/christian-fei/Simple-Jekyll-Search

(function() {
  var input = document.getElementById('search-input');
  if (!input) return;

  SimpleJekyllSearch({
    searchInput: input,
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<div class="box mb-3"><a href="{url}" class="is-size-5 has-text-link">{title}</a><br><span class="has-text-grey">{date}</span><p>{excerpt}</p></div>',
    noResultsText: '<p>No results found</p>',
    limit: 15,
    fuzzy: false,
  });
})();