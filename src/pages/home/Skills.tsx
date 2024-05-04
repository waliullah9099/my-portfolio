import SkillBox from "@/components/ui/SkillBox";
import { TSkills } from "@/types";
import Marquee from "react-fast-marquee";

const Skills = async () => {
  const frontrSkills = await fetch("http://localhost:5000/skills", {
    method: "GET",
  });
  const backendSkills = await fetch("http://localhost:5000/backend_skills", {
    method: "GET",
  });
  const skillsData = await frontrSkills.json();
  const backendSkillsData = await backendSkills.json();
  return (
    <div className="bg-[#040E13] py-16 border-slate-600 border-b">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center text-white font-bold text-4xl mb-3 snap-center">
          MY <span className="text-primary">SKILLS</span>
        </h1>

        <div className="w-full my-12 space-y-5">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill: TSkills, index: number) => (
              <SkillBox key={index} skill={skill} />
            ))}
          </Marquee>

          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {backendSkillsData.map((skill: TSkills, index: number) => (
              <SkillBox key={index} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
