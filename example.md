---
theme: ./
layout: cover
title: Titre de la présentation
author: Auteur
background: https://images.unsplash.com/photo-1535957998253-26ae1ef29506?fit=crop&w=736&q=80
highlighter: shiki
hideInToc: true
favicon: /favicon.ico
---

# Titre de la présentation

Octobre 2022

---
layout: cover
hideInToc: true
---

---
layout: cover
hideInToc: true
---

# Small

But very very large subtitle

---
layout: toc
hideInToc: true
---

# Sommaire complet

<Toc columns="2" listClass="!list-none"></Toc>

---
layout: toc
hideInToc: true
---

# Sommaire sections only

<Toc maxDepth="1"></Toc>

---
layout: section
background: https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fit=crop&w=1470&q=80
position: right
---
# <carbon-ai-status-complete/> Objectifs

---

Les objectifs de cette présentation sont les suivants :
- Objectif 1
- Objectif 2
- Objectif 3

---
layout: section
background: https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?fit=crop&w=1470&q=80
right: true
---

# Objectifs

---
layout: two-cols
---

## Title
Subtitle

::left::

Colonne 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.

::right::

Colonne 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.


---
seeMore:
    href: https://google.com
    text: Google
---

## Du code

```ts
import { promises as fs } from 'fs';

export class Store {
    constructor() {
    }

    async foo() {
        const buffer = await fs.readFile('test.yaml', 'utf-8');
        return buffer.substr(0, buffer.length);
    }
}
```

---

# Un dockerfile ?

```docker	
# first stage that is used to build the application
FROM ubuntu as build
RUN install tools needed to build the application (compiler)

COPY src/* /dest
WORKDIR /dest
RUN compile the code

# second stage that only holds the application and its runtime depdencies
FROM ubuntu
RUN install tools needed to execute the application (runtime)
COPY --from=build /dest/bin/ /usr/local/bin/

ENTRYPOINT ["/usr/local/bin/myapplication", "the", "options"]
```
- `Dockerfile`: dockerfile

---

<Alert title="Titre de l'alerte" color="orange">

Je suis le **contenu** de l'alerte. [Changez de page](/1).

</Alert>

<Alert class="mt-8" title="Titre de l'alerte" color="red">

- Item 1

</Alert>

<Alert class="mt-8" title="Titre de l'alerte" color="yellow">

Je suis le **contenu** de l'alerte. [Changez de page](/1).

</Alert>

---

# Quelques alerts 2

<Alert class="mt-8" title="Titre de l'alerte" color="blue">

Je suis le **contenu** de l'alerte. [Changez de page](/1).

</Alert>

<Alert class="mt-8" title="Titre de l'alerte" color="green">

Je suis le **contenu** de l'alerte. [Changez de page](/1).

</Alert>

---

# Quelques alerts

Subtitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.

---
layout: section
---

# Section with subsections

---

## Subsection 1

Subtitle subsection 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.

---

## Subsection 2

Subtitle subsection 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.

---
layout: content-center
---

# Titre

::center::

Le contenu est centré

<Alert color="blue" title="Titre" class="mt-4">

Je suis le **contenu** de l'alerte. [Changez de page](/1).

</Alert>

---

# Titre
Subtitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.

---

## Titre
Subtitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna. Eu ultrices vitae auctor eu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim enim sit amet venenatis urna cursus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tempus iaculis urna id volutpat.

---

## Center content

<CenterContent>

You can center content with the `Center` component (horizontally).

- Item 1
- Item 2
- Item 3 is so long (but always centered)

</CenterContent>

---
layout: content-center
---

# Titre

::center::

<CenterContent>
<Transform scale="0.4" origin="center center">

    ```ts
    import { promises as fs } from 'fs';

    export class Store {
        constructor() {
            }

        async foo() {
            const buffer = await fs.readFile('test.yaml', 'utf-8');
            return buffer.substr(0, buffer.length);
        }
    }
    ```

</Transform>
</CenterContent>

---
src: ./example_2.md
---