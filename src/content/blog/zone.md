---
title: "NgZone, Change Detection, & Reactivity in Angular"
description: What is NgZone and how does it work within Angular? What might the future hold for reactivity?
publishDate: Septemeber 13, 2022
id: 4
isDraft: true
---

## Forward

**_At the playground_**

`Me: "Hey zone.js do you wanna be friends?"`
`Zone.js: "Haha sure I'm playing Sonic; Do you wanna be Tails?"`
`Me: "No, I'm gonna be Knuckles and Dr.Eggman"`
`Zone.js: "No fair! you can only pretend to be one character. Wahhhhhhh"`
`Me: "Ok fine, you can be Sonic and that rock on the ground"`
`Zone.js: Runs away in a Sonic like fashion, never speaking to me again`

**_Later that day..._**

`Me: ugh why did I say zone.js could pretend to be a rock. I'm such an asshole.`

**_Later that night in bed..._**

`Me (uncontrollably sobbing): I could have said anything! And I said ROCK! I'm sorry zone.js I should have said Knuckles, you don't deserve me as a friend 😭`

## Preface

The goal is to learn what zone.js is used for within Angular and understand it deeply. It would also be neat to tie in how Angular could be changing in the coming years and what that means for reactivity, change detection, and the future of zone.

Today we're gonna drink a big ol' glass of zone.js and let it's warmth envelop around our body. I want to feel zone.js pulsing through me like the time my s.o. flipped the breaker while I was working on a hot outlet (ok, that never happened). Will zone.js be in our "Top 8"? Or will we kick them out to the bottom of the friends list; certainly causing some drama come Monday in Physics class.

First, I'm going to go drink some milk because for some reason that "big ol' glass" sentence has me craving 20oz of whole milk.

## Chapter 1: Zone.js and why it exists
