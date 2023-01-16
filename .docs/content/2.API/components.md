# Components

Components can be used to add more power to your presentation.

::alert{type="info"}
Read more about components in the [Custom Components](https://sli.dev/builtin/components.html#custom-components) section.
::

## Alert

This component can be used to highlight important information.

```html
<Alert color="blue" title="Title">

  This is an alert.

</Alert>
```

::alert{type="danger"}
Be aware to add space between the component and the content above it. Otherwise, the component will be rendered on the same line.
::

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | `undefined` | The title of the alert. |
| color | `Color` | `undefined` | The color of the alert. |

Available `Color` values are **orange**, **red**, **green**, **blue**, **yellow**.
