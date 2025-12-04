---
layout: page
title: Research
permalink: /research/
nav: true # 导航栏里显示 Research
nav_order: 4
description: Research projects.
---

<div class="projects">
  <h1 class="mb-4">Research</h1>

{%- comment -%}
使用 research collection：
site.research 里的每个条目都有 front matter: title / description / img / importance / github
{%- endcomment -%}

{% assign research_items = site.research | sort: "importance" %}

{% for project in research_items %}

<div class="row my-4 align-items-center">
<!-- 左边：封面图 -->
<div class="col-md-4 mb-2 mb-md-0">
{% if project.img %}
{% include figure.liquid
             path=project.img
             title=project.title
             class="img-fluid rounded z-depth-1"
          %}
{% endif %}
</div>

      <!-- 右边：文字信息 -->
      <div class="col-md-8">
        <h3 class="mt-2 mt-md-0">
          {% if project.github %}
            <a href="{{ project.github }}" target="_blank" rel="noopener">
              {{ project.title }}
            </a>
          {% else %}
            <a href="{{ project.url | relative_url }}">
              {{ project.title }}
            </a>
          {% endif %}
        </h3>

        {% if project.description %}
          <p class="text-muted">
            {{ project.description }}
          </p>
        {% endif %}
      </div>
    </div>
    <hr>

{% endfor %}

</div>
