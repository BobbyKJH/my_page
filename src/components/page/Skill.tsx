// Component
import SkillList from "../skill/SkillList";
// Style
import { PageStyle } from "../../style/common/PageStyle";

const Skill = () => {
  return (
    <PageStyle bgc="aqua">
      <span className="name">Skill</span>

      <SkillList />
      <hr id="archiving" />
    </PageStyle>
  );
};

export default Skill;
