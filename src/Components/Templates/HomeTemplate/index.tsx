import { ButtonGroupForm } from "../../Atoms/ButtonGroupForm";
import { Card } from "../../Atoms/Card";
import { FormBasicData } from "../../Molecules/Forms/ FormBasicData";
import { PageTemplate } from "../PageTemplate";
import * as S from "./styles";
import { useHome } from "./useHome";
export const HomeTemplate = () => {
  const { formNumber, setFormNumber } = useHome();

  return (
    <PageTemplate>
      <S.Container>
        <Card>
          <div>
            <ButtonGroupForm getButtonActiveNumber={setFormNumber} />
          </div>
          {formNumber === 1 && <FormBasicData />}
          {formNumber === 2 && <FormBasicData />}
        </Card>
      </S.Container>
    </PageTemplate>
  );
};
