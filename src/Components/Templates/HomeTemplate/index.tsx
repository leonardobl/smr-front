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
import { maskMoney } from "../../../Util/masks";

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
  const {
    formNumber,
    setFormNumber,
    Controller,
    control,
    errors,
    handleSubmit,
    register,
    printPage,
    getData,
    PrazosOptions,
    Taxas_Anual_Options,
    setValorTeto,
    valorTeto,
    watch,
    table1,
    remuneracaoAtivaAtualText,
    resetForm,
    setRemuneracaoAtivaAtualText,
    beneficioEspecialText,
    setBeneficioEspecialText,
    table2,
  } = useHome();

  return (
    <PageTemplate>
      <S.Container>
        <Card>
          <S.Form onSubmit={handleSubmit(getData)}>
            <div>
              <ButtonGroupForm getButtonActiveNumber={setFormNumber} />
            </div>

            {formNumber === 1 && (
              <S.FormBasic>
                <div>
                  <Input
                    {...register("nome")}
                    error={!!errors?.nome}
                    label="Nome"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <Input
                    {...register("data_nascimento")}
                    error={!!errors?.data_nascimento}
                    label="Data de nascimento"
                    placeholder="00/00/0000"
                  />
                </div>
                <div>
                  <S.LabelInputRadio>Sexo</S.LabelInputRadio>
                  <S.WrapperInputsRadio>
                    {[SexoEnum.Masculino, SexoEnum.Feminino]?.map((item) => (
                      <Controller
                        control={control}
                        name="sexo"
                        key={Math.random()}
                        render={({ field: { onChange, value } }) => (
                          <InputRadio
                            key={Math.random()}
                            label={item}
                            name="sexo"
                            id="sexo"
                            value={item}
                            checked={value === item}
                            onChange={(e) => {
                              onChange(e?.currentTarget?.value);
                            }}
                          />
                        )}
                      />
                    ))}
                  </S.WrapperInputsRadio>
                </div>
                <div>
                  <Controller
                    control={control}
                    name="remuneracao_ativa_atual"
                    render={({ field: { onChange } }) => (
                      <InputMoney
                        error={!!errors?.remuneracao_ativa_atual}
                        value={remuneracaoAtivaAtualText}
                        placeholder="R$ 0,00"
                        label="Remuneração ativa atual"
                        onValueChange={(value, _name, values) => {
                          setRemuneracaoAtivaAtualText(value || "");
                          onChange(values?.float);
                        }}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    control={control}
                    name="beneficio_especial"
                    render={({ field: { onChange } }) => (
                      <InputMoney
                        error={!!errors?.beneficio_especial}
                        placeholder="R$ 0,00"
                        value={beneficioEspecialText}
                        label="Benefício Especial"
                        onValueChange={(value, _name, values) => {
                          setBeneficioEspecialText(value || "");
                          onChange(values?.float);
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <Input
                    value={maskMoney(watch("valor_teto_rgps") || 0)}
                    disabled
                    placeholder="R$ 0,00"
                    label="Valor do teto do RGPS"
                  />
                </div>

                <div>
                  <Controller
                    control={control}
                    name="salario_contribuicao_rpc"
                    render={({ field: { value } }) => (
                      <InputMoney
                        error={!!errors?.salario_contribuicao_rpc}
                        value={value}
                        disabled
                        placeholder="R$ 0,00"
                        label="Salário de contribuição RPC"
                      />
                    )}
                  />
                </div>

                <div>
                  <Controller
                    control={control}
                    name="prazo_recebimento_beneficio_rpc"
                    render={({ field: { value, onChange } }) => (
                      <SimpleSelect
                        error={!!errors?.prazo_recebimento_beneficio_rpc}
                        options={PrazosOptions}
                        label="Prazo de recebimento do benefício no RPC"
                        placeholder={"Selecione um prazo"}
                        value={
                          PrazosOptions.find((i) => i.value === value) || null
                        }
                        onChange={(e) => onChange(e?.value)}
                      />
                    )}
                  />
                </div>
                <div>
                  <Input
                    {...register("idade_ingresso_ente_federativo", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    error={!!errors?.idade_ingresso_ente_federativo}
                    label="Idade de ingresso Ente Federativo"
                    placeholder="30"
                  />
                </div>
                <div>
                  <Input
                    {...register("idade_prevista_aposentadoria", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    error={!!errors?.idade_prevista_aposentadoria}
                    label="Idade prevista para aposentadoria"
                    placeholder="60"
                  />
                </div>
              </S.FormBasic>
            )}

            {formNumber === 2 && (
              <S.FormAdvancedDataContainer>
                <div>
                  <Controller
                    control={control}
                    name="taxa_juros_anual"
                    render={({ field: { onChange, value } }) => (
                      <SimpleSelect
                        error={!!errors?.taxa_juros_anual}
                        label="Taxa de juros anual"
                        placeholder={"Selecione uma taxa"}
                        options={Taxas_Anual_Options}
                        value={
                          Taxas_Anual_Options.find((i) => i.value === value) ||
                          null
                        }
                        onChange={(e) => onChange(e?.value)}
                      />
                    )}
                  />
                </div>
                <div>
                  <Input
                    {...register("aliquota_contribuicao_rpps", {
                      valueAsNumber: true,
                    })}
                    type={"number"}
                    error={!!errors?.aliquota_contribuicao_rpps}
                    label="Alíquota de contribuição RPPS"
                  />
                </div>
                <div>
                  <Input
                    {...register("aliquota_contribuicao_rpc", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    error={!!errors?.aliquota_contribuicao_rpc}
                    label="Alíquota de contribuição RPC"
                  />
                </div>
                <div>
                  <Controller
                    control={control}
                    name="valor_teto_rgps"
                    render={({ field: { onChange } }) => (
                      <InputMoney
                        value={valorTeto}
                        error={!!errors?.valor_teto_rgps}
                        placeholder="R$ 0,00"
                        label="Valor do teto do RGPS"
                        onValueChange={(value, _name, values) => {
                          setValorTeto(value || "");
                          onChange(values?.float);
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <Input
                    {...register("indice_infl", { valueAsNumber: true })}
                    label="Índice de inflação"
                    error={!!errors?.indice_infl}
                    type="number"
                  />
                </div>
                <div>
                  <Input
                    {...register("indice_reajuste_beneficio_rpc", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    error={!!errors?.indice_reajuste_beneficio_rpc}
                    label="Índice de reajuste do benefício RPC"
                  />
                </div>
                <div>
                  <Input
                    {...register("indice_reajuste_beneficio_rpps", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    error={!!errors?.indice_reajuste_beneficio_rpps}
                    label="Índice de reajuste do benefício RPPS"
                  />
                </div>
                <div>
                  <Input
                    {...register("indice_reajuste_paridade", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    error={!!errors?.indice_reajuste_paridade}
                    label="Índice de reajuste paridade"
                  />
                </div>
              </S.FormAdvancedDataContainer>
            )}

            <S.WrapperButtons>
              <Button variant="default">Ver resultado</Button>
              <Button
                iconleft="/assets/svg/icon-print-blue.svg"
                variant="blue-light"
                type="button"
                onClick={printPage}
              >
                Relatório
              </Button>
              <Button
                variant="blue-light"
                type="reset"
                onClick={resetForm}
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
                <p>
                  {maskMoney(table1?.remuneracao?.sem_migracao) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1?.remuneracao?.sem_migracao) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1?.remuneracao?.sem_migracao) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1?.remuneracao?.sem_migracao) || "R$ 0,00"}
                </p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para RPPS</p>
                <p>
                  {maskMoney(table1?.contribuicao_RPPS?.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1?.contribuicao_RPPS?.com_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPPS?.com_migracao_rpc_basica
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPPS?.com_migracao_rpc_facultativa
                  ) || "R$ 0,00"}
                </p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para o RPC (Básica)</p>
                <p>
                  {maskMoney(table1?.contribuicao_RPC_basica?.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1?.contribuicao_RPC_basica?.com_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPC_basica?.com_migracao_rpc_basica
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPC_basica
                      ?.com_migracao_rpc_facultativa
                  ) || "R$ 0,00"}
                </p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para o RPC (Básica + Facultativa)</p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPC_facultativa?.sem_migracao
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPC_facultativa?.com_migracao
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPC_facultativa
                      ?.com_migracao_rpc_basica
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.contribuicao_RPC_facultativa
                      ?.com_migracao_rpc_facultativa
                  ) || "R$ 0,00"}
                </p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Soma das Contribuições</p>
                <p>
                  {maskMoney(table1.soma_contribuicao.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1.soma_contribuicao.com_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1.soma_contribuicao.com_migracao_rpc_basica
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1.soma_contribuicao.com_migracao_rpc_facultativa
                  ) || "R$ 0,00"}
                </p>
              </TableItem>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Salário Líquido após contribuição</p>
                <p>
                  {maskMoney(
                    table1?.salario_liquido_contribuicao?.sem_migracao
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.salario_liquido_contribuicao?.com_migracao
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.salario_liquido_contribuicao
                      ?.com_migracao_rpc_basica
                  ) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(
                    table1?.salario_liquido_contribuicao
                      ?.com_migracao_rpc_facultativa
                  ) || "R$ 0,00"}
                </p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Imposto de Renda - tabela progressiva</p>
                <p>{maskMoney(table1?.ir?.sem_migracao) || "R$ 0,00"}</p>
                <p>{maskMoney(table1?.ir?.com_migracao) || "R$ 0,00"}</p>
                <p>
                  {maskMoney(table1?.ir?.com_migracao_rpc_basica) || "R$ 0,00"}
                </p>
                <p>
                  {maskMoney(table1?.ir?.com_migracao_rpc_facultativa) ||
                    "R$ 0,00"}
                </p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>
                {maskMoney(table1?.remuneracao_liquida_ir?.sem_migracao) ||
                  "R$ 0,00"}
              </p>
              <p>
                {maskMoney(table1?.remuneracao_liquida_ir?.com_migracao) ||
                  "R$ 0,00"}
              </p>
              <p>
                {maskMoney(
                  table1?.remuneracao_liquida_ir?.com_migracao_rpc_basica
                ) || "R$ 0,00"}
              </p>
              <p>
                {maskMoney(
                  table1?.remuneracao_liquida_ir?.com_migracao_rpc_facultativa
                ) || "R$ 0,00"}
              </p>
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
                <p>
                  {maskMoney(table2.beneficio_rpps.sem_migracao) || "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício Especial</p>
                <p>
                  {maskMoney(table2.beneficio_especial.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Saldo Acumulado RPC (Apenas com a Básica)</p>
                <p>
                  {maskMoney(table2.saldo_acumulado_rpc_basico.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício RPC (Referente à Contribuição Básica)</p>
                <p>
                  {maskMoney(table2.beneficio_rpc_basico.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Saldo Acumulado RPC (Apenas com a Facultativa)</p>
                <p>
                  {maskMoney(
                    table2.saldo_acumulado_rpc_facultativa.sem_migracao
                  ) || "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício RPC (Referente à Contribuição Facultativa)</p>
                <p>
                  {maskMoney(table2.beneficio_rpc_facultativa.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição sobre o benefício do RPPS</p>
                <p>
                  {maskMoney(table2.contribuicao_beneficio_RPPS.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(Salário Líquido após contribuição para IR</p>
                <p>
                  {maskMoney(table2.saldo_liquido_ir.sem_migracao) || "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Imposto de Renda - tabela progressiva</p>
                <p>
                  {maskMoney(table2.ir_fase_beneficio.sem_migracao) ||
                    "R$ 0,00"}
                </p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>
                {maskMoney(
                  table2.remuneracao_liquida_ir_fase_beneficio.sem_migracao
                ) || "R$ 0,00"}
              </p>
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
