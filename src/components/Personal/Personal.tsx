const Personal = () => {
  return (
    <div>
      <div className="mb-8">
        Here are some achievements and projects I've worked on:
      </div>
      <div className="grid lg:gap-x-4 gap-y-4 md:grid-cols-2 mb-8">
        {/* {achievementsList.map(
          ({ header, links, description, image }, i: number) => (
            <div>
              <figure>
                <img
                  src={image}
                  className="object-cover h-96 w-full rounded-xl"
                  alt={image}
                />
              </figure>
            </div>
          )
        )} */}
      </div>
    </div>
  );
};

export default Personal;
