import { Button } from "../../Atoms/Button";
import { ButtonGroupForm } from "../../Atoms/ButtonGroupForm";
import { Card } from "../../Atoms/Card";
import { FormBasicData } from "../../Molecules/Forms/ FormBasicData";
import { FormAdvancedData } from "../../Molecules/Forms/FormAdvancedData";
import { PageTemplate } from "../PageTemplate";
import * as S from "./styles";
import { useHome } from "./useHome";
export const HomeTemplate = () => {
  const { formNumber, setFormNumber } = useHome();

  return (
    <PageTemplate>
      <S.Container>
        <Card>
          <S.Form>
            <div>
              <ButtonGroupForm getButtonActiveNumber={setFormNumber} />
            </div>

            {formNumber === 1 && <FormBasicData />}
            {formNumber === 2 && <FormAdvancedData />}

            <S.WrapperButtons>
              <Button variant="default">Ver resultado</Button>
              <Button
                iconleft="/assets/svg/icon-print-blue.svg"
                variant="blue-light"
                type="button"
              >
                Relatório
              </Button>
              <Button
                variant="blue-light"
                type="reset"
                iconleft="/assets/svg/icon-reset-blue.svg"
              >
                Reiniciar
              </Button>
            </S.WrapperButtons>
          </S.Form>
        </Card>
      </S.Container>
    </PageTemplate>
  );
};
