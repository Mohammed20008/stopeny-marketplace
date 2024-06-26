const Filter = () => {
  const filters = [
    { name: "Type", options: ["physical", "digital"] },
    { name: "min price", options: ["a", "b", "c"] },
    { name: "max price", options: ["a", "b", "c"] },
    { name: "color", options: ["a", "b", "c"] },
    { name: "size", options: ["a", "b", "c"] },
  ];
  return (
    <div className="flex justify-center gap-6 px-4 md:px-16 lg:px-16 2xl:px-64">
      <div className="flex flex-wrap gap-6">
        {filters.map(({ name, options }) => (
          <div
            key={name}
            className="cursor-pointer rounded-lg bg-gray-200 px-2"
          >
            <select
              key={name}
              name={name}
              className="cursor-pointer rounded-full bg-gray-200 py-2 outline-none"
            >
              <option className="">{name}</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div>
        <select
          name="sort by"
          id=""
          className="rounded-full bg-gray-200 px-4 py-2"
        >
          <option>Sort by</option>
          <option value="">a</option>
          <option value="">d</option>
          <option value="">v</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
