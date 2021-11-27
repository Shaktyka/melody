// Форматирует значение этажа
const formatStageValue = (stageNum) => {
  return stageNum < 10 ? `0${stageNum}` : stageNum;
};
