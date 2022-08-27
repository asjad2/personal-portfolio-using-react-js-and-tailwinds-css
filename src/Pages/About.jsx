import Stats from "../Components/Stats";
import Teamcard from "../Components/Team";
import TeamData from "../Data";
const About = () => {
  return (
    <div>
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-black tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our Young and Creative Minds
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-flow-row md:grid-cols-2 md:grid-flow-row grid-flow-row  gap-4" >
        {TeamData.map((item) => (
          <Teamcard
            key={item.id}
            item={item}
            profile={item.profile}
            title={item.title}
            designation={item.designation}
            about={item.about}
          />
        ))}
      </div>

      <Stats />
    </div>
  );
};

export default About;
