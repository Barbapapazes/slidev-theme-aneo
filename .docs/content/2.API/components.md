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

## Alert

This component can be used to highlight important information.

```md
<Alert color="blue" title="Title">
  This is an alert.
</Alert>
```

Props:
- title: `string`, `required`
- color: `Color`, `required`

Available `Color` values:
- Orange
- Red
- Green
- Blue
- Yellow