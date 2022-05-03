// ==UserScript==
// @name         Intel小工具
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @description  try to take over the world!
// @author       msojocs
// @match        https://keylol.com/*
// @noframes
// @grant        GM_log
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_info
// @grant        unsafeWindow
// @connect      task.jysafe.cn
// @connect      mog-accounts.overwolf.com
// @connect      mog-battlepass.overwolf.com
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// @require      https://greasyfork.org/scripts/441331-md5/code/md5.js?version=1026891
// @icon         https://www.google.com/s2/favicons?domain=keylol.com
// @updateURL    https://task.jysafe.cn/intel/intel.user.js
// @downloadURL  https://task.jysafe.cn/intel/intel.user.js
// @namespace   jiyecafe@gmail.com
// ==/UserScript==
// TODO: 自动弹出地址？
// @require      http://127.0.0.1:5500/js/main.ed19e0b4.chunk.js

(function() {
    'use strict';

    // Your code here...
    const jq=$
    const seasonId = "erIcnSBBspbY5iRP";
    const ClientId = "65611705-d057-4ae8-80ff-5dc731db1fec"; // intel
    // acibipjmghoeafghadnbbjdpofabgdicbjppneee/191.2.5/dist/index/index.js
    const INTEL_DATA = JSON.parse('{"erIcnSBBspbY5iRP":{"title":"Master of Game challenge","headerQuestionMarkLinks":[{"title":"FAQ","url":"https://support.overwolf.com/en/support/solutions/articles/9000203620-intel-master-of-game-challenge"}],"sidebar":{"logoUrl":"/assets/images/mog/tab-master-of-game-logo.png","tooltip":"Playpass (Beta)"},"welcome":{"description":"The event is now over! Please feel free to register in order to get notified about future events","promotional":"","learnMoreUrl":"https://link.overwolf.com/intel-learn-more"},"schedule":{"bannerUrl":"/assets/images/IEM/schedule/week-background.webp","descriptionHtml":"<b>1st Place</b> Predator Triton 500 laptop, Predator Gaming Utility Backpack, Predator X27 Display, SteelSeries Peripherals. <b>2nd-10th Places</b> Predator Helios 300 laptop, SteelSeries Peripherals.<br/><b>Weekly/Daily</b> Prizes Intel Processors, Predator Helios laptops, Best Buy Gift Cards, SteelSeries Peripherals.","moreInfoUrl":"https://link.overwolf.com/intel-learn-more"},"scheduleFtue":{"bannerUrl":"/assets/images/IEM/schedule/schedule-ftue.webp","description":"Play games and earn as many points as you can to increase your chances of winning amazing prizes: <b>Predator Triton 500/300 series laptops, Predator Gaming Utility Backpack, Predator X27 Display, SteelSeries Peripherals and more!</b>","participationDescription":"All you need to do to participate is keep the Intel Gaming Access app open while you play PUBG or CS:GO and rack up those points!","learnMoreUrl":"https://link.overwolf.com/intel-learn-more"},"howTo":{"bannerUrl":"/assets/images/IEM/how-to/background.webp"},"freePoints":{"supported":true,"events":["Survey"]},"missionDefinitions":[{"title":"Basic Training","description":"Play for at least 30 minutes","points":25,"goal":30,"id":"play-x-hours","period":1,"missionType":2},{"title":"Plug and Play","description":"Play up to 4 hours today (earn for every hour)","points":200,"goal":4,"id":"daily-x-hours","period":1,"missionType":2},{"title":"2 Birds, 1 Stone","description":"Play 2 different games today (30 min each)","points":80,"goal":2,"id":"play-x-games-daily","period":1,"missionType":2},{"title":"Daily Check-in","description":"Click to check-in","points":25,"btnText":"Check in","id":"daily-check-in","period":1,"missionType":1},{"title":"Second Wind","description":"Play for at least 6 hours","points":180,"goal":6,"id":"play-x-hours","period":2,"missionType":2},{"title":"No sleep","description":"Play for 15 hours this week","points":225,"goal":15,"id":"play-x-hours","period":2,"missionType":2},{"title":"Well Traveled","description":"Play 5 different games this week (1 hour each min)","points":150,"goal":5,"id":"play-x-games-daily","period":2,"missionType":2},{"title":"Full timer","description":"Play for 6 days in one week (min 1 hour a day)","points":240,"goal":6,"id":"play-x-days","period":2,"missionType":2},{"title":"Feedback","description":"Let us know what you think about the app","points":100,"btnText":"Fill Survey","id":"fill-survey","period":3,"missionType":1},{"title":"Rate the app","description":"Rate us on the Overwolf Store","points":100,"btnText":"Rate us","id":"rate-on-overwolf","period":3,"missionType":1},{"title":"Uncover Explore","description":"Uncover and Explore for more chances to win on our website!","points":20,"btnText":"Go to Site","id":"season2-asus-elden-ring-uncover-exolore","period":4,"missionType":1,"eventId":"season2-asus-elden-ring"},{"title":"ASUS Republic of Gamers","description":"Follow to learn more about ASUS ","points":30,"btnText":"Go to Site","id":"season2-asus-elden-ring-rog","period":4,"missionType":1,"eventId":"season2-asus-elden-ring"},{"title":"Intel 12th Generation","description":"Check Out the Intel 12th Gen Laptop","points":20,"btnText":"Go to Site","id":"season2-asus-elden-ring-gen-twelve","period":4,"missionType":1,"eventId":"season2-asus-elden-ring"},{"title":"Uncover Explore","description":"Uncover and Explore for more chances to win on our website!","points":20,"btnText":"Go to Site","id":"season2-acer-mhr-uncover-exolore","period":4,"missionType":1,"eventId":"season2-acer-mhr"},{"title":"Acer Predator","description":"Learn More about Acer Predator","points":30,"btnText":"Go to Site","id":"season2-acer-mhr-acer-predator","period":4,"missionType":1,"eventId":"season2-acer-mhr"},{"title":"Intel 12th Generation","description":"Check Out the Intel 12th Gen Laptop","points":20,"btnText":"Go to Site","id":"season2-acer-mhr-gen-twelve","period":4,"missionType":1,"eventId":"season2-acer-mhr"},{"title":"Uncover Explore","description":"Uncover and Explore for more chances to win on our website!","points":20,"btnText":"Go to Site","id":"season2-msi-dying-light-uncover-exolore","period":4,"missionType":1,"eventId":"season2-msi-dying-light"},{"title":"MSI Raider Laptop","description":"Learn More about MSI Raider Laptop","points":30,"btnText":"Go to Site","id":"season2-msi-dying-light-raider-laptop","period":4,"missionType":1,"eventId":"season2-msi-dying-light"},{"title":"Intel 12th Generation","description":"Check Out the Intel 12th Gen Laptop","points":20,"btnText":"Go to Site","id":"season2-msi-dying-light-gen-twelve","period":4,"missionType":1,"eventId":"season2-msi-dying-light"},{"title":"Uncover Explore","description":"Uncover and Explore for more chances to win on our website!","points":20,"btnText":"Go to Site","id":"season2-lenovo-pubg-uncover-exolore","period":4,"missionType":1,"eventId":"season2-lenovo-pubg"},{"title":"Lenovo Legion","description":"Follow to learn more about Lenovo Legion","points":30,"btnText":"Go to Site","id":"season2-lenovo-pubg-legion","period":4,"missionType":1,"eventId":"season2-lenovo-pubg"},{"title":"Intel 12th Generation","description":"Check Out the Intel 12th Gen Laptop","points":20,"btnText":"Go to Site","id":"season2-lenovo-pubg-gen-twelve","period":4,"missionType":1,"eventId":"season2-lenovo-pubg"},{"title":"Uncover Explore","description":"Uncover and Explore for more chances to win on our website!","points":20,"btnText":"Go to Site","id":"season2-dell-genshin-impact-uncover-exolore","period":4,"missionType":1,"eventId":"season2-dell-genshin-impact"},{"title":"Learn More about Dell","description":"Follow to learn more about Dell","points":30,"btnText":"Go to Site","id":"season2-dell-genshin-impact-learn-more","period":4,"missionType":1,"eventId":"season2-dell-genshin-impact"},{"title":"Intel 12th Generation","description":"Check Out the Intel 12th Gen Laptop","points":20,"btnText":"Go to Site","id":"season2-dell-genshin-impact-gen-twelve","period":4,"missionType":1,"eventId":"season2-dell-genshin-impact"},{"title":"Uncover Explore","description":"Uncover and Explore for more chances to win on our website!","points":20,"btnText":"Go to Site","id":"season2-hp-total-war-warhammer-3-uncover-exolore","period":4,"missionType":1,"eventId":"season2-hp-total-war-warhammer-3"},{"title":"HP Omen","description":"Follow to learn more about HP Omen","points":30,"btnText":"Go to Site","id":"season2-hp-total-war-warhammer-3-omen","period":4,"missionType":1,"eventId":"season2-hp-total-war-warhammer-3"},{"title":"Intel 12th Generation","description":"Check Out the Intel 12th Gen Laptop","points":20,"btnText":"Go to Site","id":"season2-hp-total-war-warhammer-3-gen-twelve","period":4,"missionType":1,"eventId":"season2-hp-total-war-warhammer-3"}],"achievementsDefinitions":[{"id":"15","setId":"New-Grounds","title":"New Grounds","description":"Play any game you haven\'t played yet for 3 hours","points":40,"goal":3,"handlerId":"play-x-hours-excluding-y-games","assetUrl":"achieve_newgrounds","missionType":3,"level":1,"achievementType":2},{"id":"16","setId":"Look-At-Me","title":"Look At Me","description":"Set your first earned profile picture","points":10,"goal":1,"handlerId":"set-user-avatar","assetUrl":"achieve_lookatme","missionType":3,"level":1,"achievementType":3},{"id":"17","setId":"Show-Off","title":"Show off","description":"Set your first Profile achievement","points":10,"goal":1,"handlerId":"set-profile-achievement","assetUrl":"achieve_showoff","missionType":3,"level":1,"achievementType":3},{"id":"21","setId":"Playtime","title":"Playtime I","description":"Play for a total of 20 hours","points":50,"goal":20,"handlerId":"play-x-hours","assetUrl":"achive_playtime_01","missionType":3,"level":1,"achievementType":1},{"id":"22","setId":"Playtime","title":"Playtime II","description":"Play for a total of 30 hours","points":20,"goal":30,"handlerId":"play-x-hours","assetUrl":"achive_playtime_02","missionType":3,"level":2,"achievementType":1},{"id":"23","setId":"Playtime","title":"Playtime III","description":"Play for a total of 40 hours","points":25,"goal":40,"handlerId":"play-x-hours","assetUrl":"achive_playtime_03","missionType":3,"level":3,"achievementType":1},{"id":"24","setId":"Playtime","title":"Playtime IV","description":"Play for a total of 50 hours","points":30,"goal":50,"handlerId":"play-x-hours","assetUrl":"achive_playtime_04","missionType":3,"level":4,"achievementType":1},{"id":"25","setId":"Playtime","title":"Playtime V","description":"Play for a total of 60 hours","points":35,"goal":60,"handlerId":"play-x-hours","assetUrl":"achive_playtime_05","missionType":3,"level":5,"achievementType":1},{"id":"26","setId":"Playtime","title":"Playtime VI","description":"Play for a total of 70 hours","points":45,"goal":70,"handlerId":"play-x-hours","assetUrl":"achive_playtime_06","missionType":3,"level":6,"achievementType":1},{"id":"27","setId":"Playtime","title":"Playtime VII","description":"Play for a total of 80 hours","points":50,"goal":80,"handlerId":"play-x-hours","assetUrl":"achive_playtime_07","missionType":3,"level":7,"achievementType":1},{"id":"28","setId":"Playtime","title":"Playtime VIII","description":"Play for a total of 90 hours","points":55,"goal":90,"handlerId":"play-x-hours","assetUrl":"achive_playtime_08","missionType":3,"level":8,"achievementType":1},{"id":"29","setId":"Playtime","title":"Playtime IX","description":"Play for a total of 100 hours","points":60,"goal":100,"handlerId":"play-x-hours","assetUrl":"achive_playtime_09","missionType":3,"level":9,"achievementType":1},{"id":"30","setId":"Playtime","title":"Playtime X","description":"Play for a total of 110 hours","points":80,"goal":110,"handlerId":"play-x-hours","assetUrl":"achive_playtime_10","missionType":3,"level":10,"achievementType":1},{"id":"31","title":"Intel Play Pass I","setId":"Intel-Play-Pass","description":"Reach level 10 of the Play Pass","points":100,"goal":10,"handlerId":"reach-level-x","assetUrl":"achieve_intelplaypass_01","missionType":3,"level":1,"achievementType":1},{"id":"32","title":"Intel Play Pass II","setId":"Intel-Play-Pass","description":"Reach level 20 of the Play Pass","points":150,"goal":20,"handlerId":"reach-level-x","assetUrl":"achieve_intelplaypass_02","missionType":3,"level":2,"achievementType":1},{"id":"33","title":"Intel Play Pass III","setId":"Intel-Play-Pass","description":"Reach level 30 of the Play Pass","points":200,"goal":30,"handlerId":"reach-level-x","assetUrl":"achieve_intelplaypass_03","missionType":3,"level":3,"achievementType":1},{"id":"34","title":"Intel Play Pass IV","setId":"Intel-Play-Pass","description":"Reach level 40 of the Play Pass","points":250,"goal":40,"handlerId":"reach-level-x","assetUrl":"achieve_intelplaypass_04","missionType":3,"level":4,"achievementType":1},{"id":"35","title":"Intel Play Pass V","setId":"Intel-Play-Pass","description":"Complete the Play Pass","points":500,"goal":50,"handlerId":"reach-level-x","assetUrl":"achieve_intelplaypass_05","missionType":3,"level":5,"achievementType":1},{"id":"36","setId":"Multi-Talent","title":"Multi talent I","description":"Play 10 hours in 3 different games each","points":500,"goal":3,"handlerId":"play-x-hours-in-y-games","assetUrl":"achieve_multitalentgamer_01","missionType":3,"level":1,"achievementType":1},{"id":"37","setId":"Multi-Talent","title":"Multi talent II","description":"Play 10 hours in 5 different games each","points":750,"goal":5,"handlerId":"play-x-hours-in-y-games","assetUrl":"achieve_multitalentgamer_02","missionType":3,"level":2,"achievementType":1},{"id":"38","setId":"Multi-Talent","title":"Multi talent III","description":"Play 10 hours in 7 different games each","points":1000,"goal":7,"handlerId":"play-x-hours-in-y-games","assetUrl":"achieve_multitalentgamer_03","missionType":3,"level":3,"achievementType":1},{"id":"39","setId":"Fulltime-Gamer","title":"Days work","description":"Daily Check In a total of 6 days","points":50,"goal":6,"handlerId":"check-in-x-times","assetUrl":"achieve_fulltimegamer_01","missionType":3,"level":1,"achievementType":1},{"id":"40","setId":"Fulltime-Gamer","title":"Fulltime Gamer I","description":"Daily Check In a total of 12 days","points":150,"goal":12,"handlerId":"check-in-x-times","assetUrl":"achieve_fulltimegamer_02","missionType":3,"level":2,"achievementType":1},{"id":"41","setId":"Fulltime-Gamer","title":"Fulltime Gamer II","description":"Daily Check In a total of 18 days","points":200,"goal":18,"handlerId":"check-in-x-times","assetUrl":"achieve_fulltimegamer_03","missionType":3,"level":3,"achievementType":1},{"id":"42","setId":"Fulltime-Gamer","title":"Fulltime Gamer III","description":"Daily Check In a total of 24 days","points":300,"goal":24,"handlerId":"check-in-x-times","assetUrl":"achieve_fulltimegamer_04","missionType":3,"level":4,"achievementType":1},{"id":"43","setId":"Fulltime-Gamer","title":"Fulltime Gamer IV","description":"Daily Check In a total of 30 days","points":350,"goal":30,"handlerId":"check-in-x-times","assetUrl":"achieve_fulltimegamer_05","missionType":3,"level":5,"achievementType":1},{"id":"44","setId":"Fulltime-Gamer","title":"Fulltime Gamer V","description":"Daily Check In a total of 36 days","points":350,"goal":36,"handlerId":"check-in-x-times","assetUrl":"achieve_fulltimegamer_06","missionType":3,"level":6,"achievementType":1},{"id":"11","setId":"One-Trick-Foni","title":"One Trick Pony","description":"Play X game for 5 hours","points":30,"goal":5,"handlerId":"play-game-x-hours","assetUrl":"achieve_onetrickpony","missionType":3,"level":1,"achievementType":2},{"id":"12","setId":"King-of-my-Castle","title":"King of my Castle I","description":"Play a game for a total of 10 hours","points":50,"goal":10,"handlerId":"play-game-x-hours","assetUrl":"achieve_kingofmycastle_01","missionType":3,"level":1,"achievementType":2},{"id":"13","setId":"King-of-my-Castle","title":"King of my Castle II","description":"Play a game for a total of 15 hours","points":70,"goal":15,"handlerId":"play-game-x-hours","assetUrl":"achieve_kingofmycastle_02","missionType":3,"level":2,"achievementType":2},{"id":"14","setId":"King-of-my-Castle","title":"King of my Castle III","description":"Play a game for a total of 25 hours","points":80,"goal":25,"handlerId":"play-game-x-hours","assetUrl":"achieve_kingofmycastle_03","missionType":3,"level":3,"achievementType":2},{"id":"18","setId":"Many-Faces","title":"Many Faces I","description":"Earn 5 Profile Pictures","handlerId":"earn-x-avatars","points":20,"level":1,"missionType":3,"goal":5,"assetUrl":"achieve_manyfaces_01","achievementType":3},{"id":"46","setId":"Many-Faces","title":"Many Faces II","description":"Earn 10 Profile Pictures","handlerId":"earn-x-avatars","points":30,"level":2,"missionType":3,"goal":10,"assetUrl":"achieve_manyfaces_02","achievementType":3},{"id":"47","setId":"Many-Faces","title":"Many Faces III","description":"Earn 15 Profile Pictures","handlerId":"earn-x-avatars","points":40,"level":3,"missionType":3,"goal":15,"assetUrl":"achieve_manyfaces_03","achievementType":3},{"id":"48","setId":"Many-Faces","title":"Many Faces IV","description":"Earn 20 Profile Pictures","handlerId":"earn-x-avatars","points":50,"level":4,"missionType":3,"goal":20,"assetUrl":"achieve_manyfaces_04","achievementType":3},{"id":"49","setId":"Many-Faces","title":"Many Faces V","description":"All the Profile Pictures of the season","handlerId":"earn-x-avatars","points":100,"level":5,"missionType":3,"goal":25,"assetUrl":"achieve_manyfaces_05","achievementType":3},{"id":"50","setId":"The-Collector","title":"The Collector I","description":"Earn 5 achievements","handlerId":"earn-x-achievements","points":15,"level":1,"missionType":3,"goal":5,"assetUrl":"achieve_general_01","achievementType":3},{"id":"51","setId":"The-Collector","title":"The Collector II","description":"Earn 10 achievements","handlerId":"earn-x-achievements","points":20,"level":2,"missionType":3,"goal":10,"assetUrl":"achieve_general_02","achievementType":3},{"id":"52","setId":"The-Collector","title":"The Collector III","description":"Earn 15 achievements","handlerId":"earn-x-achievements","points":20,"level":3,"missionType":3,"goal":15,"assetUrl":"achieve_general_03","achievementType":3},{"id":"53","setId":"The-Collector","title":"The Collector IV","description":"Earn 20 achievements","handlerId":"earn-x-achievements","points":20,"level":4,"missionType":3,"goal":20,"assetUrl":"achieve_general_04","achievementType":3},{"id":"54","setId":"The-Collector","title":"The Collector V","description":"Earn 25 achievements","handlerId":"earn-x-achievements","points":20,"level":5,"missionType":3,"goal":25,"assetUrl":"achieve_general_05","achievementType":3},{"id":"55","setId":"The-Collector","title":"The Collector VI","description":"Earn 30 achievements","handlerId":"earn-x-achievements","points":20,"level":6,"missionType":3,"goal":30,"assetUrl":"achieve_general_06","achievementType":3},{"id":"56","setId":"The-Collector","title":"The Collector VII","description":"Earn 35 achievements","handlerId":"earn-x-achievements","points":20,"level":7,"missionType":3,"goal":35,"assetUrl":"achieve_general_07","achievementType":3},{"id":"57","setId":"The-Collector","title":"The Collector VIII","description":"Earn 40 achievements","handlerId":"earn-x-achievements","points":20,"level":8,"missionType":3,"goal":40,"assetUrl":"achieve_general_08","achievementType":3},{"id":"58","setId":"The-Collector","title":"The Collector IX","description":"Earn all the achievements of the season","handlerId":"earn-x-achievements","points":20,"level":10,"missionType":3,"goal":45,"assetUrl":"achieve_general_09","achievementType":3}],"levelDefinitions":[{"level":1,"points":225,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_egyptian_man","game":"Profile Avatar","description":"Cosmetic icon","rewardId":101,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":2,"points":461,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_egyptian_woman","game":"Profile Avatar","description":"Cosmetic icon","rewardId":102,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":3,"points":709,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_egyptian_urn","game":"Profile Avatar","description":"Cosmetic icon","rewardId":103,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":4,"points":968,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_egyptian_magic","game":"Profile Avatar","description":"Cosmetic icon","rewardId":104,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":5,"points":1241,"prize":{"prizeType":2,"prizeBorderType":2,"img":"bdl 1/Warframe","game":"Warframe","description":"Warframe Weapon Bundle ","redeemUrl":"https://softwareoffer.intel.com/Dashboard","rewardId":105,"about":"","whatsIncluded":"Warframe Weapon Bundle ","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>"}},{"level":6,"points":1527,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_egyptian_anubis","game":"Profile Avatar","description":"Cosmetic icon","rewardId":106,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":7,"points":1826,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_egyptian_mummy","game":"Profile Avatar","description":"Cosmetic icon","rewardId":107,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":8,"points":2141,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_woodland_badger","game":"Profile Avatar","description":"Cosmetic icon","rewardId":108,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":9,"points":2471,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_woodland_fox","game":"Profile Avatar","description":"Cosmetic icon","rewardId":109,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":10,"points":2817,"prize":{"prizeType":2,"prizeBorderType":2,"img":"bdl 2/Genshin Impact","redeemUrl":"https://softwareoffer.intel.com/Dashboard","game":" Genshin Impact","description":"In-Game Content","rewardId":110,"about":"","whatsIncluded":"Play Pass Bundle","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>"}},{"level":11,"points":3180,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_woodland_spell","game":"Profile Avatar","description":"Cosmetic icon","rewardId":111,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":12,"points":3561,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_woodland_squirrel","game":"Profile Avatar","description":"Cosmetic icon","rewardId":112,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":13,"points":3960,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 3/bdl 3","game":"Bundle","description":"Pick 1 of 5 Prizes","rewardId":113,"about":"","redeemUrl":"https://softwareoffer.intel.com/Dashboard","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 3/Temporal Agent Starter Pack","game":"Temporal Agent Starter Pack","description":"In-Game Content ","whatsIncluded":"Temporal Agent Starter Pack"},{"img":"bdl 3/Federation Elite Starter Pack","game":"Federation Elite Starter Pack","description":"In-Game Content ","whatsIncluded":"Federation Elite Starter Pack"},{"img":"bdl 3/DLC Mount and Starter Pack","game":"DLC Mount and Starter Pack","description":"In-Game Content ","whatsIncluded":"Ochre Bulette, plus a starter pack"},{"img":"bdl 3/Exclusive Maverick Pack","game":"Exclusive Maverick Pack","description":"In-Game Content ","whatsIncluded":"Intel-exclusive Maverick’s Pack"},{"img":"bdl 3/Suratuk’s Darkfish Fey Wolf","game":"Suratuk’s Darkfish Fey Wolf","description":"In-Game Content ","whatsIncluded":"Suratuk\'s Darkfish Fey Wolf"}]}},{"level":14,"points":4379,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_woodland_toad","game":"Profile Avatar","description":"Cosmetic icon","rewardId":114,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":15,"points":4819,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_heroes_female","game":"Profile Avatar","description":"Cosmetic icon","rewardId":115,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":16,"points":5280,"prize":{"prizeType":2,"prizeBorderType":2,"img":"bdl 4/Fortnite","game":"Fortnite","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"In-Game Content ","rewardId":116,"about":"","whatsIncluded":"Surf Strider Outfit, the WaveCrest Pickaxe, and the Sky Sail Glider","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>"}},{"level":17,"points":5764,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_heroes_spell1","game":"Profile Avatar","description":"Cosmetic icon","rewardId":117,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":18,"points":6271,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_heroes_male","game":"Profile Avatar","description":"Cosmetic icon","rewardId":118,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":19,"points":6803,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 5/bdl 5","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 2 Prizes","rewardId":119,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 5/Dying Light DLC","game":"Dying Light DLC","description":"In-Game Content ","whatsIncluded":"The Ultimate Digital Pack: </br>- 2h Night XP Boost </br>- Crafting items"},{"img":"bdl 5/World of Tanks- High Value Invite","game":"High Value Invite","description":"In-Game Content ","whatsIncluded":"T-127(tank) + Tank slot + 7 days of premium + Coupon for free 7 days of premium after purchasing items above 10$ in WoT Premium shop"}]}},{"level":20,"points":7362,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_heroes_spell2","game":"Profile Avatar","description":"Cosmetic icon","rewardId":120,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":21,"points":7944,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_horror_witch","game":"Profile Avatar","description":"Cosmetic icon","rewardId":121,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":22,"points":8551,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 6/bdl 6","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 5 Prizes","rewardId":122,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 6/Total War_ Warhammer II","game":"Total War: Warhammer II","description":"Full Game","whatsIncluded":"Total War: Warhammer II - Full Game"},{"img":"bdl 6/Conquers Blade","game":"Conquers Blade","description":"In-Game Content ","whatsIncluded":"Magic Chips"},{"img":"bdl 6/Phantasy Star Online 2 NEW GENESIS™ - World wide","game":"Phantasy Star Online 2","description":"In-Game Content ","whatsIncluded":"“746: Intel” Emote"},{"img":"bdl 6/MONSTER HUNTER RISE","game":"MONSTER HUNTER RISE™ ","description":"In-Game Content ","whatsIncluded":"\\"Spiribird Earrings\\" Hunter layered armor piece"},{"img":"bdl 6/War Thunder","game":"War Thunder","description":"In-Game Content ","whatsIncluded":"Thach\'s F2A-1 Buffalo Premium Airplane M2A4 Premium Tank of the 1st Armored Division 3 Days of Premium Account"}]}},{"level":23,"points":9185,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_horror_zombie","game":"Profile Avatar","description":"Cosmetic icon","rewardId":123,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":24,"points":9846,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_horror_werewolf","game":"Profile Avatar","description":"Cosmetic icon","rewardId":124,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":25,"points":10535,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 7/bdl 7","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 5 Prizes","rewardId":125,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 7/Temporal Agent Starter Pack","game":"Temporal Agent Starter Pack","description":"In-Game Content ","whatsIncluded":"Temporal Agent Starter Pack"},{"img":"bdl 7/Federation Elite Starter Pack","game":"Federation Elite Starter Pack","description":"In-Game Content ","whatsIncluded":"Federation Elite Starter Pack"},{"img":"bdl 7/DLC Mount and Starter Pack","game":"DLC Mount and Starter Pack","description":"In-Game Content ","whatsIncluded":"Ochre Bulette, plus a starter pack"},{"img":"bdl 7/Exclusive Maverick Pack","game":"Exclusive Maverick Pack","description":"In-Game Content ","whatsIncluded":"Intel-exclusive Maverick’s Pack"},{"img":"bdl 7/Suratuk’s Darkfish Fey Wolf","game":"Suratuk’s Darkfish Fey Wolf","description":"In-Game Content ","whatsIncluded":"Suratuk\'s Darkfish Fey Wolf"}]}},{"level":26,"points":11254,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_horror_vampire","game":"Profile Avatar","description":"Cosmetic icon","rewardId":126,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":27,"points":12004,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_horror_spell","game":"Profile Avatar","description":"Cosmetic icon","rewardId":127,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":28,"points":12786,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_steampunk_watch","game":"Profile Avatar","description":"Cosmetic icon","rewardId":128,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":29,"points":13601,"prize":{"prizeType":2,"prizeBorderType":2,"img":"bdl 8/Avenger_s Marvel DLC","redeemUrl":"https://softwareoffer.intel.com/Dashboard","game":"Avenger\'s Marvel DLC","description":"In-Game Content ","rewardId":129,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>"}},{"level":30,"points":14435,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_steampunk_male","game":"Profile Avatar","description":"Cosmetic icon","rewardId":130,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":31,"points":15287,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_steampunk_owl","game":"Profile Avatar","description":"Cosmetic icon","rewardId":131,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":32,"points":16157,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_steampunk_female","game":"Profile Avatar","description":"Cosmetic icon","rewardId":132,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":33,"points":17047,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 9/bdl 9","game":"Bundle","description":"Pick 1 of 8 Prizes","rewardId":133,"redeemUrl":"https://softwareoffer.intel.com/Dashboard","about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 9/PUBG Intel Jacket","game":"PUBG jacket","description":"In-Game Content ","whatsIncluded":"In-game PUBG Intel Jacket"},{"img":"bdl 9/Smite","game":"Smite","description":"In-Game Content ","whatsIncluded":"God Pack"},{"img":"bdl 9/Heliborne","game":"Heliborne","description":"Full Game","whatsIncluded":"Heliborne - Full Game"},{"img":"bdl 9/Hello Neighbor","game":"Hello Neighbor","description":"Full Game","whatsIncluded":"Hello Neighbor  - Full Game"},{"img":"bdl 9/Mount _ Blade II_ Bannerlord","game":"Mount & Blade II: Bannerlord","description":"Full Game","whatsIncluded":"Mount & Blade II: Bannerlord - Full Game"},{"img":"bdl 9/Among Us - Hamster Pet Bundle","game":"Hamster Pet Bundle","description":"In-Game Content ","whatsIncluded":"Among Us - Hamster Pet Bundle"},{"img":"bdl 9/Gas Guzzlers Extreme","game":"Gas Guzzlers Extreme","description":"Full Game","whatsIncluded":"Gas Guzzlers Extreme - Full Game"},{"img":"bdl 9/Total War Three Kindoms","game":"Total War: THREE KINGDOMS","description":"Full Game","whatsIncluded":"Total War: THREE KINGDOMS - Full Game"}]}},{"level":34,"points":17956,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_steampunk_ball","game":"Profile Avatar","description":"Cosmetic icon","rewardId":134,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":35,"points":18886,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 10/bdl 10","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 5 Prizes","rewardId":135,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 10/Eternal Return","game":"Eternal Return","description":"In-Game Content ","whatsIncluded":"Intel® Starter Bundle"},{"img":"bdl 10/X Morph Defense","game":"X Morph Defense","description":"Full Game","whatsIncluded":"X Morph Defense - Full Game"},{"img":"bdl 10/Remnant_ From the Ashes","game":"Remnant: From the Ashes","description":"Full Game","whatsIncluded":"Remnant: From the Ashes - Full Game"},{"img":"bdl 10/Yellow Turban","game":"Yello Turban ","description":"DLC","whatsIncluded":"Yellow Turban Rebellion DLC"},{"img":"bdl 10/GRID Autosport","game":"GRID Autosport","description":"Full Game","whatsIncluded":"GRID Autosport - Full Game"}]}},{"level":36,"points":19835,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_viking_female1","game":"Profile Avatar","description":"Cosmetic icon","rewardId":136,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":37,"points":20806,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_viking_male1","game":"Profile Avatar","description":"Cosmetic icon","rewardId":137,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":38,"points":21798,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 11/bdl 11","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 6 Prizes","rewardId":138,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 11/Breakroom","game":"Breakroom","description":"Full Game","whatsIncluded":"Breakroom - Full Game"},{"img":"bdl 11/ROM_ Extraction","game":"ROM: Extraction","description":"Full Game","whatsIncluded":"ROM: Extraction - Full Game"},{"img":"bdl 11/Rock Band VR","game":"Rock Band™ VR","description":"Full Game","whatsIncluded":"Rock Band™ VR - Full Game"},{"img":"bdl 11/Evasion","game":"Evasion","description":"Full Game","whatsIncluded":"Evasion - Full Game"},{"img":"bdl 11/Star Trek Bridge Crew","game":"Star Trek Bridge Crew","description":"Full Game","whatsIncluded":"Star Trek Bridge Crew - Full Game"},{"img":"bdl 11/Interkosmos","game":"Interkosmos","description":"Full Game","whatsIncluded":"Interkosmos - Full Game"}]}},{"level":39,"points":22812,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_viking_spell","game":"Profile Avatar","description":"Cosmetic icon","rewardId":139,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":40,"points":23834,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_viking_female2","game":"Profile Avatar","description":"Cosmetic icon","rewardId":140,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":41,"points":24864,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_viking_male2","game":"Profile Avatar","description":"Cosmetic icon","rewardId":141,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":42,"points":25903,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 12/bdl 12","game":"Bundle ","description":"Pick 1 of 5 Prizes","redeemUrl":"https://softwareoffer.intel.com/Dashboard","rewardId":142,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 12/Total War Three Kindoms","game":"Total War Three Kindoms","description":"Full Game","whatsIncluded":"Total War Three Kindoms - Full Game"},{"img":"bdl 12/AdVenture Capitalist","game":"AdVenture Capitalist","description":"In-Game Content ","whatsIncluded":"Savvy Investor Bundle        "},{"img":"bdl 12/Ashes of the Singularity_ Escalation","game":"Ashes of the Singularity","description":"Full Game","whatsIncluded":"Ashes of the Singularity: Escalation - Full Game"},{"img":"bdl 12/Starpoint Gemini Warlords","game":"Starpoint Gemini Warlords","description":"Full Game","whatsIncluded":"Starpoint Gemini Warlords - Full Game"},{"img":"bdl 12/ShockRods","game":"ShockRods","description":"Full Game","whatsIncluded":"ShockRods - Full Game"}]}},{"level":43,"points":26949,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_colossal_worm","game":"Profile Avatar","description":"Cosmetic icon","rewardId":143,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":44,"points":28004,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_colossal_alien","game":"Profile Avatar","description":"Cosmetic icon","rewardId":144,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":45,"points":29068,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 13/bdl 13","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 4 Prizes","rewardId":145,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 13/Tomb Kings","game":"Tomb Kings","description":"DLC","whatsIncluded":"Rise of the Tomb Kings DLC"},{"img":"bdl 13/Kingdom Come Deliverance","game":"Kingdom Come Deliverance","description":"Full Game","whatsIncluded":"Kingdom Come Deliverance - Full Game"},{"img":"bdl 13/Crysis Remastered","game":"Crysis Remastered","description":"Full Game","whatsIncluded":"Crysis Remastered - Full Game"},{"img":"bdl 13/Bless Unleashed","game":"Bless Unleashed PC","description":"In-Game Content ","whatsIncluded":"In-game Skin - Intel costume"}]}},{"level":46,"points":30140,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_colossal_dragon","game":"Profile Avatar","description":"Cosmetic icon","rewardId":146,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":47,"points":31221,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_colossal_great_ape","game":"Profile Avatar","description":"Cosmetic icon","rewardId":147,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":48,"points":32310,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 14/bdl 14","game":"Bundle","redeemUrl":"https://softwareoffer.intel.com/Dashboard","description":"Pick 1 of 4 Prizes","rewardId":148,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 14/Crysis Remastered","game":"Crysis Remastered","description":"Full Game","whatsIncluded":"Crysis Remastered - Full Game"},{"img":"bdl 14/Rift Breaker","game":"Rift Breaker","description":"Full Game","whatsIncluded":"Rift Breaker - Full Game"},{"img":"bdl 14/Kingdom Come Deliverance","game":"Kingdom Come Deliverance","description":"Full Game","whatsIncluded":"Kingdom Come Deliverance - Full Game"},{"img":"bdl 14/Gears Tactics","game":"Gears Tactics","description":"Full Game","whatsIncluded":"Gears Tactics - Full Game"}]}},{"level":49,"points":33408,"prize":{"prizeType":1,"prizeBorderType":1,"img":"avatar_colossal_kraken","game":"Profile Avatar","description":"Cosmetic icon","rewardId":149,"about":"","whatsIncluded":"","howToRedeem":""}},{"level":50,"points":34515,"prize":{"prizeType":2,"prizeBorderType":3,"img":"bdl 15/bdl 15","redeemUrl":"https://softwareoffer.intel.com/Dashboard","game":"Bundle","description":"Pick 1 of 3 Prizes","rewardId":150,"about":"","whatsIncluded":"","howToRedeem":"<ul><li>Copy the prize code</li><li>Click on redeem button</li><li>Enter this code to your online dashboard</li><li>Redeem and choose a prize</li></ul>","bundlePrizes":[{"img":"bdl 15/Humankind","game":"Humankind","description":"Full Game","whatsIncluded":"Humankind - Full Game"},{"img":"bdl 15/Riders Republic","game":"Riders Republic","description":"Full Game","whatsIncluded":"Riders Republic - Full Game"},{"img":"bdl 15/Serious Sam","game":"Serious Sam","description":"Full Game","whatsIncluded":"Serious Sam - Full Game"}]}}]}}')
    const INTEL_GAME_LIST = JSON.parse(`[{"id":"4145","title":"4Story"},{"id":"9714","title":"7 Days to Die"},{"id":"3431","title":"9Dragons"},{"id":"8340","title":"A Virus Named TOM"},{"id":"21306","title":"A Way Out"},{"id":"6428","title":"A.R.E.S.: Extinction Agenda"},{"id":"6217","title":"APB: Reloaded"},{"id":"10778","title":"ARK: Survival Evolved"},{"id":"6239","title":"ARMA 2: Operation Arrowhead"},{"id":"9208","title":"ARMA 3"},{"id":"5150","title":"ARMA II"},{"id":"21424","title":"ASTRONEER"},{"id":"10764","title":"AdVenture Capitalist"},{"id":"4256","title":"Age of Chivalry"},{"id":"3809","title":"Age of Conan: Unchained"},{"id":"21884","title":"Age of Empires IV"},{"id":"6722","title":"Age of Empires Online"},{"id":"21606","title":"Age of Wonders: Planetfall"},{"id":"9092","title":"Age of Wushu"},{"id":"6038","title":"Aika Online"},{"id":"21796","title":"Aim Lab"},{"id":"4931","title":"Aion"},{"id":"7430","title":"AirMech"},{"id":"3539","title":"AirRivals"},{"id":"7596","title":"Alan Wake"},{"id":"7966","title":"Alan Wake's American Nightmare"},{"id":"21208","title":"Albion Online"},{"id":"6960","title":"Alien Breed 2: Assault"},{"id":"6962","title":"Alien Breed 3: Descent"},{"id":"10000","title":"Alien Rage"},{"id":"6261","title":"Alien Swarm"},{"id":"10610","title":"Alien: isolation"},{"id":"9110","title":"Aliens: Colonial Marines"},{"id":"5414","title":"Alliance of Valiant Arms"},{"id":"5615","title":"Allods Online"},{"id":"5114","title":"America's Army 3"},{"id":"9810","title":"America's Army: Proving Grounds"},{"id":"10874","title":"American Truck Simulator"},{"id":"21652","title":"Among Us"},{"id":"21236","title":"Ancestors Legacy"},{"id":"7390","title":"Anno 2070"},{"id":"9024","title":"Antichamber"},{"id":"21566","title":"Apex Legends"},{"id":"10288","title":"ArcheAge"},{"id":"2360","title":"Archlord"},{"id":"8370","title":"Arctic Combat"},{"id":"10804","title":"Arena of Fate"},{"id":"21422","title":"Armored Warfare"},{"id":"21504","title":"Artifact"},{"id":"3728","title":"Assassin's Creed"},{"id":"10786","title":"Assassin's Creed Chronicles: China"},{"id":"10838","title":"Assassin's Creed Chronicles: India"},{"id":"6011","title":"Assassin's Creed II"},{"id":"10038","title":"Assassin's Creed IV: Black Flag"},{"id":"21800","title":"Assassin's Creed Valhalla"},{"id":"6596","title":"Assassin's Creed: Brotherhood MP"},{"id":"6594","title":"Assassin's Creed: Brotherhood SP"},{"id":"21480","title":"Assassin's Creed: Odyssey"},{"id":"21224","title":"Assassin's Creed: Origins"},{"id":"7438","title":"Assassin's Creed: Revelations"},{"id":"10720","title":"Assassin's Creed: Rogue"},{"id":"10842","title":"Assassin's Creed: Syndicate"},{"id":"10652","title":"Assassin's Creed: Unity"},{"id":"4235","title":"Atlantica Online"},{"id":"21600","title":"AutoChess"},{"id":"3251","title":"Avencast: Rise of The Mage"},{"id":"8358","title":"Awesomenauts"},{"id":"21382","title":"BATTALION 1944"},{"id":"21282","title":"BATTLETECH"},{"id":"6410","title":"Back to the Future: The Game: Episode 1"},{"id":"10332","title":"Banished"},{"id":"7480","title":"Basket Dudes"},{"id":"5387","title":"Batman: Arkham Asylum"},{"id":"10780","title":"Batman: Arkham Knight"},{"id":"21290","title":"Battle Brothers"},{"id":"21340","title":"Battle Chasers: Nightwar"},{"id":"7398","title":"Battle Hearts"},{"id":"8820","title":"Battle for Graxia"},{"id":"6199","title":"Battle of the Immortals"},{"id":"4784","title":"BattleForge"},{"id":"10876","title":"Battlefield 1"},{"id":"1361","title":"Battlefield 2"},{"id":"7230","title":"Battlefield 3"},{"id":"9866","title":"Battlefield 4"},{"id":"4142","title":"Battlefield Heroes"},{"id":"6650","title":"Battlefield Play4Free"},{"id":"21448","title":"Battlefield V"},{"id":"5957","title":"Battlefield: Bad Company 2"},{"id":"10710","title":"Battlefield: Hardline"},{"id":"21804","title":"Battlefleet Gothic: Armada 2"},{"id":"10878","title":"Battlerite"},{"id":"21450","title":"Battlerite Royale"},{"id":"2558","title":"Battlestations Midway"},{"id":"10744","title":"Besiege"},{"id":"10552","title":"Betrayer"},{"id":"3551","title":"Beyond Good & Evil"},{"id":"2981","title":"BioShock"},{"id":"5822","title":"BioShock 2 Multiplayer"},{"id":"5819","title":"BioShock 2 Single player"},{"id":"9232","title":"BioShock Infinite"},{"id":"10864","title":"Black Desert Online"},{"id":"10758","title":"Black Mesa"},{"id":"6840","title":"Black Prophecy"},{"id":"21252","title":"Black Squad"},{"id":"10278","title":"Blackguards"},{"id":"7638","title":"Blacklight Retribution"},{"id":"10866","title":"Blade & Soul"},{"id":"21346","title":"Bless Online"},{"id":"10680","title":"Block N Load"},{"id":"8826","title":"Blood And Soul Mail.RU"},{"id":"6002","title":"Bloodline Champions"},{"id":"6419","title":"Bloody Good Time"},{"id":"6221","title":"Blur"},{"id":"9174","title":"Bob Came in Pieces"},{"id":"5501","title":"Borderlands"},{"id":"8448","title":"Borderlands 2"},{"id":"21894","title":"Borderlands 3"},{"id":"10606","title":"Borderlands: The Pre-Sequel"},{"id":"5738","title":"Bounty Bay Online"},{"id":"10894","title":"Brawlhalla"},{"id":"7708","title":"Brick-Force"},{"id":"8818","title":"Bridge Constructor"},{"id":"10108","title":"Broforce"},{"id":"10158","title":"Broken Age"},{"id":"4250","title":"Brothers In Arms: Hell's Highway"},{"id":"1604","title":"Brothers in Arms EIB"},{"id":"505","title":"Brothers in Arms: Road to Hill 30"},{"id":"9942","title":"Brothers: A Tale of Two Sons"},{"id":"9130","title":"Brutal Legend"},{"id":"4646","title":"Burnout Paradise: The Ultimate Box"},{"id":"2525","title":"CABAL Online"},{"id":"21536","title":"Call of Cthulu"},{"id":"1670","title":"Call of Duty 2"},{"id":"3179","title":"Call of Duty 4: Modern Warfare Multiplayer"},{"id":"3176","title":"Call of Duty 4: Modern Warfare Single Player"},{"id":"21662","title":"Call of Duty Black Ops Cold War"},{"id":"10638","title":"Call of Duty: Advanced Warfare Multi Player"},{"id":"10636","title":"Call of Duty: Advanced Warfare Single Player"},{"id":"21416","title":"Call of Duty: Black Ops 4"},{"id":"8668","title":"Call of Duty: Black Ops II"},{"id":"8669","title":"Call of Duty: Black Ops II MP"},{"id":"8671","title":"Call of Duty: Black Ops II Zombies"},{"id":"10810","title":"Call of Duty: Black Ops III"},{"id":"6370","title":"Call of Duty: Black Ops MP"},{"id":"6369","title":"Call of Duty: Black Ops SP"},{"id":"10884","title":"Call of Duty: Infinite Warfare"},{"id":"21626","title":"Call of Duty: Modern Warfare"},{"id":"5564","title":"Call of Duty: Modern Warfare 2 Multiplayer"},{"id":"5561","title":"Call of Duty: Modern Warfare 2 Singleplayer"},{"id":"7360","title":"Call of Duty: Modern Warfare 3 Multiplayer"},{"id":"7358","title":"Call of Duty: Modern Warfare 3 Single Player"},{"id":"21876","title":"Call of Duty: Vanguard"},{"id":"21230","title":"Call of Duty: WWII"},{"id":"4409","title":"Call of Duty: World at War Multiplayer"},{"id":"4406","title":"Call of Duty: World at War Singleplayer"},{"id":"6902","title":"Capsized"},{"id":"10806","title":"Car Mechanic Simulator 2015"},{"id":"8680","title":"Castle Crashers"},{"id":"21614","title":"Celeste"},{"id":"5333","title":"Champions Online"},{"id":"9594","title":"Chaos Online"},{"id":"10348","title":"Child of Light"},{"id":"21782","title":"Chivalry 2"},{"id":"8756","title":"Chivalry: Medieval Warfare"},{"id":"7292","title":"Cities XL 2012"},{"id":"10706","title":"Cities: Skylines"},{"id":"2219","title":"CivCity Rome"},{"id":"21400","title":"Civil Warfare: Another Bullet in the War"},{"id":"1676","title":"Civilization IV"},{"id":"2933","title":"Civilization IV: Beyond the Sword"},{"id":"4211","title":"Civilization IV: Colonization"},{"id":"2216","title":"Civilization IV: Warlords"},{"id":"10774","title":"Clicker Heroes"},{"id":"9022","title":"Cognition - An Erica Reed thriller - The Hangman Episode 1"},{"id":"9527","title":"Company of Heroes 2"},{"id":"12688","title":"Conan Exiles"},{"id":"7822","title":"Continent of the Ninth Seal (C9)"},{"id":"21846","title":"Control"},{"id":"21896","title":"Core"},{"id":"7674","title":"Costume Quest"},{"id":"959","title":"Counter-Strike 1.6"},{"id":"705","title":"Counter-Strike: Condition Zero"},{"id":"7764","title":"Counter-Strike: Global Offensive"},{"id":"1101","title":"Counter-Strike: Source"},{"id":"21412","title":"Crash Bandicoot N. Sane Trilogy"},{"id":"9178","title":"Crashed Lander"},{"id":"21562","title":"Crashlands"},{"id":"5348","title":"CrimeCraft: GangWars"},{"id":"4494","title":"Cross Fire AL"},{"id":"4495","title":"Cross Fire ES"},{"id":"4492","title":"Cross Fire EU"},{"id":"4493","title":"Cross Fire NA"},{"id":"21242","title":"Crossout"},{"id":"8136","title":"Crusader kings II"},{"id":"3203","title":"Crysis"},{"id":"7100","title":"Crysis 2"},{"id":"21354","title":"Cuisine Royale"},{"id":"21356","title":"Cuisine Royale Launcher"},{"id":"21314","title":"Cuphead"},{"id":"21664","title":"Cyberpunk 2077"},{"id":"21312","title":"DARK SOULS REMASTERED"},{"id":"6448","title":"DC Universe Online"},{"id":"21428","title":"DESOLATE"},{"id":"10852","title":"DOOM"},{"id":"21266","title":"DRAGON BALL FighterZ"},{"id":"8356","title":"Dark Souls"},{"id":"10342","title":"Dark Souls II"},{"id":"10850","title":"Dark Souls III"},{"id":"9016","title":"Dark Void Zero"},{"id":"9488","title":"DarkFall Unholy War"},{"id":"10756","title":"Darkest Dungeon"},{"id":"21544","title":"Darksiders III"},{"id":"21256","title":"Darwin Project"},{"id":"21214","title":"Dauntless"},{"id":"10276","title":"Dawngate (Beta)"},{"id":"1580","title":"Day of Defeat: Source"},{"id":"21300","title":"Day of Infamy"},{"id":"10114","title":"DayZ"},{"id":"8322","title":"DayZ (Arma II Mod)"},{"id":"10868","title":"Dead By Daylight"},{"id":"21426","title":"Dead Cells"},{"id":"7658","title":"Dead Horde"},{"id":"7150","title":"Dead Island"},{"id":"10298","title":"Dead Island: Epidemic (Beta)"},{"id":"6344","title":"Dead Rising 2"},{"id":"7320","title":"Dead Rising 2: Off The Record"},{"id":"4289","title":"Dead Space"},{"id":"6450","title":"Dead Space 2"},{"id":"10690","title":"Deadbreed"},{"id":"8676","title":"Deadlight"},{"id":"9577","title":"Deadpool"},{"id":"7602","title":"Dear Esther"},{"id":"21810","title":"Death's Door"},{"id":"6387","title":"DeathSpank"},{"id":"5417","title":"Dekaron"},{"id":"589","title":"Delta Force Xtreme"},{"id":"21812","title":"Destiny 2"},{"id":"21452","title":"Deus Ex: Mankind Divided"},{"id":"3989","title":"Devil May Cry 4"},{"id":"21554","title":"DiRT 4"},{"id":"21848","title":"Diablo 2 Resurrected"},{"id":"7152","title":"Diablo III"},{"id":"10002","title":"DieselStormers"},{"id":"8546","title":"Dishonored"},{"id":"10672","title":"Disney Infinity 2.0"},{"id":"8474","title":"District 187: Sin Streets"},{"id":"9900","title":"Divinity II: Developer's Cut"},{"id":"5351","title":"Divinity II: Ego Draconis"},{"id":"6584","title":"Divinity II: The Dragon Knight Saga"},{"id":"10456","title":"Divinity Original Sin"},{"id":"10080","title":"Divinity: Dragon Commander"},{"id":"21218","title":"Divinity: Original Sin 2"},{"id":"9006","title":"DmC: Devil May Cry"},{"id":"9184","title":"Dollar Dash"},{"id":"7314","title":"Dota 2"},{"id":"21586","title":"Dota Underlords"},{"id":"6568","title":"Dragon Age II"},{"id":"10660","title":"Dragon Age: Inquisition"},{"id":"7000","title":"Dragon Nest"},{"id":"9012","title":"Dragon Saga"},{"id":"21458","title":"Dragon's Dogma: Dark Arisen"},{"id":"10736","title":"DragonBall XenoVerse"},{"id":"7216","title":"Dragona"},{"id":"21518","title":"Dreadnought"},{"id":"10642","title":"Dreamfall Chapters"},{"id":"7236","title":"Driver: San Francisco"},{"id":"10532","title":"DuckTales Remastered"},{"id":"7308","title":"Dungeon Defenders"},{"id":"10754","title":"Dungeon Defenders II"},{"id":"9182","title":"Dungeon Party"},{"id":"1925","title":"Dungeons & Dragons Online: Eberron Unlimited"},{"id":"9734","title":"Dungeons & Dragons: Chronicles of Mystara"},{"id":"9600","title":"Dust: An Elysian Tail"},{"id":"6810","title":"Dwarfs!?"},{"id":"10703","title":"Dying Light"},{"id":"21870","title":"Dying Light 2"},{"id":"10344","title":"EF-12"},{"id":"21866","title":"ELDEN RING"},{"id":"21366","title":"ELEX"},{"id":"21818","title":"ENCHAIN"},{"id":"21486","title":"EVERSPACE"},{"id":"7558","title":"Earth Defense Force: Insect Armageddon"},{"id":"21336","title":"Earthfall"},{"id":"6842","title":"Eden Eternal"},{"id":"10110","title":"Elder Scrolls Online"},{"id":"8758","title":"Elemental: Fallen Enchantress"},{"id":"7400","title":"Elements of war"},{"id":"7646","title":"Eligium: The Chosen One"},{"id":"10670","title":"Elite: Dangerous"},{"id":"6760","title":"Elsword"},{"id":"8790","title":"Endless Space"},{"id":"2819","title":"Entropia Universe"},{"id":"21634","title":"Escape From Tarkov"},{"id":"21672","title":"Eternal Return: Black Survival"},{"id":"8584","title":"Euro Truck Simulator 2"},{"id":"9876","title":"Europa Universalis IV"},{"id":"1079","title":"Eve Online"},{"id":"9180","title":"EverPlanet"},{"id":"1157","title":"EverQuest II"},{"id":"999","title":"Everquest"},{"id":"10702","title":"Evolve"},{"id":"6898","title":"F.E.A.R. 3"},{"id":"7252","title":"F1 2011"},{"id":"21556","title":"F1 2017"},{"id":"21568","title":"F1 2018"},{"id":"21608","title":"F1 2019"},{"id":"21928","title":"F1 2020"},{"id":"21930","title":"F1 2021"},{"id":"8438","title":"FIFA 13"},{"id":"9856","title":"FIFA 14"},{"id":"10820","title":"FIFA 16"},{"id":"21410","title":"FIFA 18"},{"id":"21488","title":"FIFA 19"},{"id":"10116","title":"FIFA World (Beta)"},{"id":"10658","title":"FINAL FANTASY XIII-2"},{"id":"21376","title":"FINAL FANTASY XV WINDOWS EDITION"},{"id":"21420","title":"Fable Fortune"},{"id":"5753","title":"Face of Mankind"},{"id":"10890","title":"Factorio"},{"id":"21650","title":"Fall Guys"},{"id":"5408","title":"Fallen Earth"},{"id":"4331","title":"Fallout 3"},{"id":"10836","title":"Fallout 4"},{"id":"21500","title":"Fallout 76"},{"id":"21386","title":"Fallout Shelter"},{"id":"6355","title":"Fallout: New Vegas"},{"id":"10646","title":"Far Cry 4"},{"id":"21254","title":"Far Cry 5"},{"id":"21442","title":"Far Cry Primal"},{"id":"21632","title":"Farming Simulator 19"},{"id":"8694","title":"Farming Simulator 2013"},{"id":"10628","title":"Farming Simulator 2015"},{"id":"10888","title":"Farming Simulator 2017"},{"id":"21860","title":"Farming Simulator 22"},{"id":"21514","title":"Fear the Wolves"},{"id":"3317","title":"Fiesta"},{"id":"10140","title":"Final Exam"},{"id":"1829","title":"Final Fantasy VII"},{"id":"1832","title":"Final Fantasy VIII"},{"id":"10608","title":"Final Fantasy XIII"},{"id":"6350","title":"Final Fantasy XIV Online: A Realm Reborn"},{"id":"7876","title":"Firefall"},{"id":"21546","title":"Firewatch"},{"id":"4541","title":"Florensia"},{"id":"10630","title":"Fly'N"},{"id":"1754","title":"Flyff"},{"id":"21526","title":"Football Manager 2019"},{"id":"21666","title":"Football Manager 2021"},{"id":"21856","title":"Football Manager 2022"},{"id":"10898","title":"For Honor"},{"id":"10106","title":"Forced"},{"id":"9190","title":"Forge"},{"id":"21936","title":"Forgive Me Father"},{"id":"21342","title":"Fortified!"},{"id":"21216","title":"Fortnite Battle Royale"},{"id":"21798","title":"Forza Horizon 4"},{"id":"21512","title":"Foxhole"},{"id":"8824","title":"Fragoria"},{"id":"21194","title":"Friday the 13th The Game"},{"id":"8672","title":"Frontline tactics"},{"id":"3563","title":"Frontlines: Fuel of War"},{"id":"21272","title":"FrostPunk"},{"id":"8470","title":"Future Wars"},{"id":"5924","title":"GM Rally"},{"id":"8042","title":"GREED: Black Border"},{"id":"9515","title":"GRID 2"},{"id":"10468","title":"GRID Autosport"},{"id":"3893","title":"GRID Demo"},{"id":"21872","title":"GRID: Legends"},{"id":"9200","title":"Galaxy on Fire 2"},{"id":"10668","title":"Game of Thrones"},{"id":"1406","title":"Garry's Mod"},{"id":"10604","title":"Gauntlet"},{"id":"8582","title":"Gear Up"},{"id":"14452","title":"Gems of War"},{"id":"21656","title":"Genshin Impact"},{"id":"21302","title":"Geometry Dash"},{"id":"10688","title":"Geometry Wars 3: Dimensions"},{"id":"2915","title":"Ghost Recon Advanced Warfighter 2"},{"id":"10904","title":"Ghost Recon: Wildlands"},{"id":"21206","title":"Gigantic"},{"id":"5774","title":"Global Agenda"},{"id":"21362","title":"Gloria Victis"},{"id":"10376","title":"Goat Simulator"},{"id":"21862","title":"Gods Unchained"},{"id":"5669","title":"Grand Fantasia"},{"id":"4499","title":"Grand Theft Auto IV"},{"id":"10760","title":"Grand Theft Auto V"},{"id":"6165","title":"Grand Theft Auto: Episodes from Liberty City"},{"id":"1343","title":"Grand Theft Auto: San Andreas"},{"id":"1340","title":"Grand Theft Auto: San Andreas Multiplayer"},{"id":"8212","title":"Gratuitous Tank Battles"},{"id":"21464","title":"Graveyard Keeper"},{"id":"21560","title":"Grim Dawn"},{"id":"10726","title":"Grow Home"},{"id":"10380","title":"Guacamelee!"},{"id":"1136","title":"Guild Wars"},{"id":"7856","title":"Guild Wars 2"},{"id":"10204","title":"GunZ 2: The Second Duel"},{"id":"21384","title":"Guns of Icarus Online"},{"id":"10900","title":"Gwent"},{"id":"5609","title":"Gyromancer"},{"id":"10704","title":"H1Z1"},{"id":"14748","title":"H1Z1: King of the Kill"},{"id":"21200","title":"HEAVY METAL MACHINES"},{"id":"21264","title":"HITMAN"},{"id":"21564","title":"HITMAN 2"},{"id":"21674","title":"Hades"},{"id":"1190","title":"Half-Life 2: Deathmatch"},{"id":"1700","title":"Half-Life 2: Lost Coast"},{"id":"2672","title":"Half-Life Deathmatch: Source"},{"id":"1175","title":"Half-Life: Source"},{"id":"21854","title":"Halo Infinite"},{"id":"21790","title":"Halo: The Master chief Collection"},{"id":"21430","title":"Hand of the Gods"},{"id":"8516","title":"Hawken"},{"id":"10590","title":"Hazard Ops"},{"id":"9898","title":"Hearthstone: Heroes of Warcraft"},{"id":"21388","title":"Hellblade: Senua's Sacrifice"},{"id":"6930","title":"Hellgate: Global"},{"id":"10502","title":"Heroes & Generals"},{"id":"5318","title":"Heroes of Newerth"},{"id":"10624","title":"Heroes of the Storm"},{"id":"10542","title":"Hex: Shards of fate"},{"id":"4268","title":"HighStreet 5"},{"id":"8670","title":"Hitman: Sniper Challenge"},{"id":"21204","title":"Hollow Knight"},{"id":"21440","title":"Homeworld: Deserts of Kharak"},{"id":"21680","title":"Hood: Outlaws and Legends"},{"id":"10714","title":"Hotline Miami 2: Wrong Number"},{"id":"21332","title":"House Flipper"},{"id":"15148","title":"Human: Fall Flat"},{"id":"21844","title":"Humankind"},{"id":"21328","title":"Hunt: Showdown"},{"id":"21648","title":"Hyper Scape"},{"id":"21580","title":"Imperator: Rome"},{"id":"9216","title":"Impire"},{"id":"8590","title":"Infestation: Survivor Stories (War Z)"},{"id":"21310","title":"Infestation: The New Z"},{"id":"10748","title":"Infinifactory"},{"id":"9728","title":"Infinite Crisis (Beta)"},{"id":"21524","title":"Injustice 2"},{"id":"10018","title":"Injustice: Gods Among Us"},{"id":"9198","title":"Insurgency 2014"},{"id":"21378","title":"Islands of Nyne: Battle Royale"},{"id":"5123","title":"Jade Dynasty"},{"id":"7868","title":"Jagged Alliance - Back in Action"},{"id":"8498","title":"Jet Set Radio"},{"id":"10892","title":"Jotun"},{"id":"21344","title":"Jurassic World Evolution"},{"id":"21454","title":"Just Cause 3"},{"id":"6357","title":"Kane & Lynch 2: Dog Days"},{"id":"6998","title":"Kerbal Space Program"},{"id":"10448","title":"Killer is Dead"},{"id":"4997","title":"Killing Floor"},{"id":"10776","title":"Killing Floor 2"},{"id":"9010","title":"King Arthur II - The Role-playing Wargame"},{"id":"10122","title":"King's Bounty: Legions"},{"id":"21530","title":"King's Quest"},{"id":"21244","title":"Kingdom Come: Deliverance"},{"id":"10828","title":"Kingdom Rush"},{"id":"21858","title":"Knockout City"},{"id":"21602","title":"KurtzPel: Bringer of Chaos"},{"id":"7368","title":"L.A. Noire"},{"id":"8128","title":"LEGO Batman 2: DC Super Heroes"},{"id":"10634","title":"LEGO Batman 3: Beyond Gotham"},{"id":"6237","title":"LEGO Harry Potter Years 1-4"},{"id":"7392","title":"LEGO Harry Potter Years 5-7"},{"id":"10788","title":"LEGO Jurassic World"},{"id":"21558","title":"LEGO MARVEL Super Heroes 2"},{"id":"21540","title":"LEGO MARVEL's Avengers"},{"id":"9970","title":"LEGO Marvel Super Heroes"},{"id":"5558","title":"LEGO Star Wars: The Complete Saga"},{"id":"8678","title":"LEGO The Lord of the Rings"},{"id":"10784","title":"LEGO Worlds"},{"id":"4586","title":"La Tale"},{"id":"6347","title":"Lara Croft and the Guardian of Light"},{"id":"10666","title":"Lara Croft and the Temple of Osiris"},{"id":"21432","title":"Laser League"},{"id":"21792","title":"Last Oasis"},{"id":"21202","title":"LawBreakers"},{"id":"6146","title":"Lead and Gold: Gangs of the Wild West"},{"id":"5426","title":"League of Legends"},{"id":"10902","title":"League of Legends Launcher"},{"id":"4436","title":"Left 4 Dead"},{"id":"5594","title":"Left 4 Dead 2"},{"id":"7820","title":"Legend of Grimrock"},{"id":"21620","title":"Legends of Runeterra"},{"id":"21542","title":"Legion TD 2"},{"id":"4202","title":"Lego Batman"},{"id":"6658","title":"Lego Star Wars III: The Clone Wars"},{"id":"9460","title":"Leviathan: Warships"},{"id":"10730","title":"Life Is Strange"},{"id":"763","title":"Lineage II"},{"id":"1460","title":"Live for Speed"},{"id":"8776","title":"Loadout"},{"id":"6442","title":"Loong Dragonblood"},{"id":"21676","title":"Loop Hero"},{"id":"10626","title":"Lords of the Fallen"},{"id":"21864","title":"Lost Ark"},{"id":"6363","title":"Lost Horizon"},{"id":"6354","title":"Lost Planet 2"},{"id":"6157","title":"Lost Saga"},{"id":"10504","title":"Lovely Planet"},{"id":"10818","title":"METAL GEAR SOLID V: THE PHANTOM PAIN"},{"id":"21276","title":"METAL GEAR SURVIVE"},{"id":"21874","title":"MONSTER HUNTER: RISE"},{"id":"21414","title":"MONSTER HUNTER: WORLD"},{"id":"21286","title":"MU Legend"},{"id":"10814","title":"Mad Max"},{"id":"21508","title":"Madden NFL 19"},{"id":"21374","title":"Maelstrom"},{"id":"6269","title":"Mafia II"},{"id":"21472","title":"Mafia III"},{"id":"9581","title":"Magic 2014"},{"id":"21538","title":"Magic 2015"},{"id":"21308","title":"Magic the Gathering: Arena"},{"id":"6884","title":"Magic: The Gathering - Duels of the Planeswalkers 2012"},{"id":"8166","title":"Magic: The Gathering - Duels of the Planeswalkers 2013"},{"id":"6452","title":"Magicka"},{"id":"10782","title":"Magicka 2"},{"id":"21850","title":"MakerKing"},{"id":"9150","title":"ManiaPlanet (Nadeo Gaming Portal)"},{"id":"21294","title":"Maple Story 2"},{"id":"861","title":"MapleStory"},{"id":"8614","title":"Mark of the Ninja"},{"id":"9530","title":"Marvel Heroes 2016"},{"id":"10160","title":"Marvel Puzzle Quest: Dark Reign"},{"id":"5882","title":"Mass Effect 2"},{"id":"21190","title":"Mass Effect: Andromeda"},{"id":"7998","title":"Max Payne 3"},{"id":"9172","title":"McDROID"},{"id":"8528","title":"MechWarrior Online"},{"id":"21534","title":"Mega Man 11"},{"id":"4763","title":"Men of War"},{"id":"2951","title":"Metin 2"},{"id":"9497","title":"Metro: Last Light"},{"id":"6608","title":"MicroVolts"},{"id":"7616","title":"Microsoft Flight"},{"id":"21852","title":"Microsoft Flight Simulator"},{"id":"10592","title":"Middle-earth: Shadow of Mordor"},{"id":"21220","title":"Middle-earth: Shadow of War"},{"id":"7158","title":"Might & Magic Clash of Heroes Demo"},{"id":"6976","title":"Might & Magic Heroes VI"},{"id":"10182","title":"Might & Magic X: Legacy"},{"id":"9565","title":"Might & Magic: Duel of Champions"},{"id":"21196","title":"Might and Magic Heroes VII"},{"id":"8032","title":"Minecraft"},{"id":"8402","title":"Miner Wars 2081"},{"id":"10516","title":"Minimum"},{"id":"21364","title":"Miscreated"},{"id":"21552","title":"Modern Combat Versus"},{"id":"10508","title":"Moebius"},{"id":"9462","title":"Monaco: What's Yours is Mine"},{"id":"6454","title":"Monday Night Combat"},{"id":"7084","title":"Moonbase Alpha"},{"id":"21394","title":"Moonlighter"},{"id":"21590","title":"Mordhau"},{"id":"21898","title":"Mortal Kombat 11"},{"id":"10762","title":"Mortal Kombat X"},{"id":"6648","title":"Mortal Online"},{"id":"6107","title":"Mount & Blade: Warband"},{"id":"6766","title":"Mount & Blade: With Fire and Sword"},{"id":"21794","title":"Muck"},{"id":"21326","title":"My Time at Portia"},{"id":"10684","title":"MyDream"},{"id":"2570","title":"Mythos Global"},{"id":"9938","title":"NARUTO SHIPPUDEN: Ultimate Ninja STORM 3"},{"id":"10694","title":"NARUTO SHIPPUDEN: Ultimate Ninja STORM Revolution"},{"id":"21610","title":"NASCAR Heat 3"},{"id":"5462","title":"NBA 2K10"},{"id":"6348","title":"NBA 2K11"},{"id":"8530","title":"NBA 2K13"},{"id":"9868","title":"NBA 2K14"},{"id":"10612","title":"NBA 2K15"},{"id":"10824","title":"NBA 2K16"},{"id":"21460","title":"NBA 2K19"},{"id":"9597","title":"Nancy Drew Dossier: Resorting to Danger"},{"id":"9030","title":"Nancy Drew: Legend of The Crystal Skull"},{"id":"9596","title":"Nancy Drew: Secrets Can kill"},{"id":"9598","title":"Nancy Drew: Shadow Water's Edge"},{"id":"9028","title":"Nancy Drew: The Phantom of Venice"},{"id":"9034","title":"Nancy Drew: The White Wolf of Icicle Creek"},{"id":"7006","title":"Natural Selection 2"},{"id":"16690","title":"Naval Action"},{"id":"6389","title":"Need For Speed: Hot Pursuit"},{"id":"6265","title":"Need for Speed World"},{"id":"8636","title":"Need for Speed: Most Wanted (a Criterion game)"},{"id":"1160","title":"Need for Speed: Underground 2"},{"id":"9448","title":"Neverwinter"},{"id":"2447","title":"Neverwinter Nights 2"},{"id":"21816","title":"New World"},{"id":"7926","title":"Nexuiz"},{"id":"21278","title":"NieR:Automata"},{"id":"5306","title":"Nikopol: Secrets of the Immortals"},{"id":"5750","title":"Ninja Blade"},{"id":"21232","title":"Nioh"},{"id":"7442","title":"Nitronic Rush"},{"id":"21392","title":"No Man's Sky"},{"id":"21788","title":"Noita"},{"id":"21288","title":"Northgard"},{"id":"3740","title":"NosTale EU"},{"id":"10050","title":"Nosgoth (Beta)"},{"id":"7522","title":"Nuclear Dawn"},{"id":"2","title":"OW Game For Testing"},{"id":"10752","title":"Oblitus"},{"id":"10212","title":"Octodad: Dadliest Catch"},{"id":"10742","title":"Oddworld: New 'n' Tasty"},{"id":"9066","title":"Omerta - City of Gangsters"},{"id":"7278","title":"Orcs Must Die!"},{"id":"8284","title":"Orcs Must Die! 2"},{"id":"10458","title":"Orcs Must Die! Unchained (Beta)"},{"id":"10716","title":"Ori and the Blind Forest"},{"id":"21262","title":"Ori and the Blind Forest: Definitive Edition"},{"id":"3683","title":"Osu!"},{"id":"9802","title":"Outlast"},{"id":"21470","title":"Overcooked! 2"},{"id":"10844","title":"Overwatch"},{"id":"21438","title":"Overwatch Public Test Region"},{"id":"21498","title":"Oxenfree"},{"id":"21368","title":"Oxygen Not Included"},{"id":"9694","title":"PAYDAY 2"},{"id":"9218","title":"PID"},{"id":"10906","title":"PLAYERUNKNOWN'S BATTLEGROUNDS"},{"id":"21240","title":"PLAYERUNKNOWN'S BATTLEGROUNDS (Test Server)"},{"id":"7204","title":"PRISM: Guard Shield"},{"id":"21484","title":"PRO EVOLUTION SOCCER 2019"},{"id":"21598","title":"PUBG Lite"},{"id":"5894","title":"Pacific Storm: Allies"},{"id":"10872","title":"Paladins"},{"id":"9018","title":"Paper Monsters"},{"id":"9682","title":"Papers; Please"},{"id":"10870","title":"Paragon"},{"id":"7212","title":"Path of Exile"},{"id":"7306","title":"Payday: The Heist"},{"id":"8132","title":"Penny Arcade's On the Rain-Slick Precipice of Darkness - Episode 3"},{"id":"3173","title":"Perfect World"},{"id":"4214","title":"Perfect World International"},{"id":"21658","title":"Phasmophobia"},{"id":"10718","title":"Pillars of Eternity"},{"id":"21304","title":"Pillars of Eternity II: Deadfire"},{"id":"21612","title":"Pixel Privateers"},{"id":"21482","title":"Planet Coaster"},{"id":"9562","title":"Planet Explorers (Alpha)"},{"id":"8488","title":"PlanetSide 2"},{"id":"8822","title":"Planets Under Attack"},{"id":"10414","title":"Plants vs. Zombies Garden Warfare"},{"id":"7872","title":"Point Blank"},{"id":"4466","title":"Pokemon World Online"},{"id":"9434","title":"Poker Night 2"},{"id":"6393","title":"Poker Night at the Inventory"},{"id":"3080","title":"Portal"},{"id":"6670","title":"Portal 2"},{"id":"21520","title":"Portal Knights"},{"id":"21434","title":"Post Scriptum"},{"id":"9272","title":"Pressure"},{"id":"21226","title":"Prey"},{"id":"8548","title":"Primal Carnage"},{"id":"9872","title":"Prime World"},{"id":"10350","title":"Prison Architect"},{"id":"6356","title":"Pro Evolution Soccer 2011 Demo"},{"id":"7264","title":"Pro Evolution Soccer 2012"},{"id":"8250","title":"Pro Evolution Soccer 2013"},{"id":"9858","title":"Pro Evolution Soccer 2014"},{"id":"10656","title":"Pro Evolution Soccer 2015"},{"id":"10822","title":"Pro Evolution Soccer 2016"},{"id":"21494","title":"Pro Evolution Soccer 2016"},{"id":"6416","title":"Project Blackout"},{"id":"10766","title":"Project CARS"},{"id":"21628","title":"Project CARS 2"},{"id":"21522","title":"Project Hospital"},{"id":"9698","title":"Project Reality (BF2 Mod)"},{"id":"10598","title":"Project Zomboid"},{"id":"595","title":"Psychonauts"},{"id":"21502","title":"Punch Club"},{"id":"6534","title":"Puzzle Agent"},{"id":"21228","title":"Quake Champions"},{"id":"10648","title":"Quake Live"},{"id":"8114","title":"Quantum Conundrum"},{"id":"6462","title":"RIFT"},{"id":"21528","title":"RUINER"},{"id":"8408","title":"RaceRoom Racing Experience demo"},{"id":"21260","title":"Radical Heights"},{"id":"21334","title":"Raft"},{"id":"8946","title":"Ragnarok Online 2: Legend of the Second"},{"id":"7680","title":"RaiderZ"},{"id":"6071","title":"RailWorks 3 - Train simulator 2012"},{"id":"21934","title":"Rainbow Six: Extraction"},{"id":"6592","title":"Rappelz"},{"id":"10738","title":"Ratz Instagib"},{"id":"7636","title":"Rayman Origins"},{"id":"10340","title":"Real World Racing"},{"id":"21324","title":"Realm Royale"},{"id":"8242","title":"Receiver"},{"id":"21624","title":"Red Dead Redemption 2"},{"id":"809","title":"Red Faction"},{"id":"661","title":"Red Faction II"},{"id":"7184","title":"Red Orchestra 2: Heroes of Stalingrad"},{"id":"21618","title":"Remnant:From the Ashes"},{"id":"7560","title":"Repulse"},{"id":"5402","title":"Resident Evil 5"},{"id":"21678","title":"Resident Evil Village"},{"id":"9505","title":"Resident Evil: Revelations"},{"id":"21418","title":"RimWorld"},{"id":"21510","title":"Ring of Elysium"},{"id":"7648","title":"Rise Of Dragonian Era"},{"id":"9670","title":"Rise of the Triad"},{"id":"5438","title":"Risen"},{"id":"7864","title":"Risen 2: Dark Waters"},{"id":"10644","title":"Risk of Rain"},{"id":"21592","title":"Risk of Rain 2"},{"id":"4688","title":"Roblox"},{"id":"10480","title":"Robocraft"},{"id":"10798","title":"Rocket League"},{"id":"21660","title":"Rogue Company"},{"id":"9798","title":"Rogue Legacy"},{"id":"5639","title":"Rogue Warrior"},{"id":"10510","title":"Royal Quest"},{"id":"21594","title":"RuneScape"},{"id":"7010","title":"Rusty Hearts"},{"id":"10686","title":"Ryse: Son of Rome"},{"id":"2648","title":"S.T.A.L.K.E.R. - Shadow of Chernobyl"},{"id":"5807","title":"S.T.A.L.K.E.R.: Call of Pripyat"},{"id":"4301","title":"S4 League"},{"id":"21596","title":"SCP: Secret Laboratory"},{"id":"21444","title":"SCUM"},{"id":"6940","title":"SEGA Genesis & Mega Drive Classics"},{"id":"6632","title":"SHIFT 2: Unleashed"},{"id":"7870","title":"SOL: Exodus"},{"id":"10830","title":"STAR WARS Battlefront"},{"id":"21786","title":"STAR WARS Jedi: Fallen Order"},{"id":"21490","title":"SUPERHOT"},{"id":"9464","title":"Sacred Citadel"},{"id":"4565","title":"Saints Row 2"},{"id":"21900","title":"Saints Row the Third: Remastered"},{"id":"7394","title":"Saints Row: The Third (DX9)"},{"id":"6403","title":"Sam & Max 201: Ice Station Santa"},{"id":"6404","title":"Sam & Max 202: Moai Better Blues"},{"id":"6405","title":"Sam & Max 203: Night of the Raving Dead"},{"id":"6406","title":"Sam & Max 204: Chariots of the Dogs"},{"id":"6407","title":"Sam & Max 205: What's New Beelzebub?"},{"id":"7370","title":"Sanctum"},{"id":"21646","title":"Satisfactory"},{"id":"7156","title":"Scarlet Legacy"},{"id":"8748","title":"Scribblenauts Unlimited"},{"id":"21784","title":"Sea of Thieves"},{"id":"5369","title":"Section 8"},{"id":"6780","title":"Section 8: Prejudice"},{"id":"7454","title":"Serious Sam 3: BFE"},{"id":"21396","title":"Seven: The Days Long Gone"},{"id":"7478","title":"Sevencore"},{"id":"21370","title":"Shadow Tactics: Blades of the Shogun"},{"id":"9864","title":"Shadow Warrior"},{"id":"21474","title":"Shadow Warrior 2"},{"id":"21462","title":"Shadow of the Tomb Raider"},{"id":"10794","title":"Shadowrun Chronicles: Boston Lockdown"},{"id":"9800","title":"Shadowrun Returns"},{"id":"21250","title":"Shadowverse"},{"id":"3341","title":"Shaiya"},{"id":"4559","title":"Shaiya DE"},{"id":"3342","title":"Shaiya(US)"},{"id":"6384","title":"Shank"},{"id":"7586","title":"Shank 2"},{"id":"4502","title":"Shin Megami Tensei Imagine Online"},{"id":"8118","title":"Shoot Many Robots"},{"id":"21298","title":"Shroud of the Avatar: Forsaken Virtues"},{"id":"6339","title":"Sid Meier's Civilization V"},{"id":"10882","title":"Sid Meier's Civilization VI"},{"id":"10614","title":"Sid Meier's Civilization: Beyond Earth"},{"id":"1178","title":"Sid Meier's Pirates!"},{"id":"2402","title":"Sid Meier's Railroads"},{"id":"1751","title":"Silkroad Online"},{"id":"7510","title":"Silkroad-R"},{"id":"9008","title":"SimCity (2013)"},{"id":"8804","title":"Sine Mora"},{"id":"10512","title":"Sins of a Dark Age"},{"id":"9220","title":"Sins of a Solar Empire (Trinity Pack)"},{"id":"7672","title":"Sins of a Solar Empire: Rebellion"},{"id":"8828","title":"Skies Mail.RU"},{"id":"21372","title":"Sky Knights"},{"id":"7514","title":"SkyDrift"},{"id":"21268","title":"Slay The Spire"},{"id":"8352","title":"Sleeping Dogs"},{"id":"10622","title":"Sleeping Dogs: Definitive Edition"},{"id":"8204","title":"Slender"},{"id":"8134","title":"Smite"},{"id":"21398","title":"Smoke and Sacrifice"},{"id":"10412","title":"Sniper Elite 3"},{"id":"9252","title":"Sniper Elite: Nazi Zombie Army"},{"id":"9206","title":"Sniper: Ghost Warrior 2"},{"id":"5981","title":"Sonic & SEGA All-Star Racing"},{"id":"8766","title":"Sonic Adventure 2"},{"id":"7138","title":"Sonic Adventure DX"},{"id":"7380","title":"Sonic Generations"},{"id":"9026","title":"Sonic and Sega All-Star Racing Transformed"},{"id":"7904","title":"Sonic the Hedgehog 4 - Episode I"},{"id":"7942","title":"Sonic the Hedgehog 4 - Episode II"},{"id":"21532","title":"Soul Calibur VI"},{"id":"5450","title":"Soul of the Ultimate Nation"},{"id":"10284","title":"South Park: The Stick of Truth"},{"id":"8126","title":"Spec Ops: The Line"},{"id":"9020","title":"SpellForce 2 - Faith in Destiny"},{"id":"21616","title":"Spellbreak"},{"id":"21516","title":"Spintires"},{"id":"21280","title":"Spintires: MudRunner"},{"id":"21404","title":"Splitgate: Arena Warfare"},{"id":"21316","title":"Squad"},{"id":"7698","title":"Stacking"},{"id":"9158","title":"Star Conflict"},{"id":"5864","title":"Star Trek Online"},{"id":"1586","title":"Star Wars Battlefront II"},{"id":"21234","title":"Star Wars Battlefront II"},{"id":"1793","title":"Star Wars Empire at War Demo"},{"id":"2423","title":"Star Wars Empire at War: Forces of Corruption"},{"id":"487","title":"Star Wars Republic Commando"},{"id":"6374","title":"Star Wars: The Force Unleashed 2"},{"id":"7412","title":"Star Wars: The Old Republic"},{"id":"5855","title":"StarCraft II"},{"id":"10128","title":"Starbound (Beta)"},{"id":"21318","title":"Starcraft REMASTERED"},{"id":"19054","title":"Stardew Valley"},{"id":"10074","title":"State of Decay"},{"id":"21478","title":"Steel Division: Normandy 44"},{"id":"7196","title":"Stellar Impact"},{"id":"5180","title":"Street Fighter IV"},{"id":"21456","title":"Street Fighter V"},{"id":"10338","title":"Strife"},{"id":"9254","title":"Strike Suit Zero"},{"id":"9438","title":"Strike Suit Zero: Infinity"},{"id":"10180","title":"Strike Vector"},{"id":"7388","title":"Stronghold 3"},{"id":"2438","title":"Stronghold Legends"},{"id":"10594","title":"Styx: Master of Shadows"},{"id":"21446","title":"Subnautica"},{"id":"21604","title":"Super Animal Royale"},{"id":"7662","title":"Super MNC"},{"id":"10632","title":"Super Splatters"},{"id":"6932","title":"Super Street Fighter IV - Arcade Edition"},{"id":"2549","title":"Supreme Commander"},{"id":"5960","title":"Supreme Commander 2"},{"id":"3182","title":"Supreme Commander: Forged Alliance"},{"id":"7590","title":"Supreme Destiny"},{"id":"9176","title":"Surgeon Simulator 2013"},{"id":"1985","title":"Sword of the Stars"},{"id":"1982","title":"Sword of the Stars Collectors' Edition"},{"id":"1979","title":"Sword of the Stars: A Murder of Crows"},{"id":"8674","title":"Sword of the Stars: The Pit"},{"id":"10530","title":"Swordsman"},{"id":"21192","title":"TEKKEN 7"},{"id":"21820","title":"THE CORRIDOR"},{"id":"10740","title":"TOXIKK"},{"id":"10692","title":"Tales from the Borderlands"},{"id":"6728","title":"Tales of Monkey Island: Chapter 1 - Launch of the Screaming Narwhal"},{"id":"6730","title":"Tales of Monkey Island: Chapter 2 - The Siege of Spinner Cay"},{"id":"6732","title":"Tales of Monkey Island: Chapter 3 - Lair of the Leviathan"},{"id":"6734","title":"Tales of Monkey Island: Chapter 4 - The Trial and Execution of Guybrush Threepwood"},{"id":"6736","title":"Tales of Monkey Island: Chapter 5 - Rise of the Pirate God"},{"id":"21338","title":"Tannenberg"},{"id":"3026","title":"Team Fortress 2"},{"id":"21636","title":"Temtem"},{"id":"7342","title":"Tera: Rising"},{"id":"10750","title":"TerraTech"},{"id":"6738","title":"Terraria"},{"id":"10460","title":"Tesla Effect - A Tex Murphy Adventure"},{"id":"8830","title":"The Bard's Tale (2004)"},{"id":"21548","title":"The Beginner's Guide"},{"id":"10654","title":"The Binding of Isaac: Rebirth"},{"id":"7500","title":"The Book of Unwritten Tales: The Critter Chronicles"},{"id":"9700","title":"The Bureau: XCOM Declassified"},{"id":"9032","title":"The Cave"},{"id":"8396","title":"The Chosen"},{"id":"10526","title":"The Crew"},{"id":"21938","title":"The Cycle"},{"id":"21258","title":"The Elder Scrolls Legends"},{"id":"7364","title":"The Elder Scrolls V: Skyrim"},{"id":"10886","title":"The Elder Scrolls V: Skyrim Special Edition"},{"id":"10734","title":"The Escapists"},{"id":"10602","title":"The Evil Within"},{"id":"21292","title":"The Evil Within 2"},{"id":"21408","title":"The Forest"},{"id":"21824","title":"The Forgotten City"},{"id":"9518","title":"The Incredible Adventures of Van Helsing"},{"id":"10404","title":"The Incredible Adventures of Van Helsing II"},{"id":"10224","title":"The LEGO Movie Videogame"},{"id":"10676","title":"The Legend of Korra"},{"id":"10790","title":"The Long Dark"},{"id":"21468","title":"The Lord of the Rings Living Card Game"},{"id":"2684","title":"The Lord of the Rings Online"},{"id":"7378","title":"The Lord of the Rings: War in the North"},{"id":"9780","title":"The Mighty Quest For Epic Loot"},{"id":"6203","title":"The Misadventures of P.B. Winterbottom"},{"id":"21622","title":"The Outer Worlds"},{"id":"7970","title":"The Secret World"},{"id":"9114","title":"The Showdown Effect"},{"id":"5069","title":"The Sims 3"},{"id":"6225","title":"The Sims 3: Ambitions"},{"id":"6520","title":"The Sims 3: Fast Lane Stuff"},{"id":"6858","title":"The Sims 3: Generations"},{"id":"5786","title":"The Sims 3: High-End Loft Stuff"},{"id":"6364","title":"The Sims 3: Late Night"},{"id":"6522","title":"The Sims 3: Outdoor Living Stuff"},{"id":"5597","title":"The Sims 3: World Adventures"},{"id":"10540","title":"The Sims 4"},{"id":"6626","title":"The Sims: Medieval"},{"id":"21808","title":"The Sinking City"},{"id":"9982","title":"The Stanley Parable"},{"id":"21352","title":"The Surge"},{"id":"10600","title":"The Vanishing of Ethan Carter"},{"id":"7866","title":"The Walking Dead"},{"id":"3158","title":"The Witcher"},{"id":"6792","title":"The Witcher 2: Assassins of Kings"},{"id":"10772","title":"The Witcher 3: Wild Hunt"},{"id":"9920","title":"The Wolf Among Us"},{"id":"6245","title":"Theatre of War 2: Kursk 1943"},{"id":"21274","title":"They Are Billions"},{"id":"21496","title":"Thronebreaker: The Witcher Tales"},{"id":"9602","title":"Thunder Wolves"},{"id":"2801","title":"Tibia"},{"id":"21932","title":"Tiny Tina's Wonderlands"},{"id":"10286","title":"Titanfall"},{"id":"10880","title":"Titanfall 2"},{"id":"21868","title":"Titanfall 2: Northstar"},{"id":"4703","title":"Tom Clancy's EndWar"},{"id":"3758","title":"Tom Clancy's Rainbow Six Vegas 2"},{"id":"10826","title":"Tom Clancy's Rainbow Six: Siege"},{"id":"6211","title":"Tom Clancy's Splinter Cell: Conviction"},{"id":"10848","title":"Tom Clancy's The Division"},{"id":"21570","title":"Tom Clancy's The Division 2"},{"id":"9170","title":"Tomb Raider (2013)"},{"id":"4448","title":"Tomb Raider: Underworld"},{"id":"5516","title":"Torchlight"},{"id":"7972","title":"Torchlight II"},{"id":"21284","title":"Total War Saga: Thrones of Britannia"},{"id":"21238","title":"Total War: ARENA"},{"id":"10712","title":"Total War: Attila"},{"id":"9756","title":"Total War: ROME II"},{"id":"6606","title":"Total War: SHOGUN 2"},{"id":"21588","title":"Total War: Three Kingdoms"},{"id":"21248","title":"Total War: WARHAMMER II"},{"id":"21878","title":"Total War: WARHAMMER III"},{"id":"10854","title":"Total War: Warhammer"},{"id":"21350","title":"Totally Accurate Battlegrounds"},{"id":"8380","title":"Tower Wars"},{"id":"3755","title":"Trackmania Nations Forever"},{"id":"10410","title":"Train Simulator 2014"},{"id":"10520","title":"Transformers Universe"},{"id":"8452","title":"Transformers: Fall of Cybertron"},{"id":"6231","title":"Transformers: War for Cybertron"},{"id":"10650","title":"Transistor"},{"id":"8214","title":"Trapped Dead"},{"id":"21822","title":"Tribes of Midgard"},{"id":"7374","title":"Tribes: Ascend"},{"id":"2528","title":"Trickster Revolution"},{"id":"5186","title":"Trine"},{"id":"7476","title":"Trine 2"},{"id":"10770","title":"Trine 3: The Artifacts of Power"},{"id":"5483","title":"Tropico 3"},{"id":"7208","title":"Tropico 4"},{"id":"10696","title":"Trove"},{"id":"5672","title":"Twin Sector"},{"id":"21436","title":"Two Point Hospital"},{"id":"21914","title":"UNO"},{"id":"693","title":"Unreal Tournament 2004"},{"id":"3248","title":"Unreal Tournament 3"},{"id":"10514","title":"Unrest"},{"id":"7564","title":"Unstoppable Gorg"},{"id":"10470","title":"Unturned"},{"id":"10462","title":"Urban Trial Freestyle"},{"id":"21640","title":"VALORANT"},{"id":"21466","title":"ValeGuard"},{"id":"21668","title":"Valheim"},{"id":"10408","title":"Valiant Hearts: The Great War"},{"id":"21406","title":"Valley"},{"id":"21402","title":"Valnir Rok"},{"id":"21322","title":"Vampyr"},{"id":"2522","title":"Vanguard: Saga of Heroes"},{"id":"7640","title":"Vessel"},{"id":"6373","title":"Victoria II"},{"id":"8030","title":"Victory: the Age of Racing"},{"id":"6375","title":"Vindictus"},{"id":"10506","title":"Violett"},{"id":"9806","title":"Volgarr the Viking"},{"id":"10808","title":"Volume"},{"id":"21492","title":"WATCH_DOGS 2"},{"id":"21476","title":"WWE 2K16"},{"id":"9126","title":"War Thunder"},{"id":"7584","title":"War of the Immortals"},{"id":"8768","title":"War of the Roses"},{"id":"21638","title":"Warcraft 3: Reforged"},{"id":"873","title":"Warcraft III - The Frozen Throne"},{"id":"7784","title":"Warface"},{"id":"8954","title":"Warframe"},{"id":"21550","title":"Warhammer 40000 - Eternal Crusade"},{"id":"21814","title":"Warhammer 40k: Battlesector"},{"id":"21390","title":"Warhammer 40k: Dawn of War III"},{"id":"21360","title":"Warhammer 40k: Inquisitor - Martyr"},{"id":"4184","title":"Warhammer Online: Age of Reckoning"},{"id":"7460","title":"Warhammer Online: Wrath of Heroes"},{"id":"21246","title":"Warhammer: Vermintide 2"},{"id":"8218","title":"Warlock: Master of the Arcane"},{"id":"9014","title":"Warp"},{"id":"21506","title":"Warriors: Rise to Glory!"},{"id":"7280","title":"Wasteland Angel"},{"id":"10406","title":"Watch_Dogs"},{"id":"21296","title":"We Happy Few"},{"id":"10292","title":"Wildstar"},{"id":"4592","title":"Wizard 101"},{"id":"21330","title":"Wizard of Legend"},{"id":"21270","title":"Wolcen: Lords of Mayhem"},{"id":"5171","title":"WolfTeam"},{"id":"6365","title":"World Of Tanks"},{"id":"21670","title":"World War Z"},{"id":"4274","title":"World of Goo"},{"id":"10896","title":"World of Tanks Blitz"},{"id":"765","title":"World of Warcraft"},{"id":"21630","title":"World of Warcraft Classic"},{"id":"8018","title":"World of Warplanes"},{"id":"10746","title":"World of Warships"},{"id":"5504","title":"World of Zoo"},{"id":"21348","title":"Worlds Adrift"},{"id":"8416","title":"Wrack"},{"id":"21358","title":"Wreckfest"},{"id":"10846","title":"XCOM 2"},{"id":"21802","title":"XCOM: Chimera Squad"},{"id":"8512","title":"XCOM: Enemy Unknown"},{"id":"21380","title":"Ylands"},{"id":"5066","title":"Yosumin"},{"id":"21806","title":"Yu-Gi-Oh! Duel Links"},{"id":"21880","title":"Yu-Gi-Oh! Master Duel"},{"id":"4919","title":"Zeno Clash"},{"id":"9491","title":"Zeno Clash II"},{"id":"5684","title":"Zombie Driver"},{"id":"10518","title":"Zombies Monsters Robots"},{"id":"21654","title":"Zombs Royale"},{"id":"10768","title":"Zula"},{"id":"6578","title":"iRacing"},{"id":"6480","title":"theHunter"}]`)
    const INTEL_VERSION = '0.194.0.16'

    const debug = true;

    const printLog = (...data)=>{
        if(debug)console.log(...data)
    }
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, // 月份
            "d+": this.getDate(), // 日
            "h+": this.getHours(), // 小时
            "m+": this.getMinutes(), // 分
            "s+": this.getSeconds(), // 秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                                  (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

    const HTTP = (function(){

        // [修改自https://greasyfork.org/zh-CN/scripts/370650]
        const httpRequest = function (e) {
            const requestObj = {}
            requestObj.url = e.url
            requestObj.method = e.method.toUpperCase()
            requestObj.timeout = e.timeout || 30000
            if (e.dataType) requestObj.dataType = e.dataType
            if (e.responseType) requestObj.responseType = e.responseType
            if (e.headers) requestObj.headers = e.headers
            if (e.binary) requestObj.binary = e.binary;
            if(typeof e.data === 'Object'){
                e.data = Object.keys(e.data).map(function (key) {
                    // body...
                    return encodeURIComponent(key) + "=" + encodeURIComponent(e.data[key]);
                }).join("&")
            }
            if (e.data) requestObj.data = e.data
            if (e.cookie) requestObj.cookie = e.cookie
            if (e.anonymous) requestObj.anonymous = e.anonymous
            if (e.onload) requestObj.onload = e.onload
            if (e.fetch) requestObj.fetch = e.fetch
            if (e.onreadystatechange) requestObj.onreadystatechange = e.onreadystatechange
            requestObj.ontimeout = e.ontimeout || function (data) {
                printLog(data)
                if (e.status) e.status.error('Error:Timeout(0)')
                if (e.r) e.r({ result: 'error', statusText: 'Timeout', status: 0, option: e })
            }
            requestObj.onabort = e.onabort || function (data) {
                printLog(data)
                if (e.status) e.status.error('Error:Aborted(0)')
                if (e.r) e.r({ result: 'error', statusText: 'Aborted', status: 0, option: e })
            }
            requestObj.onerror = e.onerror || function (data) {
                printLog(data)
                if (e.status) e.status.error('Error:Error(0)')
                if (e.r) e.r({ result: 'error', statusText: 'Error', status: 0, option: e })
            }
            printLog('发送请求:', requestObj)
            GM_xmlhttpRequest(requestObj);
        }
        function get(url, e = {}){
            UI.showLoading();
            return new Promise((resolve, reject)=>{
                e.url = url;
                e.method = "GET";
                e.onload = res=>{
                    printLog('get 请求结果：', res)
                    UI.hideLoading()
                    resolve(res)
                };
                e.onerror = err=>{
                    UI.hideLoading()
                    reject(err)
                };
                httpRequest(e)
            })
        }
        function post(url, e = {}){
            UI.showLoading();
            return new Promise((resolve, reject)=>{
                e.url = url;
                e.method = "POST";
                e.onload = res=>{
                    printLog('post 请求结果：', res)
                    UI.hideLoading();
                    let resp = res.response;
                    resolve(res);
                };
                e.onerror = err=>{
                    UI.hideLoading();
                    reject(err);
                };
                httpRequest(e);
            })
        }
        function put(url, e = {}){
            UI.showLoading();
            return new Promise((resolve, reject)=>{
                e.url = url;
                e.method = "PUT";
                e.onload = res=>{
                    UI.hideLoading();
                    resolve(res);
                };
                e.onerror = err=>{
                    UI.hideLoading();
                    reject(err);
                };
                httpRequest(e);
            })
        }
        return {
            GET: get,
            POST: post,
            PUT: put
        }
    })();

    const UI = (function(){
        let data = [];

        const init = ()=>{
            initToolBar();
            initIframe();
            INTEL_UI.init();
        }
        function initToolBar(){
            if(jq('#kl-tool-actions').length > 0)return
            jq("#nav-user-action-bar > .list-inline > *:nth-child(1)").before(`<li id="kl-tool-actions" class="btn btn-user-action" style="position: relative;z-index: 9;"><span>工具</span>
                   <ul class="kl-tool-action-list">
                   </ul>
                </li>
                <style>
                .kl-tool-action-list{
                    position: absolute;
                    background-color: white;
                    min-width: 46px;
                    left: 0px;
                    margin-top: 6px;
                    display: none;
                    color: black;
                    border: solid 1px #999;
                }
                 #kl-tool-actions:hover .kl-tool-action-list{
                         display: block!important;
                 }
                 .kl-tool-action-list > li{
                    padding: 6px 0px;
                 }
                 .kl-tool-action-list > li:hover{
                     background-color: #f0f3f4;
                 }
                </style>
                `);
        }
        const addAction = (action)=>{
            jq("#kl-tool-actions > ul").append(`<li id="${action.id}">${action.text}</li>`);
            jq("#more_options").append(`<li id="${action.id}" style="padding: 4px 15px 4px 5px;color: #4C4C4C;"><i class="icon iconfont icon-list"></i>${action.text}</li>`);
        }

        const showLoading = ()=>{
            jq(".kl-tool-content>.kl-tool-header>.kl-tool-loading>.icon").css("display", "initial");
            jq(".kl-tool-content>.kl-tool-header>.kl-tool-loading").css("visibility", "visible");
        }
        const hideLoading = ()=>{
            jq(".kl-tool-content>.kl-tool-header>.kl-tool-loading>.icon").css("display", "none");
            jq(".kl-tool-content>.kl-tool-header>.kl-tool-loading").css("visibility", "hidden");
        }
        // 添加提示
        const addNotice = (msg)=>{
            const noticeBlock = document.createElement("div");
            noticeBlock.id = "id-" + new Date().getTime() + "-" + parseInt(Math.random() * 10000);
            let left = document.createElement("div");
            left.innerText = `${msg}`
            let right = document.createElement("div");
            right.innerText = "X"
            right.style.marginLeft = "10px";
            right.style.cursor = "pointer";
            noticeBlock.append(left);
            noticeBlock.append(right);
            noticeBlock.className = "notice-content";
            jq("#kl-iframe-notice").append(noticeBlock)

            right.addEventListener('click', ()=>{
                jq("#" + noticeBlock.id).remove();
            })
            setTimeout(()=>{
                jq("#" + noticeBlock.id).remove();
            }, 5000);
        }

        // 初始化操作界面
        function initIframe(){
            printLog(GM_info.script.version)
            let html = `
            <div id="kl-tool-mask"></div>

<div id="kl-tool-iframe" style="display:none">
    <div class="kl-tool-content">
        <div class="kl-tool-header">
            <div>ver.${GM_info.script.version}</div>
            <div class="kl-tool-loading"><svg  t="1624533378166" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2471" ><path d="M510.976 62.464c-247.296 0-448 200.704-448 448s200.704 448 448 448 448-200.704 448-448-200.704-448-448-448z m0 175.104c32.768 0 59.904 26.624 59.904 59.904 0 32.768-26.624 59.904-59.904 59.904s-59.904-26.624-59.904-59.904 27.136-59.904 59.904-59.904z m0 700.416c-117.76 0-213.504-95.744-213.504-213.504 0-117.76 90.624-213.504 213.504-213.504 117.76 0 213.504-95.744 213.504-213.504 0-111.616-85.504-203.264-194.56-212.992l-0.512-0.512c227.328 9.728 409.088 197.12 409.088 427.008-0.512 236.032-191.488 427.008-427.52 427.008z" fill="#1296db" p-id="2472"></path><path d="M451.072 724.48c0 32.768 26.624 59.904 59.904 59.904 32.768 0 59.904-26.624 59.904-59.904 0-32.768-26.624-59.904-59.904-59.904-32.768 0-59.904 26.624-59.904 59.904z" fill="#1296db" p-id="2473"></path></svg>
            少女祈祷中~</div>
            <svg  id="kl-tool-iframe-close" onclick="document.getElementById('kl-tool-mask').style.display = document.getElementById('kl-tool-iframe').style.display = 'none'"
            t="1624536136145" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3441" width="20" height="20"><path d="M940.802 939.949c0 0.014 0 0.021-0.051 0.044-28.183 28.22-73.991 28.262-102.218 0.05L512.127 614.299 186.382 940.653c-0.051 0.021-0.051 0.05-0.051 0.05-28.227 28.235-74.035 28.256-102.262 0.052-28.328-28.248-28.372-74.05-0.146-102.32l325.746-326.37L83.313 186.312c-28.278-28.227-28.328-74.027-0.094-102.29 0-0.022 0-0.036 0.044-0.052 28.183-28.19 73.948-28.212 102.226-0.007l326.355 325.745L837.64 83.34l0.044-0.051c28.234-28.227 73.99-28.256 102.269-0.014 28.32 28.226 28.32 74.027 0.094 102.312L614.3 511.942l326.406 325.745c28.228 28.227 28.322 74.02 0.095 102.262z" p-id="3442" fill="#2c2c2c"></path></svg>
        </div>
        <div id="kl-tool-mainArea">
        </div>
    </div>
    <div id="kl-iframe-notice">
    </div>
</div>
<style>
    /*提示内容动画*/
    .notice-content{
        display: flex;
        position: absolute;
        top: 50%;
        right: -100px;
        animation: noticeAni 3s linear 1;
        background-color: #1fa01f;
        padding: 5px 11px 5px 16px;
        border-radius: 4px;
        box-shadow: 1px 1px 6px 0px #0da90d;
    }
    @keyframes noticeAni{
        0%{
                top: 50%;
                right: -100px;
              }
        15%{
                top: 50%;
                right: 10px;
            }
        45%{
                top: 35%;
                right: 10px;
            }
        75%{
                top: 20%;
                right: 10px;
            }
        100%{
                 top: 20%;
                 right: -100px;
                }
	}

    #kl-tool-mask{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 998;
        background: #000000d1!important;
        opacity: .85!important;
        display: none;
    }
    #kl-tool-iframe{
        position: fixed;
        top: 5rem;
        left: 5rem;
        right: 5rem;
        bottom: 5rem;
        /*height: 95vh;*/
        background-color: #66bbff;
        z-index: 999;
        overflow: hidden;
        border-radius: .5rem;
    }
    #kl-tool-iframe .kl-tool-content{
        margin:1rem;
        height: 90%;
        display: flex;
        flex-direction: column;
    }
    .kl-tool-content > .kl-tool-header{
        height:20px;
        display:flex;
    }
    #kl-tool-mainArea {
        display: flex;
        flex-direction: column;
        height: 100%;

    }
    .kl-tool-content .kl-tool-loading{
        width: 53%;
        text-align: right;
        visibility: hidden;
    }
    .kl-tool-content .kl-tool-loading>.icon{
        height:20px;
        width:20px;
        display:none;
        transition: 0.5s;
        animation: rotate 1s linear infinite;  /*开始动画后无限循环，用来控制rotate*/
    }
    @keyframes rotate{
        0%{
                transform: rotate(0);
              }
        50%{
                transform:rotate(180deg);
            }
        100%{
                 transform: rotate(360deg);
                }
	}

    #kl-tool-iframe-close{
        position: absolute;
        right: 20px;
        cursor: pointer;
    }
</style>
            `;
            jq("body").append(html);
        }

        const initFrameContent = (html)=>{
            jq("#kl-tool-mainArea").empty();
            jq("#kl-tool-mainArea").append(html);

            // 显示Frame
            if(document.getElementById("kl-tool-iframe").style.display==="block")return ;
            document.getElementById("kl-tool-iframe").style.display = "block"
            document.getElementById("kl-tool-mask").style.display = "block"
        }

        return {
            init: init,
            initIframe: initIframe,
            showLoading: showLoading,
            hideLoading: hideLoading,
            addAction: addAction,
            initFrameContent: initFrameContent,
            addNotice: addNotice
        }
    })();

    // INTEL
    const INTEL_UI = (()=>{
        let intelInfo = null;
        let intelAccount = GM_getValue("intelAccount")||{};
        const config = [
            {
                id: "avaliable",
                name: "执行任务",
                action: prepareRunTask,
                default: `
                <ul id="intel-add-task">
                    <h2>添加任务：</h2>
                    游戏：<select id="games-select"></select>
                    游戏时长(分钟)：<input id="game-time" type="number">
                    <button class="add">添加</button>
                    <hr>
                    <h2>任务列表：</h2>
                    <div id="intel-task-list"></div>
                </ul>`
            },
            {
                id: "progress",
                name: "任务成就",
                action: loadProgressState,
                default: `
                    <div class="select-area"></div>
                    <div class="account-progress">
                        等级: <span class="level"></span>&nbsp;&nbsp;
                        经验: <span class="xp"></span>
                    </div>
                    <ul class="missions"></ul>
                    <ul class="achievements" style="display:none"></ul>
`
            },
            {
                id: "loadPrize",
                name: "奖品兑换",
                action: loadPrizeList,
                default: `
                    <h2>奖品：</h2>
                    <div>
                        <!-- 左侧奖品列表区域 -->
                        <div class="prizeList">
                        </div>
                        <!-- 右侧奖品详情 -->
                        <div class="prizeDetail">
                        </div>
                    </div>
`
            },
            {
                id: "log",
                name: "自动执行日志",
                action: loadLog,
                default: `
                <button onclick="sessionStorage.setItem('intelLog', '')">清空日志</button>
                <ul id="intel-log-list">
                    <li>日志列表：</li>
                    <li></li>
                </ul>`
            },
            {
                id: "help",
                name: "更新日志",
                action: null,
                default: `
                <div id="intel-help-list"><h2>更新日志</h2>
                    <ul style="margin-left: 30px;">
                        <li>0.0.2：兑换支持，已游戏时间显示，账户等级显示，任务成就</li>
                        <li>0.0.1：init</li>
                    </ul>
                </div>`
            },
            {
                id: "test",
                name: "测试",
                action: loadTest,
                default: `
                <div id="intel-test">

                </div>`
            }
        ];

        const ACCOUNT = (()=>{
            /**
             * 根据邮箱存储用户信息
             */
            const set = (userInfo)=>{
                printLog(userInfo);
                //const uinfo = JSON.parse(window.atob(tokenInfo.access_token.split(".")[1]))
                intelAccount[userInfo.email] = userInfo;
                GM_setValue("intelAccount",intelAccount);
                intelInfo = userInfo;
            }
            /**
             * 根据邮箱切换用户
             */
            const change = (email)=>{
                intelInfo = intelAccount[email];
            }
            /**
             * 根据邮箱移除用户
             */
            const remove = (email)=>{
                delete intelAccount[email];
                GM_setValue("intelAccount", intelAccount);
            }
            /**
             * 根据邮箱更新用户信息
             */
            const updateAuth = (auth)=>{
                let email = intelInfo.email;
                intelAccount[email].auth = auth;
                intelInfo = intelAccount[email];
                GM_setValue("intelAccount", intelAccount);
            }

            /**
             * 根据邮箱更新session
             */
            const updateSession = session=>{
                let email = intelInfo.email;
                intelAccount[email].sessionToken = session;
                intelInfo = intelAccount[email];
                GM_setValue("intelAccount", intelAccount);
            }
            return {
                set,
                remove,
                change,
                updateAuth,
                updateSession
            }
        })();

        const init = ()=>{
            UI.addAction({
                id: "intel-module",
                text: "Intel"
            });
            // 打开界面
            document.getElementById("intel-module").addEventListener("click", ()=>{
                printLog(TASK.runInterval)
                /*if(TASK.runInterval[0] === null){
                    alert("已有页面运行！！\n为减少封禁概率，请在同一个页面进行操作。\n工具为红色字的是正在运行的页面！！");
                    return;
                }*/
                loadIntel();
                event();
                // if(intelInfo==null)return;
                // accessTokenUpdate();
                // loadChallengeList();
                // let a = GM_addStyle("#kl-tool-iframe{display:block!important;}")
                // GM_log(a)
            })
            event();
            initTask();
        }

        function loadPrizeList(viewId){
            jq("#" + viewId).append(`<style>
            #${viewId} > div{
                display: flex;
            }
            #${viewId} .prizeList{
                width:50%;
                display: flex;
                overflow: hidden;
                flex-flow: wrap;
            }
            #${viewId} .prizeList > div{
                height: 100px;
                width: 50px;
                display: flex;
                flex-direction: column;
                place-items: flex-end;
            }
            #${viewId} .prizeDetail{
                width:50%;
            }
            </style>`)
            const showDetail = (levelInfo)=>{
                printLog('showDetail')
                const prize = levelInfo.prize
                const item = jq(`<div class="reward-detail">
                    <div>
                        等级: ${levelInfo.level}
                    </div>
                    <div>
                    奖品: ${prize.game}<br>
                    描述: ${prize.description}<br>
                    详情：<pre class="detail"></pre>
                    </div>
                    <button>兑换</button>
                </div>`)

                const loadRewardState = ()=>{
                    INTEL.getReward(intelInfo.auth).then(resp=>{
                        printLog('reward: ', resp)
                        const reward = resp.filter(r=>r.baseId===prize.rewardId)
                        item[0].querySelector('button').disabled = reward.length > 0
                        item[0].querySelector('.detail').textContent = JSON.stringify(reward, null, 4)
                    })
                }
                loadRewardState()

                item[0].querySelector('button').onclick = e=>{
                    printLog('点击兑换')
                    INTEL.getClaim(intelInfo.auth, levelInfo.level).then(resp=>{
                        printLog('redeem: ', resp)
                        loadRewardState()
                    }).catch(err=>{
                        printLog('redeem error: ', err)
                        item[0].querySelector('.detail').textContent = JSON.stringify(err.response, null, 4)
                    })
                }
                const pdQ = jq(`#${viewId} .prizeDetail`)
                pdQ.empty();
                pdQ.append(item)
            }
            const genItem = (levelInfo)=>{
                const prize = levelInfo.prize
                const item = jq(`<div>
                    <div>
                        Level:${levelInfo.level}
                    </div>
                    <button>查看</button>
                </div>`)
                item[0].querySelector('button').onclick = ()=>showDetail(levelInfo)
                return item
            }
            const plQ = jq(`#${viewId} .prizeList`)
            plQ.empty();
            printLog(INTEL_DATA)
            const levelDefinitions = INTEL_DATA[seasonId].levelDefinitions
            for(let levelInfo of levelDefinitions){
                plQ.append(genItem(levelInfo))
            }
        }
        function loadIntel(){
            UI.initFrameContent(`
        <div id="intel-account">切换账户：
            <select id="intel-account-switch" title="intel账户">
            </select>
            <button id="intel-account-next">下一个</button>
            <button id="intel-account-delete">删除账号</button>

        </div>
        <div>
            <button id="intel-login-button" target="_blank" style="font-size:1.5rem">登录</button><br>
            <br>
        </div>
        <div id="intel-data">
            <div  id="intel-action-button" class="intel-action-button">
            </div>
            <hr>
            <div id="intel-item-area">
            </div>
        </div>
    <style>
        input#intel-localhost-link:disabled {
            background-color: #dddddd;
        }
        #intel-data{
                        border: solid 1px #f00;
                        height: 100%;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        position: relative;
                        padding: .5rem;
        }
        #intel-item-area{
            overflow: scroll;
        }

                    /*滚动条样式*/
                    #kl-tool-iframe ::-webkit-scrollbar {/*滚动条整体样式*/
                        width:9px;/*高宽分别对应横竖滚动条的尺寸*/
                        height:4px;
                    }
                    #kl-tool-iframe ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                        border-radius:5px;
                        -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
                        background:#e0e5eb;
                    }
                    #kl-tool-iframe ::-webkit-scrollbar-track {/*滚动条里面轨道*/
                        // -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
                        border-radius:0;
                        //background: rgba(0,0,0,0.1);
                    }
                </style>
`)
            // 初始化下半部分
            for(let ele of config){
                const view = document.createElement("div")
                view.style.display = "none";
                view.id = `intel-view-${ele.id}`;
                view.innerHTML = ele.default;
                jq("#intel-item-area").append(view);

                const btn = document.createElement("button")
                btn.id = `intel-${ele.id}-btn`;
                btn.innerText = ele.name;
                btn.onclick = (e)=>{
                   // jq("#intel-action-button > button").attr("disabled", false);
                    //e.target.disabled = true;

                    jq("#intel-item-area > *").css("display", "none");
                    view.style.display = "block";
                    if(ele.action) ele.action(view.id);
                };
                jq("#intel-action-button").append(btn);

            }
            //test
            //document.getElementById("kl-tool-iframe").style.display = "block"
            //document.getElementById("kl-tool-mask").style.display = "block"
            //addNotice("提示内容")
            // test
            updateAccountList();
        }
        // 注册按钮点击、输入等事件
        const event = ()=>{
            // 账户切换
            if(document.getElementById("intel-account-switch")!==null && document.getElementById("intel-account-switch").onchange===null){
                document.getElementById("intel-account-switch").onchange = (e)=>{
                    ACCOUNT.change(document.getElementById("intel-account-switch").value)
                }
            }
            // 下一个账户
            if(document.getElementById("intel-account-next")!==null && document.getElementById("intel-account-next").onclick===null){
                document.getElementById("intel-account-next").onclick = ()=>{
                    const ele = jq('#intel-account-switch')[0]
                    ele.selectedIndex = (ele.selectedIndex+1)%ele.length
                    ACCOUNT.change(ele.value)
                }
            }
            // 账户删除
            if(document.getElementById("intel-account-delete")!==null && document.getElementById("intel-account-delete").onclick===null){
                document.getElementById("intel-account-delete").onclick = (e)=>{
                    ACCOUNT.remove(document.getElementById("intel-account-switch").value);
                    updateAccountList();
                }
            }

            // 登录操作
            jq('#intel-login-button').click(async e=>{
                try{
                    printLog(e)
                    // pubsub
                    const pubsub = await INTEL.pubsub()
                    printLog(pubsub)
                    const token = pubsub.token
                    // listening to owsocket
                    const ws = new WebSocket(`wss://iga-pubsub.overwolf.com/owsocket/?token=${token}&EIO=3&transport=websocket`);
                    let checkLogin
                    ws.onopen = function()
                    {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        checkLogin = setInterval(()=>{
                            ws.send("2");
                        }, 1000)
                        printLog("数据发送中...");
                    };

                    ws.onmessage = function (evt)
                    {
                        printLog(evt)
                        var received_msg = evt.data;
                        printLog("数据已接收...", received_msg);
                        if(received_msg.startsWith(42)){
                            clearInterval(checkLogin);
                            const data = JSON.parse(received_msg.substring(2))
                            printLog(data)
                            ws.close()
                            // 考虑自动关闭弹窗
                            if(data[0] === "login"){
                                getAccountInfo(data[1].token)
                            }
                        }
                    };

                    ws.onclose = function()
                    {
                        // 关闭 websocket
                        printLog("连接已关闭...");
                    };
                    ws.onerror = function(err)
                    {
                        // 关闭 websocket
                        printLog("ws error...", err);
                    };
                    // open new page
                    let link = `https://mog-accounts.overwolf.com/auth/intel?token=${token}`
                    const loginPage = GM_openInTab(link)
                    printLog(loginPage)
                }catch(err){
                    printLog('error: ', err)
                }
            })
        }
        // 更新UI的账户列表
        const updateAccountList = ()=>{
            jq("#intel-account-switch").empty();
            for(let _email in intelAccount){
                jq("#intel-account-switch").append(`<option>${_email}</option>`);
            }
            ACCOUNT.change(document.getElementById("intel-account-switch").value)
        }
        // 添加查看任务
        let prepareRunTask_interval
        function prepareRunTask(){
            INTEL.getPlayTime(intelInfo.auth).then(resp=>{
                printLog('getPlayTime', resp)
                jq('#games-select').empty()
                const playTime = resp.game
                for(let game of INTEL_GAME_LIST){
                    jq('#games-select').append(`<option value="${game.id}">${game.title} - ${playTime[game.id]?playTime[game.id]/1000/60/60 + 'h':'never play'}</option>`)
                }
            })
            const loadTaskList = ()=>{
                // printLog(INTEL_GAME_LIST)
                jq('#intel-task-list').empty()
                let taskList = ''
                for(let k in intelAccount){
                    let acc = intelAccount[k]
                    if(acc.task){
                        for(let task of acc.task){
                            taskList += `<li><span style="color:blue">账户:&nbsp;</span> ${k.substring(0, 5)},
                            <span style="color:blue">游戏ID:&nbsp;</span>${task.id},
                            <span style="color:blue">游戏名称:&nbsp;</span> ${INTEL_GAME_LIST.filter(g=>g.id===task.id)[0].title},
                            <span style="color:blue">游玩时间:&nbsp;</span> ${parseInt(task.time/60)/1000}分钟,
                            <span style="color:blue">开始时间:&nbsp;</span>${task.start?'':'未开始'}${task.start?new Date(task.start):''}
                            ${task.start?'<span style="color:blue">剩余时间:&nbsp;</span>' + parseInt((task.start+task.time -new Date().getTime())/60)/1000 + '分钟':''} </li>`
                        }
                    }
                }
                jq('#intel-task-list').append(taskList)
            }
            jq('#intel-add-task > .add').click(e=>{
                printLog('add...')
                const id = jq('#games-select')[0].value
                let time = jq('#game-time')[0].value
                // 分钟转成毫秒
                time = parseInt(Number(time) * 60 *1000)
                // printLog('id: ', id, ', time: ', time)
                // printLog('intelInfo', intelInfo)

                addTask({id, time})
                loadTaskList()
            })
            loadTaskList()
            if(prepareRunTask_interval)clearInterval(prepareRunTask_interval);prepareRunTask_interval=null
            prepareRunTask_interval = setInterval(loadTaskList, 1000)
        }
        // 加载进度状态
        function loadProgressState(viewId){
            jq(`#${viewId}>.missions`).empty();
            const define = {}
            printLog(INTEL_DATA[seasonId])
            jq("#" + viewId).append(`
            <style>
              .mission{
                display: flex;
                align-items: center;
              }
              .mission > .status {
                width: 8%;
              }
              .mission > .title {
                width: 20%;
              }
              .mission > .desc {
                width: 30%;
              }
              .mission > .progress {
                width: 20%;
              }
            </style>
            `);
            const genMissionItem = (m, progress)=>{
                if(progress[0] && progress[0].eventId){
                    progress = progress.filter(p=>p.id===m.id)
                }
                progress = progress[0] || {}
                //printLog(m, progress)
                let html = `<li class="mission">`
                // 图标状态
                html += `<div class="status">${progress.isCompleted?'OK':'+'+m.points+'xp'}&nbsp;</div>`
                // title
                html += `<span class="title">${m.title}&nbsp;</span>`
                // desc
                html += `<span class="desc">${m.description}&nbsp;</span>`
                // progress
                html += `<div class="progress">`
                if(!progress.isCompleted){
                    if(m.id === 'daily-check-in') html += `<button id="intel-check-in">签到</button>`
                    else if(m.missionType===1){
                        html += `<button>do</button>`
                    }else html += `${(progress.xp || 0) / (m.points/(m.goal || 1))}/${m.goal || 1}`
                }else html += 'Completed'
                html += '</div>'

                html += '</li>'
                const result = jq(html)
                if(!progress.isCompleted && m.missionType===1){
                    result[0].querySelector('button').onclick = e=>{
                        INTEL.getEvent(intelInfo.auth, intelInfo.email, {eventId: m.eventId || 'bonus', id: m.id}).then(resp=>{
                            printLog('do result: ', resp)
                            UI.addNotice('成功！')
                        }).catch(err=>{
                            UI.addNotice(`失败！${err?.response?.error??'unknown'}`)
                        })
                    }
                }
                if(!progress.isCompleted && m.id === 'daily-check-in'){
                    result[0].querySelector('button').onclick = e=>{
                        INTEL.getCheckIn(intelInfo.auth, intelInfo.email).then(resp=>{
                            printLog('check in result: ', resp)
                            UI.addNotice('签到成功！')
                        }).catch(err=>{
                            UI.addNotice(`签到失败！${err?.error??'unknown'}`)
                        })
                    }
                }
                return result
            }
            const genAchievementItem = (a, progress)=>{
                //printLog(a, progress)
                progress = progress[0] || {}
                let html = `<li class="mission">`
                // 图标状态
                html += `<div class="status">${progress.isCompleted?'OK':'+'+a.points+'xp'}&nbsp;</div>`
                // title
                html += `<span class="title">${a.title}&nbsp;</span>`
                // desc
                html += `<span class="desc">${a.description}&nbsp;</span>`
                // progress
                html += `<div class="progress">`
                if(!progress.isCompleted){
                    html += `${progress.progress || 0}/${a.goal || 1}`
                }else html += 'Completed'
                html += '</div>'

                html += '</li>'
                const result = jq(html)
                return result
            }

            const handleFunc = {
                missions: (progress)=>{
                    jq("#" + viewId +">.missions").empty();
                    const mQ = jq("#" + viewId +">.missions")
                    for(const mission of INTEL_DATA[seasonId].missionDefinitions){
                        mQ.append(genMissionItem(mission, progress.filter(p=>mission.title===p.title)))
                    }
                },
                achievements: (progress)=>{
                    jq("#" + viewId +">.achievements").empty();
                    const aQ = jq("#" + viewId +">.achievements")
                    for(const achievement of INTEL_DATA[seasonId].achievementsDefinitions){
                        aQ.append(genAchievementItem(achievement, progress.filter(p=>p.id==achievement.id)))
                    }
                },
                progress: (progress)=>{
                    jq("#" + viewId +">.account-progress>.level").html(progress.level)
                    jq("#" + viewId +">.account-progress>.xp").html(progress.xp)
                }
            }
            const loadData = (token)=>{
                INTEL.getProgressState(token).then(resp=>{
                    printLog("getProgressState: ", resp)
                    // 过滤出当前时间的任务
                    resp.missions = resp.missions.filter(m=>m.day===resp.currentTimeKeys.dayKey||m.day===resp.currentTimeKeys.weekKey || !m.day)
                    for(const key in resp){
                        if(handleFunc[key]){
                            handleFunc[key](resp[key])
                        }else{
                            printLog('不支持处理的key: ', key)
                        }
                    }

                }).catch(err=>{
                    printLog(err);
                    const errD = err.response.error;
                });
            }
            // 加载数据
            loadData(intelInfo.auth);
            jq(`#${viewId} > .achievements`).css('display', 'none')
            jq(`#${viewId} > .missions`).css('display', 'block')

            jq(`#${viewId} > .select-area`).empty()
            const sQ = jq(`<select>
            <option value="mission">任务</option>
            <option value="achievement">成就</option>
            </select>`)
            printLog(sQ)
            jq(`#${viewId} > .select-area`).prepend(sQ)
            sQ.change(e=>{
                printLog('变更选择', e)
                switch(e.target.value){
                    case 'mission':
                        jq(`#${viewId} > .achievements`).css('display', 'none')
                        jq(`#${viewId} > .missions`).css('display', 'block')
                        break
                    case 'achievement':
                        jq(`#${viewId} > .achievements`).css('display', 'block')
                        jq(`#${viewId} > .missions`).css('display', 'none')
                        break
                }
            })
        }
        function loadLog(vId){
            let log = sessionStorage.getItem("intelLog");
            jq("#intel-log-list > li:nth-child(2)").html(log);
            let logInt = setInterval(()=>{
                if(jq("#" + vId).css("display")==="none"){
                    clearInterval(logInt);
                    return;
                }
                let log = sessionStorage.getItem("intelLog");
                jq("#intel-log-list > li:nth-child(2)").html(log);

            }, 1000);
        }
        // for test
        function loadTest(vId){
        }


        function getAccountInfo(token){
            const startTime = parseInt(new Date().getTime()/1000);
            INTEL.getAccountInfo(token).then(resp=>{
                printLog(resp)
                ACCOUNT.set({
                    auth: token,
                    email: resp.userId,
                    muid: resp.muid,
                    countryCode: resp.countryCode
                });
                updateAccountList();
                document.getElementById("intel-account-switch").value = resp.email;
                ACCOUNT.change(resp.email);
            })
        }

        function addTask(task){
            const allTask = intelInfo.task || [];
            for(let t of allTask){
                // 已有该任务，更新
                if(t.id === task.id){
                    t.time = task.time
                    GM_setValue("intelAccount", intelAccount);
                    return;
                }
            }

            allTask.push(task);
            intelInfo.task = allTask;
            GM_setValue("intelAccount", intelAccount);
        }
        function rmTask(item){
            const task = intelAccount[item.email].task || [];
            intelAccount[item.email].task = task.filter(e=>e!==item.eventName);
            GM_setValue("intelAccount", intelAccount);
        }
        function initTask(){
            TASK.add("intel");
            TASK.addFunc(["intel", item1=>{
                const logArr = ["<li><hr></li>"+ (sessionStorage.getItem("intelLog") || "")];

                printLog('执行任务', intelAccount);
                for(let userId in intelAccount){
                    const userInfo = intelAccount[userId]
                    if(!userInfo.task)continue
                    const tasks = userInfo.task.filter(t=>!t.delete)
                    userInfo.task = tasks
                    if(tasks.length === 0)continue

                    const task = tasks[0]
                    printLog('task', task)
                    const currentTime = new Date().getTime()
                    if(task.start){
                        // 已经开始
                        printLog('任务正在执行...')
                        if(currentTime > task.start + Number(task.time)){
                            printLog('已经完成了...')
                            // 已经完成，提交完成请求
                            const data = {
                                gameId: task.id,
                                sessionId: task.sessionId,
                                playTime: task.time,
                                checkId: task.checkId,
                                start: task.start,
                                muid: userInfo.muid,
                            }
                            INTEL.postGameEnd(userInfo.auth, data).then(resp=>{
                                printLog("任务完成结果：", resp)
                                logArr[0] = `end: ${task.id}, ${JSON.stringify(resp)}` + logArr[0]
                                sessionStorage.setItem("intelLog", logArr[0])
                                task.delete = true
                                GM_setValue("intelAccount", intelAccount);
                            }).catch(err=>{
                                printLog('postGameEnd error', err)
                                if(err.response.message === 'Invalid checkId'){
                                    task.delete = true
                                }
                            })
                        }
                    }else{
                        // 未开始，启动任务
                        if(hex_md5 === undefined){
                            alert("MD5 组件加载失败！！！")
                            return
                        }
                        const md5 = hex_md5(userInfo.email + currentTime)
                        task.start = currentTime
                        task.sessionId = md5
                        INTEL.postGameStart(userInfo.auth, task.id, md5).then(resp=>{
                            printLog('任务启动结果：', resp)
                            logArr[0] = `start: ${task.id}, ${JSON.stringify(resp)}` + logArr[0]
                            sessionStorage.setItem("intelLog", logArr[0])
                            if(resp.isEligible){
                                task.checkId = resp.checkId
                                GM_setValue("intelAccount", intelAccount);
                            }
                        })
                    }
                }
                GM_setValue("intelAccount", intelAccount);
            }])
        }
        return {
            init: init
        }
    })();
    const INTEL = (()=>{
        // intel
        const pubsub = auth =>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            if(auth)headers.authorization = `Bearer ${auth}`
            return HTTP.GET("https://mog-accounts.overwolf.com/auth/pubsub", {
                responseType: 'json',
                headers
            }).then(res=>{
                return Promise.resolve(res.response);
            })
        }
        /**
        * 获取用户信息
        */
        const getAccountInfo = token =>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-accounts.overwolf.com/accounts/info?seasonId=${seasonId}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                printLog('getAccountInfo', res)
                if(!res.response){
                    // 注册
                   return getRegisteration(token).then(resp=>{
                       printLog('getRegisteration', resp)
                       const hash = resp.hash
                       const md5 = hex_md5(hash)
                       let muid = ''
                       for (let i = 0; i < md5.length; i+=4) {
                           let sub = md5.substring(i, i+ 4)
                           if(i > 5 && i < 23){
                               muid += '-'
                           }
                           muid += sub
                       }

                       const data = {
                           nickname: `${resp.email.substring(0, 5)}`,
                           countryCode: 'US',
                           muid,
                       }
                       printLog('data: ', data)
                       return postRegisteration(token, data)
                   }).then(resp=>{
                       printLog('postRegisteration result:', resp)
                       return getAccountInfo(token)
                   })
                }
                if(res.response && res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })
        }
        // 进度
        const getProgressState = token =>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-battlepass.overwolf.com/battlepass/progress-state?campaignId=${seasonId}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })
        }
        // game-insert
        // game-start
        const postGameStart = (token, gameId, sessionId) =>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            headers['Content-Type'] = 'application/json;charset=UTF-8'
            const json = {
                    gameId,
                    sessionId,
                    playtime: 0
                }
            return HTTP.POST(`https://mog-battlepass.overwolf.com/battlepass/game-start?campaignId=${seasonId}`, {
                responseType: 'json',
                data: JSON.stringify(json),
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })
        }
        // game-end
        const postGameEnd = (token, data) =>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            headers['Content-Type'] = 'application/json;charset=UTF-8'
            const json = {
                    gameId: data.gameId,
                    sessionId: data.sessionId,
                    playtime: data.playTime,
                    checkId: data.checkId,
                    timestamp: data.start,
                    muid: data.muid,
                }
            return HTTP.POST(`https://mog-battlepass.overwolf.com/battlepass/game-end?campaignId=${seasonId}`, {
                responseType: 'json',
                data: JSON.stringify(json),
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })
        }
        // 签到
        const getCheckIn = (token, userId)=>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-battlepass.overwolf.com/battlepass/check-in?userId=${userId}&campaignId=${seasonId}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.status===200){
                    printLog(res)
                    return Promise.resolve(res);
                }else{
                    return Promise.reject(res.response);
                }
            })
        }
        // claim
        const getClaim = (token, level)=>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-accounts.overwolf.com/rewards/claim?campaignId=${seasonId}&userLevel=${level}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })

        }
        // reward
        const getReward = (token)=>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-accounts.overwolf.com/rewards?campaignId=${seasonId}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })

        }
        // get registeration info
        const getRegisteration = (token)=>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-accounts.overwolf.com/accounts/registration`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })

        }
        // registeration
        const postRegisteration = (token, data) =>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            headers['Content-Type'] = 'application/json;charset=UTF-8'
            const json = {
                    nickname: data.nickname,
                    marketingOptIn: true,
                    countryCode: data.countryCode,
                    muid: data.muid,
                    seasonId: seasonId,
                }
            return HTTP.POST(`https://mog-accounts.overwolf.com/accounts/registration`, {
                responseType: 'json',
                data: JSON.stringify(json),
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })
        }
        // get playtime
        const getPlayTime = (token)=>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-battlepass.overwolf.com/battlepass/get-playtime?campaignId=${seasonId}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })

        }
        // get event
        const getEvent = (token, userId, event)=>{
            const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OverwolfClient/0.194.0.16",
                    Origin: "https://content.overwolf.com/acibipjmghoeafghadnbbjdpofabgdicbjppneee/"
                }
            headers.authorization = `Bearer ${token}`
            return HTTP.GET(`https://mog-battlepass.overwolf.com/battlepass/${event.eventId}/${event.id}?userId=${userId}&campaignId=${seasonId}`, {
                responseType: 'json',
                headers
            }).then(res=>{
                if(res.response.error){
                    printLog(res)
                    return Promise.reject(res);
                }else{
                    return Promise.resolve(res.response);
                }
            })

        }

        return {
            pubsub,
            getAccountInfo,
            getProgressState,
            postGameStart,
            postGameEnd,
            getCheckIn,
            getClaim,
            getReward,
            getPlayTime,
            getEvent,
        }
    })();

    if(!unsafeWindow.KLTASK){
        printLog('创建TASK')
        unsafeWindow.KLTASK = (()=>{

            let inited = false;
            let taskData = new Set(JSON.parse(localStorage.getItem("KLTask") || "[]"))

            const funcData = {};

            let runInterval = []; // 任务运行定时器

            // 获取监听类型
            let hidden, state, visibilityChange;
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
                state = "visibilityState";
            } else if (typeof document.mozHidden !== "undefined") {
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
                state = "mozVisibilityState";
            } else if (typeof document.msHidden !== "undefined") {
                hidden = "msHidden";
                visibilityChange = "msvisibilitychange";
                state = "msVisibilityState";
            } else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
                state = "webkitVisibilityState";
            }
            // 添加监听器,监听当前是否活动页面
            let checkActive;
            const n = Math.random();

            // 添加任务回调
            const addFunc = (func)=>{
                funcData[func[0]] = func[1];
            }

            // 添加任务
            const add = (item)=>{
                taskData.add(item);
                store();
            }
            // 移除任务
            const removeTask = (item)=>{
                taskData.delete(item)
                store();
            }
            // 是否存在
            const isExist = (item)=>{
                return taskData.has(item);
            }
            // 存储任务数据
            const store = ()=>{
                let it = taskData.keys();
                const temp = [];
                let t;
                while( !(t = it.next()).done){
                    temp.push(t.value)
                }
                localStorage.setItem("KLTask", JSON.stringify(temp));
            }

            const canIRun = function() {
                if( document[state] === "visible"){
                    printLog("visible");
                    // 当前页面可视化，检查其它标签是否有运行
                    checkRunning();
                }else if( document[state] === "hidden"){
                    clearInterval(checkActive);
                }
            }

            function checkRunning(){
                checkActive = setInterval(()=>{
                    printLog("checkRunning");
                    hasTabRuning(n).then((res)=>{
                        if(!res){
                            // 没有运行中的标签
                            printLog("没有运行中的标签")
                            document.removeEventListener(visibilityChange, canIRun);
                            clearInterval(checkActive);
                            setRuning();
                            // taskRun();
                            runInterval[0] = setInterval(taskRun, 31*1000);
                        }
                    });
                }, 2000)
            }
            // 执行任务
            const taskRun = ()=>{
                printLog("自动做任务")
                for(let task of taskData){
                    printLog("任务：", task)
                    const d = task.split("|");
                    if(!funcData[d[0]]){
                        printLog(`没有找到${d[0]}的执行方法！移除该任务`);
                        removeTask(task);
                        continue;
                    }
                    funcData[d[0]](task);

                }
            }
            // item - SESSION|EventName|email|type|param

            // 设置当前标签为运行状态
            const setRuning = ()=>{
                jq("#kl-tool-actions>span").css("color", "red");
                taskData = new Set(JSON.parse(localStorage.getItem("KLTask") || "[]"));
                GM_getTab(function (o) {
                    o.intelRun = true;
                    GM_saveTab(o);
                });
            }

            // 设置当前标签为停止运行状态
            const setStop = ()=>{
                GM_getTab(function (o) {
                    o.intelRun = false;
                    GM_saveTab(o);
                });
            }

            // Promise 有无正在运行的标签
            const hasTabRuning = (n)=>{
                return new Promise((resolve, reject)=>{
                    GM_getTabs(tabs => {
                        for (let i in tabs) {
                            if(tabs[i].rand===n)continue;

                            if(tabs[i].intelRun){
                                resolve(true);
                                return;
                            }
                        }
                        resolve(false);
                    });
                })
            }

            // 重置内部计时器
            const resetInterval = ()=>{
                if(runInterval[0] === null)return;
                clearInterval(runInterval[0]);
                runInterval[0] = setInterval(taskRun, 31*1000);
            }

            const init = ()=>{
                if(inited){
                    printLog("已经执行过任务初始化了！")
                    return;
                }
                inited = true
                GM_getTab(function (o) {
                    o.rand = n;
                    GM_saveTab(o);

                    hasTabRuning(n).then(res=>{
                        if(res){
                            // 有标签运行，添加监听
                            checkRunning();
                            document.addEventListener(visibilityChange, canIRun, false);
                        }else{
                            // 没有标签运行
                            setRuning();
                            // taskRun();
                            // 每31秒执行一次
                            runInterval[0] = setInterval(taskRun, 31*1000);
                        }
                    })
                });
            }
            return {
                init,
                addFunc,
                add,
                rm: removeTask,
                exist: isExist,
                resetInterval,
                runInterval
            }
        })();
    }
    const TASK = unsafeWindow.KLTASK

    jq(document).ready(()=>{
        if(window.location.href.includes("keylol")){
            TASK.init();
            UI.init();
        }
    })
})();