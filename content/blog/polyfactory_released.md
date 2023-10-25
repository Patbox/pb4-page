+++
title = "PolyFactory finally released and here is it's story!"
date = 2023-10-11

[extra]
#image = "blog/polyfactory_released/main.png"
image = "images/mods/polyfactory.png"
+++

# PolyFactory finally released and here is it's story!

After a bit long development time, [PolyFactory](httops://modrinth.com/mod/polyfactory) released it's first version for public usage and I can say one thing, it was a ride! From first prototypes, blanketcon showcase and first release many things changed, yet stayed the same. So I thought it could be cool to write how it all started...
## And it all started with... Paper and Slimefun...
![](/blog/polyfactory_released/crafters.jpg)
Long time before I started modding Minecraft with Fabric, I created my first server using Paper. It wasn't much by standards back then, full of jank and multi-world setup emulating server networks of the day. But sometime in it's 3rd iteration of the survival server, one of the players recommended to install Slimefun. Which I wasn't convinced at first, at the end I ended installing it anyway and players liked it! Then through few years of it's existance, it changed names and themes, but Slimefun stayed. Through after a while, when using Skript for customisation wasn't enough, by pure luck I found out about found out about Fabric Server Side ecosystem, which already had quite a lot going on with projects such as [Nucleoid](https://nucleoid.xyz), a minigame server made purely with server side fabric mods and [TheEpicBlock's PolyMc](https://github.com/theepicblock/polymc), which could automatically make some mods work purely server side. And after some time, I decided it would be good to try out modding with Fabric...
## Original direction: HoneyTech
![](/blog/polyfactory_released/honeytech.png)
Fast forward some time later, my server moved to Fabric, Polymer was created as a library for Nucleoid and my own mods for which I didn't want to use resource packs at the time, players wanted Slimefun back on the server and so did I... kinda.
I never really liked a lot of it's design, as main way to progress through that plugin was to grind vanilla experience... which was boring and not connected to it at all. I also didn't like how unfocused it was, having a lot of different parts with inconsistent theme. And so in April 2021, I started working on my first idea of server side tech mod: **HoneyTech**.
It was way closer to Slimefun's tech parts, but without forced progression and things from classical tech mods such as pipes and cables. But the progress was slow and after some initial implementation, I wasn't sure how I wanted it to go forward. This slowed the development of it, where most work I ended up doing was porting what already existed to newer versions.
But after a while I stopped doing that, as it didn't feel worth it.
On the bright side, one thing that I ended up extracting from that mod was [Polydex](https://modrinth.com/mod/polydex).
You can find last version of HoneyTech archived on [Github](https://github.com/patbox/honeytech) but I don't think there is much you can take from it. 
## The new idea
![](/blog/polyfactory_released/early_polyfactory.png)
So sometime later, the itch to create server side tech mod came back, but this time, with different design inspired by [BetterThanWolves](https://sargunster.com/btw/index.php/Main_Page)...
 ...and the currently super popular [Create](https://modrinth.com/mod/create).
So in February 2023 I started prototyping, what was then called Project Factory, first creating Conveyors, Creative Motors (back then Speed Controllers) and (non-functional) Cable Plates (which got removed anyway). Just after that, Mojang released a snapshot that changed everything. 23w06a added Display Entities, which changed the direction of this mod from being oriented purely on cables/electricity to usage of rotational power. After that, things like Funnels, Fans, Block Miners. Through over time development slowed down again, for the same reason as HoneyTech, but excitement of other people motivated me to keep going, which culminated with me trying to get as many features into something presentable for [Blanketcon](https://blanketcon.modfest.net/23/) and that ended up motivating me more, as people ended up liking it!
![](/blog/polyfactory_released/blanketcon.png)
Which kept the development speed faster than ever before, allowing me to add way more items and mechanics to the initial release! For example things like Small and Large Steel Gears (and by extension directional rotations), more data-providing blocks, colored Cables and experimental energy system (mostly created for future additions and "addon" mods). The final stretch things slowed down a bit, but thats mostly because of me starting uni and moving out, while still wanting to make sure initial release is as polished up as possible.
## So this is how PolyFactory was made...
![](https://cdn.modrinth.com/data/MikpSrAF/images/c9f682a402dba65fef2812de960456f42463b003.png)
With recent release, I hope server makers and players will have fun with this mod, while other mod devs might try making some server side mods themselves. If you haven't tried it out yet, you can [download it from Modrinth](https://modrinth.com/mod/polyfactory) and play on 1.20.2 (or newer, if you read it in the future ;) ). While it's intended to be ran on a server, it works just fine on singleplayer.

And for the future of the mod, I still have quite few ideas for things I want to add to it, but thats for later. So have fun! 
