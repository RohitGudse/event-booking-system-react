export const getEvents = async () => {
  return [
    { id: 1, name: "Concert", price: 500 },
    { id: 2, name: "Movie", price: 300 },
  ];
};

export const getEventById = async (id) => {
  return { id, name: "Concert", price: 500 };
};