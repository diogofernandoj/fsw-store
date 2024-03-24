const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711019531/fsw-store/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018789/fsw-store/01_mx-master-3s.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018789/fsw-store/02_mx-master-3s.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018789/fsw-store/03_mx-master-3s.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018789/fsw-store/04_mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018868/fsw-store/01_logi-superlight.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018868/fsw-store/02_logi-superlight.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018868/fsw-store/03_logi-superlight.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711018868/fsw-store/04_logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711062788/fsw-store/01_logi-lightspeed.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711062788/fsw-store/02_logi-lightspeed.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711062788/fsw-store/03_logi-lightspeed.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711062788/fsw-store/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711063815/fsw-store/01_hyperx-dart.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711063815/fsw-store/02_hyperx-dart.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711063815/fsw-store/03_hyperx-dart.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711063815/fsw-store/04_hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711064656/fsw-store/01_razer-deathadder.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711064656/fsw-store/02_razer-deathadder.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711064656/fsw-store/03_razer-deathadder.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711064656/fsw-store/04_razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711064997/fsw-store/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065126/fsw-store/01_logi-mx-keys-mini.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065126/fsw-store/02_logi-mx-keys-mini.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065126/fsw-store/03_logi-mx-keys-mini.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065126/fsw-store/04_logi-mx-keys-mini.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065315/fsw-store/01_logi-mx-keys-s.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065315/fsw-store/02_logi-mx-keys-s.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065315/fsw-store/03_logi-mx-keys-s.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711065315/fsw-store/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144396/fsw-store/01_logi-pop-keys.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144396/fsw-store/02_logi-pop-keys.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144396/fsw-store/03_logi-pop-keys.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144396/fsw-store/04_logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144548/fsw-store/01_logi-mx-mechanical.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144548/fsw-store/02_logi-mx-mechanical.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144548/fsw-store/03_logi-mx-mechanical.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144548/fsw-store/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144692/fsw-store/01_epomaker-th80.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144692/fsw-store/02_epomaker-th80.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144692/fsw-store/03_epomaker-th80.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144692/fsw-store/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144830/fsw-store/01_redragon-gamer-ashe.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144830/fsw-store/02_redragon-gamer-ashe.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144830/fsw-store/03_redragon-gamer-ashe.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711144830/fsw-store/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145457/fsw-store/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145537/fsw-store/01_logi-vibe.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145537/fsw-store/02_logi-vibe.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145537/fsw-store/03_logi-vibe.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145537/fsw-store/04_logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145671/fsw-store/01_logi-lightspeed-phone.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145671/fsw-store/02_logi-lightspeed-phone.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145671/fsw-store/03_logi-lightspeed-phone.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145671/fsw-store/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145813/fsw-store/01_logi-astro-a30.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145813/fsw-store/02_logi-astro-a30.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145813/fsw-store/03_logi-astro-a30.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145813/fsw-store/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145962/fsw-store/01_logi-earbuds.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145962/fsw-store/02_logi-earbuds.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145962/fsw-store/03_logi-earbuds.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711145962/fsw-store/04_logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146177/fsw-store/01_hyperx-stinger.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146177/fsw-store/02_hyperx-stinger.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146177/fsw-store/03_hyperx-stinger.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146177/fsw-store/04_hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146304/fsw-store/01_razer-kraken.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146304/fsw-store/02_razer-kraken.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146304/fsw-store/03_razer-kraken.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146304/fsw-store/04_razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146391/fsw-store/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146944/fsw-store/01_logi-powerplay.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146944/fsw-store/02_logi-powerplay.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146944/fsw-store/03_logi-powerplay.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711146944/fsw-store/04_logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147104/fsw-store/01_logi-desk-mat.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147104/fsw-store/02_logi-desk-mat.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147104/fsw-store/03_logi-desk-mat.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147104/fsw-store/04_logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147241/fsw-store/01_logi-g740.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147241/fsw-store/02_logi-g740.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147241/fsw-store/03_logi-g740.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147241/fsw-store/04_logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147322/fsw-store/01_logi-studio-series.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147322/fsw-store/02_logi-studio-series.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147322/fsw-store/03_logi-studio-series.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147322/fsw-store/04_logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/01_force-dark.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/02_force-dark.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/03_force-dark.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/04_force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/01_force-snow.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/02_force-snow.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/03_force-snow.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711147533/fsw-store/04_force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711151638/fsw-store/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152228/fsw-store/01_dell-S2421HN.jpg",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152228/fsw-store/02_dell-S2421HN.jpg",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152228/fsw-store/03_dell-S2421HN.jpg",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152228/fsw-store/04_dell-S2421HN.jpg",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152331/fsw-store/01_dell-P2422H.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152331/fsw-store/02_dell-P2422H.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152331/fsw-store/03_dell-P2422H.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711152331/fsw-store/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230157/fsw-store/01_dell-P2723QE.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230157/fsw-store/02_dell-P2723QE.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230157/fsw-store/03_dell-P2723QE.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230157/fsw-store/04_dell-P2723QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230371/fsw-store/01_dell-S3422DWG.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230371/fsw-store/02_dell-S3422DWG.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230371/fsw-store/03_dell-S3422DWG.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230371/fsw-store/04_dell-S3422DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230713/fsw-store/01_dell-S3222DGM.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230713/fsw-store/02_dell-S3222DGM.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230713/fsw-store/03_dell-S3222DGM.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230713/fsw-store/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230883/fsw-store/01_dell-AW2524HF.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230883/fsw-store/02_dell-AW2524HF.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230883/fsw-store/03_dell-AW2524HF.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230883/fsw-store/04_dell-AW2524HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711230980/fsw-store/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231080/fsw-store/01_logi-surround-z607.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231080/fsw-store/02_logi-surround-z607.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231080/fsw-store/03_logi-surround-z607.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231080/fsw-store/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231211/fsw-store/01_logi-dock.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231211/fsw-store/02_logi-dock.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231211/fsw-store/03_logi-dock.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231211/fsw-store/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231330/fsw-store/01_sony-SA-Z9R.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231330/fsw-store/02_sony-SA-Z9R.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231330/fsw-store/03_sony-SA-Z9R.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231330/fsw-store/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231528/fsw-store/01_sony-extra-bass.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231528/fsw-store/02_sony-extra-bass.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231528/fsw-store/03_sony-extra-bass.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231528/fsw-store/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231653/fsw-store/01_sony-XB23.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231653/fsw-store/02_sony-XB23.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231653/fsw-store/03_sony-XB23.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231653/fsw-store/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imagesUrl: [
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231780/fsw-store/01_sony-S200F.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231780/fsw-store/02_sony-S200F.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231780/fsw-store/03_sony-S200F.png",
          "https://res.cloudinary.com/dqvzy0ulr/image/upload/v1711231780/fsw-store/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
