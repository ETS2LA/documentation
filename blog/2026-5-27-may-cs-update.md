---
slug: devblog-may-2026
title: ETS2LA C# Devblog for May
authors: [tumppi066]
tags: [news, C#]
---

import FeatureAuthors from '@site/src/components/featureAuthors';
import ImageCaption from '@site/src/components/imageCaption';

Compared to the past few months, we have made progress at a significant speed. Some of you might have seen previews on Discord, and I'll expand on those here.
<!-- truncate -->

### Release Schedule
We are only missing one major feature (ACC) until I'm comfortable with releasing an open beta. This means that **we will be seeing a C# open beta by the end of the next month**. This initial beta will certainly be missing features, but it should also have many improvements over python. We'll keep supporting both versions until C# is officially released.

You should see one more devblog before the initial release. The devblogs should continue even after release, as we're going to be using these as a way to compile a list of changes, and if there's enough interest, we might explain and showcase how some of our features work internally.

### Improvements to lane keeping / navigation
Last month I teased the first version of a simple lane keeping system. This system has vastly improved in the days since. We're still far from a *great* system, but even in it's current state the feedback from testers has been good. Below is a video showcasing the current system following the navigation route set in game.

<video controls width="100%">  
  <source src="/blog/videos/2026-5-26-nav-example.mp4" type="video/mp4" />  
  Your browser does not support the video tag.  
</video>
<ImageCaption caption="ETS2LA C# navigating in Sweden."/>

Much like last month's video, we include no filtering on steering output here. This means what you're seeing is the raw output from our steering algorithms, and upon release it will be smoothed out. There are also some weird lane choices, lane changes aren't smooth, and the system still sometimes can't figure out the next item. However overall I think we're already on par with the Python version, and this time there are no lag spikes or weird stutters!

### Functional UI
During the initial stages of development, most settings are not exposed to users. However as we move closer to release, having these options available without additional fuss is important. I've kept in mind some of the lessons we've learned over the years of developing in Python, and the goal is to hopefully provide a better onboarding experience in addition to finally having some long needed features.

One of these features is the ability to change ETS2LA's display units straight from the interface. This hasn't been possible in the Python version due to multiple structural problems, but now with C# this has been a breeze to implement.

<video controls width="100%">  
  <source src="/blog/videos/2026-5-25-display-units.mp4" type="video/mp4" />  
  Your browser does not support the video tag.  
</video>
<ImageCaption caption="Dynamically changing display units."/>

Work on the UI will continue after the initial open beta. What you see here is most likely not going to be the final look of our UI, and even the current code underneath is somewhat unfinished. If you have any interesting feedback or suggestions then you can send those our way. We're always interested in what the community thinks! Personally I'm starting to like what Rivian is doing with their UI, maybe we'll find inspiration there ;)

### Operating System support
<FeatureAuthors authors={[
    {name: "playzzero97", url: "https://github.com/playzzero97"},
]}/>
It's previously been noted that ETS2LA will work natively on Windows and Linux. However due to work by **playzzero**, we are now also in the process of adding support for MacOS. While I don't have any videos worth showing (it's still WIP after all) I can pretty confidently say we will support MacOS by open beta launch, or at the very least slightly after it.

That said it's important to note that you cannot mix and match versions. If for example you're running the game inside proton, you will also have to run ETS2LA inside that same container. Essentially they need to run on the same "logical" system, a VM doesn't count as a part of your main OS.

### Notice about Ko-Fi
As we approach the open beta, I will also close my existing Ko-Fi page. In the future people will be able to support the project *and* get something for their money. I don't like asking for donations in this situation. As a thank you to existing supporters, they'll receive subscription time equal to their donation + 1 month (ie. 3€ donation is 2 months).

Important to note here that once again, the subscription is entirely optional for server side features. Whether a feature is behind the subscription or not is a simple question: does it cost me money to run? If so then it'll be a subscription feature. Anything that runs on your PC costs me nothing, and as such **will not be behind a subscription**.

### What to expect next month
I have to stress here that next month's release is as it name implies, an **open beta**. There will be missing features and bugs, and to be honest that's really the point. The closed beta testers have been putting in amazing work, but we still need more people testing ETS2LA in all the different situations possible. We'll use your feedback to fix bugs and add features, and hopefully ETS2LA C# won't be in beta for more than a month or two!

With that said here's what you can expect to see next month:
- **Initial draft of our UI**, this will likely be remade entirely based on feedback.
- **No Visualization or Map pages**, ETS2LA C# will only ship with an AR HUD similar to what you see in the video above. The Visualization and Map pages will be remade in the future, especially the visualization will take a while.
- **Navigation, lane keeping, and ACC will be available**, but they will likely be missing some features and have bugs. These will improve drastically even within weeks.
- **3rd party plugin support**, we'll have a similar catalogue as we have now. Even our official plugins will be in the catalogue.
- **Initial onboarding experience**, this will likely be better than what we have right now.
- Support for **Windows, Linux, and MacOS**.

Most missing features will be added in the weeks following the release. This is in addition to our networked features, which we're still working on designing. This means the subscription won't be available at launch, but instead will be added in the future. Again none of the features you have will be taken away, the subscription will come with additional server side features to support development.

I hope you're as excited for ETS2LA as I am, this will be the biggest change we've ever made, and I can't wait to share it with you all!

<br/>
---
<br/>
:::note
**Thanks for reading!**<br/> 
If you're interested in what the code looks like (maybe you could create C# plugins in the future!), then check out the [Documentation](/docs/Introduction) for some code snippets and explanations. It's still being worked on, but it should give you a good idea of what to expect.

We're welcoming all C# developers with open arms, my experience is mostly limited to Unity, and as such I'm having to learn how to do things the "right way" as I go. Please just keep in mind that we don't allow agentic AI in our codebase, we value the effort of individual people over the apparent "efficiency" of AI.
:::