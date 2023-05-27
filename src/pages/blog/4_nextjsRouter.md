---
layout: "../../layouts/BlogPost.astro"
title: "Next.js / Routing"
description: "Next.js: Routingどうなっとるんやについて"
pubDate: "May 27 2023"
tags: [Tech, Next.js, note, React]
---
## Understanding Fle-based Routing

### File-based Routing Instead Of Code-based Routing

- No react-router
- no in-code route definitions

★ Create React component files and let NextJS infer the routes from the file system(= folder structure)

### How It Works

``` js
/pages
  /index.js : Main stating page(my-domain.com/)
  /about.js : About page(my-domain.com/about)

  /products
    /index.js : All products page(my-domain.com/products)
    /[id].js : Single product detail page(my-domain.com/products/<id>)
```

![](/assets/id.png)

このように、適当な値をいれてもそこをidとして認識。(= `router.query`)

→ can send a request to some backend server, and to fetch the piece of data with an id of `router.query.id`

---

![](/assets/slug.png)

JSとおなじように`...`も使える

---

File-based Routing(Next.js) <=> Code-based Routing(React + react router)

[Filebased]

- No extra boilerplate code required.
- Intuitive system
- File + folder structure (in pages/ folder) influences routes
- Navigation works with `<Link>` component and imperatively.

[Code-based]

- Boilerplate setup in code required(`<Switch>`, `<Route>`)
- Straightforward but includes new components + concept
- File + folder setup does not matter at all
- Navigation works with `<Link>` component and imperatively.
