---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 3
horizontal: false
---

<div class="projects">
  {%- comment -%}
    Projects 页面：展示所有非 research 的项目，
    不按 work / fun 分类分块，也不显示 Category 字段。
  {%- endcomment -%}

{% assign projects_only = site.projects | reject: "category", "research" | sort: "importance" %}

{% for project in projects_only %}

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
