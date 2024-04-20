interface uri {
  uri: string;
}

interface city {
  id: number;
  name: string;
  img: uri;
}

const useHomeHandler = () => {
  const sliderImages: string[] = [
    'https://www.rrooms.in/static/media/Banner2.d6ea92d6749d39d708c1.jpg',
    'https://www.rrooms.in/static/media/Banner3.f72ab393562181e5927b.jpg',
    'https://www.rrooms.in/static/media/Banner1.f1089dc574ba7a155b75.jpg',
  ];

  const cities: city[] = [
    {
      id: 1,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 2,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 3,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 4,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 5,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 6,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 7,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 8,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 9,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
    {
      id: 10,
      name: 'city',
      img: {
        uri: 'https://www.rrooms.in/static/media/agra.1f2994d5b28197302c59.jpg',
      },
    },
  ];

  return {sliderImages, cities};
};

export default useHomeHandler;
