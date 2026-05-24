---
permalink: /categories/:name/
layout: category
---
{% assign category = page.name %}
{% assign posts_with_category = site.categories[category] %}