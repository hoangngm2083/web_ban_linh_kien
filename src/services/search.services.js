const useSearchServices = () => {
  const priceScopes = [
    {
      id: 1,
      from: 0,
      to: 100000,
    },
    {
      id: 2,
      from: 100000,
      to: 500000,
    },
    {
      id: 3,
      from: 500000,
      to: 1000000,
    },
    {
      id: 4,
      from: 1000000,
      to: 2000000,
    },
  ];

  return {
    getPriceScopes: () => priceScopes,
  };
};

export default useSearchServices;
