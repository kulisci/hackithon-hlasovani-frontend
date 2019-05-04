export default function selectReps(allRep, str) {
  return allRep.filter(({ stav_hlasovani }) => str === stav_hlasovani);
}
