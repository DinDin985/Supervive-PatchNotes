export const patchNotesData = {
  introduction: {
    title: "Patch 1.00 Notes",
    description: "Happy Hunting Supervivers!",
    date: "11/20/2024",
    author: "DinDin",
  },
  summary: {
    message: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut sodales molestie tellus, ac laoreet metus placerat blandit.",
      "Vestibulum arcu lectus, dignissim in auctor at, mollis sed tortor. Vivamus vitae massa eget nisl finibus consequat. Quisque sed pretium magna. Phasellus vel risus ut ante fermentum tempor. Praesent sagittis leo facilisis nisl aliquet dignissim. Suspendisse dignissim faucibus ipsum, et venenatis turpis ultricies a. Ut blandit tortor non placerat venenatis. Donec ac tellus in massa dictum tempus. Etiam augue dui, mollis et viverra a, congue eu ligula. Suspendisse ut rhoncus augue.",
      "Nam eleifend metus vitae leo vehicula, a congue nulla commodo. Mauris eget luctus nibh. Etiam pellentesque sem enim, et facilisis nisl convallis ac. Curabitur eu ipsum purus. Ut rhoncus volutpat velit, ut luctus sapien consequat ut. Vivamus justo quam, ultrices a massa sed, posuere hendrerit lacus. Mauris porttitor risus quam, nec dignissim magna finibus nec.",
    ],
    author: "",
    authorImg: "",
  },
  midPatchUpdates: {},
  patchHighlights: {
    video: "https://www.youtube.com/embed/9TPBdxoZe0E",
    notes:
      "WELCOME TO THE SUPERVIVE OPEN BETA PATCH NOTES! There are a LOT of patch notes to read but if you (like much of the world) are declining in literacy rates, maybe you’d prefer to watch a fireside chat. We won’t judge, but books are pretty fun to read too.",
  },
  custom: [
    {
      title: "Refer-a-Friend",
      notes: "Refer-a-friend is BACK and now all done in the game client!",
      bulletPoints: [
        "Earn points for referring friends into SUPERVIVE",
        "Earn even more points for playing together with those friends",
        "Earn enough points to earn exclusive cosmetic rewards!",
      ],
    },
    {
      title: "Art/Sound/UI Updates",
      notes: "",
      bulletPoints: [
        "Updated tooltip styling for all items and abilities",
        "Updated visuals for Hunter healthbars (new status icons, new broken armor indicator, new visuals on damage taken)",
        "Updated visuals for minion healthbars",
        "Updated visuals for combat damage numbers and several status effects",
        "You can now press Alt + 1-3 to upgrade your equipment/boots respectively",
        "As a reminder, you can also press Alt + your abilities to level them up",
        "The main lobby and team lineup screen have undergone makeovers",
        "Kill feed has a fresh look too",
        "Added visual indicators to signal things happening off-screen",
        "Added visual feedback for mana gain from consumables",
        "Off-screen indicators also show distance from the indicator",
        "Added additional game state information when you open the map",
        "Revive beacons have updated visuals and smoother animations",
        "Updated VFX on Spikes, Dunks, and Mantles",
        "There’s music in various parts of the game!",
        "Added sounds for when Exotic items spawn",
        "Trees are more treelike",
        "Large rocks are more rocklike",
        "Berries are more berrylike",
        "Birds are more birdlike",
      ],
    },
  ],
  hunterChanges: [
    {
      name: "Bishop",
      imgSmall: "/patch-notes/hunter-icons/bishop.png",
      imgBig: "/patch-notes/hunter-portraits/bishop-full-body-cropped.png",
      description: "RMB level 3 adjustment, Shift cooldown increase, R nerf.",
      notes:
        "Bishop was strong during Steam Next Fest, especially at higher MMRs.",
      changes: [
        {
          type: "newEffect",
          abilityName: "(RMB) - Displacement Charge",
          abilityImg: "/patch-notes/hunter-abilities/bishop/RMB.png",
          changes: [
            "Level 3 upgrade now only resets the cooldown of Haymaker (Q) if the satchel hits an enemy",
          ],
        },
        {
          type: "adjustment",
          abilityName: "(Shift) - Rocket Jump",
          abilityImg: "/patch-notes/hunter-abilities/bishop/shift.png",
          changes: [{ part1: "Charge time increased from 10s", part2: "11s" }],
        },
        {
          type: "adjustmentAndNewEffect",
          abilityName: "(R) - Blast-off!",
          abilityImg: "/patch-notes/hunter-abilities/bishop/R.png",
          changes: [
            "Turn rate lowered by ~10%",
            "Detonation radius lowered by 25%",
            {
              part1: "Max stun duration decreased from 1.4",
              part2: "1.2 seconds",
            },
            "QoL: No longer follows heightmap downward, meaning if you jumppad and ult, you’ll stay high up in the air",
          ],
        },
      ],
    },
    {
      name: "Brall",
      imgSmall: "/patch-notes/hunter-icons/brall.png",
      imgBig: "/patch-notes/hunter-portraits/brall-full-body-cropped.png",
      description: "LMB adjusted hit box.",
      notes:
        "This is intended to be both a quality-of-life change (hitbox matches the animation), but also a buff especially to lower-skill Brall players who are having a hard time landing their LMB hits",
      changes: [
        {
          type: "newEffect",
          abilityName: "(LMB) - Caldera, Molten Greatsword",
          abilityImg: "/patch-notes/hunter-abilities/brall/LMB.png",
          changes: [
            "Now deals damage in a Slice shape rather than a Box (increased max angle)",
          ],
        },
      ],
    },
    {
      name: "Elluna",
      imgSmall: "/patch-notes/hunter-icons/elluna.png",
      imgBig: "/patch-notes/hunter-portraits/elluna-full-body-cropped.png",
      description:
        "Passive self-slow increase, LMB burn increase, RMB adjusted visuals.",
      notes:
        "Elluna is disproportionately strong at lower MMRs. We’re trading off offensive and defensive power to even out the discrepancy.",
      changes: [
        {
          type: "adjustment",
          abilityName: "(Passive) - Soulpack",
          abilityImg: "/patch-notes/hunter-abilities/elluna/passive.png",
          changes: [
            {
              part1: "Slow while picking up Wisps increased from 20%",
              part2: "30%",
            },
          ],
        },
        {
          type: "newEffect",
          abilityName: "(LMB) - Crescent Bolt",
          abilityImg: "/patch-notes/hunter-abilities/elluna/LMB.png",
          changes: ["Damage per burn stack increased by 10%"],
        },
        {
          type: "newEffect",
          abilityName: "(RMB) - Darkside Binding",
          abilityImg: "/patch-notes/hunter-abilities/elluna/RMB.png",
          changes: [
            "Now has global iconography (visible only to enemies) that should make it easier to read the ability across different skins",
          ],
        },
      ],
    },
    {
      name: "Felix",
      imgSmall: "/patch-notes/hunter-icons/felix.png",
      imgBig: "/patch-notes/hunter-portraits/felix-full-body-cropped.png",
      description: "LMB cooldown between uses increase and added self-slow.",
      notes:
        "Removing an unwanted optimization, which should also be a minor nerf",
      changes: [
        {
          type: "adjustmentAndNewEffect",
          abilityName: "(LMB) - Flamethrower",
          abilityImg: "/patch-notes/hunter-abilities/felix/LMB.png",
          changes: [
            {
              part1: "Cooldown between uses increased from 0.01",
              part2: "0.35 seconds",
            },
            "Added a 0.35 second self-slow after letting go of the ability",
            "Improved visuals",
          ],
        },
      ],
    },
    {
      name: "Ghost",
      imgSmall: "/patch-notes/hunter-icons/ghost.png",
      imgBig: "/patch-notes/hunter-portraits/ghost-full-body-cropped.png",
      description: "RMB now properly attaches to hunter created objects.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          abilityName: "(RMB) - Spike Grenade",
          abilityImg: "/patch-notes/hunter-abilities/ghost/RMB.png",
          changes: [
            "Now properly attaches to dynamic objects like Oath’s Brightshield (RMB) and Celete’s Barricade (Q) rather than deleting on impac",
          ],
        },
      ],
    },
    {
      name: "Hudson",
      imgSmall: "/patch-notes/hunter-icons/hudson.png",
      imgBig: "/patch-notes/hunter-portraits/hudson-full-body-cropped.png",
      description: "LMB bloom mechanic and further range, RMB bloom mecanic.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          abilityName: "(LMB) - Minigun",
          abilityImg: "/patch-notes/hunter-abilities/hudson/LMB.png",
          changes: [
            "Now has Bloom that starts out wide, then zeroes in the longer you hold it",
            "Goes further than before",
            "Improved visuals",
          ],
        },
        {
          type: "newEffect",
          abilityName: "(RMB) - Overclock",
          abilityImg: "/patch-notes/hunter-abilities/hudson/RMB.png",
          changes: [
            "Also has bloom, but less than non-Overclocked Minigun",
            "Improved visuals",
          ],
        },
      ],
    },
    {
      name: "Jin",
      imgSmall: "/patch-notes/hunter-icons/jin.png",
      imgBig: "/patch-notes/hunter-portraits/jin-full-body-cropped.png",
      description:
        "In-game model, VFX, and animations updated. Kills/dunks now properly reset Q.",
      notes: "Oh no he’s hot (in-game)",
      changes: [
        {
          type: "newEffect",
          abilityName: "Flip Slash / Death Blow (Q)",
          abilityImg: "/patch-notes/hunter-abilities/jin/Q.png",
          changes: [
            "Kills/dunks will properly reset this ability",
            "Fixed a bug where leveling Flip Slash / Death Blow would cast it as well",
          ],
        },
      ],
    },
    {
      name: "Joule",
      imgSmall: "/patch-notes/hunter-icons/joule.png",
      imgBig: "/patch-notes/hunter-portraits/joule-full-body-cropped.png",
      description: "RMB min cast time increase.",
      notes: "",
      changes: [
        {
          type: "adjustment",
          abilityName: "(RMB) - Voltaic Spear",
          abilityImg: "/patch-notes/hunter-abilities/joule/RMB.png",
          changes: [
            {
              part1: "Minimum cast time increased from 0.2",
              part2: "0.4 seconds",
            },
          ],
        },
      ],
    },
    {
      name: "Kingpin",
      imgSmall: "/patch-notes/hunter-icons/kingpin.png",
      imgBig: "/patch-notes/hunter-portraits/kingpin-full-body-cropped.png",
      description:
        "LMB damage increase, Shift new level 3 upgrade, Q speed adjustment.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          abilityName: "(LMB) - Scattergun",
          abilityImg: "/patch-notes/hunter-abilities/kingpin/LMB.png",
          changes: ["Damage increased by 15%"],
        },
        {
          type: "newEffect",
          abilityName: "(Shift) - Brute Dash",
          abilityImg: "/patch-notes/hunter-abilities/kingpin/shift.png",
          changes: [
            "[NEW] Level 3 upgrade: Casting Brute Dash resets the cooldown of your Scattergun (LMB). In addition, the next Scattergun shot reduces the cooldown of Brute Dash by 0.25s per pellet hit (max 1.75s)",
          ],
        },
        {
          type: "newEffect",
          abilityName: "(Q) - Primal Slam",
          abilityImg: "/patch-notes/hunter-abilities/kingpin/Q.png",
          changes: [
            "0.15s wind down added (previously 0s)",
            "Level 3 upgrade: self-downward impulse doubled, meaning you slam down faster (careful over Abyss!)",
          ],
        },
      ],
    },
    {
      name: "Myth",
      imgSmall: "/patch-notes/hunter-icons/myth.png",
      imgBig: "/patch-notes/hunter-portraits/myth-full-body-cropped.png",
      description:
        "Myth has received a VFX update on most things! LMB damage adjustment, RMB max hold duration increase and increased knockback in shorter charges, Q level 3 upgrade adjustment, R increase damage all ranks.",
      notes:
        "After multiple rounds of nerfs to sharpen her identity, Myth finally has some room for buffs!",
      changes: [
        {
          type: "newEffect",
          abilityName: "(LMB) - Greenwood Bow",
          abilityImg: "/patch-notes/hunter-abilities/myth/LMB.png",
          changes: [
            "Green arrow damage profile adjusted: base damage down, AP ratio up",
            "Perfect greens deal -5 damage w/ Gray equipment, +5 at Purple equipment, and +10 at Gold",
          ],
        },
        {
          type: "adjustmentAndNewEffect",
          abilityName: "(RMB) - Heartpiercer",
          abilityImg: "/patch-notes/hunter-abilities/myth/RMB.png",
          changes: [
            {
              part1: "Max hold duration after cast increased from 1.5 ",
              part2: "3.0 seconds",
            },
            "Pushes harder after shorter amounts of charge mininum charge and longer holds are unaffected",
            "Charging Heartpiercer is now visible to enemies when Myth is in a wall",
          ],
        },
        {
          type: "newEffect",
          abilityName: "(Shift) - Phase Walk",
          abilityImg: "/patch-notes/hunter-abilities/myth/shift.png",
          changes: [
            "Fixed a bug that sometimes caused Myth to fall through the ground if Phase Walking in the Underrot Vault",
          ],
        },
        {
          type: "adjustment",
          abilityName: "(Q) - Rain of Arrows",
          abilityImg: "/patch-notes/hunter-abilities/myth/Q.png",
          changes: [
            {
              part1:
                "Level 3 Upgrade: cooldown -5 seconds, duration +1.5 seconds",
              part2: "cooldown -4 seconds, +30% Arc Width",
            },
          ],
        },
        {
          type: "newEffect",
          abilityName: "(R) - Virideth's Fury",
          abilityImg: "/patch-notes/hunter-abilities/myth/R.png",
          changes: ["Damage increased by +10% at all ranks"],
        },
      ],
    },
    {
      name: "Oath",
      imgSmall: "/patch-notes/hunter-icons/oath.png",
      imgBig: "/patch-notes/hunter-portraits/oath-full-body-cropped.png",
      description:
        "LMB now has min travel distance and lockout time, Q heal scale reduced.",
      notes:
        "This change should make Oath’s hammer feel smoother to spam, and you can’t autoclick your way to higher DPS beyond a certain point.",
      changes: [
        {
          type: "newEffect",
          abilityName: "(LMB) - Magnetic Hammer",
          abilityImg: "/patch-notes/hunter-abilities/oath/LMB.png",
          changes: [
            "Now has a minimum travel distance of 5m, and a minimum recall lockout time of 0.25 seconds",
          ],
        },
        {
          type: "newEffect",
          abilityName: "(Q) - Regen Field",
          abilityImg: "/patch-notes/hunter-abilities/oath/Q.png",
          changes: [
            "Lowered healing to Brightshield (RMB) to now scale 1:1 with the regular heal",
          ],
        },
      ],
    },
    {
      name: "Shiv",
      imgSmall: "/patch-notes/hunter-icons/shiv.png",
      imgBig: "/patch-notes/hunter-portraits/shiv-full-body-cropped.png",
      description:
        "Q now properly attaches to hunter created objects, R improved visuals.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          abilityName: "(Q) - Farstep Dagger",
          abilityImg: "/patch-notes/hunter-abilities/shiv/Q.png",
          changes: [
            "Now properly attaches to dynamic objects like Oath’s Brightshield (RMB) and Celete’s Barricade (Q) rather than deleting on impact",
          ],
        },
        {
          type: "newEffect",
          abilityName: "(R) - Fusillade",
          abilityImg: "/patch-notes/hunter-abilities/shiv/R.png",
          changes: ["Improved visuals/decals"],
        },
      ],
    },
    {
      name: "Shrike",
      imgSmall: "/patch-notes/hunter-icons/shrike.png",
      imgBig: "/patch-notes/hunter-portraits/shrike-full-body-cropped.png",
      description: "Has a new in-game model.",
      notes: "",
      changes: [],
    },
    {
      name: "Void",
      imgSmall: "/patch-notes/hunter-icons/void.png",
      imgBig: "/patch-notes/hunter-portraits/void-full-body-cropped.png",
      description: "R bug fix.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          abilityName: "(R) - Singularity",
          abilityImg: "/patch-notes/hunter-abilities/void/R.png",
          changes: [
            "Fixed a bug that sometimes caused Invulnerable targets to not get stunned by Singularity even after their Invulnerability ended",
            "Thank you to everyone in the #void Discord channel for this one!",
          ],
        },
      ],
    },
    {
      name: "Zeph",
      imgSmall: "/patch-notes/hunter-icons/zeph.png",
      imgBig: "/patch-notes/hunter-portraits/zeph-full-body-cropped.png",
      description: "New Shift level 3 upgrade.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          abilityName: "(Shift) - Cyclone Dash",
          abilityImg: "/patch-notes/hunter-abilities/zeph/shift.png",
          changes: [
            "[NEW] Level 3 upgrade - If cast over the abyss, Zeph creates Windrings on Dash (1 Windring for short dash, 2 for long dash). Rings last 20 seconds",
          ],
        },
      ],
    },
  ],
  equipmentChanges: [
    {
      name: "Ninja Boots",
      description: "Removed.",
      notes: "",
      changes: [{ type: "newEffect", changes: ["Removed"] }],
    },
    {
      name: "Forestphasing Boots",
      description: "Removed.",
      notes: "",
      changes: [{ type: "newEffect", changes: ["Removed"] }],
    },
    {
      name: "[NEW] Chain Jump Boots",
      description: "Higher jumps.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "If you jump right when you land, your next jump goes higher, up to 3 times",
          ],
        },
      ],
    },
    {
      name: "[NEW] Executioner",
      description: "Healing on wisp damage/kill.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["Stomping or executing wisps heals you over time"],
        },
      ],
    },
    {
      name: "Meditation Boots",
      description: "Added Team mana regen.",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Now grants nearby stationary allies a mana regeneration buff as well at 25% effectiveness",
          ],
        },
      ],
    },
    {
      name: "Greed",
      description: "Lower cashout thresholds.",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "Cost for greed cashout lowered from 5K/10K",
              part2: "4K/8K gold (stats granted unchanged)",
            },
          ],
        },
      ],
    },
    {
      name: "Bubble Blade",
      description: "Shield amount and duration increased.",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "Shield amount increased from 20%",
              part2: "25%",
            },
            {
              part1: "Shield duration increased from 3",
              part2: "4 seconds",
            },
          ],
        },
      ],
    },
    {
      name: "Mindblade",
      description:
        "Max mana on fully stacked increased, Max mana to AP scaling decreased.",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "Max mana granted when fully stacked increased from 50",
              part2: "100",
            },
            {
              part1: "Max mana to AP conversion reduced from 10%",
              part2: "8%",
            },
          ],
        },
      ],
    },
    {
      name: "Rampage",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["No longer gives AP per stack"],
        },
        {
          type: "adjustment",
          changes: [
            {
              part1: "Max stack count increased from 5",
              part2: "10",
            },
          ],
        },
        {
          type: "newEffect",
          changes: ["Now grants all 50 AP at max stacks"],
        },
      ],
    },
    {
      name: "Ambrush",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Now only spawns brush if you are not already in brush. Previously it would keep spawning brush, which would look… sus",
          ],
        },
      ],
    },
    {
      name: "Scholar",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["Stacks while you are dead"],
        },
        {
          type: "adjustment",
          changes: [
            {
              part1: "Max stacks lowered from 10",
              part2: "8",
            },
          ],
        },
        {
          type: "newEffect",
          changes: [
            "Stats per stack increased such that stats at max stacks are the same as before",
          ],
        },
      ],
    },
    {
      name: "Bloodscent",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["Removed"],
        },
      ],
    },
    {
      name: "[NEW] Turbo Boost",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Each time you use a movement ability, gain 50 movespeed that decays over 2s",
          ],
        },
      ],
    },
    {
      name: "Big Game Hunter",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "Movespeed granted per stack increased from 3",
              part2: "5",
            },
          ],
        },
        {
          type: "adjustment",
          changes: [
            {
              part1: "Max stacks lowered from 5",
              part2: "3 (total movespeed at max stacks unchanged)",
            },
          ],
        },
      ],
    },
    {
      name: "Interweaver",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "On-hit proc damage increased from 40",
              part2: "45",
            },
          ],
        },
        {
          type: "newEffect",
          changes: [
            "Removed a bug where Interweaver could still reduce ability cooldowns on-hit",
          ],
        },
      ],
    },
    {
      name: "Executioner",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["Removed"],
        },
      ],
    },
    {
      name: "[NEW] Last Stand",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Falling below 40% HP grants you +5% Omnivamp and +50% healing received from all sources",
          ],
        },
      ],
    },
    {
      name: "Soulstealer",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "Stacks lost on death reduced from 2",
              part2: "1",
            },
          ],
        },
      ],
    },
  ],
  powerChanges: [
    {
      name: "AoE Teleport",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1:
                "Now lets you teleport everything into Abyss, including Revive Beacons and Base Camps",
              part2:
                "Now no longer lets you target inside of mountains / invalid terrain",
            },
          ],
        },
      ],
    },
    {
      name: "Grapple Hook",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustmentAndNewEffect",
          changes: [
            {
              part1: "Bonus root duration on enemies lowered from 0.5",
              part2: "0.1 second",
            },
            "No longer has a minimum hit distance",
          ],
        },
      ],
    },
    {
      name: "Hover Wings",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustment",
          changes: [
            {
              part1: "Duration reduced from 3.5",
              part2: "3 seconds",
            },
            {
              part1: "Cooldown increased from 20",
              part2: "30 seconds",
            },
          ],
        },
      ],
    },
    {
      name: "Icarus Glide",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Pulls you up more gently",
            "Burns you less",
            "Fixed a bug where you instantly start burning when gliding in Academy",
          ],
        },
      ],
    },
    {
      name: "Mana Cloud",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["Follows you better"],
        },
      ],
    },
    {
      name: "Mortar",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustmentAndNewEffect",
          changes: [
            {
              part1: "Cooldown increased from 3",
              part2: "4 seconds",
            },
            "Cooldown starts on mortar launch, instead of on initial cast",
          ],
        },
      ],
    },
    {
      name: "Replicator",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: ["Replicated Armor retains the value it had when cloned"],
        },
      ],
    },
    {
      name: "Tactical Nuke",
      description: "",
      notes: "",
      changes: [
        {
          type: "adjustmentAndNewEffect",
          changes: [
            {
              part1: "Base explosion damage increased from 2700",
              part2: "5000",
            },
            "Exotic Tactical Nuke does 10x the explosion damage of regular Tactical Nuke",
          ],
        },
      ],
    },
    {
      name: "Wisp Vacuum",
      description: "",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Now also pulls living enemies while they are airborne",
            "Now applies a heal over time to you when pulling allies or enemies. The heal scales with targets pulled",
          ],
        },
      ],
    },
  ],
  systemChanges: [
    {
      title: "[!!!] AFK Detection",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Has been added to the game. When a player is detected as AFK, they will be automatically killed/unable to be respawned",
            "Players on the team of a disconnected or AFK player are allowed to leave the game without penalty",
          ],
        },
      ],
    },
    {
      title: "Run It Back",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "A new “Run It Back” button has been added on the team screen of Match Summary",
            "Pressing this button will send a party invite to everyone on your team",
          ],
        },
      ],
    },
    {
      title: "New Player Experience",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Added further improvements to “Welcome to Skylands” Stormshift for newer players, including the introduction of Resurgence",
            "Resurgence: During the first 3 days, when a teammate is killed, a timer starts on remaining teammates. When the timer expires, the dead teammate is revived.",
            "Added updated tutorial videos in the Learn tab",
            "The Controls Tutorial now has Voiceover",
          ],
        },
      ],
    },
    {
      title: "Quests",
      notes: [
        "In Open Beta we’re introducing a new system: Quests! Quests, or things like quests have been in the game before but we never found a shape that really fit… until now - we hope! The goals of the quest system are:",
        [
          "Give players meaningful, strategic decisions in the early game",
          "Add immediate, clear, shared early game goals with compelling rewards",
          "Incentivize smaller-scale, early game PvP collisions",
        ],
        "While these things will ideally make the game better for all players, we believe they’ll be especially helpful to players that are NOT in a premade, since there’s now a clear answer to “what should we do right now?",
        "And now some caveats. This system came in very late in development so there’s a good amount of temporary content associated with it, like:",
        [
          "The vendor is a recolored version of the red key vendor, neither of which are necessarily final in terms of visuals or sound,",
          "The way he distributes quests is very bare bones. We’re anticipating iterating here, so please give us feedback on what’s working or not working about interacting with him!",
          "Quest content is a pretty small set. We’d like to add more quests if the system sticks around, and we’d like to add more varied quests! We’re still assessing it ourselves and your feedback is a key driver to where we take it, so please let us know how you feel!",
        ],
      ],
      changes: [
        {
          type: "newEffect",
          subtitle: "How quests work:",
          changes: [
            "Shortly after you drop, a vendor will appear near your team, offering a selection of different Quests for your team to complete. Your vendor can only be seen and used by your team.",
            "Successfully completing those Quests will give your team a unique reward.",
            "After you complete your first Quest, your team will be offered another Quest (until Day 4, at which point the Quest vendor will disappear). Each quest offered can be attempted once per game.",
            "The vendor will teleport after you every 15 seconds until you accept a quest, or capture a bonfire, or the game reaches day 2. At that point, the vendor will appear above your team’s Base Camp, or if you don’t have one, at the nearest uncaptured one.",
          ],
        },
        {
          type: "newEffect",
          subtitle: "Quests and rewards:",
          changes: [
            "Brawlers: Kill 3 players. Reward: Megashard.",
            "Farm Creeps: Farm 16 creeps. Reward: 4 Vive Brews + 1 Hyperscrap per player.",
            "Open Vault: Open any Vault. Reward: 1 Tome of Knowledge per player + 1 Hyperscrap per player.",
            "Supply Drop: Spawn and loot a Supply Drop. Reward: 2 green armor + 1 Hyperscrap per player.",
            "Megaboar: Spawn and hunt a Megaboar. Reward: 2 green armor + 1 Hyperscrap per player.",
            "Note: you’ll either receive Supply Drop OR Megaboar each match, not both.",
          ],
        },
      ],
    },
    {
      title: "Circle Tunings",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "BR games now start with an initial Death Circle. Gold zones and Major Objectives will not spawn in the initial death circle",
            "For Squad games: Day 1 circle duration lowered by 60s. Subsequent days lowered slightly",
          ],
        },
      ],
    },
    {
      title: "Most Wanted",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Dying while Most Wanted now sends you straight to Deathbox",
            "Kill credit from spikes will always go to the player who hit the spike, and won't be stolen by damaging a player after the spike starts",
            "Last hit leniency - if the most wanted player has an assist within 0.5 seconds of a kill, they'll get full kill time reduction instead of assist reduction",
          ],
        },
      ],
    },
    {
      title: "Health/damage reduction clarity",
      notes:
        "This change shouldn’t feel like a change. In a previous playtest, we gave all hunters some passive damage reduction as an experiment to increase time-to-kill. We liked the change, so we’re swapping the invisible damage-reduction with health to get the same effect with better clarity.",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Hidden 3% damage reduction and 5% healing reduction removed from all hunters",
            "All hunters are given +30 base Health (and a small amount of scaling Health per Level) to compensate for the above removals",
          ],
        },
      ],
    },
    {
      title: "Other Stuff",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "As a reminder, all inventory and progression has been reset for Open Beta",
            "The glider “Soft Ceiling” pulls you down less harshly, and should generally feel better",
            'The "Out of Bounds" Buffer does not regenerate until you\'re on the ground again (thank you zzkknn for showing us that we need this…)',
            "All hunters have received a third Hunter Mastery mission. Some existing Hunter Mastery missions have been modified.",
            "You are now Vulnerable while repairing armor at a Basecamp (same as brewing Vive)",
            "You can now mute your teammates’ Emotes and Pings in Settings",
            "When you are dead, you can only hear sound that your living teammates can hear",
          ],
        },
      ],
    },
    {
      title: "Environment/Map",
      notes:
        "These look like small notes, but they’re doing a lot of heavy lifting. Big environmental upgrades! And some context on random chests: given how much of SUPERVIVE relies on teammates to do efficiently (vaults, monster packs, etc) we wanted to add something that is easily solo-able and has good rewards to encourage teams breaking up to efficiently farm out a biome. Obviously this has its own risks, but it definitely adds ~ t e x t u r e ~ to your gaming experience. If you see a chest, you should probably open it.",
      changes: [
        {
          type: "newEffect",
          changes: [
            "[!!!] Random Chests now spawn in the outskirts of most biomes: they contain goodies!",
            "[!!!] Kaiju Water now anti-heals for a short duration",
            "[!!!] Explosive barrels now have a slight delay before exploding, and they now apply anti-heal",
            "Environment looks nicer :^)",
            "Chaos Steppes has an updated layout, including a new Boss arena",
            "Prisma Falls has a secret area!",
          ],
        },
      ],
    },
    {
      title: "PvE",
      notes: "",
      changes: [
        {
          type: "newEffect",
          changes: [
            "Several minions have updated loot/XP adjustments to match their density/danger",
            "Creeps now ignore you if you sneak around them (unless you’re really really close to them)",
            "Wavemaker Boss: Projectile orbs are now destructible by melee attacks",
            "Town Guards now change color when they attack you",
            "Several minions have updated art",
          ],
        },
      ],
    },
  ],
  bugFixesList: [
    "We’ve added a South American server for Open Beta",
    "Support for widescreen added",
    "Knock streaks (Double Knock, Triple Knock, etc.) reset after 10 seconds of not getting a knock, instead of resetting only on death",
    "Improved mantling - mantling should feel more physical and sandbox-y",
    "Improved behavior of Default zoom",
    "Players with Default zoom can activate Smart zoom by holding down RMB. When released, the map view will return back to where they were before",
    "Added a streamer/privacy mode in Settings",
    "Scan grenades now correctly show ally/enemy color",
    "Spray sizes reduced",
    "Added a terminal velocity to Windrings (don’t worry, you can still go Very Fast)",
    "Practice mode menu reordered/consolidated",
    "Cursor cooldown indicator is now rate limited, and can be turned off in Settings",
    "You can now grab onto grindrails from below (and start grinding on top of them)",
    "You no longer collide with allied minions",
    "The Train puzzle colors have been updated to make them colorblind-friendly",
    "Fixed a bug that muted ally emotes during Drop",
    "Fixed a bug where Chonker Cannon Chonkers would bounce too much",
    "Fixed a bug where shooting the Heart could sometimes spike enemies across the map",
    "Fixed a bug where Glider trails could spawn erratically on the map",
  ],
};
