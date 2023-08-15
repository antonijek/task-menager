export const loginModel = (data) => {
  return {
    id: data?.id,
    firstName: data?.name,
    lastName: data?.surname,
    description: data?.description,
    image: data?.image_id,
    email: data?.email,
  };
};
