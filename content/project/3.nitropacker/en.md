---
title: &title 'NitroPacker'
description: &desc 'A utility for unpacking and repacking Nintendo DS games as well as applying ASM hacks to them.'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:url'
    content: 'https://jonkode.su/project/loopy-suite'
  - property: 'og:type'
    content: 'article'
  - name: 'twitter:title'
    value: *title
  - name: 'twitter:description'
    value: *desc
  - name: 'twitter:site'
    value: '@jonko0493'
  - name: 'twitter:card'
    value: 'summary_large_image'
---

[NitroPacker](https://github.com/haroohie-club/NitroPacker) is a tool for unpacking and repacking Nintendo DS games as well as applying ASM hacks to them. It was originally developed by [Ermii](https://www.ermiisoft.net/) and [Gericom](https://github.com/Gericom) while working on [Mario Kart Toolbox](https://github.com/HaroohiePals/MarioKartToolbox). Since taking custody of it, I have ported it to modern .NET and rewritten significant portions of the code to support unpacking more types of games.