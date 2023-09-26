const capitalize = (data) => {
  if (data) return `${data?.charAt(0)?.toUpperCase()}${data?.slice(1)}`;
};

export default capitalize;
