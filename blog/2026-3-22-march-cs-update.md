---
slug: devblog-march-2026
title: ETS2LA C# Devblog for March
authors: [tumppi066]
tags: [news, C#]
---

import QuestionAndAnswer from '@site/src/components/questionAnswer';
import FeatureAuthors from '@site/src/components/featureAuthors';
import ImageCaption from '@site/src/components/imageCaption';

I've been busy with University work for a large part of the past month. We'll go over how that affects the release schedule in the next chapter. Despite the lack of time, we've still made progress towards one large feature that I think a lot of you will be excited about. I'll also talk about some important news regarding the future of ETS2LA.
<!-- truncate -->
**Welcome to the docs site! We'll start using this for all devblogs moving forward.**

### Release Schedule
This is probably the biggest question on your mind so let's go over it first. **The plan is to still release ETS2LA C# this half of the year!** Despite having a lot on my plate in University, the progress we made in January and February has largely offset the time I haven't been able to put in this month.

Many developers have been helping us stay on track, and with their help we have some extremely exciting news to share.

### ETS2LA C# will natively support Linux!
<FeatureAuthors authors={[
    {name: "Tumppi066,", url: "https://github.com/Tumppi066"},
    {name: "Roccovax,", url: "https://gitlab.com/dariowouters"},
    {name: "truckermudgeon", url: "https://github.com/truckermudgeon"}
]}/>
With the help of **@Roccovax** and **@truckermudgeon**, we've been able to port over our SDKs to Linux. This was the last step in our plan to support Linux natively. Much of the time I've had has gone into converting ETS2LA C# to work on Linux, and while this was a lot of work, it also means that I can now use my preferred OS while developing. **This change will finally open us up to handhelds like the Steam Deck.**

![](/blog/images/2026-3-18-linux.png)
<ImageCaption caption="ETS2LA Python running on Linux (Image by Roccovax)"/>

![](/blog/images/2026-3-18-linux-uw.png)
<ImageCaption caption="ETS2LA C# with Linux SDKs (Image by myself)"/>

<QuestionAndAnswer>
  <p style={{margin: 0}}>Will you update the existing Python version to work on Linux?</p>
  <p style={{margin: 0}}>No, I personally don't have the time to maintain that. However, if another developer wants to take on that task I won't object.</p>
</QuestionAndAnswer>

### What's next?
My next step is finishing our SDKs, there are still some pending jobs I haven't completed yet. You'll see this is done when you get an update to ETS2LA. This update will include the modified cross-platform SDKs. Ideally nothing changes for you, but obviously if you think something is broken after the update then please let us know.

I can then continue making sense of all the game data we have access to. To stay on track I'm hoping to have all data we need in a format that's convenient by the time of the next devblog. After that it's *just* a matter of implementing the first self-driving plugins and we can start letting in more beta testers.

### An Important Announcement
Finally, I have an important announcement to make regarding how ETS2LA is funded. As you know, ETS2LA is an open source project that has no monetary funding outside of our [Ko-Fi](https://ko-fi.com/tumppi066) donations. This has been a great way to fund the project, but it has also made life difficult for me as a University student. I do need money to live, and having to work a job on the side will cut into my already busy schedule. To combat this, last year we implemented ads into the ETS2LA window. However, not only do I not like that, it also doesn't generate much revenue (a single Ko-Fi donation is upwards of a few weeks of revenue). 

So what's the plan?

I'll be implementing an optional subscription for additional **server side** features in ETS2LA C#. While we're still figuring out the details (as ideally this'll come after the release of C#), the plan is to give you access to features **we wouldn't be able to provide otherwise**. I've compiled some facts that we *sort of know by now*, but obviously things will change as we've not even started implementing any of this yet.

- The subscription will be **optional, and will not contain any self driving features**. This is my passion project, I've time and time again promised not to make ETS2LA paid and that's my intention now and forever.
- The subscription will be used to fund server costs, this means **Google ads will be completely removed from ETS2LA websites and the app window**.
- The subscription will include features such as:
  - Remote access to the ETS2LA visualization from anywhere in the world. 
  - Ability to control your truck remotely using this same interface.
  - Cloud settings saving.
  - Supporter badge in the AR overlay when playing in TMP, as well as on the right side Map.
  - Access to a remote API that has all of the above for 3rd party developers' projects. Local APIs continue to be free as they have been.
- The subscription will be priced fairly (equal to, or less than Trucky's [Angel Tier](https://truckyapp.com/support-trucky/)).
- The subscription will have **one price, no tiers, and no yearly discounts**. We don't want to lock you into a 12 month commitment. If you stop using ETS2LA you can stop the subscription.
- The subscription will have regional pricing in some high-userbase regions like China. 

Below is a TLDR of sorts organized into questions I think are on your mind right now. If you still have questions about the subscription then please ask me on our [Discord](https://ets2la.com/discord) server, I'm up for any sort of discussion regarding this. 

<QuestionAndAnswer>
  <p style={{margin: 0}}>Will this affect already existing features at all?</p>
  <p style={{margin: 0}}>No, none of what you already have will be taken away.</p>
</QuestionAndAnswer>

<QuestionAndAnswer>
  <p style={{margin: 0}}>If you implement a feature in the future, will it only be available behind the subscription?</p>
  <p style={{margin: 0}}>Does it cost me something (i.e. server time)? If yes, then it will likely be behind the subscription. If not (like all self-driving features that are done locally), then it will be free for everyone just as it has been so far.</p>
</QuestionAndAnswer>

<QuestionAndAnswer>
  <p style={{margin: 0}}>Will the server backend be open source?</p>
  <p style={{margin: 0}}>No, to safeguard user privacy and adhere to GDPR. We will however provide at least some documentation on the endpoints that are available for 3rd party developers. We maintain an internal document that will be made public if for whatever reason I stop running the servers, not that I expect this to happen.</p>
</QuestionAndAnswer>

<QuestionAndAnswer>
  <p style={{margin: 0}}>Does this mean ETS2LA is going to be enshittified?</p>
  <p style={{margin: 0}}>I hate that as much as you do. The Norwegian Consumer Council <a href="https://youtu.be/T4Upf_B9RLQ?si=rGp9-OmjnaikASW7" target="_blank" rel="noopener noreferrer">recently released a video</a> that pretty much sums up my view on companies destroying their products. Don't worry, as long as I'm in charge, ETS2LA will never be enshittified.</p>
</QuestionAndAnswer>

### Regarding AI and Open Source

There's also another very important thing to talk about. As you know, lately AI has been a hot topic in programming, and a lot of open source projects are fundamentally in danger of being shut down due to it. Even TailwindCSS [is not immune to this](https://github.com/tailwindlabs/tailwindcss.com/pull/2388#issuecomment-3717222957). And this is a project with a much large reach than ETS2LA, it's used in essentially every modern web project out there.

To safeguard ETS2LA against AI and other bad actors in the future, the **driving plugin will be made closed source**, or at the very least only source-available. It's important to note that this just means the code that makes the truck steer, all [inputs and outputs](https://github.com/ets2la/euro-truck-simulator-2-lane-assist/tree/rewrite?tab=readme-ov-file#plugin-development) work the same for 3rd parties, and they can make their equivalent plugin without any issues. This decision is done to safeguard ETS2LA against potentially malicious actors who could use the open source code to create a competing product that undercuts us. This is a sad but necessary decision to ensure the longevity of ETS2LA. I want to make sure that I can continue developing ETS2LA for years to come.

<QuestionAndAnswer>
  <p style={{margin: 0}}>Does this mean the entire project is going to be closed source?</p>
  <p style={{margin: 0}}>No, only the driving plugin. The rest of ETS2LA will remain open source as it has been so far.</p>
</QuestionAndAnswer>
<QuestionAndAnswer>
  <p style={{margin: 0}}>Was this decision done because of the subscription?</p>
  <p style={{margin: 0}}>No, we've had this in mind for a while now. This would've been done even if the core dev team said no to the subscription. Keep in mind I don't make all the decisions myself 👍</p>
</QuestionAndAnswer>


### Community Highlight
Ok, with all that scary and depressing stuff out of the way let's highlight some of the amazing work you've done with ETS2LA! This is a new section that I thought I'd start in the devblogs to highlight these projects. If you have a project that you think deserves to be highlighted, please reach out to us and showcase it!

#### 墨染 - SimHub dash with ETS2LA support
<video controls width="640">  
  <source src="/blog/videos/2026-3-16-scania.mp4" type="video/mp4" />  
  Your browser does not support the video tag.  
</video>
*Source Not Available*

#### Leo (leopri) - Range Rover Interface
<img src="/blog/images/2026-3-16-rr.jpg" width="400"/>
<img src="/blog/images/2026-3-16-rr2.jpg" width="400"/>
*Source Not Available*

#### Luuukske - MonoCruise
<video controls width="640">  
  <source src="/blog/videos/2026-3-16-monocruise.mp4" type="video/mp4" />  
  Your browser does not support the video tag.  
</video>
Source: https://github.com/luuukske/MonoCruise
<br/>
---
<br/>
:::note
**Thanks for reading!**<br/>Writing this post took a while, so if you have any feedback on the format or anything else please let me know! I'm looking forward to next month's devblog, hopefully that one will have more exciting news on the progress of C# and the first self-driving plugins.

If you're interested in what the code looks like (maybe you could create C# plugins in the future!), then check out the [Documentation](/docs/Rewrite/Introduction) for some code snippets and explanations. It's still being worked on, but it should give you a good idea of what to expect.
:::