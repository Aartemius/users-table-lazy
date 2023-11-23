export const getUserDOB = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear().toString().slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}


export const getUserFullAddress = (address) => {
  const { street, city, state, postcode } = address;

  return `
    ${street?.number || ''} 
    ${street?.name}, 
    ${city}, 
    ${state}, 
    ${postcode}
  `;
}