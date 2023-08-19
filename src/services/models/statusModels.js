export function getAllStatusesModel(data) {
  return data.map((status) => ({
    ...status,
    key: status.id,
  }));
}
