export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca35eeb7f6fbccd471824", name: "African Movie" },
  { _id: "5b21ca35eeb7f6fbccd471825", name: "Turkish Series" },
  { _id: "5b21ca35eeb7f6fbccd471826", name: "Ghanaian Light" },
  { _id: "5b21ca35eeb7f6fbccd471827", name: "Northern Browns" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
