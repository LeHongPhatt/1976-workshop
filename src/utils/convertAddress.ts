export const convertAddress = (value): string => {
  console.log(value);
  if (!value) {
    return;
  }
  return `${value?.address}, ${value?.ward?.Name}, ${value?.district?.Name}, ${value?.city?.Name}`;
};
export const convertStringToAddress = (value: string) => {
  const [address, ward, district, city] = value
    ?.split(',')
    .map(item => item.trim());
  return {
    address,
    ward,
    district,
    city,
  };
};
