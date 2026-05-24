---
permalink: /tags/:name/
layout: tag
---
{% assign tag = page.name %}
{% assign posts_with_tag = site.tags[tag] %}