export function getAllTasksModel(data) {
  return data.map((item) => ({
    id: item?.id,
    title: item?.title,
    description: item?.description,
  }));
}
