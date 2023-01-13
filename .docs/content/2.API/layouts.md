# Layouts

Discover every layouts you can use to create your presentation

## Default

This layout is used by default. It's a blank layout.

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

## Toc

The toc layout is used to display a table of content of your presentation. You need to use `<Toc></Toc>` in your slides.

```md
---
layout: toc
---
## Summary

<Toc></Toc>
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

To add content to the second column, you need to write it after `::right::`

```md
---
layout: two-cols
---
## Left columns

::right::

## Right column

```