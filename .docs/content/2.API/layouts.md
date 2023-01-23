# Layouts

Discover every layouts you can use to create your presentation

## Default

This layout is used by default. It's a blank layout.

Use can add a `see-more` link. It will appear at the top right of your presentation.

```md
---
seeMore:
  text: Read more
  url: https://sli.dev
---
```

## Cover

The cover layout is used ad the first slide of your presentation. It is used to display the title of your presentation and the date.

```md
---
layout: cover
background: /path/to/image.png or #hex or rgb or hsl
---
# Title

Subtitle
```

If you provide title and author, you can have a blank cover slide.

```md[slides.md]
---
theme: aneo
layout: cover
title: My presentation
author: John Doe
---

<!--
Filled using config. It's the same as:

# My presentation

John Doe - <today's date>
 -->

---

# Second slides
```

::alert{type="info"}
Read more about [configuration](https://sli.dev/guide/syntax.html#configurations)
::

## Toc

The toc layout is used to display a table of content of your presentation. You need to use `<Toc></Toc>` in your slides.

```md
---
layout: toc
---
## Summary

<Toc></Toc>
```

If you want to hide a slide from the toc, you can use the `hideInToc` front-matter in the slide you want to hide.

```md
---
layout: toc
---
## Summary

<Toc></Toc>

---
hideInToc: true
---

## Hidden slide in toc
```

::alert{type="info"}
Read more about [Toc component](https://sli.dev/builtin/components.html#toc)
::

## Section

The section layout is used to display a section of your presentation.

```yaml
---
layout: section
background: /path/to/image.png or #hex or rgb or hsl
position: center
right: true
---
```

The right option is used to display the background at the left or the right of the slide. Available values:

- true
- false (default)

If the background is an image, you can choose position to display the content. Available positions:

- left
- right
- center (default)
- top
- bottom

::alert{type="info"}
Position rely on [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
::

## Two columns

The two columns layout is used to display two columns of content.

You can use the `::left::` and `::right::` to display content in the left and right column.

```md
---
layout: two-cols
---

# Title

::left::

## Left columns

::right::

## Right column

```
