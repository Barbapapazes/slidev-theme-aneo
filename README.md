# slidev-theme-aneo

[![NPM version](https://img.shields.io/npm/v/slidev-theme-aneo?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-aneo)

Aneo theme for [Slidev](https://github.com/slidevjs/slidev).

See live demo [here](https://slidev-aneo.esteban-soubiran.site).

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>aneo</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

### Cover layout

The cover layout is used ad the first slide of your presentation. It is used to display the title of your presentation and the date.

```yaml
---
background: /path/to/image.png or #hex or rgb or hsl
---
```

### Toc layout

The toc layout is used to display a table of content of your presentation. You need to use `<Toc></Toc>` in your slides.

```md
# Summary

<Toc></Toc>
```

[Multiples params](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin/Toc.vue) are available.

```ts
{
  columns?: string | number
  listClass?: string | string[] // Use must prefix class with ! to mark it as important
  maxDepth?: string | number
  minDepth?: string | number
  mode?: 'all' | 'onlyCurrentTree' | 'onlySiblings'
}
```

### Section layout

The section layout is used to display a section of your presentation.

If the background is an image, you can choose position to display the content (default is center). All position available in [the background-position.ts](./types/background-position.ts).

```yaml
---
background: /path/to/image.png or #hex or rgb or hsl
right: true  or false # Used to display the background a the left or the right of the slide
position: left or right or center or top or bottom
---
```

### Two columns layout

The two columns layout is used to display two columns of content.

## Components

This theme is not providing any components.

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG

Feel free to open an issue or PR if you have any questions or suggestions.