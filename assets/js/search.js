// Simple-Jekyll-Search setup
// https://github.com/christian-fei/Simple-Jekyll-Search

(function() {
  var input = document.getElementById('search-input');
  if (!input) return;

  SimpleJekyllSearch({
    searchInput: input,
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<div class="search-result"><a href="{url}">{title}</a><span class="sr-date">{date}</span><p>{excerpt}</p></div>',
    noResultsText: '<p style="color:var(--text-3);">No results found.</p>',
    limit: 15,
    fuzzy: false,
  });
})();
