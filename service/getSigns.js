export const getSigns = () => {
  return fetch("http://sandipbgt.com/theastrologer/api/sunsigns").then(
    (response) => response.json()
  );
  // .then((data) => console.log(data));
};

// export const getSigns = async () => {
//   try {
//     const response = await fetch(
//       "https://sandipbgt.com/theastrologer/api/sunsigns"
//     );

//     const signs = await response.json()

//     .then((response) => response.json());
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getHoroscope = (sign, timeframe) => {
  return fetch(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`
  )
    .then((response) => response.json())
    .then(({ horoscope }) => horoscope);
};
