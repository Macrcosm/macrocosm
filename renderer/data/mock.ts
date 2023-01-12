const communityImages = [
  {
    src: "https://picsum.photos/id/233/258/374",
    height: 374,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/234/258/258",
    height: 258,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/235/258/374",
    height: 374,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/236/258/146",
    height: 146,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/248/258/146",
    height: 146,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/238/258/258",
    height: 258,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/247/258/374",
    height: 374,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/212/258/146",
    height: 146,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/248/258/146",
    height: 146,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/238/258/258",
    height: 258,
    width: 258,
  },
  {
    src: "https://picsum.photos/id/239/258/258",
    height: 258,
    width: 258,
  },
];

const modalOptions = [
  {
    key: "Stable Diffusion",
    value: "Stable Diffusion",
    description: "The Base Stable Diffusion Model",
  },
  {
    key: "Midjourney",
    value: "Midjourney",
    description: "Midjourney (Image generation not available)",
  },
  {
    key: "Anything Diffusion",
    value: "Anything Diffusion",
    description: "Best for anime style",
  },
  {
    key: "Analog Diffusion",
    value: "Analog Diffusion",
    description: "Best for analog photographs",
  },
  {
    key: "Open Journey",
    value: "Open Journey",
    description: "Midjourney type images",
  },
  {
    key: "Redshift Diffusion",
    value: "Redshift Diffusion",
    description: "Best for high resolution 3D artworks",
  },
];

const searchOptions = [
  "Cryberpunk",
  "Dieselpunk",
  "Steampunk",
  "Princess Punk",
  "Atom Punk",
];

const default_modal_options = {
  sizes: [
    {
      key: 128,
      value: 128,
    },
    {
      key: 256,
      value: 256,
    },
    {
      key: 384,
      value: 384,
    },
    {
      key: 448,
      value: 448,
    },
    {
      key: 512,
      value: 512,
    },
    {
      key: 576,
      value: 576,
    },
    {
      key: 640,
      value: 640,
    },
    {
      key: 704,
      value: 704,
    },
    {
      key: 768,
      value: 768,
    },
    {
      key: 832,
      value: 832,
    },
    {
      key: 869,
      value: 869,
    },
    {
      key: 960,
      value: 960,
    },
    {
      key: 1024,
      value: 1024,
    },
  ],
  outputs: [
    {
      value: 1,
      key: "1",
    },
    {
      key: "2",
      value: 2,
    },
    {
      key: "3",
      value: 3,
    },
    {
      key: "4",
      value: 4,
    },
    {
      key: "5",
      value: 5,
    },
    {
      key: "6",
      value: 6,
    },
    {
      key: "7",
      value: 7,
    },
    {
      key: "8",
      value: 8,
    },
    {
      key: "9",
      value: 9,
    },
    {
      key: 10,
      value: 10,
    },
  ],
  versions: [
    {
      key: "Version 1",
      value: "Version 1",
    },
    {
      key: "Version 1.5",
      value: "Version 1.5",
    },
    {
      key: "Version 2.0 (512)",
      value: "Version 2.0 (512)",
    },
    {
      key: "Version 2.0 (768)",
      value: "Version 2.0 (768)",
    },
    {
      key: "Version 2.1 (512)",
      value: "Version 2.1 (512)",
    },
    {
      key: "Version 2.1 (768)",
      value: "Version 2.1 (768)",
    },
  ],
  samples: [
    {
      key: "Default",
      value: "Default",
    },
    {
      key: "ddim",
      value: "ddim",
    },
    {
      key: "plms",
      value: "plms",
    },
    {
      key: "k_euler",
      value: "k_euler",
    },
    {
      key: "k_euler_ancestral",
      value: "k_euler_ancestral",
    },
    {
      key: "k_heun",
      value: "k_heun",
    },
    {
      key: "k_dpm_2",
      value: "k_dpm_2",
    },
    {
      key: "k_dpm_2_ancestral",
      value: "k_dpm_2_ancestral",
    },
    {
      key: "k_dpmpp_2m",
      value: "k_dpmpp_2m",
    },
  ],
};

const mid_journey_options = {
  versions: [
    { key: "Version 4b", value: "Version 4b", description: "Default Latest" },
    {
      key: "Nijijourney",
      value: "Nijijourney",
      description: "Anime model for midjourney",
    },
    {
      key: "Version 4a",
      value: "Version 4a",
      description: "Old Latest",
    },
    {
      key: "Version  3",
      value: "Version  3",
      description: "Artistic & Creative",
    },
    {
      key: "Version 2",
      value: "Version 2",
      description: "More Abstract",
    },
    {
      key: "Version 1",
      value: "Version 1",
      description: "Texture / Macro",
    },
    {
      key: "Test Artistic",
      value: "Test Artistic",
      description: "Artistic",
    },
    {
      key: "Test Realism",
      value: "Test Realism",
      description: "Photo Realistic",
    },
    {
      key: "Test Remaster",
      value: "Test Remaster",
      description: "Creative Mode",
    },
    {
      key: "TestP Remaster",
      value: "TestP Remaster",
      description: "Photo Realism Creative",
    },
  ],
  upscale: [
    {
      key: "None",
      value: "None",
      description: "Upscale off",
    },
    {
      key: "Light",
      value: "Light",
      description: "Smaller, Smoother, less details",
    },
    {
      key: "Beta",
      value: "Beta",
      description: "Bigger smooth details",
    },
  ],
  quality: [
    {
      key: 0.25,
      value: 0.25,
      description: "Rough results 4x faster",
    },
    {
      key: 0.5,
      value: 0.5,
      description: "Less detailed results 2x faster",
    },
    {
      key: 1,
      value: 1,
      description: "Default",
    },
    {
      key: 2,
      value: 2,
      description: "More Detailed Results",
    },
    {
      key: 5,
      value: 5,
      description: "Experimental 5x Cost",
    },
  ],
  sizes: [
    {
      key: 256,
      value: 256,
    },
    {
      key: 512,
      value: 512,
    },
    {
      key: 1024,
      value: 1024,
    },
  ],
  yesNo: [
    {
      key: "Yes",
      value: "Yes",
    },
    {
      key: "No",
      value: "No",
    },
  ],
};

export {
  default_modal_options,
  communityImages,
  modalOptions,
  searchOptions,
  mid_journey_options,
};
