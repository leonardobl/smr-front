import { Button } from "../../Atoms/Button";
import { ButtonGroupForm } from "../../Atoms/ButtonGroupForm";
import { Card } from "../../Atoms/Card";
import { Table } from "../../Molecules/Table";
import { TableItem } from "../../Molecules/Table/TableItem";
import { PageTemplate } from "../PageTemplate";
import * as S from "./styles";
import { useHome } from "./useHome";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

  // Rectangle,
} from "recharts";
import { Input } from "../../Atoms/Input";
import { InputMoney } from "../../Atoms/InputMoney";
import { SexoEnum } from "../../../Enum/sexo";
import { InputRadio } from "../../Atoms/InputRadio";
import { SimpleSelect } from "../../Atoms/SimpleSelect";
import { useState } from "react";
import { maskPercentage } from "../../../Util/maskPercent";

const dataLinear = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const HomeTemplate = () => {
  const { formNumber, setFormNumber } = useHome();
  const [percentual, setPercentual] = useState("");

  function formData(e: string) {
    const result = maskPercentage(e);
    setPercentual(result);
  }

  return (
    <PageTemplate>
      <S.Container>
        <Card>
          <S.Form>
            <div>
              <ButtonGroupForm getButtonActiveNumber={setFormNumber} />
            </div>

            {formNumber === 1 && (
              <S.FormBasic>
                <div>
                  <Input label="Nome" placeholder="Digite seu nome" />
                </div>
                <div>
                  <Input label="Data de nascimento" placeholder="00/00/0000" />
                </div>
                <div>
                  <InputRadio
                    label="Sexo"
                    values={[SexoEnum.Masculino, SexoEnum.Feminino]}
                    name="sexo"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
                <div>
                  <InputMoney
                    placeholder="R$ 0,00"
                    label="Remuneração ativa atual"
                  />
                </div>
                <div>
                  <InputMoney
                    placeholder="R$ 0,00"
                    label="Benefício Especial"
                  />
                </div>

                <div>
                  <SimpleSelect
                    label="Prazo de recebimento do benefício no RPC"
                    placeholder={"Selecione um prazo"}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    label="Idade de ingresso Ente Federativo"
                    placeholder="30"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    label="Idade prevista para aposentadoria"
                    placeholder="60"
                  />
                </div>
              </S.FormBasic>
            )}

            {formNumber === 2 && (
              <S.FormAdvancedDataContainer>
                <div>
                  <Input
                    value={percentual}
                    onChange={(e) => formData(e.target.value)}
                    label="Taxa de juros anual"
                  />
                </div>
                <div>
                  <Input label="Taxa de contribuição RPPS" />
                </div>
                <div>
                  <Input label="Taxa de contribuição RPC" />
                </div>
                <div>
                  <InputMoney label="Valor do teto do RGPS" />
                </div>{" "}
                <div>
                  <InputMoney label="Salário de contribuição RPC" />
                </div>{" "}
                <div>
                  <InputMoney label="Índice de inflação" />
                </div>
                <div>
                  <Input
                    type="number"
                    label="Índice de reajuste do benefício RPC"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    label="Índice de reajuste do benefício RPPS"
                  />
                </div>{" "}
                <div>
                  <Input type="number" label="Índice de reajuste paridade" />
                </div>
              </S.FormAdvancedDataContainer>
            )}

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

        <Card>
          <S.TitleCard>Comparativo (R$)</S.TitleCard>
          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart data={dataLinear}>
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name" padding={{ left: 30, right: 30 }} /> */}
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <S.TitleCard>Comparativo de remuneração (R$)</S.TitleCard>
          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart data={dataLinear}>
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name" padding={{ left: 30, right: 30 }} /> */}
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <S.TitleCard>Fase ativa</S.TitleCard>
          <Table.Root>
            <Table.Header columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <h2>Fase ativa</h2>
              <h2>Sem migração</h2>
              <h2>Com migração</h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica
              </h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica + Facultativa
              </h2>
            </Table.Header>
            <Table.WrapperItems>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Remuneração</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para o RPC (Básica)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para o RPC (Básica + Facultativa)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Soma das Contribuições</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Salário Líquido após contribuição</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Imposto de Renda - tabela progressiva</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>R$ 25.665,37</p>
              <p>R$ 28.907,32</p>
              <p>R$ 26.938,99</p>
              <p>R$ 25.665,37</p>
            </Table.Footer>
          </Table.Root>
        </Card>
        <Card>
          <S.TitleCard>Fase de benefício</S.TitleCard>

          <Table.Root>
            <Table.Header columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <h2>Fase de benefício</h2>
              <h2>Sem migração</h2>
              <h2>Com migração</h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica
              </h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica + Facultativa
              </h2>
            </Table.Header>
            <Table.WrapperItems>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício pago pelo RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício Especial</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Saldo Acumulado RPC (Apenas com a Básica)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício RPC (Referente à Contribuição Básica)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Saldo Acumulado RPC (Apenas com a Facultativa)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício RPC (Referente à Contribuição Facultativa)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição sobre o benefício do RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição sobre o benefício do RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(Salário Líquido após contribuição para IR</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Imposto de Renda - tabela progressiva</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>R$ 25.665,37</p>
              <p>R$ 28.907,32</p>
              <p>R$ 26.938,99</p>
              <p>R$ 25.665,37</p>
            </Table.Footer>
          </Table.Root>
        </Card>
        <Card>
          <S.TitleCard>Comparativo</S.TitleCard>

          <Table.Root>
            <Table.Header columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <h2>Migração para RPC x Paridade</h2>
              <h2>Sem migração</h2>
              <h2>Com migração</h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica
              </h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica + Facultativa
              </h2>
            </Table.Header>
            <Table.WrapperItems>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor do cargo efetivo projetado</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor com migração</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor com migração - Básica</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor com migração - Básica + Facultativa</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>R$ 25.665,37</p>
              <p>R$ 28.907,32</p>
              <p>R$ 26.938,99</p>
              <p>R$ 25.665,37</p>
            </Table.Footer>
          </Table.Root>
        </Card>
      </S.Container>
    </PageTemplate>
  );
};
