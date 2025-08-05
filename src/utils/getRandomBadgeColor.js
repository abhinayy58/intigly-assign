export const getRandomBadgeColor = () => {
  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
  ];

  const shade = "500"; // You can randomize this too if you want
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `bg-${randomColor}-${shade}`;
};
