---
layout: page
title: projects
permalink: /projects/
description: A growing collection of your cool projects.
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {%- comment -%}
    按类别显示项目（work / fun），每个项目：左边图片，右边文字
  {%- endcomment -%}
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>

    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}

    {% for project in sorted_projects %}
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
            <a href="{{ project.url | relative_url }}">
              {{ project.title }}
            </a>
          </h3>

          {% if project.description %}
            <p class="text-muted">
              {{ project.description }}
            </p>
          {% endif %}

          <p class="mb-0 small text-muted">
            {% if project.category %}
              <span class="me-2"><strong>Category:</strong> {{ project.category }}</span>
            {% endif %}
            {% if project.date %}
              <span><strong>Date:</strong> {{ project.date | date: "%Y-%m-%d" }}</span>
            {% endif %}
          </p>
        </div>
      </div>
      <hr>
    {% endfor %}

{% endfor %}

{% else %}

{%- comment -%}
没有分类时，直接把所有 projects 按 importance 排序，一条条列出来
{%- endcomment -%}
{% assign sorted_projects = site.projects | sort: "importance" %}

{% for project in sorted_projects %}

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
          <a href="{{ project.url | relative_url }}">
            {{ project.title }}
          </a>
        </h3>

        {% if project.description %}
          <p class="text-muted">
            {{ project.description }}
          </p>
        {% endif %}

        <p class="mb-0 small text-muted">
          {% if project.category %}
            <span class="me-2"><strong>Category:</strong> {{ project.category }}</span>
          {% endif %}
          {% if project.date %}
            <span><strong>Date:</strong> {{ project.date | date: "%Y-%m-%d" }}</span>
          {% endif %}
        </p>
      </div>
    </div>
    <hr>

{% endfor %}

{% endif %}

</div>
