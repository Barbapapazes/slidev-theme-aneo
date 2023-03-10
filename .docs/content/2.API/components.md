---
navigation.icon:  heroicons:puzzle-piece
---

# Components

Components can be used to add more power to your presentation.

::alert{type="info"}
Read more about components in the [Custom Components](https://sli.dev/builtin/components.html#custom-components) section.
::

## As same as HTML

Components can be used as `HTML` tags but in your `Markdown` file. So you can use them like this:

```html
<LikeHTML>
  <h1>Heading</h1>
  <p>Paragraph</p>
</LikeHTML>
```

::alert{type="warning"}
You muse use PascalCase for component names (but not for HTML native tags).
::

You can also use Markdown inside your component:

```md
<LikeHTML>

# Heading

Paragraph

</LikeHTML>
```

::alert{type="danger"}
Be aware to the **space between the component tag and the content**. There are important to be able to parse the content correctly.
::

## Class and style

You can add a class to your component:

```html
<LikeHTML class="my-class">
  <h1>Heading</h1>
  <p>Paragraph</p>
</LikeHTML>
```

But this theme come with [Windi CSS](https://windicss.org/) so you can use the power of this utility-first CSS framework:

```html
<LikeHTML class="mt-6 bg-blue-500 text-white">
  <h1>Heading</h1>
  <p>Paragraph</p>
</LikeHTML>
```

::alert{type="info"}
Read more about [Windi CSS](https://windicss.org/).

- [Colors](https://windicss.org/utilities/general/colors.html)
- [Spacing](https://windicss.org/utilities/general/typography.html)
- [Typography](https://windicss.org/utilities/layout/spacing.html)

and more...
::

## Built-in Slidev

Slidev come with many built-in components.

You can find the full list of components in [the repository](https://github.com/slidevjs/slidev/tree/main/packages/client/builtin).


## Custom Components

This theme provides some custom components.

### Alert

This component can be used to highlight important information.

```html
<Alert color="blue" title="Title">

  This is an alert.

</Alert>
```

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | `undefined` | The title of the alert. |
| color | `Color` | `undefined` | The color of the alert. |

Available `Color` values are **orange**, **red**, **green**, **blue**, **yellow**.

### SectionContent

This component is nearly the same as the `Alert` component but with a different style to allow you to create sections inside your slides.

```html
<SectionContent color="blue" title="Title">

  This is a section.

</SectionContent>
```

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | `undefined` | The title of the section. |
| color | `string` | `undefined` | You can use any valid color. |

### CenterContent

This component can be used to center the content of a slide horizontally.

```html
<CenterContent>

You can center content with the `Center` component (horizontally).

- Item 1
- Item 2
- Item 3 is so long (but always centered)

</CenterContent>
```

### Zoom

This component can be used to zoom inside an image.
  
```html
<Zoom src="https://source.unsplash.com/random/800x600" scale="1.3" origin="left center" />
```

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| src | `string` | required | The source of your image. |
| scale | `string` | `undefined` | The amount of zoom. |
| origin | `string` | `undefined` | The origin of the zoom. |
